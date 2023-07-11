<div class="container">
    <table style="border: 1px solid #ccc; width:100%">
        <tr>
            <th>Nome curso</th>
            <th>Carga horária</th>
            <th>Deletar</th>
        </tr>

        <?php
        while ($linha = mysqli_fetch_array($consulta_cursos)) {
            echo '<tr style="text-align:center;"><td>' . $linha['nome_curso'] . '</td>';
            echo '<td>' . $linha['carga_horaria'] . '</td>';
            ?>
            <td><a class="btn btn-danger" href="deleta_curso.php?id_curso=<?php echo $linha['id_curso'];?> ">Deletar</a></td></tr>
        <?php
        }
        
        ?>
    </table>

</div>
<div style="text-align: center;">
    <a class="btn btn-success" href="?pagina=inserir_curso">Inserir cursos</a>
</div>