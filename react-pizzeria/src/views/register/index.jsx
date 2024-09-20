import { useRef } from 'react';
import logo from '../../assets/imgs/logo.png';
import name from '../../assets/imgs/name.png';
import './styles.css';

export const Register = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const streetRef = useRef();
    const numberRef = useRef();
    const neighboorhoodRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            street: streetRef.current.value,
            number: numberRef.current.value,
            neighboorhood: neighboorhoodRef.current.value,
        }

        console.log(payload);
    }

    return(
            <article className="container-register">
                <section className="register">
                    <header className="header-register">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="title">
                            <img src={name} alt="nicollys"/>
                        </div>
                    </header>
    
                    <form onSubmit={handleSubmit}>
                    <div className="text-field">
                            <label htmlFor="email">Nome:</label>
                            <input ref={nameRef} type="text" placeholder="Nome"/>
                        </div>
                        <div className="text-field">
                            <label htmlFor="email">E-mail:</label>
                            <input ref={emailRef} type="email" placeholder="E-m@il"/>
                        </div>
                        <div className="text-field">
                            <label htmlFor="password">Senha:</label>
                            <input ref={passwordRef} type="password" placeholder="Senha"/>
                        </div>
                        
                        <div className="text-field__address">
                            <div className="text-field">
                                <label htmlFor="street">Rua:</label>
                                <input ref={streetRef} type="text" placeholder="Rua"/>
                            </div>
                            <div className="text-field">
                                <label htmlFor="">Nº da Casa</label>
                                <input ref={numberRef} type="number" placeholder="Número"/>
                            </div>
                        </div>
                            <div className="text-field">
                                <label htmlFor="neighboorhood">Bairro</label>
                                <input ref={neighboorhoodRef} type="text" placeholder="Bairro"/>
                            </div>

                        <div className="button">
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
    
                </section>
            </article>
    )
}
