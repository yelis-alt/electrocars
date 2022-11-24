
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

img_pos= '/images/c.png';
img_neg = '/images/d.png';

$.ajax({
    type:'GET',
    url: '/php/stations.php',
    success: function (data){
        var jsc = JSON.parse(data);
        ymaps.ready(function () {
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            )
            $.each(jsc, function(index){
                caption_pos = '<b>№ <b/> ' + String(jsc[index].id) + '<br/>' +
                    String(jsc[index].address) + '<br/>' + '<img src="/images/chademo.png" </img>';
                caption_neg = '<b>№ <b/> ' + String(jsc[index].id) + '<br/>' +
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