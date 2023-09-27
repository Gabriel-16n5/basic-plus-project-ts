Continuando a construção de projeto ts, mas agora migraremos/iniciaremos o ORM Prisma ainda usando o postgres como db:</br>

`npm i -D prisma` - para instalar o prisma em modo de desenvolvimento.</br>

`npx prisma init` - irá criar os arquivos necessários para configurarmos o prisma.</br>

<strong>*No próprio terminal irá aparecer uma espécie de passo a passo para fazer a configuração, também pode ir por ela.*</strong></br>

configure o .env criado pelo prisma, ou editar o já existente agora com mas informações novas com seus dados, pode apagar tudo do pg pool, não iremos mais usar</br>

configure o schema.prisma na pasta prisma com o provider do projeto, nesse caso é postgres, então não precisa mexer, pois, o padrão já é pg;</br>

`npx prisma db pull` - irá puxar as informações do banco para configurações necessárias;</br>

`npx prisma generate` - irá criar o schema com base no banco de dados informado, lembrando que o banco já precisar existir após esse comando, copia o código do client que foi criado e substitua por todo o conteúdo anterior do database connection</br>

Fazendo isso deve arrumar todo o código para subistituir os import e export que antes era db do pg</br>

Também não usaremos mais querys, então tem que mudar todo o código para as funções do prisma</br>

Nesse CRUD nos repos terá o exemplo de como fica a sintaxe, mas qualquer dúvida aperte ctrl + space para evocar as informações.</br>

agora com prisma usaremos a seguinte interface em vez do pgadmin: `npx prisma studio`</br>

Agora usando o prisma, poderemos add, apagar ou editar a estrutura do banco direto pelo arquivo do schema.prisma
e fazer o vercionamento dessas mudanças</br>

Por hora, eu acredito que é melhor criar as tabelas pelo pg e migrar, existe uma curva de aprendizado e memorização para fazer as relações pelo prisma. </br>

Se surgir dúvidas, rever aulas 5, 6 e 7 do mini curso de prisma
</br>

As migrations são muito importantes e boas, pq eu consigo alterar o banco de uma forma muito mais segura, apenas alterando a model do prisma schema e rodando npx prisma migrate dev, ele tbm irá fazer uma espécie de vercionamento.

colocar nos scripts package.json:

    "migrate:dev": "prisma migrate dev",
    "migrate:deploy": "prisma migrate deploy"