<?php
$uploadDir = 'uploads/';

if(isset($_FILES["file"]) && $_FILES["file"]["error"] == 0){
    $extension = pathinfo($_FILES["file"]["name"], PATHINFO_EXTENSION);
    $newFileName = uniqid() . "." . $extension; 
    $targetPath = $uploadDir . $newFileName;

    if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetPath)){
        $jsonFile = 'uploaded_images.json';
        $jsonContent = json_decode(file_get_contents($jsonFile), true);
        $jsonContent[] = $newFileName;
        file_put_contents($jsonFile, json_encode($jsonContent));

        echo "The file $newFileName has been uploaded and renamed.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
} else {
    echo "Error: " . $_FILES["file"]["error"];
}
?>
