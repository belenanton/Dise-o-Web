<?php

function esPrimo($num){

    if($num <=1) return false;
    if($num ==2) return true;
    if ($num % 2 == 0) return false;
    for ($i = 3; $i <= sqrt($num); $i += 2) {
            if ($num % $i == 0) return false;
        }
        return true;
    }

    function siguientesPrimos($num, $cantidad) {
        $primos = [];
        $num++;
        while (count($primos) < $cantidad) {
            if (esPrimo($num)) {
                $primos[] = $num;
            }
            $num++;
        }
        return $primos;
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $numero = intval($_POST["numero"]);
        $primos = siguientesPrimos($numero, 16);

        echo "<table>";
        for ($fila = 0; $fila < 4; $fila++) {
            echo "<tr>";
            for ($columna = 0; $columna < 4; $columna++) {
                echo "<td>" . $primos[$fila * 4 + $columna] . "</td>";
            }
            echo "</tr>";
        }
        echo "</table>";
    }
    ?>
