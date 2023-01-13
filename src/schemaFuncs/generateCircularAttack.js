import { circularCheck } from "./CircularCheck"

const testData = [
  {name: 'NotConnected',   fields:[    {name: 'id', type: 'ID'},    {name: 'user', type:'User'}    ]  },
  {name: 'User',   fields:[    {name: 'id', type: 'ID'},     {name: 'location', type:'Location'},    {name: 'cohort', type: 'String'}    ]  }, 
  {name: 'Location',   fields:[    {name: 'id', type: 'ID'},    {name: 'gps', type: 'Number'},    {name: 'user', type:'Third'}    ]  },
  {name: 'Third',   fields:[    {name: 'id', type: 'ID'},    {name: 'user', type:'User'}    ]  }  
]

console.log(circularCheck(test))