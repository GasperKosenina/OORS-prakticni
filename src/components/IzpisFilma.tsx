import { IFilm } from "../models/Film";
import { IIgralec } from "../models/Igralec";
import Opozorilo from "./Opozorilo";

interface izpisFilmaProps {
    film: IFilm
}

const IzpisFilma = (props: izpisFilmaProps) => {
    return (
        <div>
            <h1>{props.film.naslov}</h1>
            <p>Leto: {props.film.letoIzdaje}</p>
            <p>Žanr: {props.film.zanr}</p>
            <ul>
                {props.film.igralci.map((i: IIgralec) => (
                    <li key={i.id}>{i.ime} {i.starost} {i.bogat == true ? "Sem bogat" : "Sem reven"}</li>
                ))}
            </ul>
            <p>Število igralcev: {props.film.igralci.length}</p>
            {props.film.igralci.length > 3 ? <Opozorilo /> : null}
        </div>
    )

}

export default IzpisFilma;