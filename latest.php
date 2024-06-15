<?php
function loadNews() {
    $newsJson = file_get_contents('data.json');
    return json_decode($newsJson, true);
}

function saveNews($newsArray) {
    file_put_contents('data.json', json_encode($newsArray));
}

if(isset($_GET['action']) && $_GET['action'] === 'delete' && isset($_GET['id'])) {
    $newsId = $_GET['id'];

    $newsArray = loadNews();

    unset($newsArray[$newsId]);

    $newsArray = array_values($newsArray);

    saveNews($newsArray);

    header("Location: {$_SERVER['HTTP_REFERER']}");
    exit;
}

if(isset($_POST['content'])) {
    $newsArray = loadNews();

    $newNews = array(
        'content' => $_POST['content'],
        'timestamp' => time() 
    );
    array_push($newsArray, $newNews);

    saveNews($newsArray);

    header("Location: {$_SERVER['HTTP_REFERER']}");
    exit;
}

?>
