import React from 'react';
import { createContext, useState } from 'react';
import Items from './Items';




export const ShopContext = createContext(null);



const ShopContextProvider = (props) => {

    const [likedItems, setLikedItems] = useState([]);

    const addToLikes = (itemId) =>{

        const newLikes = Items.filter(item => item.id === itemId)

        const Likes = [...likedItems, ...newLikes];

        setLikedItems(Likes);
    }

    const getTotalLikes = () =>{

        return likedItems.length;
    }

   

    const contextValue = {addToLikes, getTotalLikes}

    return(

        <ShopContext.Provider value = {contextValue}>
            {props.children}

        </ShopContext.Provider>
        
    )
    
}


export default ShopContextProvider;

