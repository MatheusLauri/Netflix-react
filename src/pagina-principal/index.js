import './index.scss';
import { useState } from 'react';
import axios from 'axios';
export default function Netflix() {
     const [filme, setFilme] = useState('');
     const [catalogo, setCatalogo] = useState([])

        async function Buscar() {
        let url = `https://www.omdbapi.com/?apikey=37e41b24&s=${filme}`;

        let resp = await axios.get(url);
        setCatalogo(resp.data.Search);
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
                    <img src="./assets/img/sino.png" className='sino' alt="sino" />
                    <img src="./assets/img/fotinha.png" className='foto-pessoa' alt="fotinha" />
                    <img src="./assets/img/seta.png" alt="seta para baixo" />
                </div>
            </div>

            <div>
                {catalogo.map(item => (
                    <img src={item.Poster}/>
                ))}
            </div>
        </div>
    )
}