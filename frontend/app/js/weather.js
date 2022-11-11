
$(document).ready(function() {
    if (YMaps.location) 
    { 
        $(".city-select").val(YMaps.location.city)

    } 
    else
        alert("Пожалуйста, разрешите доступ к использованию Вашей геопозиции!");
     });