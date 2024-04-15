import React, { useState } from 'react';
import './styles.css';
import Carousel from './Carousel'; // Importa el componente Carousel
import Header from './components/Header';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import ProfessionSelector from './components/ProfessionSelector';

function App() {
  const [appointments, setAppointments] = useState([]);
  const [selectedProfession, setSelectedProfession] = useState('');

  const handleAddAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  const handleProfessionSelect = (profession) => {
    setSelectedProfession(profession);
  };

  
  const carouselImages = [
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/400',
  ];

  return (
    <div>
      <Carousel images={carouselImages} />
      <Header />
      <ProfessionSelector onSelect={handleProfessionSelect} />
      <AppointmentForm onSubmit={handleAddAppointment} selectedProfession={selectedProfession} />
      <AppointmentList appointments={appointments} />
    </div>
  );
}

export default App;
