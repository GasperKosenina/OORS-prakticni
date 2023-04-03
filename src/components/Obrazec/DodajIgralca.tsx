import { IIgralec } from "../../models/Igralec";
import React from "react";

interface dodajIgralcaProps {
    onAdd: any;
}

const initialState: IIgralec = {
    id: 0,
    ime: " ",
    starost: 0,
    bogat: false,
}

const DodajIgralca = (props: dodajIgralcaProps) => {
    const [igralec, setIgralec] = React.useState<IIgralec>(initialState)
    const handleSubmit = (event: any) => {
        event.preventDefault()
        alert(JSON.stringify(igralec))
        props.onAdd(igralec)
        setIgralec(initialState)
    }

    const handleChange = (e: any) => {
        const { value, name } = e.target
        setIgralec((prevState: IIgralec) => {
            const nextState = {
                ...prevState,
                id: prevState.id++,
                [name]: name == "bogat" ? true : value,
            };
            return nextState;
        })

    }
    return (
        <div>
            <h1>Dodaj igralca</h1>
            <form onSubmit={handleSubmit}>
                Ime:
                <input type="text" value={igralec?.ime.toString()} name="ime" onChange={handleChange} />
                <br></br>
                Starost:
                <input type="number" value={igralec.starost} name="starost" onChange={handleChange} />
                <br></br>
                Bogat:
                <input type="radio" checked={igralec.bogat} name="bogat" onChange={handleChange} />
                <br></br>
                <button type="submit">Dodaj</button>
            </form>
        </div>
    )
}


export default DodajIgralca;