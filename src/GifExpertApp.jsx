import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (name) => {
        name.trim() !== '' && !categories.includes(name) && setCategories([name, ...categories ]);
        // setCategories(cat => [...cat, 'Valorant']);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onAddCategory={onAddCategory}
            />

            {
                categories.map(category => {
                    return(
                        <GifGrid 
                            key={ category } 
                            category={category}
                        />
                    );
                })
            }
        </>
    );
};
