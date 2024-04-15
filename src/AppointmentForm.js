import React, { useState } from 'react';

const AppointmentForm = ({ onSubmit, selectedProfession, appointments }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si la hora ya está ocupada para el profesionista seleccionado
    const isTimeOccupied = appointments.some(appointment =>
      appointment.date === date && appointment.time === time && appointment.profession === selectedProfession
    );

    if (isTimeOccupied) {
      alert('La hora seleccionada ya está ocupada para este profesionista. Por favor, elija otra hora.');
      return;
    }

    // Si la hora no está ocupada, enviar la cita al padre
    onSubmit({ name, date, time, profession: selectedProfession });
    
    // Limpiar el formulario
    setName('');
    setDate('');
    setTime('');
  };

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
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default AppointmentForm;
