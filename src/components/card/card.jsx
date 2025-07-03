"use client";

import React from "react";
import CardSelect from "@/components/card/cardSelect";
import CardCheckbox from "@/components/card/cardCheckbox";
import MyDropdown from "@/components/card/myDropdown";

export default function Card() {




    const steuerklasseOptions = [
        {value: "1", label: "1"},
        {value: "2", label: "2"},
        {value: "3", label: "3"},];

    const bundesländerOptions = [
        { value: "baden-wuerttemberg", label: "Baden-Württemberg" },
        { value: "bayern", label: "Bayern" },
        { value: "berlin", label: "Berlin" },
        { value: "brandenburg", label: "Brandenburg" },
        { value: "bremen", label: "Bremen" },
        { value: "hamburg", label: "Hamburg" },
        { value: "hessen", label: "Hessen" },
        { value: "mecklenburg-vorpommern", label: "Mecklenburg-Vorpommern" },
        { value: "niedersachsen", label: "Niedersachsen" },
        { value: "nordrhein-westfalen", label: "Nordrhein-Westfalen" },
        { value: "rheinland-pfalz", label: "Rheinland-Pfalz" },
        { value: "saarland", label: "Saarland" },
        { value: "sachsen", label: "Sachsen" },
        { value: "sachsen-anhalt", label: "Sachsen-Anhalt" },
        { value: "schleswig-holstein", label: "Schleswig-Holstein" },
        { value: "thueringen", label: "Thüringen" }
    ];

    const beschäftigungsartenOptions = [
        {value: "Standard", label: "Standard, Angestellte"},
        {value: "Azubi", label: "Azubi"},
        {value: "Beamte", label: "Beamte, Soldaten"}, {
        value: "Selbstaendige", label: "Selbständige"
    }];
    const numOfChildrenOptions = [
        {value: "1", label: "1"}, {value: "2", label: "2"},
        {value: "3", label: "3"
    }, {value: "4", label: "4"},
        {value: "5", label: "5"},];



    const [brutto, setBrutto] = React.useState("");
    const [steuerklasse, setSteuerklasse] = React.useState(steuerklasseOptions[0].label);
    const [kirchensteuer, setKirchensteuer] = React.useState(false);
    const [beschäftigungsart, setBeschäftigungsart] = React.useState(beschäftigungsartenOptions[0].label);
    const [bundesland, setBundesland] = React.useState(bundesländerOptions[0].label);
    const [hasChildren, setHasChildren] = React.useState(false);
    const [numOfChildren, setNumOfChildren] = React.useState(numOfChildrenOptions[0].label);
    const [isButtonPressed, setIsButtonPressed] = React.useState(false);
    const [netto, setNetto] = React.useState(0);





    function bruttoRechnen() {
        setIsButtonPressed(true);
        console.log(brutto + "brutto");
        console.log(steuerklasse + "steuerklasse");
        console.log(bundesland + "bundesland");


        if (steuerklasse == 1) {
            setNetto(brutto * 0.9);
        } else if (steuerklasse == 2) {
            setNetto(brutto * 0.8)
        } else if (steuerklasse == 3) {
            setNetto(brutto * 0.7)
        }
        console.log("Bundesland" + bundesland);

        console.log("Kirchensteuer: " + kirchensteuer);
        console.log("Has Children: " + hasChildren);

    }


    return (<div
            className="card text-[rgb(51,52,70)] border border-[rgb(51,52,70)] rounded-lg shadow-sm bg-[rgb(127,140,170)] m-20">

            <div className="h-200 w-100 flex flex-col justify-between items-center p-10">

                <div>
                    <label className="block text-gray-700 mb-1 font-bold">Brutto</label>

                    <input
                        type="text"
                        inputMode="numeric"
                        placeholder="Brutto Gehalt"
                        className="border border-[rgb(51,52,70)] rounded-lg shadow-md
                        px-3 py-2
                        w-60 h-10
                        bg-[rgb(234,239,239)]
                        focus:outline-none focus:ring-1 focus:ring-[rgb(51,52,70)]"
                        value={brutto}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d*$/.test(value)) {
                                setBrutto(value);
                            }
                        }}
                    />

                </div>

                <MyDropdown label={"Steuerklasse"} value={steuerklasse} handleChange={setSteuerklasse}
                            options={steuerklasseOptions}/>
                <MyDropdown label={"Bundesland"} value={bundesland} handleChange={setBundesland}
                            options={bundesländerOptions}/>
                <MyDropdown label={"Beschäftigungsart"} value={beschäftigungsart} handleChange={setBeschäftigungsart}
                            options={beschäftigungsartenOptions}/>

                <CardCheckbox label={"Kirchensteuer"} value={kirchensteuer} handleChange={setKirchensteuer}/>
                <CardCheckbox label={"Kinder"} value={hasChildren} handleChange={setHasChildren}/>

                {hasChildren ?
                    <MyDropdown label={"Kinder unter 25"} value={numOfChildren} handleChange={setNumOfChildren}
                                options={numOfChildrenOptions}/>


                    : null}


                {isButtonPressed ? <h1>{netto.toFixed(2) + " €"}</h1> : null}


                <button
                    onClick={bruttoRechnen}
                    className="px-4 py-2 bg-[rgb(51,52,70)] text-[rgb(234,239,239)] rounded hover:cursor-pointer"

                >rechnen
                </button>


            </div>


        </div>


    )


}
