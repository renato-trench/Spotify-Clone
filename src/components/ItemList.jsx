import React from 'react'
import SingleItem from './SingleItem'
import { artistArray } from '../assets/database/artists'
import { Link } from "react-router-dom";

const ItemList = ({ title , items, itemsArray, path, idPath, showMore}) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
            <h2>{title} Populares</h2>
            <Link to={path} className="item-list__link">{showMore ?? 'Mostrar tudo'}</Link>
      </div>
      <div className="item-list__container">
      {
      itemsArray
        .filter((currentValue, index) => index < items)
        .map((curObj, index) => (
        <SingleItem idPath={idPath} {...curObj} key={`${title}-${index}`}/>
      ))}
      </div>
    </div>
  )
}

export default ItemList
