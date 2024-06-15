<?php
if(isset($_GET['file'])) {
    $file = $_GET['file'];
    $filePath = 'uploads/' . $file;

    if(file_exists($filePath)) {
        unlink($filePath);
        $jsonFile = 'uploaded_images.json';
        $jsonContent = json_decode(file_get_contents($jsonFile), true);
        $jsonContent = array_diff($jsonContent, [$file]); 
        file_put_contents($jsonFile, json_encode(array_values($jsonContent))); 
        echo "File deleted successfully.";
    } else {
        echo "File not found.";
    }
}
?>
