<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/estilo.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <title>Curso PHP</title>
</head>

<body>
    <header>
        <div class="container">
            <a href="?pagina=home"><img src="inter.png" title="logo" alt="logo" style="width: 100px; height:100px"></a>
            <div class="menu" style="  display: flex;
    justify-content: space-between;
    margin-left: 100px;">
                <div class="item" style="margin: 0 50px; color:white; margin-top:40px; cursor:pointer;">
                    <a href="?pagina=cursos" style="color:white; text-decoration:none">CURSOS</a>
                </div>
                <div class="item" style="margin: 0 50px; color:white; margin-top:40px; cursor:pointer;">
                    <a href="?pagina=alunos" style="color:white; text-decoration:none">ALUNOS</a>
                </div>
                <div class="item" style="margin: 0 50px; color:white; margin-top:40px; cursor:pointer;">
                    <a href="?pagina=matriculas" style="color:white; text-decoration:none">MATRICULAS</a>
                </div>
                <?php if (isset($_SESSION['login'])) { ?>
                    <div class="item" style="margin: 0 50px; color:white; margin-top:40px; cursor:pointer;">
                        <a href="logout.php" style="color:white; text-decoration:none"><?php echo $_SESSION['usuario'] ; ?>(sair)</a>
                    </div>
                <?php } ?>

    </header>
    <div class="conteudo">
</body>

</html>