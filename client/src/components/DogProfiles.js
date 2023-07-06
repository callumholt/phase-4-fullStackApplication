import React, { useEffect, useState } from "react";

const DogProfiles = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/dogs");
      const data = await response.json();
      setDogs(data);
    } catch (error) {
      console.error("Error fetching dog data:", error);
    }
  };

  return (
    <div>
      <div>
        <h1>Please Login or Sign Up</h1>
      </div>
      <div>
        {dogs.map((dog) => (
          <div key={dog.id_of_dog}>
            <h2>Name of Dog: {dog.name_of_dog}</h2>
            <p>Owner: {dog.id_of_owner}</p>
            <p>Age: {dog.age_of_dog}</p>
            <p>Breed: {dog.breed_of_dog}</p>
            <p>Bio: {dog.bio_of_dog}</p>
            <p>Location: {dog.location_postCode}</p>
            <p>Dates for Dog Sitting: {dog.dates_require_dogSitting}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogProfiles;
