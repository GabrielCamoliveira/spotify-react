import React from "react";
import "./Playlists.css";
import card1 from '../assets/playlist/1.jpeg';
import card2 from '../assets/playlist/2.jpeg';
import card3 from '../assets/playlist/3.jpeg';
import card4 from '../assets/playlist/4.jpeg';
import card5 from '../assets/playlist/5.jpeg';
import card6 from '../assets/playlist/6.jpeg';
import card7 from '../assets/playlist/7.jpeg';
import card8 from '../assets/playlist/8.jpeg';
import card9 from '../assets/playlist/9.jpeg';
import card10 from '../assets/playlist/10.jpeg';
import card11 from '../assets/playlist/11.jpeg';
import card12 from '../assets/playlist/12.jpeg';
import card13 from '../assets/playlist/13.jpeg';
import card14 from '../assets/playlist/14.jpeg';
import card15 from '../assets/playlist/15.jpeg';
import card16 from '../assets/playlist/16.jpeg';

const Playlists = () => {
    return (
        <div className="playlist-container">
                <div id="result-playlists">
                    <div className="playlist">
                        <h1 id="greeting">Boas Vindas</h1>
                        <h2 className="greeting-subtitle">Navegar por todas as seções</h2>
                    </div>

                    <div className="offer_scroll-container">
                        <div className="offer_list">
                            <section className="offer_list-item">
        
                                <a href="" className="cards">
                                    <div className="cards 1">
                                        <img src={card1} alt=""/>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards 2">
                                        <img src={card2} alt=""/>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards 3">
                                        <img src={card3} alt=""/>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards 4">
                                        <img src={card4} alt=""/>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards 5">
                                        <img src={card5} alt=""/>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards 6">
                                        <img src={card6} alt=""/>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards 7">
                                        <img src={card7} alt=""/>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards 8">
                                        <img src={card8} alt=""/>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards 9">
                                        <img src={card9} alt=""/>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards 10">
                                        <img src={card10} alt=""/>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards 11">
                                        <img src={card11} alt=""/>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards 12">
                                        <img src={card12} alt=""/>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards 13">
                                        <img src={card13} alt=""/>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards 14">
                                        <img src={card14} alt=""/>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards 15">
                                        <img src={card15} alt=""/>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards 16">
                                        <img src={card16} alt=""/>
                                    </div>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
                
            </div>
    )
};

export default Playlists;