import {MarkerType} from 'reactflow'

const defaultEdge = {
  id: null,
  source: null,
  target: null,
  animated:'true', 
  type: 'smoothstep',
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 11,
    height: 11,
    color: '#D92121',
  },
  style: {
    strokeWidth: 4,
    stroke: '#D92121',
    },
}

export const constructRFEdges = (arrOfMaps) => {
  const allEdges = [];
  arrOfMaps.forEach(circMap => {
      let firstKey;
      let prevKey;
      circMap.forEach(value => {
        const edge = {...defaultEdge};
      
        const first = circMap.values()
        if (value === first.next().value){
          prevKey = value;
          firstKey = value;
        } else {
        edge.id = `e${prevKey}->${value}`;
        edge.source = `${prevKey}`;
        edge.target = `${value}`;  
        prevKey = value;    
        allEdges.push(edge)     
        } 
      })
      const edge = {...defaultEdge};
      edge.id = `e${prevKey}->${firstKey}`
      edge.source = `${prevKey}`;
      edge.target = `${firstKey}`; 
      allEdges.push(edge)
  })
  return allEdges;
}
