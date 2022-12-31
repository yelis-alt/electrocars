
ymaps.ready(init);

function init() {
    myMap = new ymaps.Map('map', {
        center: [55.75370903771494, 37.61981338262558],
        zoom: 10,
        controls: []
    }),
        // Создадим панель маршрутизации.
        routePanelControl = new ymaps.control.RoutePanel({
            options: {
                maxWidth: '351px',
                showHeader: true,
                title: ' '
            }
        }),

        zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: 'small',
                float: 'none',
                position: {
                    bottom: 145,
                    right: 10
                }
            }
        });
    // Пользователь сможет построить только автомобильный маршрут.
    routePanelControl.routePanel.options.set({
        types: {auto: true}
    });

    myMap.controls.add(routePanelControl).add(zoomControl);

    // Получим ссылку на маршрут.
    routePanelControl.routePanel.getRouteAsync().then(function (route) {

        // Зададим максимально допустимое число маршрутов, возвращаемых мультимаршрутизатором.
        route.model.setParams({results: 1}, true);

        // Повесим обработчик на событие построения маршрута.
        route.model.events.add('requestsuccess', function () {

            var activeRoute = route.getActiveRoute();
            if (activeRoute) {
                // Получим протяженность маршрута.
                var length = route.getActiveRoute().properties.get("distance"),
                    // Создадим макет содержимого балуна маршрута.
                    balloonContentLayout = ymaps.templateLayoutFactory.createClass(
                        '<span>Расстояние: ' + length.text + '\xa0\xa0\xa0\xa0</span>');
                // Зададим этот макет для содержимого балуна.
                route.options.set('routeBalloonContentLayout', balloonContentLayout);
                // Откроем балун.
                activeRoute.balloon.open();
            }
        });

    });
}

function build(ind, caption, img){
    myPlacemarkWithContent = new ymaps.Placemark([ind.lon, ind.lat], {
        balloonContent: caption
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: img,
        iconImageSize: [24, 24],
        iconImageOffset: [0, 0],
        iconContentOffset: [-100, 100],
        iconContentLayout: MyIconContentLayout
    });
    myMap.geoObjects
        .add(myPlacemarkWithContent);
};

function tok(str) {
    if (str == 'ac') {
        return ' (Переменный ток)'
    } else {
        return ' (Постоянный ток)'
    }
};

img_pos = '/images/c.png';
img_neg = '/images/d.png';

plug_select = 'type2';
plug_path = '/images/type2.png';

function json_take() {
    $.ajax({
        type:'POST',
        url: '/php/stations.php',
        data: {plug: plug_select},
        success: function (data){
            var jsc = JSON.parse(data);
            ymaps.ready(function () {
                MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                )

                $.each(jsc, function(index){
                    caption_pos = '<b>№ <b/> ' + String(jsc[index].id) + '<br/>' + '________________' + '<br/>' +
                        'Адрес: ' + String(jsc[index].address) + '<br/>' +
                        'Компания: ' + String(jsc[index].company) + '<br/>' +
                        'Тип тока: ' + String(jsc[index].type).toUpperCase()  +
                        tok(jsc[index].type) + '<br/>' +
                        'Мощность: '+ String(jsc[index].power).toUpperCase() + " кВт" + '<br/>' +
                        '<img src=' + '"' + plug_path + '"' + '</img>' + '<br/>' +
                        '________________' + '<br/>' +
                        String(jsc[index].price) + ' руб. за 1 кВт';
                    caption_neg = '<b>№ <b/> ' + String(jsc[index].id) + '<br/>' + '________________' + '<br/>' +
                        'ЭЗС временно недоступна';
                    if (jsc[index].status == 1) {
                        build(jsc[index], caption_pos, img_pos);
                        build(jsc[index], caption_pos, img_pos);
                    } else {
                        build(jsc[index], caption_neg, img_neg);
                        build(jsc[index], caption_neg, img_neg);
                    }
                })
            });
        }
    });
};

$('input:radio').click(function() {
    plug_select = $('input:radio:checked').val();
    plug_path = '/images/' + plug_select + ".png";
    json_take();
});

window.addEventListener('DOMContentLoaded', function() {
    json_take();
});

