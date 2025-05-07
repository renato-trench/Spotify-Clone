import React from 'react'
import { songsArray } from '../assets/database/songs'
import ItemList from '../components/ItemList'

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
