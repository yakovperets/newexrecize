import React, { useState } from "react";
import { useRouter } from "./RouterContext";
import { useCurrentToken } from "./CurrentToken";

interface Trip {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string[];
}

function NewTripForm() {
  const { token } = useCurrentToken();
  const { setPage } = useRouter();
  const [tripData, setTripData] = useState<Trip>({
    id: "",
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    description: "",
    price: 0,
    image: "",
    activities: [],
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTripData({
      ...tripData,
      [name]: value,
    });
  };
  const fetchDataFromURL = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/trips/`, {
        method: "POST",
        headers: {
          authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tripData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.log("Error fetching data");
    }
  };
  return (
    <div className="form-container">
      <h2>New Trip</h2>
      <label htmlFor="destination">Destination:</label>
      <input
        type="text"
        id="destination"
        name="destination"
        value={tripData.destination}
        onChange={handleInputChange}
      />

      <label htmlFor="startDate">Start Date:</label>
      <input
        type="text"
        id="startDate"
        name="startDate"
        value={tripData.startDate}
        onChange={handleInputChange}
      />

      <label htmlFor="endDate">End Date:</label>
      <input
        type="text"
        id="endDate"
        name="endDate"
        value={tripData.endDate}
        onChange={handleInputChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        value={tripData.description}
        onChange={handleInputChange}
      />

      <label htmlFor="price">Price:</label>
      <input
        type="text"
        id="price"
        name="price"
        value={tripData.price}
        onChange={handleInputChange}
      />

      <label htmlFor="image">Image:</label>
      <input
        type="text"
        id="image"
        name="image"
        value={tripData.image}
        onChange={handleInputChange}
      />

      <label htmlFor="activities">Activities:</label>
      <input
        type="text"
        id="activities"
        name="activities"
        value={tripData.activities}
        onChange={handleInputChange}
      />

      <button
        onClick={() => {
          fetchDataFromURL();
          setPage("Trips");
        }}
      >
        Submit
      </button>

      <button className="card-button" onClick={() => setPage("Trips")}>
        back to "Trips"
      </button>
    </div>
  );
}

export default NewTripForm;
