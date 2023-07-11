<?php

$servidor="localhost";
$usuario="root";
$senha = "";
$db="escola_curso";

$conexao = mysqli_connect($servidor,$usuario,$senha,$db);

$query_cursos="SELECT * FROM cursos";

$query_cursos_alunos='SELECT  a.nome as aluno_nome, c.nome_curso as nome_curso, ac.id_aluno_curso as id_aluno_curso

FROM alunos_cursos ac

LEFT JOIN cursos c ON  c.id_curso = ac.id_curso

LEFT JOIN alunos a ON a.id_aluno=ac.id_aluno';

$consulta_cursos = mysqli_query($conexao,$query_cursos);

$consulta_cursos_alunos = mysqli_query($conexao,$query_cursos_alunos);


$query_alunos="SELECT * FROM alunos";

$consulta_alunos = mysqli_query($conexao,$query_alunos);




