<h1>Inserir nova matrícula</h1>

<p>Selecione o aluno</p>
<form method="post" action="processa_matricula.php">
    <select name="escolha_aluno">
        <?php
        while ($linha = mysqli_fetch_array($consulta_alunos)) {
            echo '<option value="' . $linha['id_aluno'] . '" style="text-align:center;"><td>' . $linha['nome'] . '</option>';
        }
        ?>
    </select>
    <br>
    <br>
    <h1>Selecione o curso</h1>
    <select name="escolha_curso">
        <?php
         while ($linha = mysqli_fetch_array($consulta_cursos)) {
            echo '<option value="' . $linha['id_curso'] . '" style="text-align:center;"><td>' . $linha['nome_curso'] . '</option>';
        }
        ?>
    </select>
<br><br>
<button type="submit" value="Matricular aluno no curso">Matricular</button>

</form>