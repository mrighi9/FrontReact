// page.tsx

import React from 'react';


const Page: React.FC = () => {
  const estiloDoTitulo = {
    fontFamily: 'sans flex',
    fontSize: '36px', 
    fontWeight: 'bold', 
   
    color: 'white', // Cor do texto
    display: 'grid',
    placeItems: 'beggining',
    
  };
  return (
    <div className="page-container">
         <h1 style={estiloDoTitulo}>Reserva e cadastro de Quartos</h1>

    </div>
  );
};

export default Page;
