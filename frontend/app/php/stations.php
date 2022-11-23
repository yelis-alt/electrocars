<?php
$pdo = new PDO('mysql:host=mysql;
                         dbname=ELECTRO; 
                         charset=UTF8',
    'root',
    'krasmadelphi');

$statement = $pdo->prepare("SELECT * FROM Stations");
$statement->execute();
$results = $statement->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results, JSON_UNESCAPED_UNICODE);

echo $json;


