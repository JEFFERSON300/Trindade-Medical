# Trindade-Medical


<p align="justify">Trindade Medical é uma plataforma web desenvolvida para hospitais e clínicas médicas que desejam otimizar a gestão de informações de seus pacientes com eficiência e segurança. Com essa ferramenta, é possível contar com uma interface intuitiva que permite o cadastro, atualização e exclusão de dados de pacientes, consultas e exames de forma prática e simplificada.</p>

<p align="justify">Além disso, a plataforma oferece um painel com estatísticas básicas, apresentando o número total de pacientes, consultas e exames cadastrados, proporcionando uma visão geral do fluxo de atendimentos.</p>

<p align="justify">Uma das principais vantagens da Trindade Medical é a sua facilidade de uso, tornando desnecessário qualquer treinamento extenso para que os colaboradores das clínicas médicas e hospitais possam utilizar o sistema com maestria. Isso contribui para uma rápida adoção da plataforma, otimizando o tempo dos profissionais de saúde e promovendo uma melhor experiência tanto para eles quanto para os pacientes.</p>

## Tecnologias utilizadas

JavaScript
React
Node.js
Vite

## Breve Instruções de como executar localmente
<p align="justify">Para executar o programa você precisa ter o Node instalado em sua máquina e o git, caso não tenha segue os links para instalação. Links para download: <a href="https://nodejs.org/en/download"> Node</a> e <a href="https://git-scm.com/downloads">Git</a>.
<p align="justify">Para executar os comandos abaixo, primeiro crie uma pasta com o nome que desejar e clique com o botão direito do mouse dentro da pasta criada e escolha a opção de executar Git Bash Here (necessário ter instalado o Git).</p>

```
$ git clone https://github.com/JEFFERSON300/Trindade-Medical.git

$ cd Trindade-Medical

$ npm install
```

<p align="justify">Como também vamos criar uma API fake para simular o banco de dados usando o JSON Server, precisamos instala-lo com o comando abaixo.</p>

```
$ npm install -g json-server

```
<p align="justify">Agora podemos abrir um novo git bash, na mesma pasta Trindade-Medical, como feito anteriormente, teremos duas telas pretas, uma vamos utilizar para dar o comando que vai rodar o front e o outro o back.</p>
<p align="justify">Comando para o back:</p>


```
$ json-server ./src/server/db.json
```

<p align="justify">Comando para o front:</p>


```
$ npm run dev
```

<p align="justify">Agora já podemos ir para qualquer navegador e digitar o endereço abaixo.</p>

```
$ http://localhost:5173/login
```

<p align="justify">Você verá a tela abaixo, onde há possibilidade de criar novo usuário, mas por padrão há um usuário que pode ser utilizado para testar o sistema.</p>

![Exemplo Insomnia](/public/login-trindade-medical.png)

```
$ E-mail: admin@admin.com
$ Senha: 12345678
```
<p align="justify">A figura abaixo mostra a tela principal do sistema, o design implementado e as funcionalidades. Mais detalhes verificar o vídeo tutorial.</p>

![Exemplo Insomnia](/public/home-trindade-medical.png)

## Vídeo tutorial de utilização da plataforma

https://drive.google.com/drive/folders/1UGDbRshMbuPv5j4dkNaUIG365LXI-KXd?usp=sharing

## Melhorias

<p align="justify">Algumas funcionalidades ainda estão em desenvolvimento, como a busca nas páginas de cadastro de consulta e exame, assim como outras funcionalidades pontuais. No entanto, estamos comprometidos em aprimorar continuamente o sistema para torná-lo mais robusto e capaz de atender às necessidades específicas de cada hospital e clínica médica.</p>

<p align="justify">Nossa equipe está dedicada a implementar melhorias e atualizações ao longo do tempo, levando em consideração o feedback de nossos usuários e as demandas do mercado. Com esse processo de aperfeiçoamento contínuo, buscamos garantir que a plataforma Trindade Medical se torne uma solução completa e personalizada para cada instituição de saúde.</p>
