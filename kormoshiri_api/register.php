<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once 'dbconnection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Validate required fields
    if (!isset($data['full_name']) || !isset($data['email']) || !isset($data['password'])) {
        echo json_encode(['success' => false, 'message' => 'Missing required fields']);
        exit;
    }
    
    $full_name = $conn->real_escape_string($data['full_name']);
    $email = $conn->real_escape_string($data['email']);
    $password = password_hash($data['password'], PASSWORD_DEFAULT);
    $phone = isset($data['phone']) ? $conn->real_escape_string($data['phone']) : null;
    
    // Check if email already exists
    $check_email = $conn->query("SELECT id FROM users WHERE email = '$email'");
    if ($check_email->num_rows > 0) {
        echo json_encode(['success' => false, 'message' => 'Email already registered']);
        exit;
    }
    
    // Insert new user
    $sql = "INSERT INTO users (full_name, email, password, phone) VALUES ('$full_name', '$email', '$password', '$phone')";
    
    if ($conn->query($sql)) {
        $user_id = $conn->insert_id;
        
        // Create empty profile
        $profile_sql = "INSERT INTO user_profiles (user_id) VALUES ($user_id)";
        $conn->query($profile_sql);
        
        echo json_encode([
            'success' => true,
            'message' => 'Registration successful',
            'user_id' => $user_id
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Registration failed: ' . $conn->error
        ]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}

$conn->close();
?> 