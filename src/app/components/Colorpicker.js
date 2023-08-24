'use client'

import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { useContext } from 'react';
import { HouseContext } from '../context/HouseContext';


const ColorPicker = () => {
    const {houseObject, setHouseObject} = useContext(HouseContext); // Initial color

    const handleChange = (newColor) => {
        setHouseObject({
            ...houseObject,
            color: newColor.hex   
        });
    };

    return (
        <div>
            <ChromePicker color={houseObject.color} onChange={handleChange} />
        </div>
    );
};

export default ColorPicker;
