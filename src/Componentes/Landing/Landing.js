import React from 'react';
import './Landing.css'
import Matches from './Matches/Matches';

var sectionPic = require('../../Assets/Images/section.png');
var logoBstadium = require('../../Assets/Icons/bstadium.png');
var tickets = require('../../Assets/Icons/tickets.png');
var coins = require('../../Assets/Icons/coins.png');
var seats = require('../../Assets/Icons/Group69.png');



const Landing = () => {
  return (
    <section>
       <div className='imagen-principal'>
         <img className='section-pic' src={sectionPic} alt=''></img>
         <div className='logo-pic-section'>
          <img className='logo-pic' src={logoBstadium} alt=''></img>
         </div>
         
       </div> 

       <div>
         <div className='container-par'>
          <p><b>Confirmación inmediata de entradas y cupón regalo</b></p> 
          <img className='container-icon' src={tickets} alt=''></img>
         </div>

         <div className='container-par'>
           <p><b>Precios sin comisiones o gastos de gestión</b> (partners oficiales de los clubes)</p>
           <img className='container-icon' src={coins} alt=''></img>

         </div>

         <div className='container-par'>
           <p><b>Disponibilidad de los mejores asientos</b> juntos para parejas o grupos</p>
           <img className='container-seat' src={seats} alt=''></img>
         </div>
       </div>
       <Matches/>
      
    

    </section>
  )
}

export default Landing