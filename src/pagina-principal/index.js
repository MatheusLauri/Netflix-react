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
    <div className="mae">
      <section className='header'>

        <div className='header-left-side'>
          <img src='/logo.svg' alt='logo' />
          <h1>Portfolio.me</h1>
          <div className='header-menu'>
            <a className='header-link'>Início</a>
            <a className='header-link'>Séries</a>
            <a className='header-link'>Filmes</a>
            <a className='header-link'>Bombando</a>
            <a className='header-link'>Minha Lista</a>
          </div>
        </div>

        <div className='header-right-side'>
          <div className='header-input'>
            <input type='text' placeholder='Pesquise pelo Título' value={filme} onChange={(e) => setFilme(e.target.value)} />
            <img src='/buscar.svg' alt='buscar' onClick={() => Buscar()} />
          </div>

          <h1 className='header-name'>Bruno</h1>
          <img className='sino' src='sino.svg' alt='sino' onClick={() => Buscar()} />
          <img className='icon' src='icon.png' alt='icon' />
          <img className='arrow' src='arrow.svg' alt='arrow' />
        </div>

      </section>

      <section className='mid-content'>
        <h1>Friends</h1>
        <p>Seis jovens são unidos por laços familiares, românticos e, principalmente, de amizade, enquanto tentam vingar em Nova York.</p>
        <a className='mid-content-link'>Assistir</a>
      </section>

      <section className='content'>
        <h1>Resultados da Busca</h1>

          <div className='secao-03'>
            {catalogo.map(item => (
              <div key={item.imdbID}> 
                <img src={item.Poster} alt={item.Title} />
              </div>
            ))}
          </div>
      </section>
    </div>
  )
}
