import VehicleCard from './VehicleCard'

export default function VehicleGrid() {
  return (
    <div className="mx-auto max-w-2xl px-4 md:pt-20 py-12 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
      <p className={`text-md text-yellow-500 mb-2`}>
        Recent Works
      </p>

      <div className="mt-8 lg:mt-12 grid grid-cols-1 gap-x-6 gap-y-10 pb-8 sm:grid-cols-2 xl:gap-x-8">
        {[1,2,3,4,5,6,7,8].map((item) => (
         <div key={item}>
          <VehicleCard />
         </div>
        ))}
      </div>
      
    </div>
  )
}
