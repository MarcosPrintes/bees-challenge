# Bees challenge

Para as configurações iniciais do projeto foram utilizadas as seguintes ferramentas de desenvolvimento:
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), convenção para padronização das mensagens de commit.
- [Commitlint](https://commitlint.js.org/#/guides-local-setup), para checar e forçar que as mensagens de commit estejam de acordo com o padrão.
- [husky](https://typicode.github.io/husky/#/), para disparar alguns hooks go git em cada commit ou push.
- [craco](https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#installation), uma camada de configuração para projetos criados com CRA
- craco-alias
- [Styled components](https://styled-components.com/) para a escrita dos estilos dos componentes 


## Adicionando o stripe
```
yarn add stripe
```

Ler a documentação de referência da API do stripe, por lá tenho todas as informações que posso acessar pela lib do stripe.

## Backend no frontend
- No next temos as api roots, como todo arquivo que exporta um componente por default é uma página, conseguimos criar rotas para uma api no frontend, essas rotas são executadas no servidor do next e servem para serem requisitadas pelo frontend. Cada vez que uma rota é executada o next levanta momentaneamente um ambiente serveless, executa a rota é destroi.

```
/pages/api/users => acessando pelo browser tenho acesso a uma listade usuários, somente.
```

## Autenticação
- JWT (storage)
- Next Auth (Autenticação simples, usando terceiros como github, google, etc..., quando não quero armazenar credenciais do usuário no backend)
- Cognito, Auth0...

## Parametrização das rotas
- Para acessar rotas dinâmicas, criamos dentroem pages, o nome desejado da rota e para as rotas dinâmicas utilizamos o padrão:
[id].tsx ou [name].tsx.

- Para o next auth, podemos usar o padrão [...params].ts e tudo que for passado para essa rota será acessível dentro dela.

## Utilizando o Fauna DB
- Banco para aplicações serveless acessível via cloud API.
- Em aplicações serveless não é preciso manter uma conexão aberta com banco de dados.
- A cada nova requisição é "aberta" uma nova conexão com a base, e esse é um processo custoso para bancos como Postgres, MongoDB ...
- FaunaDb, Dynamo AWS são exemplos de bancos de dados para aplicações serveless
- FIREBASE, SUPABASE, FAUNADB, DYNAMO AWS
- O FRONTEND ESTÁ CADA VEZ MAIS GANHANDO RESPONSABILIDADES DE REGRAS DE NEGÓCIOS
- Criar a conta, gerar a chave da API, criar collections (Fauna é um db não relacional)
- Operações serveless não podem ser feitas na página em si, precisam seer feitas via api roots ou pelos métodos
getStaticProps (Static Site Generation) ou getServerSideProps (Server Side Rendering) pois elas não podem ser acessadas pelo usuário no navegador. Rodam apenas no backend da aplicação, nunca no client.
- Documentação de integração do next-auth copm fauna =>  https://next-auth.js.org/adapters/fauna
- Dentro do fauna existe o FQL, que seria como a linguagem de consulta do fauna
- Em produção é importante cirar roles customizadas para a base
## Configurações no github
- Deixar o email público, caso não esteja
- configurar em setings > developer settings > oauth apps uma nova aplicação para autorizar a autenticação
## Criando a sessão no stripe
- criar um rota de api para realizar a assinatura (api/subscribe.ts)
- essa requisição só deve permitir chamadas do tipo POST
- caso seja feito outro tipo, devemos retornar esse erro
- obter a sessão do usuário por dentro do next (getSession from next-auth/react). É assim que o next persiste informações no lado do servidor
- como essa função roda no lado do servidor, precisamos obter a sessão do usuário dessa maneira
- agora temos acesso as informações do usuário pela sessão
- criamos a sessão nmo stripe e configuramos o que ele vai precisar
- ao final exportamos o id dad sessão (sessionId)
- criar também as rotas de sucesso e cancelamento


- No front ja podemos disparar essa requesrt para assinatura
- temos que fazer o redirecionamento do stripe
- é possível ser feito pelo backend e pelo frontend, como essa é uma task que não precisa da obrigatoriedade de token, por exemplo, podemos fazer pelo front mesmo com auxílio da lib  `` yarn add @stripe/stripe-js ``
- seria uma integração do stripe com o front
- assim podemos usar a chave publica do stripe
- Essa integração permite redirecionar o usuário para a tela de pagamento do stripe, em caso de sucesso, ele retorna par a url de sucesso e e caso de o usuario cancelar, ele retorna para a url de cancelamento

## Sessão de checkout no stripe e next com next-auth
- Para persistir informações com next que vão precisar estar disponíveis no servidor e no cliente, usamos cookies.
- Cookies permitem o backend ter acesso a informações pelo parâmetro request das api routes:
  ``request.cookies``
- Quando o usuário clica no subscribe, precisamos verificar se ele já está logado na aplicação, fazemos isso recuperando a sessão
do usuário na aplciação.
- Se ele não estiver, redirecione ele para o login usando o método signIn("github") do next-auth/react, esse método aceita
uma string com o nome do provider de autenticação.
- Se ele já estiver logado, será redirecionado para a tela de pagamento dos stripe
- Nesse momento é criada uma sessão (checkout session) no stripe dentro dos "customers" no painel de admin do stripe

## Evitando duplicidade ao criar usuários para o pagamento no stripe
- Quando o usuário clica nosubscribe, ele deve ser redirecionado para a tela de pagamento dos stripe
- Nesse momento é criada uma sessão dentro dos "customers" no painel de admin do stripe
- É preciso fazer uma trativa para que não haja duplicidade lá dentro
- Pela video aula o Diego usou o fauna, cadastrando o id da sessão do usuário e depois verificando se já existe
- Eu usei o próprio stripe, o método "list" de customers.

## Ouvindo webhooks
- Webhook é um pattern usado para integrações entre sistemas na web
- Ex: uma aplicação terceira precisa avisar nosso app que alguma coisa aconteceu
  - Cliente => realiza uma ação
  - Stripe => "ouve" essa ação e notifica o cliente
  - App => recebe a notificação do serviço e faz alguma coisa (ou não)
- Isso é feito fornecenco uma rota http:// para a aplicação terceira (stripe)
- Webhooks são uma forma de uma aplicação terceira emitir eventos que nosso app pode escutar quando determindas ações executadas por algum
usuário no nosso app forem disparadas. Como se fosse uma resposta da aplicação terceira e ao ouvir essa resposta, podemos notificar o usuário final.
-  Para produção, poderia cadastrar um endpoint
- No stripe, esses eventos que são emitidos para nosso app, não envia as informações prontas, precisamos tratá-las conforme chegam (streaming)
- ATENTAR PARA NEXT CONFIG BODY PARSER

- Acessar painel stripe
- developers => webhooks
-  Stripe não consegue visualizar localhost **
-  Para testes locais, preciso usar a [CLI do stripe](https://stripe.com/docs/stripe-cli )
-  Fazer login pela CLI no stripe permitindo a ele enxergar nosso localhost
  ``stripe login``
- a CLI ficará configurada por 90 dias
-  Criar uma root api para o stripe (http://localhost:3000/api/webhooks.ts)
- executar stripe listen --forward-to localhost:3000/api/webhook
  - A primeira vez vai pedir permissão, precisa executar outra vez para ficar ouvindo os eventos
- Quando o app tereceio tenta se comunicar com nosso aplicativo, ele envia um código secreto (pegar pelo stripe listen --forward-to)
### Configurações de webhooks no estripe
- setings
- Client & server integrations
- Se estiver em produção, basta criar os endpoints, mas, como estamos local, o stripe não entende o que é
TODO
- Pesquisar o que são webhooks e como funcionam*