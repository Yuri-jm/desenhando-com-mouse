<canvas width="1366" height="560"></canvas>

<input type = "color">

<script>
    var paleta = document.querySelector('input');
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    var desenha = false;

    pincel.fillStyle = 'grey';
    pincel.fillRect(0, 0, 1366, 560);

    function desenhaCirculo(evento) {

        if (desenha) {


        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
       
        pincel.fillStyle = paleta.value;
        pincel.beginPath();
        pincel.arc(x, y, 10, 0, 2 * 3.14);
        pincel.fill();
        console.log(x + ',' + y);
        }

    }

    tela.onmousemove = desenhaCirculo;
        function startDraw () {

            desenha = true;
        }

        function stopDraw () {

            desenha = false;
        }

        tela.onmousedown = startDraw;

        tela.onmouseup = stopDraw;

</script>




