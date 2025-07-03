import React from 'react';

export default function CardCheckbox({label,value,handleChange}) {


    return (

        <div className="flex items-center justify-center space-x-2">
            <label className="text-gray-700">{label}</label>
            <input
                type="checkbox"
                className="h-5 w-5 accent-[rgb(51,52,70)]"
                checked={value}
                onChange={(e) => handleChange(e.target.checked)}
            />
        </div>


    );


}