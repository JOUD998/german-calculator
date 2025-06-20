import React from "react";

export default function CardSelector({label,value,handleChange,options}) {

    return (
        <div>
            <label className="block text-gray-700 mb-1 font-bold">{label}</label>
            <select
                id="options"
                className="border border-gray-400 rounded px-3 py-2 w-60 h-10 bg-[rgb(234,239,239)] focus:outline-none focus:ring-1 focus:ring-[rgb(51,52,70)]"

                value={value}
                onChange={(e) => handleChange(e.target.value)}
            >
                {options.map((option) => (<option value={option.value} key={option.value}> {option.label}</option>
                    ))}


                    < /select>

                    </div>


                    );


                }