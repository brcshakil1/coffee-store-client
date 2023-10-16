import { useLoaderData } from "react-router-dom";
import AddCoffee from "./../AddCoffee/AddCoffee";
import Coffee from "../Coffee/Coffee";
import { useState } from "react";
const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="max-w-6xl mx-auto">
      <AddCoffee />

      <div>
        <h2 className="text-3xl font-bold py-10 text-center">
          Out Popular Products
        </h2>
        <div className="grid grid-cols-2 gap-5 mt-6">
          {coffees.map((coffee) => (
            <Coffee
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
