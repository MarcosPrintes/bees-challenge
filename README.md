# Bees challenge

Para as configurações iniciais do projeto foram utilizadas as seguintes ferramentas de desenvolvimento:
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), convenção para padronização das mensagens de commit.
- [Commitlint](https://commitlint.js.org/#/guides-local-setup), para checar e forçar que as mensagens de commit estejam de acordo com o padrão.
- [husky](https://typicode.github.io/husky/#/), para disparar alguns hooks go git em cada commit ou push.
- [craco](https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#installation), uma camada de configuração para projetos criados com CRA
- [craco-alias](https://github.com/risenforces/craco-alias) para a configuração dos path imports
- [Styled components](https://styled-components.com/) para a escrita dos estilos dos componentes
- [Polished](https://github.com/styled-components/polished) para auxiliar na criação dos estilos

## Rodando localmente
``` yarn ``` ou ``` npm i ```
Após instaldas as dependências, executar:
``` yarn start ``` ou ``` npm run start ```

## Divisão de pastas
O projeto foi divido na seguinte estrutura de pastas:
  - assets => contem os ícones
  - componentes
    - Button => apesar de haver apenas um botão nesse estilo (página de login) criei de uma forma que poderia ser reutilizável
    - Card => card que contém as informações de cada cervejaria, além de disparar uma action para adicionar uma nova tag
    - Header => Exibe o nome do usuário e o botão de logout
    - Input => Utilizado na tela de login
    - tag => tags dentro do card, fiz separado pois esse componente não é usado apenas para exibir uma informação mas também possui um estado
            interno para quando o usuário desejar adicionar uma nova tag
    - Pages
        - Login => Entrada para a aplicação
        - Breweries => tela que exibe a listagem das cervejarias
## Rotas
Para a navegação da aplicação doi utilizado o react-router-dom, no arquivo de configuração das rotas também foi implementado a lógica para permitir visualizar a página de listagem apenas se o usuário estiver logado corretamente e quando logado, não permite acessar a tela de login.
## Store
Para manter o estado da aplicação foi utilizado redux + redux-saga e o duck pattern. A lista de cervejarias é salva no store e quando ocorre a paginação com infinite scroll ele é atualizado, mantendo a listagem anterior + os novos.
## Testes
Devido minha pouca experiências com testes preferi não implementar devido o tempo para executar o desafio (embora eu pudesse solicitar mais tempo, perecebi que poderia demorar mais para entregar)
## Bonus
- Typescript
- Salvar o nome do usuário do estado global
- Responsividade
- Implementado adicionar mais uma tag
- Validar se o usuário informou apenas caracteres válidos (verifiquei apenas se os campos estão preenchidos e exibo uma mensagem de erro em caso de falha)
- Loading e lazy loading (infite scroll utilzando a IntersectionObserverApi)
- Exibir o histório de commits, utilizei o conventional commits para facilitar a leitura do que foi feito durante o desafio