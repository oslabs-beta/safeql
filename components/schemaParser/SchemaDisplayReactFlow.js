import {useState, useCallback} from 'react';
import ReactFlow, {Background, Controls, applyEdgeChanges, applyNodeChanges} from 'reactflow';
import 'reactflow/dist/style.css'
import CustomTableNode from "./CustomTableNode";

const nodeTypes = {
  custom: CustomTableNode,
};

//STEP 1: function that creates as many nodes as there are types in the schema
const customNodes = [
  {
    id: '1',
    type: 'custom',
    data: {
      tableName: 'Cohort',
      id: 'ID',
      studentCount: 'Number',
      region: 'String'
    },
    position: {x:100, y: 100} 
  },
  {
    id: '2',
    type: 'custom',
    data: {
      tableName: 'Student',
      id: 'ID',
      teacher: 'Type',
      region: 'String'
    },
    position: {x:300, y: 150} 
  }
  
];

const customEdges = [
  {
    id: '1-2',
    source: '1', //where edge begins
    target: '2', //where edge ends
    type: 'step'//default is curved line
  }
]

function SchemaDisplayReactFlow(props) {

  const [nodes, setNodes] = useState(customNodes);
  const [edges, setEdges] = useState(customEdges);

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
          nodeTypes={nodeTypes}
        >
          <Background />
          <Controls />
        </ReactFlow>
        
    </div>
  );
}

export default SchemaDisplayReactFlow;