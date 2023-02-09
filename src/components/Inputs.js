import React from 'react'
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs() {
  return (<>
  <div className="flex flex-row justify-center my-6">

    <div className="flex flex-row w-3/4 items-center justify-center space-x-4">

{/* Search */}
        <input 
        type="text" 
        placeholder="Search..." 
        className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize"   
        />

        {/* Icons */}
            <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-150"
          //onClick={handleSearchClick}
        />

            <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-150"
          //onClick={handleLocationClick}
        />
    </div>

{/* Celisus and farenhite */}
    <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-150"
          //onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-150"
          //onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>

  </div>
   
    </> )
}

export default Inputs