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

  function handleDelete(e, dogId) {
    e.preventDefault();
    fetch(`/dogs/${dogId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("The dog was successfully deleted");
          fetchData();
        } else {
          throw new Error("Deletion failed");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <div>
        {dogs.map((dog) => (
          <form onSubmit={handleDelete}>
            <div key={dog.id_of_dog}>
              <h2>Name of Dog: {dog.name_of_dog}</h2>
              <p>Reference number: {dog.id}</p>
              <p>Owner: {dog.id_of_owner}</p>
              <p>Age: {dog.age_of_dog}</p>
              <p>Breed: {dog.breed_of_dog}</p>
              <p>Bio: {dog.bio_of_dog}</p>
              <p>Location: {dog.location_postCode}</p>
              <p>Dates for Dog Sitting: {dog.dates_require_dogSitting}</p>
              {/* <p>the Id of the dog is: {dog.id}</p> */}
              <button onClick={(e) => handleDelete(e, dog.id)}>
                Delete this Dog
              </button>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
};

export default DogProfiles;
