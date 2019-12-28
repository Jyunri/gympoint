# TODO

## Geral
[P] Formatar os dados assim que recebidos da API
  - Teve um unico lugar (EditEnrollment) que mantive o parsing no render para a formatacao de data
[P] Colorir o link do Header de acordo com a pagina atual
  - Entender pq nao pode enviar props do tipo boolean no Link
  - Entender como acessar props de elementos aninhados
[X] Arrumar o header dinamico para paginas filhas
[X] Colocar formatacao nos valores de data
[X] Colocar formatacao nos valores por mes
[X] Colocar sufixo nas duracoes de planos
[X] Fazer o header das listas
[X] Ajustar o estilo das listas
[X] Adicionar label nos forms
  - Entender o que sao os warning
[X] Ajustar o grid para ficar responsivo
  - Utilizado o flex-basis

## Alunos
[X] Implementar mecanismo de busca
[X] Adicionar validacoes no registro
[ ] Adicionar validacoes na edição

## Login
[X] Adicionar labels
[X] Adicionar validacoes no form

## Planos
[X] Lidar com o preco total
[ ] Adicionar validacoes no registro
[ ] Adicionar validacoes na edição

## Matriculas
[X] Buscar dinamicamente os alunos e os planos na tela de cadastro(react select)
[X] Lidar com o preco total
  - Precisa fazer o seletor dinamico
[ ] Adicionar validacoes no registro
[ ] Adicionar validacoes na edição

## Tickets
[X] Renderizar modal

## Nice to haves
[] Adicionar proptypes
[X] Extrair cores
[] Extrair layout de form de aluno
[] Extrair estilizacao das listas
[?] Fazer uma seed para varios testes
[] Extrair o Row e o Cell para uma componente
[] Componentizar botao

[X] Adicione paginação no front-end e back-end para todas listagens;
[] Utilize máscaras para inputs numéricos de valores, peso e altura;

## Duvidas
1. Provavelmente a maioria dos estados nao precisavam ser gerenciados pelo redux(?) Grande parte dos estados sao escopados por pagina
2. Quando vou tentar colocar algum input no AsyncSelect do react-select o placeholder sobe ¯\_(ツ)_/¯
3. Como fazer seed migration de multiplas tabelas em um unico arquivo? Tem que usar o Promise.all?

## OBS
Utilizei o operador iLike inves do like para a busca de alunos ser case insensitive
