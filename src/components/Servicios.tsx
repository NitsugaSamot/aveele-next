import React, { useState } from 'react';
import servicios from '../../services.json'; // Asegúrate de que esta ruta es correcta
import ServiceModal from './ModalServices'; // Importa tu componente modal

interface ServiceContent {
  introduction?: string;
  description: string;
  contact?: {
    title?: string;  
    text?: string;   
    extraServices?: string[];
  };
  typesOfTexts?: {
    title?: string;
    list?: string[];
  };
  tariffs?: {
    title?: string;
    text?: string;
  };
  corrections?: {
    title?: string;
    text?: string;
  };
  revisión?: {
    title?: string;
    text?: string;
  };
}


interface Service {
  name: string;
  content: ServiceContent;
}

const Servicios: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [currentService, setCurrentService] = useState<Service | null>(null);

  const showModal = (service: Service) => {
    setCurrentService(service);
    setVisible(true);
  };
  
  const closeModal = () => {
    setVisible(false);
  };

  return (
    <div className="servicios-container">
      <div className="image-servicios">
        <img className="logo-block" src="/img/22-asesoria-linguistica.jpg" alt="Servicios Lingüísticos" />
      </div>

      <div className="servicios-lista">
        {servicios.servicios.map((service, index) => (
          <div
            key={index}
            className="servicio-lista"
            onClick={(e) => {
              e.stopPropagation();
              showModal(service);
            }}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <p style={{ margin: 0 }}>{service.name}</p> 
          </div>
        ))}
      </div>

      {currentService && (
        <ServiceModal 
          visible={visible} 
          currentService={currentService} 
          closeModal={closeModal} 
        />
      )}
    </div>
  );
};

export default Servicios;
