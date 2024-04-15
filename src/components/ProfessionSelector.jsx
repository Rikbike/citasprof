import React, { useState } from 'react';

const ProfessionSelector = ({ onSelect }) => {
  const [selectedProfession, setSelectedProfession] = useState('');

  const handleChange = (event) => {
    setSelectedProfession(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div>
      <label htmlFor="profession">Selecciona un Profesionista:</label>
      <select id="profession" value={selectedProfession} onChange={handleChange}>
        <option value="">-- Selecciona --</option>
        <option value="Médico">Médico</option>
        <option value="Psicologo">Psicólogo</option>
        <option value="Abogado">Abogado</option>
        <option value="Mecanico">Mecanico</option>
        <option value="Diseñador">Diseñador</option>
        <option value="Arquitecto">Arquitecto</option>
        <option value="Programador">Programador</option>
        <option value="Ilustrador">Ilustrador</option>
        
      </select>
    </div>
  );
}

export default ProfessionSelector;
