import React from 'react';
import { Link } from 'react-router-dom';
import './First.scss';



const First = () =>{
    return(
        <>
    <div className="container">
      <div className="head">
        <div className="logo">
            <Link to="/" href="/"><img src="https://image.nametests.com/img/landing_redirect/logo.png" alt="Logo"/></Link>
        </div>
      </div>
      <div className="bod">
        <div className="text">
            <Link><p>Please <span className="ref">click</span> here and play our new <span className="pink">Nametests</span> <span className="piruz">Instant Game</span>, have fun</p></Link>
        </div>
        <div className="btn">
          <Link to="/fb" href="/fb">Play now</Link>
        </div>
        <div className="image">
            <img src="https://image.nametests.com/img/landing_redirect/image.jpg" alt="photo"/>
        </div>
      </div>
    </div>
        </>
    )
}

export default First;