import React from 'react';
import CardComponent from './CardComponent';

const CardList = ({ cards }) => {
  return (
     <div style={{ maxHeight: '80vh', overflowY: 'auto', padding: '1rem' }}>
       {cards.map((card, index) => (
         <CardComponent 
           key={index} 
           logo={card.logo} 
           nombre={card.nombre} 
           habilidades={card.habilidades} 
           empresa={card.empresa} 
           lugar={card.lugar} 
           salario={card.salario} 
           vacantes={card.vacantes} 
           actualizado={card.actualizado} 
           beneficios={card.beneficios} 
         />
       ))}
     </div>
  );
 }; 

export default CardList;