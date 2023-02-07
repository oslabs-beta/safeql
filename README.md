Co Authors:
Co-authored-by: MarikoIwata <3701668+MarikoIwata@users.noreply.github.com>
Co-authored-by: Chris Kim <christophminkim@gmail.com>

<h1 align="center">SafeQL</h1>

<p align="center">Developer Tool for GraphQL API Security and Performance Testing</p>

<p align="center">
  <img src=https://img.shields.io/badge/next-13.0.3-yellow>
  <img src=https://img.shields.io/badge/node-^16.13.1-yellow>
  <img src=https://img.shields.io/badge/codemirror-^6.0.1-yellow>
  <img src=https://img.shields.io/badge/Typescript-94%25-yellow>
  <img src=https://img.shields.io/badge/tailwind-%5E3.2.4-yellow>
</p>

<p align="center">
  <img width="600" src=https://user-images.githubusercontent.com/75049208/112365029-660b5800-8c94-11eb-9836-fe5264d4a0e5.png> <br>
</p>

# **Description**
SafeQL is an easy-to-use Electron powered GUI for GraphQL API security and performance testing. It allows users to test the performance of their GraphQL API by displaying a query's response time, status code, overhead, throughput, and load capacity. It also tests if their GraphQL API is protected against DDOS attacks.

Users can keep track of all analytics ran while exploring the API by sending it different kinds of data to see what values are returned.

Currently in Beta.

# **Installation**
To get started, fork and clone this repo, which is available on MacOS, Window, and Linux.

Now, let's generate some tests!

# **How to use**
Sign up for an account, or if already registered, log into the application using your credentials. 

## **Viewing Analytics Information**
After logging in, you'll see three sections - an area to input the URL of the GraphQL API along with a code editor, another code editor, and the analytics sections.

### **Testing Response Time, Query Overhead, Status, Throughput, or Load** <br>
Enter the URL of the GraphQL API and type in the query you want to test. <br>

### Response Time, Status and Throughput Testing <br>
Choose from the drop down menu and select, _Response/Data_, then click on the _Submit_ button to get the response time plotted on the graph, the status of the query, and the throughput time. Click on the _Submit_ button again to plot more analytics on the graph. <br>
<p align="center">
  <img width="600" src=https://user-images.githubusercontent.com/75049208/112411140-a640f980-8cd9-11eb-90f8-967c6539b9f5.gif> <br>
</p>

### Query Overhead Testing <br>
Instead of choosing from the drop down menu, click on the _Data_ tab on the right panel to find out the data size in kilobytes a return query response has. Like the reponse test/status/throughput tests above, more data can be retrieved by clicking on the _Submit_ button again. <br>
<p align="center">
  <img width="600" src=https://user-images.githubusercontent.com/75049208/112411765-ae4d6900-8cda-11eb-9c18-12399f855a29.gif> <br>
</p>

### Load Testing <br>
Similar to the step above, choose from the drop down menu and select, _Load_, then click on the _Submit_ button to find out how the average time it takes to query this query 50 times in milliseconds. <br>
<p align="center">
  <img width="600" src=https://user-images.githubusercontent.com/75049208/112412233-6b3fc580-8cdb-11eb-8198-eef7f4147ba7.gif> <br>
</p>

### Testing the security of your GraphQL API <br>
Enter the URL of the GraphQL API. You don't need to enter a query string. If a query is entered, it won't affect the results. Choose from the drop down menu and select, _Security_, click on the _Submit_ button to determine if the query passes or fails the dos test.
<p align="center">
  <img width="600 "src=https://user-images.githubusercontent.com/75049208/112506998-83e7c400-8d4b-11eb-9e2e-50214de4a5f6.gif> <br>
</p>

# Tech Stack
Javascript, Typescript, Next.js, Express/Node.js, GraphQL, TailwindCSS, Jest, Cypress

# Read More
Please visit our [website](https://www.safeQL.com/) <br>
[Read](https://www.medium.com/) about us!! <br>

## Co-Creators: <br>
Victor He - [@victorhe33](https://github.com/victorhe33) | [LinkedIn](https://www.linkedin.com/in/victorhe33/)<br>