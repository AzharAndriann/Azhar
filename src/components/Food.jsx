import React, {useState} from "react";
import {data} from '../data/data.js'


const Food = () => {
    // console.log(data)
    const [foods, setFoods] = useState(data)

    // filter type
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        )
    }

    // filter by price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }



    return (
        <div className="max-w-[1640px] m-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">Menu Items</h1>
            {/* filter row */}
            <div className="flex flex-col md:flex-row justify-between">

                {/* filter type */}
                <div>
                    <p className="font-bold text-gray-700">Filter Type</p>
                    <div className="flex flex-wrap">
                        <button onClick={() => setFoods(data)} className="m-1 px-1 border-orange-600 border-2 text-orange-600 hover:bg-orange-600 hover:text-white duration-300 rounded-lg">All</button>
                        <button onClick={() => filterType('burger')} className="m-1 px-1 border-orange-600 border-2 text-orange-600 hover:bg-orange-600 hover:text-white duration-300 rounded-lg">Burgers</button>
                        <button onClick={() => filterType('pizza')} className="m-1 px-1 border-orange-600 border-2 text-orange-600 hover:bg-orange-600 hover:text-white duration-300 rounded-lg">Pizza</button>
                        <button onClick={() => filterType('salad')} className="m-1 px-1 border-orange-600 border-2 text-orange-600 hover:bg-orange-600 hover:text-white duration-300 rounded-lg">Salads</button>
                        <button onClick={() => filterType('chicken')} className="m-1 px-1 border-orange-600 border-2 text-orange-600 hover:bg-orange-600 hover:text-white duration-300 rounded-lg">Chicken</button>
                    </div>
                </div>

                    {/* filter price */}
                    <div>
                        <p className="font-bold text-gray-700">Filter Price</p>
                        <div className="flex max-w-[300px] w-full">
                            <button onClick={() => setFoods(data)} className="m-1 px-1 border-orange-600 border-2 text-orange-600 hover:bg-orange-600 hover:text-white duration-300 rounded-lg">All</button>
                            <button onClick={() => filterPrice('$')} className="m-1 px-1 border-orange-600 border-2 text-orange-600 hover:bg-orange-600 hover:text-white duration-300 rounded-lg">$</button>
                            <button onClick={() => filterPrice('$$')} className="m-1 px-1 border-orange-600 border-2 text-orange-600 hover:bg-orange-600 hover:text-white duration-300 rounded-lg">$$</button>
                            <button onClick={() => filterPrice('$$$')} className="m-1 px-1 border-orange-600 border-2 text-orange-600 hover:bg-orange-600 hover:text-white duration-300 rounded-lg">$$$</button>
                            <button onClick={() => filterPrice('$$$$')} className="m-1 px-1 border-orange-600 border-2 text-orange-600 hover:bg-orange-600 hover:text-white duration-300 rounded-lg">$$$$</button>
                        </div>
                    </div>
                </div>

                {/* display  foods */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4"> 
                    {foods.map((item, index)=> (
                        <div key={index} className="border shadow-lg rounded-lg  hover:scale-105 duration-300">
                            <img src={item.image} alt={item.name} 
                            className="w-full h-[200px] object-cover rounded-t-lg "/>
                            <div className="flex justify-between px-2 py-4">
                                <p className="font-bold">{item.name}</p>
                                <p>
                                    <span className="bg-orange-500 text-white p-1 rounded-full ">{item.price}</span>
                                </p>
                            </div>
                        </div>
                        ))}
                </div>
            </div>

            
    )
}

export default Food