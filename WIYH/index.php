<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Where is your Hero</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
    
    </head>
    <body>
        
        <header>
            <img class="bannerImg" src="img/banner.png" width="800" height="100">
        </header>

        <section>
            
             
        <div id="map-canvas"></div>


        </section>

        <footer>
             <button type="submit" onclick="location.href='index.php'" style="border: 0; background: transparent"><img src="img/botonLimpiar.png" width="120" height="40" alt="submit" /></button>


            <ul>
                    <li><img id="thor" src="img/thor.png" width="70" height="70" draggable="true"></li>
                    <li><img id="ironman" src="img/ironman.png" width="70" height="70" draggable="true"></li>
                    <li><canvas id="center" width="300" height="90"></canvas>
<script>
  var canvas = document.getElementById("center");
  var context = canvas.getContext("2d");
  context.fillStyle = "white";
  context.font = "30px Arial";
  context.fillText("Drag here",80,55);
</script>
                    </li>
                    <li><img id="spiderman" src="img/spiderman.png" width="70" height="70" draggable="true"></li>
                    <li><img id="hulk" src="img/hulk.png" width="70" height="70"></li>

            </ul>
            
        

          

        </footer>






     

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
        <script src="js/mapa.js"></script>
        <script src="js/main2.js"></script>

        
    </body>
</html>
