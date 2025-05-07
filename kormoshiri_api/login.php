<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once 'dbconnection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Validate required fields
    if (!isset($data['email']) || !isset($data['password'])) {
        echo json_encode(['success' => false, 'message' => 'Missing required fields']);
        exit;
    }
    
    $email = $conn->real_escape_string($data['email']);
    $password = $data['password'];
    
    // Get user
    $sql = "SELECT id, full_name, email, password, role FROM users WHERE email = '$email'";
    $result = $conn->query($sql);
    
    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        
        // Verify password
        if (password_verify($password, $user['password'])) {
            // Get user profile
            $profile_sql = "SELECT * FROM user_profiles WHERE user_id = " . $user['id'];
            $profile_result = $conn->query($profile_sql);
            $profile = $profile_result->fetch_assoc();
            
            // Remove password from response
            unset($user['password']);
            
            echo json_encode([
                'success' => true,
                'message' => 'Login successful',
                'user' => $user,
                'profile' => $profile
            ]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid password']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'User not found']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}

$conn->close();
?> 