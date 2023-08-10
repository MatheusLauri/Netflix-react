import './index.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Netflix() {
    const [filme, setFilme] = useState('');
    const [catalogo, setCatalogo] = useState([]);
    const [qtd, setQtd] = useState([]);
    const [url, setUrl] = useState('');
    
    async function Buscar() {
      const newCatalog = [];
    
      const newUrl = `https://www.omdbapi.com/?apikey=37e41b24&s=${filme}`;
      const resp = await axios.get(newUrl);
      const totalResults = Number(resp.data.totalResults);
      const totalPages = Math.ceil(totalResults / 10);
    
      const newQtd = [];
    
      for (let n = 1; n <= totalPages; n++) {
        newQtd.push(n);
      }
    
      setQtd(newQtd);
    
      for (const item of newQtd) {
        const newPageUrl = `https://www.omdbapi.com/?apikey=37e41b24&s=${filme}&page=${item}`;
        const pageResp = await axios.get(newPageUrl);
        newCatalog.push(...pageResp.data.Search);
      }
    
      setCatalogo(newCatalog);
    }
  

  return (
    <div className="main-netflix">
        <div className="cabecalho">
            <div className="tags-cabecalho">
                <img src="./assets/img/logo.png" alt="Logo port" />
                <h3>Portifolio.me</h3>
                <p>inicio</p>
                <p>Séries</p>
                <p>Filmes</p>
                <p>Bombando</p>
                <p>Minha Lista</p>
            </div>

            <div className="pesquisa-cabecalho">
                <input type='text' placeholder='Pesquise pelo titulo' value={filme} onChange={(e) => setFilme(e.target.value)}/>
                <img src="./assets/img/icon-buscar.png" className='buscar' alt="buscar" onClick={() => Buscar()}/>
                <p>Bruno</p>
                <img src="./assets/img/sino.png" className='sino' alt="sino" onClick={() => Buscar()} />
                <img src="./assets/img/fotinha.png" className='foto-pessoa' alt="fotinha" />
                <img src="./assets/img/seta.png" alt="seta para baixo" />
            </div>
        </div>

      <div className="catalogo">
        {catalogo.map((item, index) => (
          <img key={index} src={item.Poster} alt={`Poster ${index}`} />
        ))}
      </div>
    </div>
  );
}
