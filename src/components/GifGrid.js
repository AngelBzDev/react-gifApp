import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem'

export const GifGrid = ({ category }) => {

   const { data:images, loading } = useFetchGifs( category );

   return (
      <>
         <h3 className="category animate__animated animate__fadeInRight">{ category }</h3>

         { loading && <p>Cargando...</p> }
         
         <div className="card-container animate__animated animate__fadeInLeft">
         { images.map( img  => (
               <GifGridItem 
                  key={ img.id }
                  { ...img }   
               />
            ))
         }
         </div>
      </>
   )
}
