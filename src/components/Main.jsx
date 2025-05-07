import React from "react";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import ItemList from "./ItemList";

const Main = () => 
{
  return (
    <div className="main">
      {/*Artistas*/}
      <ItemList        
        title="Artistas"
        items={5}
        itemsArray={artistArray}
        path='/artists'
        idPath='/artist'
        showMore='Mostrar Tudo'/>
      {/*Musicas*/}
      <ItemList 
      title="Músicas" 
      items={10}
      itemsArray={songsArray}
      path='/songs'
      idPath='/song'
      showMore='Mostrar Tudo'/>
    </div>/*main*/
  )
};
export default Main;

