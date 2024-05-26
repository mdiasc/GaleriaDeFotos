import { useState } from 'react'
import './App.css'

function App() {
  const [imagens, setImagens] = useState([
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
  ]);

  const adicionarImagem = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagens([...imagens, e.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>Galeria de Imagens</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imagens.map((imagem, index) => (
          <img key={index} src={imagem} alt={`Imagem ${index + 1}`} style={{ margin: '5px' }} />
        ))}
      </div>
      <div  style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imagens.map((imagem, index) => (
          <img key={index} src={imagem} alt={`Imagem ${index + 1}`} style={{ margin: '5px' }} />
        ))}
      </div>
      <div  style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imagens.map((imagem, index) => (
          <img key={index} src={imagem} alt={`Imagem ${index + 1}`} style={{ margin: '5px' }} />
        ))}
      </div>
      <button onClick={adicionarImagem} style={{ marginTop: '10px' }}>Adicionar Imagem</button>
    </div>
  );
}



export default App
