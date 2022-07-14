import React from 'react';
import Navbar from './componentes/Navbar';
import Main from './componentes/Main';
import Footer from './componentes/Footer';
import Botonwhatsapp from './componentes/Botonwhatsapp';
import Formulario from './componentes/Formulario';
import { Routes, Route } from 'react-router-dom';
import MostrarImagenes from './componentes/MostrarImagenes';


function App() {
  return (
    <div className='App'>
      
       <Routes>
               <Route path="/" element={<Navbar />} />  
       </Routes>
    
       <Routes>
               <Route path="/" element={<Main />} />
               <Route path="/formulario" element={<Formulario />} />
               <Route path="/imagen/:id" element={<MostrarImagenes />} />
               
       </Routes>
               <Botonwhatsapp />
               <Footer />
    </div>
  );
};
export default App;