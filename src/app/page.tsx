// page.tsx

import React from 'react';


const Page: React.FC = () => {
  const estiloDoTitulo = {
    fontFamily: 'sans flex', // Substitua 'Bakersville' pela fonte desejada
    fontSize: '36px', // Tamanho da fonte, ajuste conforme necessário
    fontWeight: 'bold', // Peso da fonte, ajuste conforme necessário
   
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
