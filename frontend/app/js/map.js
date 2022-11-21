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

ymaps.ready(function () {
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent1 = new ymaps.Placemark([55.661574, 37.573856], {
            balloonContent: 'Здесь характеристики',
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: './images/c1.png',
            iconImageSize: [24, 24],
            iconImageOffset: [0, 0],
            iconContentOffset: [-100, 100],
            iconContentLayout: MyIconContentLayout
        });

        myPlacemarkWithContent2 = new ymaps.Placemark([55.661574, 37.573856], {
            balloonContent: 'Здесь характеристики',
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: './images/c1.png',
            iconImageSize: [24, 24],
            iconImageOffset: [0, 0],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout
        });

        myPlacemarkWithContent3 = new ymaps.Placemark([55.681494, 37.573876], {
            balloonContent: 'Здесь характеристики',
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: './images/c1.png',
            iconImageSize: [24, 24],
            iconImageOffset: [0, 0],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout
        });

        myPlacemarkWithContent4 = new ymaps.Placemark([55.681494, 37.573876], {
            balloonContent: 'Здесь характеристики',
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: './images/c1.png',
            iconImageSize: [24, 24],
            iconImageOffset: [0, 0],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemarkWithContent1);
    myMap.geoObjects
        .add(myPlacemarkWithContent2)
        .add(myPlacemarkWithContent3)
        .add(myPlacemarkWithContent4);

});