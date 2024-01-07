<!DOCTYPE html>
<html>
<head>
    <title>Calculadora de Suma en PHP</title>
</head>
<body>
    <h1>Calculadora de Suma en PHP</h1>
    <form method="post">
        <label for="num1">Número 1:</label>
        <input type="number" id="num1" name="num1">
        <br>
        <label for="num2">Número 2:</label>
        <input type="number" id="num2" name="num2">
        <br>
        <input type="submit" name="sumar" value="Sumar">
    </form>
    
    <?php
    if (isset($_POST['sumar'])) {
        // Obteniu els valors dels inputs
        $num1 = floatval($_POST['num1']);
        $num2 = floatval($_POST['num2']);
        
        // Realitza la suma
        $resultat = $num1 + $num2;
        
        // Mostra el resultat
        echo "<p>Resultat: $resultat</p>";
    }
    ?>
</body>
</html>
