import { useState, useEffect } from "react";
import TripCards from "./cards/TripCards";
import { useRouter } from "./RouterContext";
import { useCurrentToken } from "./CurrentToken";

export interface Trip {
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
const Trips = () => {
  const [fetchedData, setFetchedData] = useState<Trip[]>();
  const [error, setError] = useState<string | null>(null);
  const { setPage } = useRouter();
  const { token } = useCurrentToken();
  useEffect(() => {
    const fetchDataFromURL = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/trips", {
          method: "GET",
          headers: {
            authorization: token,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFetchedData(data);
        setError(null);
      } catch (error) {
        setError("Error fetching data");
      }
    };

    fetchDataFromURL();
  }, []);
  return (
    <div>
      <h1>TRIPS CARDS</h1>
      <button className="card-button" onClick={() => setPage("NewTripForm")}>
        new trip
      </button>
      <button className="card-button" onClick={() => setPage("Home")}>
        Home
      </button>
      {error && <p>{error}</p>}
      {!error && (
        <div className="cards-area">
          {fetchedData !== undefined &&
            fetchedData.map((trip: Trip, index) => (
              <TripCards trip={trip} key={index}></TripCards>
            ))}
        </div>
      )}
    </div>
  );
};

export default Trips;
