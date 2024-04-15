import React from 'react';

const AppointmentList = ({ appointments }) => {
  return (
    <div>
      <h2>Lista de Citas</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {appointment.name}, <strong>Fecha:</strong> {appointment.date}, <strong>Hora:</strong> {appointment.time}, <strong>Profesión:</strong> {appointment.profession}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
