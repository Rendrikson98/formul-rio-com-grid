import React from 'react';
import './style.css';


function App() {
  return (
    <div className='container'>
      <h1 className='brand'><span>Empresa </span>Tal Acessoria</h1>
      <div className='wrapper'>
        <div className='company-info'>
          <h3>Empresa Tal Acessoria</h3>
          <ul>
            <li>Rua Tal dos tal</li>
            <li>(00) 00000-0000</li>
            <li>teste@teste.com</li>
          </ul>
        </div>
        <div className='contact'>
          <h3>Nosso e-mail</h3>
          <form>
            <p>
              <label>Nome</label>
              <input type='text' name='nome' />
            </p>
            <p>
              <label>Empresa</label>
              <input type='text' name='empresa' />
            </p>
            <p>
              <label>Endereço de e-mail</label>
              <input type='email' name='email' />
            </p>
            <p>
              <label>Número de telefone</label>
              <input type='text' name='telefone' />
            </p>
            <p className='full'>
              <label>Mensagem</label>
              <textarea name='mensagem' rows='5' />
            </p>
            <p>
              <button>Enviar</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
