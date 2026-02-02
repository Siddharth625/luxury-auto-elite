import React from 'react'
import CarCard from './CarCard'

export default function CarGrid({ cars, selectedCars, onToggleSelection }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cars.map(car => (
        <CarCard
          key={car.id}
          car={car}
          isSelected={selectedCars.includes(car.id)}
          onToggle={() => onToggleSelection(car.id)}
        />
      ))}
    </div>
  )
}