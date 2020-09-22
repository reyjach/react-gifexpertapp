import React from 'react'
import { useFetchGirfs } from '../hooks/useFetchGits';
import { GitGridItem } from './GitGridItem';

export const GitGrid = ({ category }) => {

    const { data:images, loading } = useFetchGirfs(category);

 

    return (
        <>
            <h3 className="card animate__animated animate__fadeInLeftBig"> {category} </h3>
            
            { loading && <p className="card animate__animated animate__flash">Loading</p> }
            
            <div className="card-grid">  
                {images.map( img => (
                    <GitGridItem 
                        key={img.id}
                        {...img}
                    >
                    </GitGridItem>
                ))}
            </div>
        </>
    )
}
