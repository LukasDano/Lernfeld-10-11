<?php
$allowedOrigin = 'http://localhost:5173';
if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] === $allowedOrigin) {
    header("Access-Control-Allow-Origin: $allowedOrigin");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    header('Access-Control-Allow-Credentials: true');
}

// OPTIONS Preflight-Anfragen beantworten und Script beenden
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

header('Content-Type: application/json; charset=utf-8');

$users = [
    ['id' => 1, 'name' => 'Anna Müller 3', 'birthDate' => '2008-05-12', 'gender' => 'f', 'createdAt' => '2023-05-12'],
    ['id' => 2, 'name' => 'Maximilian Schmidt', 'birthDate' => '1995-11-03', 'gender' => 'm', 'createdAt' => '2022-08-21'],
    ['id' => 3, 'name' => 'Sophie Bauer', 'birthDate' => '2001-02-18', 'gender' => 'f', 'createdAt' => '2023-01-15'],
    ['id' => 4, 'name' => 'Leon Fischer', 'birthDate' => '1988-07-29', 'gender' => 'm', 'createdAt' => '2021-12-05'],
    ['id' => 5, 'name' => 'Lena Weber', 'birthDate' => '1999-09-12', 'gender' => 'f', 'createdAt' => '2022-03-19'],
    ['id' => 6, 'name' => 'Jonas Becker', 'birthDate' => '2003-04-25', 'gender' => 'm', 'createdAt' => '2023-06-10'],
    ['id' => 7, 'name' => 'Clara Wagner', 'birthDate' => '1992-12-01', 'gender' => 'f', 'createdAt' => '2022-11-30'],
    ['id' => 8, 'name' => 'Felix Hoffmann', 'birthDate' => '1997-08-14', 'gender' => 'm', 'createdAt' => '2023-02-22'],
    ['id' => 9, 'name' => 'Mia Neumann', 'birthDate' => '2005-10-06', 'gender' => 'f', 'createdAt' => '2023-07-05'],
    ['id' => 10, 'name' => 'Paul König', 'birthDate' => '1990-01-17', 'gender' => 'm', 'createdAt' => '2021-10-12'],
    ['id' => 11, 'name' => 'Emma Schäfer', 'birthDate' => '2002-03-30', 'gender' => 'f', 'createdAt' => '2023-03-28'],
    ['id' => 12, 'name' => 'Lukas Richter', 'birthDate' => '1998-06-21', 'gender' => 'm', 'createdAt' => '2022-09-09'],
    ['id' => 13, 'name' => 'Leonie Klein', 'birthDate' => '2000-11-11', 'gender' => 'f', 'createdAt' => '2023-04-14'],
    ['id' => 14, 'name' => 'Tim Braun', 'birthDate' => '1996-05-07', 'gender' => 'm', 'createdAt' => '2022-12-19'],
    ['id' => 15, 'name' => 'Sarah Wolf', 'birthDate' => '2004-08-23', 'gender' => 'f', 'createdAt' => '2023-05-30']
];

echo json_encode($users, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
?>
