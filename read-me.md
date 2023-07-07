continuando a construção de projeto ts, mas agora migraremos/iniciaremos o ORM Prisma:
npm i -D prisma
npx prisma init
configure o .env criado com seus dados
configure o schema.prisma na pasta prisma com o provider do projeto
npx prisma db pull
npx prisma generate, após esse comando, copia o código do client que foi criado e substitua por todo o conteúdo anterior do database
Fazendo isso deve arrumar todo o código para subistituir os import e export que antes era db do pg
Também não usaremos mais querys, então tem que mudar todo o código para as funções do prisma
Nesse CRUD nos repos terá o exemplo de como fica a sintaxe