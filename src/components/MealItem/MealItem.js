import React from 'react';

const MealItem = (props) => {
    const {strMeal,strArea,strCategory,strMealThumb} = props.meal;
    return (

            <div className="card w-75 m-auto">
                <img className='' src={strMealThumb} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <p>Category: {strCategory}</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

           
    );
};

export default MealItem;<h3>meal items</h3>