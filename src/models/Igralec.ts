export interface IIgralec {
    id: number;
    ime: String;
    starost: number;
    bogat: boolean;
}

export const Igralec1: IIgralec = {id: 50, ime: "Leonardo", starost: 49, bogat: true};
export const Igralec2: IIgralec = {id: 51, ime: "Lucia", starost: 30, bogat: false};