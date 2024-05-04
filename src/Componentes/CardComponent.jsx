import React, { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const CardComponent = ({ logo, nombre, habilidades, empresa, lugar, salario, vacantes, actualizado, beneficios }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
 
  return (
    <Card 
       style={{ 
         width: '100%', 
         marginBottom: '1rem', 
         borderRadius: '2px', 
         boxShadow: isHovered ? '0 4px 8px 0 rgba(0,0,0,0.2)' : 'none', 
         transition: 'box-shadow 0.3s ease' 
       }} 
       className="w-100 h-100"
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
    >
      <Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ alignSelf: 'center' }}>
          <img src={logo} alt="Logo de la empresa" style={{ width: '70px', height: '70px', borderRadius: '5px' }} />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', flex: '0 0 83.333333%', maxWidth: '83.333333%' }}>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <div class="mb-2 col">
            <a style={{ color: '#343a40', display: 'inline', display: 'flex' }}>
                <h2 style={{ fontWeight: 'bold', fontSize: '1.25rem', paddingLeft: '0.5rem', paddingRight: '0.5rem', marginBottom: '0', paddingBottom: '0' }}>{nombre}</h2>
                <ListGroup variant="flush" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', paddingLeft: '0.5rem', alignItems: 'center', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {Array.isArray(habilidades) && habilidades.map((habilidad, index) => (
                        <ListGroup.Item key={index} style={{
                          fontSize: '0.7em',
                          marginBottom: '0px',
                          marginRight: '3px',
                          border: '1px solid #343a40',
                          borderRadius: '40px',
                          color: '#343a40',
                          textTransform: 'capitalize',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textAlignLast: 'left',
                          display: 'inline-block',
                          padding: '0.1rem',
                          pointerEvents: 'none',
                          cursor: 'pointer',
                      }}>
                          {habilidad}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
              </a>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', fontSize: '0.9rem', paddingLeft: '', marginTop: '0.25rem', flexWrap: 'wrap', marginRight: '0' }}>
            <div style={{ textTransform: 'capitalize', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flexBasis: '0', flexGrow: '1', maxWidth: '100%', display: 'flex', flexDirection: 'row' }}>
                <p style={{ marginBottom: '0.5rem' }}>{empresa}</p>
                <p style={{ marginBottom: '0.5rem' }}>{lugar}</p>
                <p style={{ marginBottom: '0.5rem' }}>Salario: {salario}</p>
                <p style={{ marginBottom: '0.5rem' }}>Vacantes: {vacantes}</p>
                <p style={{ marginBottom: '0.5rem' }}>Actualizado: {actualizado}</p>
                <p style={{ marginBottom: '0.5rem' }}>Beneficios: {beneficios}</p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
 );
};

export default CardComponent;