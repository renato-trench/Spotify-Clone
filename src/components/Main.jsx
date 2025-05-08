import React from "react";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import ItemList from "./ItemList";

const Main = ({type}) => 
{
  return (
    <div className="main">
      {/*Artistas*/}
      {type === 'artist' || type === undefined ?
      (
        <ItemList        
        title="Artistas"
        items={10}
        itemsArray={artistArray}
        path='/artists'
        idPath='/artist'
        />
      ) : (
        <></>
      )}

      {/*Musicas*/}
      {type === "songs" || type === undefined ? (
      <ItemList 
      title="Músicas" 
      items={20}
      itemsArray={songsArray}
      path='/songs'
      idPath='/song'
      />
      ):
      (
        <></>
      )}
    </div>/*main*/
  )
};
export default Main;

