import React, { useState } from 'react';
import './styles.css';
import Carousel from './Carousel'; 
import Header from './components/Header';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import AppointmentScheduler from './AppointmentScheduler';
import AvailabilityIndicator from './AvailabilityIndicator';
import isAvailable from './isAvailable'; // Importamos el archivo de disponibilidad
import ProfessionSelector from './components/ProfessionSelector'; // Importamos el componente ProfessionSelector

function App() {
  const [appointments, setAppointments] = useState([]);
  const [selectedProfession, setSelectedProfession] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]); // Estado para los horarios disponibles

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

  const carouselImages = [
    'mecanico.jpg',
    'medicos.jpg',
    'abogados.jpg',
  ];

  return (
    <div>
      <Carousel images={carouselImages} />
      <Header />
      <ProfessionSelector onSelect={handleProfessionSelect} />
      <AppointmentScheduler availableTimes={availableTimes} onUpdateAvailableTimes={handleUpdateAvailableTimes} />
      <AppointmentForm onSubmit={handleAddAppointment} selectedProfession={selectedProfession} appointments={appointments} /> {/* Aquí pasamos las citas existentes al componente AppointmentForm */}
      <AppointmentList appointments={appointments} />
      {/* Mostrar indicador de disponibilidad basado en la profesión seleccionada */}
      <AvailabilityIndicator isAvailable={isAvailable[selectedProfession]} />
    </div>
  );
}

export default App;
