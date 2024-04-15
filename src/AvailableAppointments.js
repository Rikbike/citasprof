import React from 'react';

const AvailableAppointments = ({ appointments }) => {
  return (
    <div>
      <h2>Available Appointments</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            <strong>Name:</strong> {appointment.name}, <strong>Date:</strong> {appointment.date}, <strong>Time:</strong> {appointment.time}, <strong>Profession:</strong> {appointment.profession}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableAppointments;
