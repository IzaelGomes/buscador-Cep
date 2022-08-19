import { FiSearch } from 'react-icons/fi';
import './style.css';
import React from 'react';
import api from './services/api';

function App() {
  const [input, setInput] = React.useState('');
  const [cep, setCep] = React.useState({});
  //  63043040/json
  async function handleSearch() {
    if (input === '') {
      alert('Campo vazio!, insira um CEP para iniciar a busca.');
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
    } catch {
      alert('Ops!, erro na busca');
      setInput('');
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input
          type="text"
          value={input}
          placeholder="Digite seu cep..."
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2> CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>
            {cep.localidade}- {cep.uf}
          </span>
        </main>
      )}
    </div>
  );
}

export default App;
