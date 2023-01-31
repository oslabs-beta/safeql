//import our schema parser function
import SchemaDisplay from "./SchemaDisplay";
import {useState, useCallback} from 'react';
import ReactFlow, {Background, Controls, applyEdgeChanges, applyNodeChanges} from 'reactflow';
import 'reactflow/dist/style.css'

//https://docs.iconify.design/icon-components/react/

    const testData = [
   
    ]

const initialNodes = [
  {
    id: '1', //required for react flow
    position: {x:10, y:100}, //required for react flow
    data: {
      label:'Hello',
    },
    type: 'input',
  },
  {
    id:'2',
    position: {x:200, y:200},
    data: {label: 'World'}
  },
  {
    id: 'User',
    type: 'model',
    data: {
      label: 'some label 2',
    },
    position: {x:200, y: 380} 
  }
  
];

const initialEdges = [
  {
    id: '1-2',
    source: '1', //where edge begins
    target: '2', //where edge ends
    type: 'step'//default is curved line
  }
]


function SchemaVisualizer(props) {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes)=> setNodes((nds)=>applyNodeChanges(changes, nds)), []
  );

  const onEdgesChange = useCallback(
    (changes)=> setEdges((eds)=> applyEdgeChanges(changes, eds)), []
  );
  
  // console.log('props.parsedSchema', props.parsedSchema)
  // let schemas = [];

  // for (let i = 0; i < props.parsedSchema.length; i++) {
  //   const {name, fields} = props.parsedSchema[i]
  //   schemas.push(<SchemaDisplay name={name} fields={fields} key={i}/>)
  //   console.log('in for loop, schemaVisualizer');
  // }
  
  // console.log('schemas array', schemas)  
  return (
    <div className="w-full">
    {/* schemas */}
        <ReactFlow 
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges ={edges}
          onEdgesChange={onEdgesChange}
          minZoom={0.05}
        >
          <Background />
          <Controls />
        </ReactFlow>
        
    </div>
  );
}

export default SchemaVisualizer;