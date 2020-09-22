import React, {useState} from 'react'
import { AddCategory } from './component/AddCategory';
import { GitGrid } from './component/GitGrid';

 const GitExpertApp = () => {

    
    const [categories, setCategories] = useState(['Dragon Ball']);

    //const handleAdd = () => {
        //setCategories([...categories, 'Pablo Escobar']);
        //setCategories( cats => [...cats, 'Pablo Escobar']);
    //}
    return (
        <div>
           <React.Fragment>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={ setCategories }></AddCategory>
            <hr></hr>
            
            <ol>
               {
                   categories.map( category => (
                     <GitGrid 
                        category={category}
                        key={category}
                    >
                     </GitGrid>
                   ))
                   
                   
               }
            </ol>
           </React.Fragment>
        </div>
    )
}

export default GitExpertApp;
