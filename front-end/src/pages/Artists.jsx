import React from 'react'
import ItemList from '../components/ItemList'
import { artistsArray } from '../../api/api';

const Artists = () => {
  return (
    <div className="main">
    {/*Artistas*/}
    <ItemList        
      title="Artistas"
      items={artistsArray.length}
      itemsArray={artistsArray}
      path='/artists'
      idPath='/artist'
      showMore={false}/>
    </div>/*main*/
  )
}

export default Artists
