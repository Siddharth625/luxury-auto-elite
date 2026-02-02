import React from 'react'

export default function CarCard({ car, isSelected, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className={`rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform ${
        isSelected
          ? 'ring-2 ring-blue-600 shadow-lg scale-105'
          : 'shadow-md hover:shadow-lg hover:scale-102'
      } bg-white`}
    >
      {/* Image Container */}
      <div className="relative h-48 bg-slate-200 overflow-hidden group">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {isSelected && (
          <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center">
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl">
              ✓
            </div>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-slate-900/80 text-white px-3 py-1 rounded-lg text-xs font-semibold">
          {car.brand}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="font-bold text-slate-900 text-lg mb-3">{car.name}</h3>

        {/* Price */}
        <div className="mb-4 pb-4 border-b border-slate-200">
          <p className="text-2xl font-bold text-blue-600">{car.price}</p>
          <p className="text-xs text-slate-500 mt-1">{car.year} Model</p>
        </div>

        {/* Key Specs */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600">Top Speed</span>
            <span className="font-semibold text-slate-900">{car.speed} mph</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600">Acceleration</span>
            <span className="font-semibold text-slate-900">{car.acceleration}s (0-60)</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600">Mileage</span>
            <span className="font-semibold text-slate-900">{car.mileage} MPG</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600">Horsepower</span>
            <span className="font-semibold text-slate-900">{car.horsepower} HP</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wide">Features</p>
          <div className="flex flex-wrap gap-1">
            {car.features.slice(0, 2).map((feature, idx) => (
              <span
                key={idx}
                className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
            {car.features.length > 2 && (
              <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                +{car.features.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Select Button */}
        <button
          className={`w-full py-2 rounded-lg font-semibold transition-all duration-200 ${
            isSelected
              ? 'bg-blue-600 text-white'
              : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
          }`}
        >
          {isSelected ? '✓ Selected' : 'Select Car'}
        </button>
      </div>
    </div>
  )
}