import { Listbox } from '@headlessui/react'
import React from "react";



export default function MyDropdown({label,value, handleChange, options }) {
    return (
        <div>
            <label className="block text-gray-700 mb-1 font-bold">{label}</label>

            <Listbox value={value} onChange={handleChange}>
                <Listbox.Button
                    className="border rounded px-3 py-2 bg-[rgb(234,239,239)] w-60 flex flex-row justify-between items-center">
                    <span>{value}</span>
                    <svg
                        className="w-4 h-4 text-gray-500 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                    </svg>

                </Listbox.Button>
                <Listbox.Options
                    className="bg-white border border-[rgb(51,52,70)] rounded mt-1 shadow-lg max-h-60 overflow-y-auto z-10 focus:outline-none focus:ring-0">

                    {options.map((option) => (
                        <Listbox.Option
                            key={option.value}
                            value={option.label}
                            className="px-3 py-2 hover:bg-[rgb(184,207,206)] cursor-pointer"
                        >
                            {option.label}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>

        </div>
    )
}