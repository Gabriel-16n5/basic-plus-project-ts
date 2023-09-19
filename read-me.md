continuando a construção de projeto ts, mas agora migraremos/iniciaremos o ORM Prisma ainda usando o postgres como db:
npm i -D prisma - para instalar o prisma em modo de desenvolvimento
npx prisma init - irá criar os arquivos necessários para configurarmos o prisma
configure o .env criado com seus dados, pode apagar tudo do pg pool, não iremos mais usar
configure o schema.prisma na pasta prisma com o provider do projeto - nesse caso é postgres, então não precisa mexer, pois, o padrão já é pg;
npx prisma db pull irá puxar as informações do banco para configurações necessárias;
npx prisma generate irá criar o schema com base no banco de dados informado, lembrando que o banco já precisar existir
após esse comando, copia o código do client que foi criado e substitua por todo o conteúdo anterior do database connection
Fazendo isso deve arrumar todo o código para subistituir os import e export que antes era db do pg
Também não usaremos mais querys, então tem que mudar todo o código para as funções do prisma
Nesse CRUD nos repos terá o exemplo de como fica a sintaxe, mas qualquer dúvida aperte ctrol + space para evocar as informações.
agora com prisma usaremos a seguinte interface =>
npx prisma studio
Agora usando o prisma, poderemos add, apagar ou editar a estrutura do banco direto pelo arquivo do schema.prisma
e fazer o vercionamento dessas mudanças
Por hora, eu acredito que é melhor criar as tabelas pelo pg e migrar, existe uma curva de aprendizado e memorização para fazer as relações pelo prisma. 
Se surgir dúvidas, rever aula de relacionamentos do mini curso de prisma
