<?php
function getWeatherDataXml($cache_life, $city) {
    $weather = array();
    $cache_file = $_SERVER['DOCUMENT_ROOT']."/app/php/weather.txt";
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
    if (substr($weather['temp'], 0, 1) == '+') {
        $weather['temp'] = ltrim($weather['temp'], '+');
    };
    return $weather['temp'];
}
$weather = getWeatherDataXml(3600, $_POST['city']);
$path = $_SERVER['DOCUMENT_ROOT']."/app/php/weather.txt";
unlink($path);
echo $weather;
?>