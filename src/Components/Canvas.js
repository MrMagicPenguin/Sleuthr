import React from 'react'
import ReactFlow, { Background } from 'react-flow-renderer'
import TaskNode from './TaskNode'

const nodeTypes = {
  taskNode: TaskNode
}
const elements = [
  {
    id: '1',
    type: 'input', // input node
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },
  // default node
  {
    id: '2',
    // you can also pass a React component as a label
    type: 'taskNode',
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output', // output node
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
  // animated edge
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' },
];

const Canvas = () => (
  <div style={{height: '100vh'}}>
    <ReactFlow
      elements={elements}
      nodeTypes={nodeTypes}>
      <Background
        className={"graph"}

        variant="lines"
        gap={32}
        size={1}
        color={"#000"}
      />
      </ReactFlow>
  </div>
);

export default Canvas