// components/AppointmentForm.jsx
import React, { useState, useEffect } from 'react';

const AppointmentForm = ({ onSubmit, selectedProfession, handleAddAppointment }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]); // Definir el estado availableTimes

  const fetchAvailableTimes = async (selectedDate) => {
    try {
      // Simulación de horas disponibles
      const availableTimes = ['09:00', '10:00', '11:00', '12:00', '13:00']; // Puedes obtener estas horas del servidor
      return availableTimes;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  };

  // Función para manejar la selección de la fecha
  const handleDateChange = async (e) => {
    const selectedDate = e.target.value;
    const fetchedAvailableTimes = await fetchAvailableTimes(selectedDate); // Obtener las horas disponibles
    setAvailableTimes(fetchedAvailableTimes);
    setDate(selectedDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddAppointment({ name, date, time, profession: selectedProfession });
    // Limpia el formulario
    setName('');
    setTime('');
  };

  useEffect(() => {
  }, []); 

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
      />
      <select
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="">Selecciona una hora</option>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      <button type="submit">Reservar cita</button>
      <p>Profesión seleccionada: {selectedProfession}</p> {/* Imprimir la profesión seleccionada */}
    </form>
  );
};

export default AppointmentForm;