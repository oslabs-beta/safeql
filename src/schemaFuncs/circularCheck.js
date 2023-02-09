import { cursorDocEnd } from "@codemirror/commands";
import { check } from "prettier";

/*
  want to check if there is a reference to another schema 
  This is shown by a word that is the same as a type 
    -- save all the type Names in an array so we only add those to our graph
  circularCheck returns an array of Maps, where each Map has the Schema name and node ID
*/

const testData = [
  {name: 'NotConnected',   fields:[    {name: 'id', type: 'ID'},    {name: 'user', type:'User'}    ]  },
  {name: 'User',   fields:[    {name: 'id', type: 'ID'},     {name: 'location', type:'Location'},    {name: 'cohort', type: 'String'}    ]  }, 
  {name: 'Location',   fields:[    {name: 'id', type: 'ID'},    {name: 'gps', type: 'Number'},    {name: 'user', type:'Third'}    ]  },
  {name: 'Third',   fields:[    {name: 'id', type: 'ID'},    {name: 'user', type:'User'}    ]  }  
]

export const circularCheck = (parsedData) => {
  const schemaTypes = []; 
  parsedData.forEach(object => {
    schemaTypes.push(object.name)
  })
  
  const createGraph = {};

  let propName;

  parsedData.forEach((object) => {
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
  
  let allCircular = [];
   for (let i = 0; i < schemaTypes.length; i++){
    const checkedSchemaTypes = new Map();
    let queue = [...createGraph[schemaTypes[i]]]; 
    let start = schemaTypes[i]

    while (queue.length){
      const current = queue.shift();
      if (checkedSchemaTypes.has(current)) {continue}

      else {checkedSchemaTypes.set(current, schemaTypes.indexOf(current))}

      if (current === start){
        allCircular.push(checkedSchemaTypes)
      } 

      queue.push(...createGraph[current])
    }
  }
  
  if (allCircular.length > 0) return removeDuplicates(allCircular);
  return false;
}

  function removeDuplicates (arrOfMaps) {
    const used = new Set()
    const noDuplicates = [];
    const finalResult = arrOfMaps.forEach(circMap => {
      const currentArr = Array.from(circMap).sort()
      if (!used.has(`${currentArr}`)) {
        used.add(`${currentArr}`)
        noDuplicates.push(circMap)
        }
    })
    return noDuplicates;
  }

// console.log('ignore me!', circularCheck(testData))