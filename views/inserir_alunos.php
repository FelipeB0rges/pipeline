<div class="container">
    <h1>Cadastro alunos</h1> 
    <form method="post" action="processa_aluno.php">
        <h4>Nome do Aluno</h4>
        <input type="text" name="nome">
        <h4>Endereço</h4>
        <input type="text" name="endereco">
        <h4>Estado</h4>
        <input type="text" name="estado" maxlength="2">
        <h4>Cidade</h4>
        <input type="text" name="cidade">
        <h4>CPF</h4>
        <input type="text" name="cpf" maxlength="11">
        <button type="submit">Cadastrar</button>
    </form>
</div>