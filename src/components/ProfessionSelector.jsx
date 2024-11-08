// components/ProfessionSelector.js
import React from 'react';

const ProfessionSelector = ({ selectedProfession, setSelectedProfession, onSelect }) => {
  const handleChange = (event) => {
    const selectedItem = event.target.value;
    setSelectedProfession(selectedItem);
    if (onSelect) {
      onSelect(selectedItem);
    }
  };

  return (
    <select value={selectedProfession} onChange={handleChange}>
      <option value="">Selecciona una profesión</option>
      <option value="doctor">Médico</option>
      <option value="lawyer">Abogado</option>
      <option value="mechanic">Mecánico</option>
    </select>
  );
};

export default ProfessionSelector;