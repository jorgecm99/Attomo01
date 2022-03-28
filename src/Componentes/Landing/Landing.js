import React from 'react';
import './Landing.css'
import Matches from './Matches/Matches';

var sectionPic = require('../../Assets/Images/section.png');
var logoBstadium = require('../../Assets/Icons/bstadium.png');
var sectionGrande = require('../../Assets/Images/grande.png');
var tickets = require('../../Assets/Icons/tickets.png');
var coins = require('../../Assets/Icons/coins.png');
var seats = require('../../Assets/Icons/Group69.png');
var bufblanca = require('../../Assets/Icons/bufblanca.png');



const Landing = () => {
  return (
    <section>
       <div className='imagen-principal'>
         <div>
         <div className='text-one'>
           <p className='text-mayus white'>entradas de partidos</p>
         </div>

         <div className='text-two'>
            <p className='text-mayus-two white'>bufanda <span className='gratis'>gratis</span> con tu entrada</p>
            <div className='oferta'>
              <img className='bufblanca' src={bufblanca} alt=''></img>
              <p className='white'>Oferta disponible sólo hoy</p>
            </div>       
            <p className='new-date'>24/03/2022</p>
         </div> 

         </div>
         
         <img className='section-pic' src={sectionPic} alt=''></img>

         <div className='logo-pic-section'>
          <img className='logo-pic' src={logoBstadium} alt=''></img>
         </div>
            
       </div> 




       <div className='imagen-principal-desktop'>
         <div>
         <div className='text-one'>
           <p className='text-mayus white'>entradas de partidos</p>
         </div>

         <div className='text-two'>
            <p className='text-mayus-two white'>bufanda <span className='gratis'>gratis</span> con tu entrada</p>
            <div className='oferta'>
              <img className='bufblanca' src={bufblanca} alt=''></img>
              <p className='white'>Oferta disponible sólo hoy</p>
            </div>       
            <p className='new-date'>24/03/2022</p>
         </div> 

         </div>
         
         <img className='section-pic-desktop' src={sectionGrande} alt=''></img>

         <div className='logo-pic-section'>
          <img className='logo-pic' src={logoBstadium} alt=''></img>
         </div>
            
       </div> 




       <div className='container-par-main'>
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