import React from 'react'

export default function ComparisonTable({ cars, metrics }) {
  const getMetricValue = (car, metric) => {
    switch (metric) {
      case 'price':
        return car.price
      case 'speed':
        return `${car.speed} mph`
      case 'mileage':
        return `${car.mileage} MPG`
      case 'acceleration':
        return `${car.acceleration}s`
      default:
        return 'N/A'
    }
  }

  const getMetricLabel = (metric) => {
    const labels = {
      price: 'Price',
      speed: 'Top Speed',
      mileage: 'Mileage (MPG)',
      acceleration: 'Acceleration (0-60s)'
    }
    return labels[metric] || metric
  }

  const getMetricColor = (metric, car, allCars) => {
    if (!['speed', 'mileage', 'acceleration'].includes(metric)) return ''

    const values = allCars.map(c => {
      if (metric === 'speed') return c.speed
      if (metric === 'mileage') return c.mileage
      if (metric === 'acceleration') return c.acceleration
      return 0
    })

    const carValue = metric === 'speed' ? car.speed : metric === 'mileage' ? car.mileage : car.acceleration
    const maxValue = Math.max(...values)
    const minValue = Math.min(...values)

    // For acceleration, lower is better (0-60)
    // For speed and mileage, higher is better
    const isBetter = metric === 'acceleration' ? carValue === minValue : carValue === maxValue

    if (isBetter) {
      return 'bg-green-50 border-l-4 border-green-500'
    }
    return ''
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-slate-200">
            <th className="text-left py-4 px-4 font-bold text-slate-900 sticky left-0 bg-white w-48">
              Metric
            </th>
            {cars.map(car => (
              <th
                key={car.id}
                className="py-4 px-4 text-center font-bold text-slate-900 min-w-48"
              >
                <div className="font-bold text-slate-900">{car.name}</div>
                <div className="text-xs text-slate-500 font-normal">{car.brand}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {metrics.map(metric => (
            <tr key={metric} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="py-4 px-4 font-semibold text-slate-900 sticky left-0 bg-white/95">
                {getMetricLabel(metric)}
              </td>
              {cars.map(car => (
                <td
                  key={`${car.id}-${metric}`}
                  className={`py-4 px-4 text-center font-semibold text-slate-900 ${getMetricColor(
                    metric,
                    car,
                    cars
                  )}`}
                >
                  {getMetricValue(car, metric)}
                </td>
              ))}
            </tr>
          ))}

          {/* All Features Row */}
          <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
            <td className="py-4 px-4 font-semibold text-slate-900 sticky left-0 bg-white/95">
              Key Features
            </td>
            {cars.map(car => (
              <td key={car.id} className="py-4 px-4">
                <div className="flex flex-wrap gap-1 justify-center">
                  {car.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-100 text-blue-900 px-2 py-1 rounded-md font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </td>
            ))}
          </tr>

          {/* Horsepower Row */}
          <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
            <td className="py-4 px-4 font-semibold text-slate-900 sticky left-0 bg-white/95">
              Horsepower
            </td>
            {cars.map(car => (
              <td
                key={car.id}
                className={`py-4 px-4 text-center font-semibold text-slate-900 ${
                  car.horsepower === Math.max(...cars.map(c => c.horsepower))
                    ? 'bg-amber-50 border-l-4 border-amber-500'
                    : ''
                }`}
              >
                {car.horsepower} HP
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}