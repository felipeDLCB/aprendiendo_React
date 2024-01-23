import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x:0, y:0})
  useEffect(()=> {
    const detectarMov = (event) =>{
      const {clientX, clientY} = event
      setPosition({ x:clientX, y:clientY})
    }
    if (enable) window.addEventListener('pointermove',detectarMov)

    return () => {
      window.removeEventListener('pointermove',detectarMov)
    }
  })
  return (
    <>
    <h2>Seguidor de Mouse con useEffect</h2>
    <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
    <button onClick={()=>{setEnable(!enable)}}>{enable ? 'Desactivar' : 'Activar'} seguimiento de mouse</button>
    </>
  )
}

export default App
