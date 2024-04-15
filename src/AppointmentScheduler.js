import React, { useState } from 'react';

const AppointmentScheduler = ({ availableTimes, onUpdateAvailableTimes }) => {
  const [selectedTime, setSelectedTime] = useState('');
  const [isValidTime, setIsValidTime] = useState(true); // Inicialmente asumimos que el horario es válido

  const handleTimeChange = (e) => {
    const selected = e.target.value;
    setSelectedTime(selected);
    setIsValidTime(availableTimes.includes(selected));
  };

  const reserveAppointment = () => {
    // Aquí puedes agregar la lógica para reservar la cita, como enviar los datos al servidor
    console.log('Cita reservada para:', selectedTime);
    // Actualiza los horarios disponibles para evitar que se programe otra cita en el mismo horario
    const updatedAvailableTimes = availableTimes.filter(time => time !== selectedTime);
    // Actualiza el estado con los horarios actualizados
    onUpdateAvailableTimes(updatedAvailableTimes);
  };

  return (
    <div>
      <h2>Selecciona un horario de cita:</h2>
      <select value={selectedTime} onChange={handleTimeChange}>
        <option value="">-- Selecciona --</option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      </select>
      {isValidTime ? (
        <div>
          <p>Este horario está disponible para reservar.</p>
          <button onClick={reserveAppointment}>Reservar cita</button>
        </div>
      ) : (
        <p>Este horario no está disponible.</p>
      )}
    </div>
  );
};

export default AppointmentScheduler;
