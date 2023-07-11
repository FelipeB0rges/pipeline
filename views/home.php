
<h1 style="text-align: center;">BEM VINDO A INTER CURSOS</h1>


<form method="post" action="login.php">

    <label >Usuario</label>
    <input style="width: 20%;" type="text" class="form-control" name="usuario">
    <label  >Senha</label>
    <br>
    <input style="width: 20%;" type="password" class="form-control" name="senha">
    <br>
    <input type="submit" value="login" class="btn btn-success">
</form>
<br>
<?php if(isset($_GET['erro'])){?>
    <div class="alert alert-danger" role="alert">
  Erro
</div>
<?php

} ?>
