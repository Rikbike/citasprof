import React, { useState } from 'react';
import Header from './components/Header'
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import AppointmentScheduler from './AppointmentScheduler';
import AvailabilityIndicator from './AvailabilityIndicator';
import isAvailable from './isAvailable';
import ProfessionSelector from './components/ProfessionSelector';
import CarouselComponent from './Carousel';
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [selectedProfession, setSelectedProfession] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);

  const handleAddAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  const handleProfessionSelect = (profession) => {
    setSelectedProfession(profession);
    // Aquí podrías cargar los horarios disponibles para la profesión seleccionada
    // Por ejemplo, haciendo una llamada a una API
    // Luego, actualizarías los horarios disponibles llamando a setAvailableTimes con los nuevos datos
  };

  const handleUpdateAvailableTimes = (updatedTimes) => {
    setAvailableTimes(updatedTimes);
  };

  return (
    <div>
      <CarouselComponent/>
      <Header />
      <ProfessionSelector onSelect={handleProfessionSelect} />
      <AppointmentScheduler availableTimes={availableTimes} onUpdateAvailableTimes={handleUpdateAvailableTimes} />
      <AppointmentForm onSubmit={handleAddAppointment} selectedProfession={selectedProfession} appointments={appointments} />
      <AppointmentList appointments={appointments} />
      <AvailabilityIndicator isAvailable={isAvailable[selectedProfession]} />
    </div>
  );
}

export default App;
