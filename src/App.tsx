import { useState } from 'react'
import  { Card }  from './components/Card'
//import './App.css'

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         
    </>
  )
}
*/

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <Card title='acá poné lo que pinte' description='lo que se te ocurra'/> 
    </div>
  );
}

export default App
