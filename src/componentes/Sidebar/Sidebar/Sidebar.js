// Importações necessárias
import './Sidebar.css';
import logoSpotify from '../../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe } from '@fortawesome/free-solid-svg-icons';

// Componente Sidebar para navegação lateral
const Sidebar = () => {
    return (
        // Container da barra lateral
        <div className="sidebar">
            {/* Navegação principal */}
            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href="">
                        <img src={logoSpotify} alt="Logo" />
                    </a>
                </div>
                <ul>
                    {/* Menu de navegação */}
                    <li>
                        <a href="">
                            <span><FontAwesomeIcon icon={faHome} /></span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><FontAwesomeIcon icon={faSearch} /></span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Seção da biblioteca */}
            <div className="library">
                {/* Cabeçalho da biblioteca */}
                <div className="library__content">
                    <button className="library__button">
                        <span className="fa fas fa-book"></span>
                        <span>Sua biblioteca</span>
                    </button>
                    <span className="fa fa-plus"></span>
                </div>

                {/* Seção de criação de playlist */}
                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>

                {/* Links e configurações */}
                <div className="cookies">
                    <a href="">Cookies</a>
                </div>
                <div className="languages">
                    <button className="languages__button">
                        <span><FontAwesomeIcon icon={faGlobe} /></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;