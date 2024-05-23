<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $numero = filter_input(INPUT_POST, 'numero', FILTER_VALIDATE_INT, array(
            'options' => array(
                'min_range' => 1,
                'max_range' => 9
            )
        ));

        if ($numero !== false) {
            echo "<table>";
            echo "<tr><th>Multiplicación</th><th>Resultado</th></tr>";

            for ($i = 1; $i <= 10; $i++) {
                $resultado = $numero * $i;
                echo "<tr><td>{$numero} x {$i}</td><td>{$resultado}</td></tr>";
            }

            echo "</table>";
        } else {
            echo "<p style='color: red; text-align: center;'>Por favor, ingrese un número válido entre 1 y 9.</p>";
        }
    }
    ?>