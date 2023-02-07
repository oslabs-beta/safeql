//This function will take the parsed schema and convert to the initialNode 
/*
parsedSchema format:
   [
    { name: Cohort, fields:[
      { name: id, 
        type: ID
      }]
    }
  ]
 */

 /* 
 - to create each node we need to...
  increment id++ for each
 - update the position from the previous  starting at x100,y100 adding 200 to x  (ex. x300)
  - update data key's values with our schema fields
*/

export const constructRFNodes = (parsedSchemas) => {
    //declare final array
    const nodes = [];
    //declare variable saving last position
    // const lastPosition = {x: 000, y:100};
    let positionX = -175;
    let positionY = 25
    
    //deconstruct name and fields from parsed schema
    parsedSchemas.forEach((schema, index) => {
      const currentData = {
      tableName: null
      };

      //update position from lastPosition
      // add logic to change y if there are more than 3 schemas horizontally
      if (positionX >= 600) {
        positionX = -175;
        positionY += 200;
      }
      positionX += 200;

        //declare base object with default id type data and position
    const obj = {
      type: 'custom',
      id: String(index),
      position: {x:positionX, y:positionY},
      data: currentData
        };
        
      const {name, fields} = schema;
      //name, add that to the data obj as tableName
      currentData.tableName = name;
      //iterate throgh fields obj and assign to data obj
      fields.forEach(subField => {
        currentData[subField.name] = subField.type
      })
  
      
      nodes.push(obj)
      // console.log('nodes', index, nodes)

  });
  // console.log('nodes', nodes)
  return nodes;
}

/*
parsedSchema format:
 */
const test = 
   [
    { name: 'Cohort', fields:[
      { name: 'student', 
        type: 'String'
      },
      { name: 'age', 
        type: 'Number'
      },
    ]
    },
    { name: 'second', fields:[
      { name: 'id', 
        type: 'ID'
      }]
    }
  ]

  console.log(constructRFNodes(test))