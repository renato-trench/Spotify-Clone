import React from 'react'
import ItemList from '../components/ItemList'
import { songsArray } from "../assets/database/songs";

const Songs = () => {
  return (
    <div className="main">
    {/*Músicas*/}
    <ItemList        
      title="Músicas"
      items={songsArray.length}
      itemsArray={songsArray}
      path='/songs'
      idPath='/song'
      showMore={false}/>
    </div>/*main*/
  )
}

export default Songs
