<?php
$pdo = new PDO('mysql:host=mysql;
                         dbname=ELECTRO; 
                         charset=UTF8',
    'arsel',
    'krasmadelphi');

function quer ($con, $plug) {
    $statement = $con->prepare("SELECT * FROM Stations 
                                WHERE plug =".'"'.(string)$plug.'"');
    $statement->execute();
    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($results, JSON_UNESCAPED_UNICODE);
    return $json;
};

$res = quer($pdo, $_POST['plug']);
echo $res;


