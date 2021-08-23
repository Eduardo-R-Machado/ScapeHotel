import Header from '../../components/header'
import Button from '../../components/button'
import Footer from '../../components/footer'

import './style.css'



const Home = () => {
    return (
        <div className="container">
            <div className="main">
                <Header />
                <div className="banner">
                    <img className="img-banner" src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80" />
                    <div className="info-banner">
                        <h3>Bem-vindo ao</h3>
                        <h1>Scape Hotel </h1>
                        <h2>Fortaleza</h2>
                        <h4>É o destino ideal para descanso, turismo ecológico e negócios, através do melhor da hotelaria.<br /> Aproveite nossa piscina ao ar livre e desfrute de um delicioso café da manhã americano.</h4>
                        <Button />
                    </div>
                </div>
            </div>

            <div className="box-infos">
                <div className="text-infos">
                    <h2>Benefícios</h2>
                    <h5>Veja algumas vantagens e benefícios oferecidos pelo hotel!</h5>
                </div>
                <div className="global-group-icons">
                    <div className="group-icons1">
                        <div className="group1">
                            <img className="icon" src="https://image.shutterstock.com/image-vector/wifi-icon-black-wi-fi-260nw-654893110.jpg" />
                            <h3>Wifi gratuito</h3>
                        </div>
                        <div className="group2">
                            <img className="icon" src="https://image.shutterstock.com/image-vector/bike-icon-vector-logo-template-260nw-1388480312.jpg" />
                            <h3>Aluguel <br /> de bikes</h3>


                        </div>
                        <div className="group3">
                            <img className="icon" src="https://image.shutterstock.com/image-vector/wine-glass-icon-vector-260nw-324779846.jpg" />
                            <h3>Area de lazer</h3>
                        </div>
                    </div>

                    <div className="group-icons2">
                        <div className="group4">
                            <img className="icon" src="https://image.shutterstock.com/image-vector/wheelchair-flat-icon-vector-on-260nw-1431844214.jpg" />
                            <h3>Fácil acesso <br /> para todos</h3>
                        </div>
                        <div className="group5">
                            <img id="local" className="icon" src="https://image.shutterstock.com/image-illustration/location-pin-pointer-icon-symbol-260nw-1939681951.jpg" />
                            <h3>Boa localização</h3>
                        </div>
                        <div className="group6">
                            <img className="icon" src="https://image.shutterstock.com/image-vector/dog-icon-260nw-551341387.jpg" />
                            <h3>Área de pet</h3>
                        </div>
                    </div>

                </div>
            </div>

            <div className="contact-banner">
                <div className="img-contact">

                </div>
                <div className="text-contact">
                    <h4>Reservar quarto</h4>
                    <h2>Vantagens extras ao reservar diretamente conosco!</h2>
                </div>
                <div className="btn-banner-contato">
                    <Button />
                </div>
                <div className="call">
                    <p>Ou ligue</p>

                    <div className="icon-number">
                        <img className="icon-tell" src="https://www.fuegomotel.com.br/wp-content/uploads/2017/12/icone-telefone.png"></img>
                        <h3>(21) 98765-4321</h3></div>
                </div>
            </div>

            <Footer />





        </div>
    )
}



export default Home;