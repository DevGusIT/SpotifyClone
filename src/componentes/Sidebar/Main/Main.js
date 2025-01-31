// Importações de imagens das playlists
import './Main.css';
import Playlist1 from '../../assets/playlist/1.jpeg';
import Playlist2 from '../../assets/playlist/2.png';
import Playlist3 from '../../assets/playlist/3.jpeg';
import Playlist4 from '../../assets/playlist/4.jpeg';
import Playlist5 from '../../assets/playlist/5.jpeg';
import Playlist6 from '../../assets/playlist/6.jpeg';
import Playlist7 from '../../assets/playlist/7.jpeg';
import Playlist8 from '../../assets/playlist/8.jpeg';
import Playlist9 from '../../assets/playlist/9.jpeg';
import Playlist10 from '../../assets/playlist/10.jpeg';
import Playlist11 from '../../assets/playlist/11.jpeg';
import Playlist12 from '../../assets/playlist/12.jpeg';
import Playlist13 from '../../assets/playlist/13.jpeg';
import Playlist14 from '../../assets/playlist/14.jpeg';
import Playlist15 from '../../assets/playlist/15.jpeg';

// Componente Main para exibição de playlists e artistas
const Main = () => {
    return (
        // Contêiner principal da playlist
        <div className="playlist-container">
            {/* Seção de playlists */}
            <div id="result-playlists">
                <div className="playlist">
                    <h1 id="greeting">Boas vindas</h1>
                    <h2 className="session">Navegar por todas as seções</h2>
                </div>

                {/* Contêiner rolável de ofertas */}
                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            {/* Cards de playlists */}
                            {[
                                { img: Playlist1, color: 'card1', title: 'Boas festas' },
                                { img: Playlist2, color: 'card2', title: 'Feitos para você' },
                                // ... outros cards
                            ].map((card, index) => (
                                <a href="" key={index} className="cards">
                                    <div className={`cards ${card.color}`}>
                                        <img src={card.img} alt="" />
                                        <span>{card.title}</span>
                                    </div>
                                </a>
                            ))}
                        </section>
                    </div>
                </div>
            </div>

            {/* Seção de resultado de artistas (inicialmente oculta) */}
            <div id="result-artist" className="hidden">
                <div className="grid-container">
                    <div className="artist-card" id="">
                        <div className="card-img">
                            <img id="artist-img" className="artist-img" />
                            <div className="play">
                                <span className="fa fa-solid fa-play"></span>
                            </div>
                        </div>
                        <div className="card-text">
                            <a title="Foo Fighters" className="vst" href="">
                                <span className="artist-name" id="artist-name"></span>
                                <span className="artist-categorie">Artista</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Main;