<h1 align="center">SafeQL</h1>

<p align="center">Developer Tool for GraphQL API Security and Performance Testing</p>

<p align="center">
  <img src=https://img.shields.io/badge/next-13.0.3-hotpink>
  <img src=https://img.shields.io/badge/node-^16.13.1-green>
  <img src=https://img.shields.io/badge/codemirror-^6.0.1-black>
  <img src=https://img.shields.io/badge/Typescript-44.3%25-blue>
  <img src=https://img.shields.io/badge/TailwindCSS-%5E3.2.4-aqua>
</p>

<p align="center">
  <img width="600" src=https://user-images.githubusercontent.com/13594226/217419886-519bdb8e-3720-4302-a9b8-9854fe90d576.png> <br>
</p>

# **Description**
SafeQL is an easy-to-use web-based GUI for GraphQL API security and performance testing. It allows users to test the performance of their GraphQL API by displaying a query's response time (upcoming metrics to include status code, overhead, throughput, and load capacity.) It also tests if their GraphQL API is protected against DDOS attacks.

Users can keep track of all analytics run while exploring the API by sending it different kinds of data to see what values are returned.

Currently in Beta.

# **Installation**

To get started, fork and clone this repo, which is available on MacOS, Window, and Linux.

1. Fork this repo.
2. Clone to local machine
3. Run `npm i`


No account is required to make use of the application, so you can jump right in. Since no data is saved past session ending, your data is closed off from external influences ensuring complete security and separation of concerns.

Now, let's test your endpoint!

## **Viewing Analytics Information**
After opening the application you'll see three sections - an area to input the URL of the GraphQL API along with a code editor, another code editor, and the analytics sections.<br><br>

### **Testing Response Time (upcoming features: Query Overhead, Status, Throughput, and Load)** <br>
Enter the URL of the GraphQL API and type in the query you want to test. Click Run to automatically run all associated tests<br><br>

### **Testing the security of your GraphQL API** <br>
Enter the URL of the GraphQL API. You don't need to enter a query string. If a query is entered, it won't affect the results. Choose from the drop down menu and select, _Security_, click on the _Submit_ button to determine if the query passes or fails the DOS test.
<p align="center">
  <img width="600" src=https://user-images.githubusercontent.com/3701668/217415542-6e217696-0c54-448a-ba13-ea0a146512ce.gif> <br><br>
</p>


### **Testing the security of your schema** <br>
Once you click onto to the Schema page, there is an codebox for copying your schema in securely, since your schema are only saved for the session. Submit your schema for an interactive table visualization that displays any schema that allow for a circular reference that could be exploited. 
<p align="center">
  <img width="600" src=https://user-images.githubusercontent.com/3701668/217420191-22bd41b8-f78c-4f12-a730-ebd7df93ad62.gif> <br>
</p>
<br><br>

# **Tech Stack**
<table align="center" >
  <tbody>
  <tr>
    <td valign="center">Frontend Development</td>
    <td valign="center">
    <a href="https://https://nextjs.org/.com/" rel="nofollow"> <img src="https://camo.githubusercontent.com/f21f1fa29dfe5e1d0772b0efe2f43eca2f6dc14f2fede8d9cbef4a3a8210c91d/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6c696768745f6261636b67726f756e642e706e67" alt="nextJS" width="40" height="40" data-canonical-src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" style="max-width: 100%;"> </a>
    <a href="https://tailwindcss.com/" rel="nofollow"> <img src="https://camo.githubusercontent.com/5734d0669fe22ce04a1cb989a156cd32c379875f6bca56d5210c9432824856d9/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667" alt="tailwind" width="40" height="40" data-canonical-src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" style="max-width: 100%;"> </a>
    <a href="https://getbootstrap.com" rel="nofollow">  <a href="https://reactjs.org/" rel="nofollow"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" style="max-width: 100%;"> 
    <a href="https://webpack.js.org" rel="nofollow"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40" style="max-width: 100%;"> </a>
    <a href="https://babeljs.io/" rel="nofollow"> <img src="https://camo.githubusercontent.com/1abf71d00a4a13bfdeccdc131c65f02644fae4e746289bd7c21bf1d2af986389/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f626162656c6a732f626162656c6a732d69636f6e2e737667" alt="babel" width="40" height="40" data-canonical-src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" style="max-width: 100%;"></a>
    </td>
    <td valign="center">Backend Development</td>
    <td valign="center" colspan="3"><a href="https://nodejs.org" rel="nofollow"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" style="max-width: 100%;"> </a><a href="https://expressjs.com" rel="nofollow"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" style="max-width: 100%;"> </a><a href="https://graphql.org" rel="nofollow"> <img src="https://camo.githubusercontent.com/07c382b68200c1a86d52d1682346e73e038b2f160c9afbc0af773fb3646882c8/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6772617068716c2f6772617068716c2d69636f6e2e737667" alt="graphql" width="40" height="40" data-canonical-src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" style="max-width: 100%;"> </a></td>
  </tr>
  <tr>
    <td valign="center">Databases</td>
    <td valign="center"> <a href="https://www.postgresql.org" rel="nofollow"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" style="max-width: 100%;"> </a></td>
    <td valign="center">Programming Languages</td>
    <td align="center" colspan="6"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="nofollow"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" style="max-width: 100%;"> </a> 
    <a href="https://www.typescriptlang.org/" rel="nofollow"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" style="max-width: 100%;"> </a> </td>
  </tr>
   <tr>
     <td valign="center">Testing</td>
    <td valign="center"> <a href="https://jestjs.io" rel="nofollow"> <img src="https://camo.githubusercontent.com/ce0a32825268b09cd5e0fc7c2a09c587a708491427cb794cade8f1866f7284c6/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6a6573746a73696f2f6a6573746a73696f2d69636f6e2e737667" alt="jest" width="40" height="40" data-canonical-src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" style="max-width: 100%;"> </a> <a href="https://www.cypress.io" rel="nofollow"> <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg" alt="cypress" width="40" height="40" style="max-width: 100%;"> </a></td>
     <td valign="center">Other</td>
    <td valign="center" colspan="3&gt; &lt;a href=">
    <a href="https://codemirror.net/" rel="nofollow"> <img src="https://avatars.githubusercontent.com/u/8876537?s=200&v=4" alt="jest" width="40" height="40" data-canonical-src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" style="max-width: 100%;"> </a> <a href="https://reactflow.dev/" rel="nofollow"><img src="https://user-images.githubusercontent.com/3701668/217420763-88ad1847-9c68-4513-8d48-e34d6a5ca084.svg"> </a></td>
  </tr>
 
</tbody></table>
# Read More
Please visit our [website](https://www.safeQL.com/) <br>
[Read](https://www.medium.com/) about us!! <br>
<br>

## **Co-Creators** <br>

Victor He - [GitHub](https://github.com/victorhe33) | [LinkedIn](https://www.linkedin.com/in/victorhe33/) | [Twitter](https://twitter.com/VictorHeDPT)<br>
Collin Twibell - [GitHub](https://github.com/CTwibell0) | [LinkedIn](https://www.linkedin.com/in/collin-twibell)<br>
Etana Kopin - [GitHub](https://github.com/egkopin) | [LinkedIn](https://www.linkedin.com/in/egkopin/)<br>
Mariko Iwata - [GitHub](https://github.com/MarikoIwata) | [LinkedIn](https://www.linkedin.com/in/marikoiwata/)<br>
Christopher Kim - [GitHub](https://github.com/christophminkim) | [LinkedIn](https://www.linkedin.com/in/chris-m-kim/)<br>