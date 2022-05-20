<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Panaroma</title>
		<link type="text/css" rel="stylesheet" href="assets/pannellum.css"/>
         <script type="text/javascript" src="assets/pannellum.js"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            position: fixed;
            cursor: default;
            width: 100%;
            height: 100%;
        }
         #panorama {
            margin: 0;
            padding: 0;
            overflow: hidden;
            position: relative;
            cursor: default;
            width: 100%;
            height: 100%;
        }

    </style>
   
    </head>
	<body>
    <div id="panorama"></div>
     <?php
    //somewhere set a value
    $url = $_GET['url'];
    // $name = $_GET['name'];
    // $author = $_GET['author'];
    ?>
    <script>
        url = '<?php echo $url ;?>';
        pannellum.viewer('panorama', {
            "type": "equirectangular",
            "panorama": url,
            "title":'Rahul Jograna',
            "author":'ionic 5 traveller',
            "autoLoad":true,
            "autoRotate":1,
            "showZoomCtrl":false,
            "compass":true
        });
    </script>
    </body>
</html>