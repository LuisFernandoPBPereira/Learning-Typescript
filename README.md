<div align="center">
 <img src="https://user-images.githubusercontent.com/86135150/196008212-d0fcf24d-cff9-4579-b171-afda4290aee9.svg"/ width='100px'>
 <h1>Learning TypeScript</h1>
</div>

<br/>

<div>
 <h2>Comandos dos pacotes adicionados:</h2>
 <ul>
  <li>
   Comando que converte código Typescript em Javascript <br/>
   -----> yarn tsc src/index.ts 
  </li>
  <li>
   Comando para adicionar tipos do express para o Typescript <br/>
   -----> yarn add @types/express -D
  </li>
  <li>
   Comando para adicionar o Typescript mais recente <br/>
   -----> yarn add -D typescript
  </li>
  <li>
   Comando para adicionar o tsconfig.json <br/>
   -----> yarn tsc --init
  </li>
  <li>
   Comando para criar o index.js através do TS <br/>
   -----> yarn tsc
  </li>
  <li>
   Comando para adicionar o TS Node Dev <br/>
   -----> yarn add ts-node-dev -D
  </li>
  <li>
   Comando para criar projeto React com base em TS <br/>
   -----> yarn create react-app frontend --template=typescript
  </li>
  <li>
   Comando para adicionar o Cors (verifica URL's que vão acessar o back) <br/>
   -----> yarn add cors
  </li>
  <li>
   Comando para adicionar o tipos do Cors <br/>
   -----> yarn add @types/cors
  </li>
 </ul>
 
 <h3>Para iniciar o projeto de maneira mais fácil, adicione este bloco de código no package.json:</h3>
 
 
 ```
 "scripts": {
    "dev:server": "ts-node-dev --respawn --transpile-only src/index.ts"
  },
 ```
 
 <p>Você pode usar tanto o Yarn, quanto o NPM, ambos irão funcionar.</p> <br/>
 <p>Importante ressaltar que, se você não usar o --transpile-only, o Typescript irá verificar se há erros no código, o que pode acarretar em uma sobrecarga</p>
 
 <br/>
 
 <h3>Para toda vez que você criar um novo arquivo, e terminar de implementar o código nele, rode este comando no terminal:</h3>
 
 ```
 yarn tsc
 ```
 
 <p>Este comando fará com que você transpile todo o código Typescript para arquivos JavaScript.</p>
 
 <br/>
 
 <h1 align="center">Em breve, mais explicações sobre o que aprendi...</h1>
</div>
