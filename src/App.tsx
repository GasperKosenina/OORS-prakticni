import React from 'react';
import './App.css';
import { IFilm, film } from './models/Film';
import { IIgralec } from './models/Igralec';
import IzpisFilma from './components/IzpisFilma';
import DodajIgralca from './components/Obrazec/DodajIgralca';

function App() {
  const [seznamIgralcev, setSeznamIgralcev] = React.useState<IIgralec[]>(film.igralci)
  
  const handleAdd = (igralec: IIgralec) => {
    console.log(igralec)
    let posodobljeniIgralci = Array.from(seznamIgralcev)
    posodobljeniIgralci.push(igralec)
    setSeznamIgralcev(posodobljeniIgralci)
  }

  const updatedFilm: IFilm = {
    ...film,
    igralci: seznamIgralcev
  }


  return (
    <div className="App">
      <IzpisFilma film={updatedFilm}/>
      <DodajIgralca onAdd={handleAdd} />
    </div>
  );
}

export default App;
