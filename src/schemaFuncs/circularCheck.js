import { check } from "prettier";
import { create } from "ts-node";

/*
  want to check if there is a reference to another schema 
  This is shown by a word that is the same as a type 
    -- save all the type Names in an array so we only add those to our graph
*/

const testData = [
  {name: 'NotConnected',   fields:[    {name: 'id', type: 'ID'},    {name: 'user', type:'User'}    ]  },
  {name: 'User',   fields:[    {name: 'id', type: 'ID'},     {name: 'location', type:'Location'},    {name: 'cohort', type: 'String'}    ]  }, 
  {name: 'Location',   fields:[    {name: 'id', type: 'ID'},    {name: 'gps', type: 'Number'},    {name: 'user', type:'Third'}    ]  },
  {name: 'Third',   fields:[    {name: 'id', type: 'ID'},    {name: 'user', type:'User'}    ]  }  
]

export const circularCheck = (parsedData) => {
  const schemaTypes = []; //not sure if we need this
  parsedData.forEach(object => {
    schemaTypes.push(object.name)
  })
  // console.log(schemaTypes)
  
  const createGraph = {};

  //declare here so it is available in global scope
  let propName;

  //this creates the non-directed adjacency graph
    //the key is the Schema name, the value is an array of subfield Types
  parsedData.forEach(object => {
    for (let [key,value] of Object.entries(object)){
      if (key === 'name'){
      propName = value;
      createGraph[value] = [];
      }
      if (key === 'fields'){
        value.forEach(element => {
          if (element.type.toLowerCase() !== 'id' && schemaTypes.includes(element.type)){
          createGraph[propName].push(element.type)
          }
        })
      }
    }  
  });
  
  // console.log(createGraph)
  let circularSchemaNames;
   //Each schema has to be checked, starting the queue over, or we may get false negative
   for (let i = 0; i < schemaTypes.length; i++){
  //Now that we have our graph, we can work on finding if there is a circular reference, but we have to determine a start. We can use our SchemaTypes set?
    const checkedSchemaTypes = new Set();
 
    let queue = [...createGraph[schemaTypes[i]]]; //will add all nodes that the first Schema points to
    let start = schemaTypes[i]

    while (queue.length){
      const current = queue.shift();
      // console.log('current:', current, 'start:', start)
      if (checkedSchemaTypes.has(current)) {continue}

      else {checkedSchemaTypes.add(current)}
      //Our end case scenario is the first Type that started the while loop, in this case Name
      //If circular reference, We are returning the checkedSchemaTypes of the current iteration to display our circular references
      if (current === start){
        return Array.from(checkedSchemaTypes)
      } 

      queue.push(...createGraph[current])
    }
    //returns false if there are no issues
  }
  return false;
}

//next would be to save the loop that is bad

console.log(circularCheck(testData))