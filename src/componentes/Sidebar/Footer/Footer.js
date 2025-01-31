// Importação do arquivo de estilos CSS específico para o Footer
import './Footer.css';

// Componente funcional Footer para seção de rodapé premium
const Footer = () => {
    return (
        // Container do rodapé com classe para estilização
        <footer className="disclaimer-premium">
            {/* Divisão para texto informativo */}
            <div className="text">
                {/* Título do banner */}
                <p className="disclaimer-premium__title">Testar o Premium de graça</p>

                {/* Subtítulo com descrição da oferta */}
                <p className="disclaimer-premium__subtitle">
                    Inscreva-se para curtir música ilimitada e podcasts só com alguns
                    anúncios. Não precisa de cartão de crédito.
                </p>
            </div>

            {/* Divisão para botão de inscrição */}
            <div className="button">
                {/* Botão para inscrição gratuita */}
                <button type="button">Inscreva-se grátis</button>
            </div>
        </footer>
    )
};

// Exportação do componente como padrão
export default Footer;