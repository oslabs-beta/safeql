import {useState, useCallback, useContext, useEffect} from 'react';
import ReactFlow, {Background, Controls, applyEdgeChanges, applyNodeChanges} from 'reactflow';
import 'reactflow/dist/style.css'
import CustomNode from "./CustomNode";
import { Context } from '../../src/context';
// import {nodes as customNodes, edges as customEdges} from './ReformatSchemaJSON'

const nodeTypes = {
  custom: CustomNode,
};

function SchemaDisplayReactFlow(props) {
  const { initialNodes, initialEdges } = useContext(Context)

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes)=> setNodes((nds)=>applyNodeChanges(changes, nds)), []
  );

  const onEdgesChange = useCallback(
    (changes)=> setEdges((eds)=> applyEdgeChanges(changes, eds)), []
  );

  useEffect(()=>{
    setNodes(initialNodes)
  },[initialNodes])

  useEffect(()=>{
    setEdges(initialEdges)
  },[initialEdges])

  
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