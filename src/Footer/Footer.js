import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-premium">
            <div className="text">
            <p className="footer-premium_title">Não pague pelo Spotify Premium!</p>
            <p className="footer-premium_subtitle">
                É bobagem pagar para ouvir música, baixe o cliente e use Spicetify.
            </p>
            <p className="footer-premium_subtitle">
                Você pode customizá-lo como quiser e ainda tem acesso as funções do Premium.
            </p>
            </div>
            <div className="button">
            <button type="button">Liberte-se grátis</button>
            </div>
        </footer>
    )
};

export default Footer;