import {useState, useCallback} from 'react';
import ReactFlow, {Background, Controls, applyEdgeChanges, applyNodeChanges} from 'reactflow';
import 'reactflow/dist/style.css'
import CustomTableNode from "./CustomTableNode";

import {nodes as customNodes, edges as customEdges} from './ReformatSchemaJSON'

const nodeTypes = {
  custom: CustomTableNode,
};

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