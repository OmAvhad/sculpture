import React from 'react'
import { useContext } from 'react'
import { HouseContext } from '../context/HouseContext'

function SizePicker() {
    const {houseObject, setHouseObject} = useContext(HouseContext); // Initial color
    return (
        <div className='flex flex-col'>
            <input type="number" id='width' value={houseObject.width} onChange={(event) => setHouseObject({...houseObject, width: parseInt(event.target.value)})}/>
            <input type="number" id='height' value={houseObject.height} onChange={(event) => setHouseObject({...houseObject, height: parseInt(event.target.value)})}/>
            <input type="number" id='depth' value={houseObject.depth} onChange={(event) => setHouseObject({...houseObject, depth: parseInt(event.target.value)})}/>
        </div>
    )
}

export default SizePicker
