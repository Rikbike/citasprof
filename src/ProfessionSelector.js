import React, { useState } from 'react';

const ProfessionSelector = ({ onSelect }) => {
  const [selectedProfession, setSelectedProfession] = useState('');
  
  // Definir los horarios disponibles por profesión
  const availableTimes = {
    Médico: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM'],
    Psicologo: ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM'],
    Abogado: ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM'],
    Mecanico: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM'],
    Diseñador: ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM'],
    Arquitecto: ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM'],
    Programador: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM'],
    Ilustrador: ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM'],
  };

  const handleChange = (event) => {
    const profession = event.target.value;
    setSelectedProfession(profession);
    onSelect(profession);
  };

  return (
    <div>
      <label htmlFor="profession">Selecciona un Profesionista:</label>
      <select id="profession" value={selectedProfession} onChange={handleChange}>
        <option value="">-- Selecciona --</option>
        {Object.keys(availableTimes).map((profession) => (
          <option key={profession} value={profession}>{profession}</option>
        ))}
      </select>
    </div>
  );
}

export default ProfessionSelector;
