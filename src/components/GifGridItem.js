import React from 'react'

const GifGridItem = ( { title, url } ) => {

   return (
      <div className="card">
         <img src={ url } alt={ title }/>
         <p>{ title ? title : '????' }</p>
      </div>
   )
}

export default GifGridItem
