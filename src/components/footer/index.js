import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer>
            <div className="section-box-img">
                <div className="card">
                    <img className="img-footer" src="https://ml0n3wfxtxxa.i.optimole.com/w:auto/h:auto/q:100/https://www.samilarplanejados.com.br/wp-content/uploads/2019/08/quarto2b.png"></img>
                </div>
            </div>


            <div className="footer-infos">
                <div className="logo-footer">
                    <p>Scape</p>
                    <p className="subnome-footer">Hotel</p>
                    <p className="p-info">O melhor destinho pra você e sua família aproveitarem o máximo da viagem!</p>
                </div>

                <div className="infos">
                    <div className="hotel">
                        <h2>Hotel</h2>
                        <ul>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Avaliaçôes</a></li>
                            <li><a href="#">Instruções</a></li>
                            <li><a href="#">Novidades</a></li>
                        </ul>
                    </div>

                    <div className="contatos">
                        <h2>Contatos</h2>
                        <ul>
                            <li>Scape Hotel Fortaleza</li>
                            <li>Rua dos Bobos, 0</li>
                            <li> (21) 98765-4321</li>
                            <li>Scapecontato@exemplo.com</li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="box-copy">
                <hr className="line-separador"/>
                <h5>Copyright © 2021 Scape Fortaleza Hotel | Powered by Scape Fortaleza Hotel</h5>

            </div>

           
        </footer>

        
    )
}

export default Footer;