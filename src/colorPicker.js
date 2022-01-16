import React from "react";



const ColorPicker = ({value, onChange, ...rest}) => {
    return (

    <span>
        <input type='color' onChange={onChange} value={value} {...rest}/>
        <input type='text' value={value} onChange={onChange} {...rest}/>
    </span>
    )
}

export default ColorPicker;