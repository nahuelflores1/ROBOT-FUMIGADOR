
<?php
    function conectar(){
        $servername = "localhost";
        $database = "login";
        $username = "root";
        $password = "";
    
        $conn = mysqli_connect($servername, $username, $password, $database);
    
        if (!$conn) {
            die("No se conecto con la base de datos: " . mysqli_connect_error());
        }
        mysqli_close($conn);
    }

?>