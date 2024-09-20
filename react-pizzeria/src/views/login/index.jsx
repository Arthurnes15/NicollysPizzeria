import { Link } from "react-router-dom";
import logo from '../../assets/imgs/logo.png';
import name from '../../assets/imgs/name.png';
import google from '../../assets/icons/google.png';
import './style.css';

export const Login = () => {
    return (
        <article className="container-login">
            <section className="login">
                <header className="header-login">
                    <div className="logo">
                        <img src={logo} alt="" width={"150px"} height={"150px"} />
                    </div>
                    <div className="title">
                        <img src={name} alt="" width={"300px"}/>
                    </div>
                </header>

                <form>
                    <div className="text-field">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" placeholder="E-m@il"/>
                    </div>
                    <div className="text-field">
                        <label htmlFor="password">Senha:</label>
                        <input type="password" placeholder="Senha"/>
                    </div>
                    <div className="button">
                        <button type="submit">Entrar</button>
                    </div>
                </form>

                <div className="lines">
                    <div>
                        <hr />
                    </div>
                    <div className="or">
                        <p>Ou</p>
                    </div>
                    <div>
                        <hr />
                    </div>
                </div>

                <div className="google-login">
                    <button>
                        <img src={google} alt="google" width={"20px"} height={"20px"} />
                        <p>Entrar com o Google</p>
                    </button>
                </div>  

                <p className="message">
                    Não tem conta? <Link to={'/register'}>Cadastre-se</Link>
                </p>

            </section>
        </article>
    )
}
