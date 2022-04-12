import React from 'react';
import { useEffect, useState } from 'react'
import './style.css'

import Perfil_1 from '../../assets/img/mario.jpg'
import Perfil_2 from '../../assets/img/seya.jpg'
import Perfil_3 from '../../assets/img/chimb.jpeg'
import Perfil_4 from '../../assets/img/poze.webp'
import Perfil_5 from '../../assets/img/hamilton.jpg'


export function Suggestion() {

    const [suggestions, setSuggestions] = useState([])

    const [limitUsers, setLimitUsers] = useState(5)

    const slice = suggestions.slice(0, limitUsers)

    useEffect(() => {
        fetch(`https://api.github.com/users/gabrieldiasss/followers`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                setSuggestions(result)
            })

            .catch((err) => {
                throw new Error(err)
            })

    }, [])



    return (
        <div className="container-suggestion">
            <div className="header-suggestion" >
                <img src={`https://s2.glbimg.com/QqEDyJyWVPTI9tU-5izKpJls6UE=/620x520/smart/e.glbimg.com/og/ed/f/original/2020/11/30/baby-yoda.jpg`} />

                <div className="user-infos-suggestion" >

                    <div className="infos" >
                        <span>BabYoda</span>
                        <p>Mini Yoda</p>
                    </div>

                    <button className="switch" >Mudar</button>

                </div>
            </div>

            <div className="header-main-suggestion" >

                <p>Sugestões para você</p>

                <span>Ver tudo</span>

            </div>

            {/* <div className="user-suggestion" >

                {slice.map((suggestion, key) => (
                     <div className="infos-suggestion" key={key}>
                        <img src={`https://github.com/${suggestion.login}.png`} />
    
                        <div className="info-suggestion" >
                            <span>{suggestion.login}</span>
                            <p>Seguido por senai.suico</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>
                ))}
               

            </div> */}

            <div className="user-suggestion" >


                <div className="infos-suggestion">
                    <img src={Perfil_1} />

                    <div className="info-suggestion" >
                        <span>Mario Bros</span>
                        <p>Seguido por senai.suico</p>
                    </div>

                    <button className='follow' >Seguir</button>
                </div>

                <div className="infos-suggestion">
                    <img src={Perfil_2} />

                    <div className="info-suggestion" >
                        <span>Saint Seya</span>
                        <p>Seguido por senai.suico</p>
                    </div>

                    <button className='follow' >Seguir</button>
                </div>

                <div className="infos-suggestion">
                    <img src={Perfil_3} />

                    <div className="info-suggestion" >
                        <span>Chimbinha</span>
                        <p>Seguido por senai.suico</p>
                    </div>

                    <button className='follow' >Seguir</button>
                </div>

                <div className="infos-suggestion">
                    <img src={Perfil_4} />

                    <div className="info-suggestion" >
                        <span>Mc Poze</span>
                        <p>Seguido por senai.suico</p>
                    </div>

                    <button className='follow' >Seguir</button>
                </div>

                <div className="infos-suggestion">
                    <img src={Perfil_5} />

                    <div className="info-suggestion" >
                        <span>Comandante Hamilton</span>
                        <p>Seguido por senai.suico</p>
                    </div>

                    <button className='follow' >Seguir</button>
                </div>



            </div>

            {/* ------------------------------------------------------------------------------ */}

            <footer className="footer-suggestion" >
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                <p>&copy; 2022 INSTACLONE FROM SENAI</p>

            </footer>
        </div>
    )
}