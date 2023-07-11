<?php

require('db.php');

$nome=$_POST['nome'];

$endereco = $_POST['endereco'];

$estado = $_POST['estado'];

$cidade = $_POST['cidade'];

$cpf=$_POST['cpf'];


$query = "INSERT INTO ALUNOS (nome,endereco,estado,cidade,cpf) VALUES ('$nome','$endereco','$estado','$cidade','$cpf')";

mysqli_query($conexao,$query);

header('location:index.php?pagina=alunos');