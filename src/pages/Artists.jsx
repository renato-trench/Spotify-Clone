import React from 'react'
import ItemList from '../components/ItemList'
import { artistArray } from '../assets/database/artists'

const Artists = () => {
  return (
    <div className="main">
    {/*Artistas*/}
    <ItemList        
      title="Artistas"
      items={artistArray.length}
      itemsArray={artistArray}
      path='/artists'
      idPath='/artist'
      showMore={false}/>
    </div>/*main*/
  )
}

export default Artists
