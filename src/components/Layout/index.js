import React from 'react';
import './style.css'

import { Story } from '../Story'
import { Post } from '../Post'
import { Suggestion } from '../Suggestion'

import Usuario from '../../assets/img/yoda1.webp';
import Usuario_2 from '../../assets/img/silhueta.png';
import Usuario_3 from '../../assets/img/news.webp';
import Usuario_4 from '../../assets/img/bart.jpg';
import Usuario_5 from '../../assets/img/robo.webp';
import Usuario_6 from '../../assets/img/pao.jpg';

import Imagem from '../../assets/img/yoda2.jpeg';
import Imagem_2 from '../../assets/img/dianho.jfif';
import Imagem_3 from '../../assets/img/f40.jpg';
import Imagem_4 from '../../assets/img/doutor.webp';
import Imagem_5 from '../../assets/img/taubate.jpg';
import Imagem_6 from '../../assets/img/academia.webp';






export function Layout() {

    return (
        <>

            <div className="MainGrid" >

                <div className="first-column" style={{gridArea: "firstColumn"}}>
                    <div className="box" >
                        <Story />
                    </div>

                    
                    
                    <div className="box" style={{margin: "30px 0"}} >
                        <Post  Username='BabYoda' User={ Usuario } Post={ Imagem } Comentario='Iti Malia  😍😍😍😍😍' Likes='61 curtidas' Tempo='HÁ 1 HORA' Visual='Visualizar todos os 300 comentários'/>
                    </div>

                    <div className="box" style={{margin: "30px 0"}} >
                        <Post Username='dianhooficial' User={ Usuario_4} Post={ Imagem_2 } Comentario='Olá Rapazesss...! 📸❤️ #aranha #amoanimais #aranhagrande' Likes=' curtido por 152.253 pessoas' Tempo='HÁ 2 HORAS'  Visual='Ver todos os 215 comentários'/>
                    </div>

                    <div className="box" style={{margin: "30px 0"}} >
                        <Post Username='Enzo_Ferrari' User={ Usuario_5} Post={ Imagem_3 } Comentario='Mamma Mia! Che bella machina! #LOVECARS #carrito #Fancy' Likes='curtido por 1.253 pessoas' Tempo='HÁ 3 DIAS' Visual='Ver todos os 20 comentários' />
                    </div>

                    <div className="box" style={{margin: "30px 0"}} >
                        <Post Username='marvel_fans' User={ Usuario_2} Post={ Imagem_4 } Comentario=" Can't wait to watch Doctor Strange movie!! Are you guys excited?? ❤️ #Marvel #DoctorStrange #WandaVision #marvelmovies" Likes='curtido por Mister_0fficial e 1,276,753 pessoas' Tempo='ABRIL 10, 2022'  Visual='Ver todos os 1.500 comentários'/>
                    </div>

                    <div className="box" style={{margin: "30px 0"}} >
                        <Post Username='rede_noticias' User={ Usuario_3 } Post={ Imagem_5 } Comentario='😮😮😮😮 Quem também desconfiava? #FOFOCA #gravidanoticia #reportagem #tvnews #gazetahoje' Likes='curtido por 3.276 pessoas' Tempo='HÁ 45 MINUTOS ATRÁS'  Visual='Ver todos os 2.000 comentários'/>
                    </div>
                    
                    <div className="box" style={{margin: "30px 0"}} >
                        <Post Username='jordy_dias' User={ Usuario_6} Post={ Imagem_6 } Comentario='Coração quebrado shape fibrado!! Hoje tá pago hein hahaha 🤪🤪 #FIBRA #WheyProtein #Fitness #ForcadeVontade #VidaAcademia ' Likes='curtido por 380 pessoas' Tempo='HÁ 2 HORAS ATRÁS'  Visual='Ver todos os 150 comentários'/>
                    </div>
                </div>
               

                <div style={{ gridArea: "secondColumn" }} >
                    <div className="suggestionBox" >
                        <Suggestion />
                    </div>
                </div>

            </div>
            
        </>
    )

}