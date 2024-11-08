// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import AvailabilityIndicator from './AvailabilityIndicator';
import ProfessionSelector from './components/ProfessionSelector';
import CarouselComponent from './Carousel';
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [selectedProfession, setSelectedProfession] = useState('');

  const handleAddAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  const handleSelect = (selectedItem) => {
    setSelectedProfession(selectedItem);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulario enviado');
  };

  return (
    <div>
      <Header />
      <ProfessionSelector 
        selectedProfession={selectedProfession} 
        setSelectedProfession={setSelectedProfession} 
        onSelect={handleSelect} 
      />
      <AppointmentForm 
        handleAddAppointment={handleAddAppointment} 
        onSubmit={handleSubmit} 
        selectedProfession={selectedProfession} // Pasar la profesión seleccionada
      />
      <AppointmentList appointments={appointments} />
      <AvailabilityIndicator isAvailable={true} />
      <CarouselComponent />
    </div>
  );
}

export default App;