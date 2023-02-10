import React from 'react'
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function Temperature() {
  return (
    <div>
      {/* Title */}
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>moln</p>
      </div>
        {/* icon */}
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src="http://openweathermap.org/img/wn/01d@2x.png" 
        alt=""
        className='w-20'
        />
        <p className='text-5xl' >5°</p>
        {/* right objekt list */}
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
          <UilTemperature size={18} className="mr-1" />
          Real Feel:
          <span className='font-medium ml-1'>5°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
          <UilTear size={18} className="mr-1" />
          Humidity:
          <span className='font-medium ml-1'>45%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
          <UilWind size={18} className="mr-1" />
          Wind:
          <span className='font-medium ml-1'>5 km/h</span>
          </div>
        </div>       
      </div>

      {/* Bottom */}
<div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
<UilSun />
        <p className="font-light">
          Rise:{"5555 "}
          <span className="font-medium ml-1">
           
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Set:{" 5050"}
          <span className="font-medium ml-1">
           
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          High:{" 4"}
          <span className="font-medium ml-1">{`°`}</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          Low:{" 5"}
          <span className="font-medium ml-1">{`°`}</span>
        </p>
</div>

    </div>
  )
}

export default Temperature