<?php
function getWeatherDataXml($cache_life = 3600, $city = 213) {
    $weather = array();
    $cache_file = $_SERVER['DOCUMENT_ROOT']."/gs-test/weather.txt";
    $url='http://export.yandex.ru/bar/reginfo.xml?region='.$city.'.xml';
    if (time() - @filemtime($cache_file) >= $cache_life) {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $data = curl_exec($ch);
        curl_close($ch);
        file_put_contents($cache_file, $data);
        $buf = file_get_contents($url);
        if ($buf) file_put_contents($cache_file, $buf);
    }
    $xml = simplexml_load_file($cache_file);
    $weather['temp'] = $xml->weather->day->day_part[0]->temperature;
    $weather['image'] = $xml->weather->day->day_part[0]->image;
    $weather['weather_type'] = $xml->weather->day->day_part[0]->weather_type;
    return $weather;
}
$weather = getWeatherDataXml();

?>