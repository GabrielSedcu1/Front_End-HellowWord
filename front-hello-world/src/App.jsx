import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState('')
  const [mensagem, setMensagem] = useState('')

  const handleClick = () => {
    if (nome.trim() === '') {
      setMensagem('Por favor, insira seu nome.')
    } else {
      setMensagem(`Hello World, ${nome}!`)
    }
  }

  return (
    <div className="container">
      <h1>🌍 Hello World</h1>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button onClick={handleClick}>Mostrar Mensagem</button>
      <p className="mensagem">{mensagem}</p>
    </div>
  )
}

export default App