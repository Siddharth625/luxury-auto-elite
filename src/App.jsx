import React, { useState } from 'react'
import CarGrid from './components/CarGrid'
import ComparisonTable from './components/ComparisonTable'

export default function App() {
  const [selectedCars, setSelectedCars] = useState([])
  const [comparisonMetrics, setComparisonMetrics] = useState(['price'])

  const cars = [
    {
      id: 1,
      name: 'Ferrari 812 Competizione',
      brand: 'Ferrari',
      price: '$525,000',
      priceNumeric: 525000,
      speed: 340,
      mileage: 12,
      acceleration: 2.9,
      image: 'https://picsum.photos/400/300?random=1',
      features: ['V12 Engine', '8-Speed Manual', 'Carbon Fiber Body', 'Advanced Aerodynamics'],
      horsepower: 819,
      year: 2024
    },
    {
      id: 2,
      name: 'Lamborghini Revuelto',
      brand: 'Lamborghini',
      price: '$645,000',
      priceNumeric: 645000,
      speed: 370,
      mileage: 10,
      acceleration: 2.5,
      image: 'https://picsum.photos/400/300?random=2',
      features: ['Hybrid Powertrain', 'V12 + Electric', 'Futuristic Design', 'AI Assistant'],
      horsepower: 1001,
      year: 2024
    },
    {
      id: 3,
      name: 'Bugatti Bolide',
      brand: 'Bugatti',
      price: '$5,200,000',
      priceNumeric: 5200000,
      speed: 531,
      mileage: 8,
      acceleration: 2.17,
      image: 'https://picsum.photos/400/300?random=3',
      features: ['16-Cylinder Engine', 'Quad-Turbo', 'Lightest Design', 'Track Focused'],
      horsepower: 1850,
      year: 2024
    },
    {
      id: 4,
      name: 'Porsche 911 Turbo S',
      brand: 'Porsche',
      price: '$220,000',
      priceNumeric: 220000,
      speed: 330,
      mileage: 18,
      acceleration: 2.7,
      image: 'https://picsum.photos/400/300?random=4',
      features: ['Twin-Turbo Flat-6', 'All-Wheel Drive', 'Ceramic Brakes', 'Advanced Suspension'],
      horsepower: 645,
      year: 2024
    },
    {
      id: 5,
      name: 'Mercedes-AMG One',
      brand: 'Mercedes-AMG',
      price: '$1,450,000',
      priceNumeric: 1450000,
      speed: 355,
      mileage: 6,
      acceleration: 2.73,
      image: 'https://picsum.photos/400/300?random=5',
      features: ['Hybrid F1 Engine', 'DRS System', 'Extreme Lightness', 'Unique Design'],
      horsepower: 1063,
      year: 2024
    },
    {
      id: 6,
      name: 'Rolls-Royce Ghost Black Badge',
      brand: 'Rolls-Royce',
      price: '$320,000',
      priceNumeric: 320000,
      speed: 250,
      mileage: 12,
      acceleration: 4.6,
      image: 'https://picsum.photos/400/300?random=6',
      features: ['Twin-Turbo V12', 'Bespoke Interior', 'Luxury Crafted', 'Iconic Grille'],
      horsepower: 563,
      year: 2024
    },
    {
      id: 7,
      name: 'Aston Martin Valkyrie',
      brand: 'Aston Martin',
      price: '$3,200,000',
      priceNumeric: 3200000,
      speed: 402,
      mileage: 7,
      acceleration: 2.5,
      image: 'https://picsum.photos/400/300?random=7',
      features: ['V12 Hybrid', 'F1 Inspired', 'Extreme Downforce', 'Mid-Engine'],
      horsepower: 1160,
      year: 2024
    },
    {
      id: 8,
      name: 'McLaren 765LT',
      brand: 'McLaren',
      price: '$405,000',
      priceNumeric: 405000,
      speed: 360,
      mileage: 13,
      acceleration: 2.8,
      image: 'https://picsum.photos/400/300?random=8',
      features: ['Twin-Turbo V8', 'Lightweight Carbon', 'Advanced Aerodynamics', 'Track Ready'],
      horsepower: 765,
      year: 2024
    }
  ]

  const toggleCarSelection = (carId) => {
    setSelectedCars(prev =>
      prev.includes(carId)
        ? prev.filter(id => id !== carId)
        : [...prev, carId]
    )
  }

  const toggleMetric = (metric) => {
    setComparisonMetrics(prev =>
      prev.includes(metric)
        ? prev.filter(m => m !== metric)
        : [...prev, metric]
    )
  }

  const selectedCarObjects = cars.filter(car => selectedCars.includes(car.id))

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Luxury Car Comparison</h1>
              <p className="text-slate-600 mt-2">Explore and compare the world's finest automobiles</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-600">
                {selectedCars.length > 0 ? (
                  <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full font-medium">
                    {selectedCars.length} {selectedCars.length === 1 ? 'car' : 'cars'} selected
                  </span>
                ) : (
                  <span className="text-slate-500">Select cars to compare</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Car Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Luxury Cars</h2>
          <CarGrid
            cars={cars}
            selectedCars={selectedCars}
            onToggleSelection={toggleCarSelection}
          />
        </section>

        {/* Comparison Section */}
        {selectedCars.length > 0 && (
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Compare Selected Cars</h2>
              
              {/* Metric Toggles */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-slate-700 mb-4">Comparison Metrics:</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: 'price', label: 'Price', icon: '💰' },
                    { id: 'speed', label: 'Top Speed', icon: '⚡' },
                    { id: 'mileage', label: 'Mileage (MPG)', icon: '⛽' },
                    { id: 'acceleration', label: 'Acceleration (0-60)', icon: '🏁' }
                  ].map(metric => (
                    <button
                      key={metric.id}
                      onClick={() => toggleMetric(metric.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        comparisonMetrics.includes(metric.id)
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {metric.icon} {metric.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Comparison Table */}
              <ComparisonTable
                cars={selectedCarObjects}
                metrics={comparisonMetrics}
              />
            </div>
          </section>
        )}

        {/* Empty State */}
        {selectedCars.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🚗</div>
            <p className="text-slate-600 text-lg">Select luxury cars to begin comparison</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-100 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400">© 2024 Luxury Car Comparison. Explore automotive excellence.</p>
        </div>
      </footer>
    </div>
  )
}