import { useState } from "react";
import { AddCategory, GifGrid } from './components';

const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['Killer instinct 3']);

  const onAddCategory = (newCategory) => {
    // const newCategory = 'New category ' + (categories.length + 1);
    if (categories.includes(newCategory)) { return; }

    setCategories((handleCategories) => [...handleCategories, newCategory]);
  }

  return (
    <>
        {/* Título */}
        <h1>GiftExpertApp</h1>

        {/* Input */}
        <AddCategory onNewCategory={onAddCategory}></AddCategory>
        
        {/* Listado de Gif */}
        { categories.map((category, key) => (
          <GifGrid key={key} category={category}></GifGrid>
        )) }
    </>
  )
}

export default GiftExpertApp;
