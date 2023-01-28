import React, { useEffect, useState } from 'react';
import MealItem from '../MealItem/MealItem';
import './Search.css'

const Search = () => {
    const [searchText, setSearchText] = useState('');

  const [meals, setMeals] = useState([]);
  useEffect(()=>{
    const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`);
    fetch(url)
    .then(res => res.json())
    .then(data => setMeals(data.meals))
  },[searchText])
  const inputSearch = (e)=>{
    setSearchText(e.target.value)
  }
    return (
        <div>
            <input onChange={inputSearch} type="text" placeholder='Search Food' className='w-50 p-2' />
      <h3>Total meal Items: {meals.length}</h3>
                <div className='item-list'>
                    {
                        meals.map(meal =><MealItem
                        meal={meal}
                        ></MealItem>)
                    }
                </div>
        </div>
    );
};

export default Search;