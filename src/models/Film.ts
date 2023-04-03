import { IIgralec, Igralec1, Igralec2 } from "./Igralec";

export interface IFilm {
    id: number;
    naslov: String;
    letoIzdaje: number;
    zanr?: String;
    igralci: IIgralec[];
}

export const film: IFilm = { id: 99, naslov: "PrHostar", letoIzdaje: 2022, zanr: "komedija", igralci: [Igralec1, Igralec2] };