<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>lab №1</title>
    <link rel="stylesheet" href="test.css">
    <link rel="stylesheet" href="table.css">
</head>
<body>
<style>
    *{
        font-family: Candara,fantasy;
    }
    body{
        height: 100vh;
        align-items: center;
        background: linear-gradient(135deg, #71b7e6, #9b59b6);
    }
</style>
<h1>
    <style>
        h1{
            text-align: center;
            color: #000000;
            font-size: 50px;
            font-family: cursive;
        }
        h1::first-letter{
            color: #FE6262;
        }
    </style>
    Результат
    <br>
    <script type = "text/javascript">
        let x = new Date();
        let crnt = ("0" + x.getHours()).slice(-2) + ":" + ("0" + x.getMinutes()).slice(-2) + ":" + ("0"+ x.getSeconds()).slice(-2);
        document.writeln(crnt);
    </script>
</h1>
<?php
if (session_id() === "") session_start();
$startTime = microtime(true);
$y = (float) str_replace(",", ".", $_POST['yCoord']);
$x = (int) $_POST['xCoord'];
$radius = (int) $_POST['Radius'];
if (($y < -5 || $y > 3) || ($x < -4 || $x > 4) || ($radius < 1 || $radius > 5)){
    die('кажется, вы хакер...');
}
echo "<table>
<style>
table{
    width: 100%;
    height: 150px;
    max-width: 800px;
    margin: auto;
    background-color: aliceblue;
    text-align: center;
}
tr:nth-child(odd){
background-color: #eee;
}
</style>";
$t = (float) (microtime(true) - $startTime);
echo "<thead>
<tr>
<th> <h2>Х</h2></th>
<th> <h2>Y</h2></th>
<th> <h2>R</h2></th>
<th> <h2>Время проверки</h2></th>
<th> <h2>Попадание</h2></th>
</tr>
</thead>";
$data = new Data($x, $y, $radius, $startTime, "<script></script>");
$data -> setTime($t);
if (!isset($_SESSION['values'])) $_SESSION['values'] = array();
array_push($_SESSION['values'], $data);
echo "<br>";
echo "<br>";
echo "<br>";
foreach (array_reverse($_SESSION['values']) as $i=>$data){
    $script = number_format($data->scriptTime,6,'.',',') * 1000000;
    echo "
    <tr>
    <td>$data->x</td>
    <td>$data->y</td>
    <td>$data->radius</td>
    <td>$script мкс</td>";
    echo $data -> wasHit() ? "<td>было</td> </tr>" : "<td>не было</td>
    </tr>";
}

class Data{
    public $x;
    public $y;
    public $radius;
    public $time;
    public $scriptTime;

    function __construct($x, $y, $radius, $time){
        $this->x = $x;
        $this->y = $y;
        $this->radius = $radius;
        $this->time = $time;
    }

    function wasHit()
    {
        if ($this -> x >= 0 AND $this -> y >= 0) return ($this -> x**2 + $this -> y**2 <= $this -> radius**2);
        else if ($this -> x <= 0 AND $this -> y <= 0) return ($this -> x <= $this -> radius/2 AND $this -> y <= $this -> radius);
        else if ($this -> x <= 0 AND $this -> y >= 0) return (($this -> y <= $this -> x * 0.5) + $this -> radius);
        else return false;
    }

    function setTime($scriptTime){
        $this->scriptTime = $scriptTime;
    }

}


?>
</body>
</html>


<!--        $x1 = $raduis;
        $x2 = 0;
        $x3 = 0;
        $y1 = 0;
        $y2 = $raduis/2;
        $y3 = 0;
        $proizv1 = ($x1 - $x) * ($y2 - $y1) - ($x2 - $x1) * ($y1 - $y);
        $proizv2 = ($x2 - $x) * ($y3 - $y2) - ($x3 - $x2) * ($y2 - $y);
        $proizv3 = ($x3 - $x) * ($y1 - $y3) - ($x1 - $x3) * ($y3 - $y);
        if (($proizv1 > 0 and $proizv2 > 0 and $proizv3 > 0) or ($proizv1 < 0 and $proizv2 < 0 and $proizv3 < 0)){
            echo '<br>';
            echo 'попал';
        }
        else if ($proizv1 == 0 or $proizv2 == 0 or $proizv3 == 0) {
            echo '<br>';
            echo 'попал на одну из сторону треугольника';
        }
        else {
            echo '<br>';
            echo 'не попал';
        }-->


