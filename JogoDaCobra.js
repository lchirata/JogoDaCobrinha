<h1> Jogo da Cobrinha </h1>
<body>
  <canvas id="stage" width="400" height="400"></canvas>
  <script> type="text/javascript"
      window.onload = function(){

        var stage = document.getElementById('stage');
        var ctx = stage.getContext("2d");

        ctx.fillStyle = "black";
        ctx.fillRect(0,0, stage.width, stage.height);


      }
  </script>
  </body>