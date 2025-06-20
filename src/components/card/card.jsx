"use client";

import React from "react";
import CardSelector from "@/components/card/cardSelector";

export default function Card() {

    const [buttonPressed, setButtonPressed] = React.useState(false);
    const [brutto, setBrutto] = React.useState(0);
    const [steuerklasse, setSteuerklasses] = React.useState("");
    const [netto, setNetto] = React.useState(0);
    const [kirchensteuer, setKirchensteuer] = React.useState(false);
    const [beschäftigungsart, setBeschäftigungsart] = React.useState("");
    const options = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
    ];
    function bruttoRechnen() {
        setButtonPressed(true);


        if (steuerklasse == 1) {
            setNetto(brutto * 0.9);
        } else if (steuerklasse == 2) {
            setNetto(brutto * 0.8)
        } else if (steuerklasse == 3) {
            setNetto(brutto * 0.7)
        }

    }

    function steuerklasseHandler(steuerklasse) {

        console.log(steuerklasse + "hello");
        if (steuerklasse === "1") {
            setSteuerklasses(1);
        } else if (steuerklasse === "2") {
            setSteuerklasses(2);
        } else if (steuerklasse === "3") {
            setSteuerklasses(3);
        }

    }


    return (
        <div className="card text-[rgb(51,52,70)] border border-[rgb(51,52,70)] rounded-lg shadow-sm bg-[rgb(127,140,170)]">

            <div className="h-150 w-100 flex flex-col justify-between items-center p-10">

                <div>
                    <label className="block text-gray-700 mb-1 ">Brutto</label>
                    <input
                        type="number"
                        placeholder="Brutto Gehalt"
                        className="border border-[rgb(51,52,70)] rounded-lg shadow-md
                        px-3 py-2
                        w-60 h-10
                        bg-[rgb(234,239,239)]
                        focus:outline-none focus:ring-1 focus:ring-[rgb(51,52,70)]"
                        onChange={(event) => setBrutto(event.target.value)}>

                    </input>

                </div>

                <CardSelector label={"Steuerklasse"} value={steuerklasse} handleChange={steuerklasseHandler} options={options}/>
                <div>
                    <label className="block text-gray-700 mb-1">Steuerklasse</label>
                    <select
                        id="options"
                        className="border border-gray-400 rounded px-3 py-2 w-60 h-10 bg-[rgb(234,239,239)] focus:outline-none focus:ring-1 focus:ring-[rgb(51,52,70)]"

                        value={steuerklasse}
                        onChange={(e) => steuerklasseHandler(e.target.value)}
                    >
                        <option value="">Steuerklasse</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>

                </div>


                <div>
                    <label className="block text-gray-700 mb-1">Bundesland</label>
                    <select
                        id="options"
                        className="border border-gray-400 rounded px-3 py-2 w-60 h-10 bg-[rgb(234,239,239)]"
                        // value={steuerklasse}
                        // onChange={(e) => steuerklasseHandler(e.target.value)}
                    >
                        <option value="">Wähle ein Bundesland</option>
                        <option value="baden-wuerttemberg">Baden-Württemberg</option>
                        <option value="bayern">Bayern</option>
                        <option value="berlin">Berlin</option>
                        <option value="brandenburg">Brandenburg</option>
                        <option value="bremen">Bremen</option>
                        <option value="hamburg">Hamburg</option>
                        <option value="hessen">Hessen</option>
                        <option value="mecklenburg-vorpommern">Mecklenburg-Vorpommern</option>
                        <option value="niedersachsen">Niedersachsen</option>
                        <option value="nordrhein-westfalen">Nordrhein-Westfalen</option>
                        <option value="rheinland-pfalz">Rheinland-Pfalz</option>
                        <option value="saarland">Saarland</option>
                        <option value="sachsen">Sachsen</option>
                        <option value="sachsen-anhalt">Sachsen-Anhalt</option>
                        <option value="schleswig-holstein">Schleswig-Holstein</option>
                        <option value="thueringen">Thüringen</option>
                    </select>

                </div>

                <div className="flex items-center justify-center space-x-2">
                    <label className="text-gray-700">Kirchensteuer</label>
                    <input
                        type="checkbox"
                        className="border border-gray-400 rounded px-3 py-2 bg-[rgb(234,239,239)]"
                        checked={kirchensteuer}
                        onChange={(e) => setKirchensteuer(e.target.checked)}
                    />
                </div>


                <div>
                    <label className="block text-gray-700 mb-1">Beschäftigungsart</label>
                    <select
                        id="options"
                        className="border border-gray-400 rounded px-3 py-2 w-60  h-10 bg-[rgb(234,239,239)]"
                         value={beschäftigungsart}
                        onChange={(e) => setBeschäftigungsart(e.target.value)}
                    >
                        <option value="">Beschäftigungsart</option>
                        <option value="Standard">Standard, Angestellte</option>
                        <option value="Azubi">Azubi</option>
                        <option value="Beamte">Beamte, Soldaten</option>
                        <option value="Selbstaendige">Selbständige</option>
                    </select>

                </div>

                {buttonPressed ? <h1>{netto.toFixed(2) + " €"}</h1> : null}


                <button
                    onClick={bruttoRechnen}
                    className="px-4 py-2 bg-[rgb(51,52,70)] text-[rgb(234,239,239)] rounded hover:cursor-pointer"

                >rechnen
                </button>


            </div>


        </div>


    )


}
