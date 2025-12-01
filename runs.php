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

$runs = [
    ['id' => 1, 'userId' => 1, 'date' => '2023-06-01', 'distanceKm' => 5.2, 'picture' => 'run1.jpg', 'createdAt' => '2023-06-01'],
    ['id' => 2, 'userId' => 1, 'date' => '2023-06-05', 'distanceKm' => 6.1, 'picture' => 'run2.jpg', 'createdAt' => '2023-06-05'],
    ['id' => 3, 'userId' => 1, 'date' => '2023-06-10', 'distanceKm' => 4.8, 'picture' => 'run3.jpg', 'createdAt' => '2023-06-10'],
    ['id' => 4, 'userId' => 2, 'date' => '2023-06-02', 'distanceKm' => 10.5, 'picture' => 'run4.jpg', 'createdAt' => '2023-06-02'],
    ['id' => 5, 'userId' => 3, 'date' => '2023-06-03', 'distanceKm' => 7.8, 'picture' => 'run5.jpg', 'createdAt' => '2023-06-03'],
    ['id' => 6, 'userId' => 4, 'date' => '2023-06-04', 'distanceKm' => 12.1, 'picture' => 'run6.jpg', 'createdAt' => '2023-06-04'],
    ['id' => 7, 'userId' => 5, 'date' => '2023-06-05', 'distanceKm' => 4.3, 'picture' => 'run7.jpg', 'createdAt' => '2023-06-05'],
    ['id' => 8, 'userId' => 6, 'date' => '2023-06-06', 'distanceKm' => 6.7, 'picture' => 'run8.jpg', 'createdAt' => '2023-06-06'],
    ['id' => 9, 'userId' => 6, 'date' => '2023-06-12', 'distanceKm' => 7.2, 'picture' => 'run9.jpg', 'createdAt' => '2023-06-12'],
    ['id' => 10, 'userId' => 7, 'date' => '2023-06-07', 'distanceKm' => 8.2, 'picture' => 'run10.jpg', 'createdAt' => '2023-06-07'],
    ['id' => 11, 'userId' => 8, 'date' => '2023-06-08', 'distanceKm' => 3.5, 'picture' => 'run11.jpg', 'createdAt' => '2023-06-08'],
    ['id' => 12, 'userId' => 8, 'date' => '2023-06-15', 'distanceKm' => 4.0, 'picture' => 'run12.jpg', 'createdAt' => '2023-06-15'],
    ['id' => 13, 'userId' => 9, 'date' => '2023-06-09', 'distanceKm' => 9.0, 'picture' => 'run13.jpg', 'createdAt' => '2023-06-09'],
    ['id' => 14, 'userId' => 10, 'date' => '2023-06-10', 'distanceKm' => 11.3, 'picture' => 'run14.jpg', 'createdAt' => '2023-06-10'],
    ['id' => 15, 'userId' => 10, 'date' => '2023-06-14', 'distanceKm' => 10.8, 'picture' => 'run15.jpg', 'createdAt' => '2023-06-14'],
    ['id' => 16, 'userId' => 11, 'date' => '2023-06-11', 'distanceKm' => 5.5, 'picture' => 'run16.jpg', 'createdAt' => '2023-06-11'],
    ['id' => 17, 'userId' => 12, 'date' => '2023-06-12', 'distanceKm' => 7.0, 'picture' => 'run17.jpg', 'createdAt' => '2023-06-12'],
    ['id' => 18, 'userId' => 12, 'date' => '2023-06-18', 'distanceKm' => 6.5, 'picture' => 'run18.jpg', 'createdAt' => '2023-06-18'],
    ['id' => 19, 'userId' => 13, 'date' => '2023-06-13', 'distanceKm' => 6.2, 'picture' => 'run19.jpg', 'createdAt' => '2023-06-13'],
    ['id' => 20, 'userId' => 14, 'date' => '2023-06-14', 'distanceKm' => 10.0, 'picture' => 'run20.jpg', 'createdAt' => '2023-06-14'],
    ['id' => 21, 'userId' => 14, 'date' => '2023-06-20', 'distanceKm' => 9.5, 'picture' => 'run21.jpg', 'createdAt' => '2023-06-20'],
    ['id' => 22, 'userId' => 14, 'date' => '2023-06-25', 'distanceKm' => 8.7, 'picture' => 'run22.jpg', 'createdAt' => '2023-06-25'],
    ['id' => 23, 'userId' => 15, 'date' => '2023-06-15', 'distanceKm' => 4.8, 'picture' => 'run23.jpg', 'createdAt' => '2023-06-15'],
    ['id' => 24, 'userId' => 3, 'date' => '2023-06-18', 'distanceKm' => 8.0, 'picture' => 'run24.jpg', 'createdAt' => '2023-06-18'],
    ['id' => 25, 'userId' => 5, 'date' => '2023-06-21', 'distanceKm' => 5.1, 'picture' => 'run25.jpg', 'createdAt' => '2023-06-21'],
    ['id' => 26, 'userId' => 9, 'date' => '2023-06-22', 'distanceKm' => 9.3, 'picture' => 'run26.jpg', 'createdAt' => '2023-06-22'],
    ['id' => 27, 'userId' => 2, 'date' => '2023-06-23', 'distanceKm' => 11.0, 'picture' => 'run27.jpg', 'createdAt' => '2023-06-23'],
    ['id' => 28, 'userId' => 1, 'date' => '2023-06-30', 'distanceKm' => 5.9, 'picture' => 'run28.jpg', 'createdAt' => '2023-06-30'],
];

echo json_encode($runs, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
?>
