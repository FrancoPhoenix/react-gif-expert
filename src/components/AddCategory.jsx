import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) { return; }

    onNewCategory(inputValue.trim());

    // setCategories((handleCategories) => [...handleCategories, inputValue]);

    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <label>AddCategory</label>
      <input 
        type="text" 
        placeholder="Buscar gifs" 
        value={inputValue} 
        onChange={onInputChange} />
    </form>
  )
}