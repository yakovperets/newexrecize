import { useState, useEffect } from "react";
import { useCurrentCard } from "./CurrentCard";
import { useRouter } from "./RouterContext";
import { useCurrentCardDetails } from "./CurrentCardDetails";
import { useCurrentToken } from "./CurrentToken";

interface ReqInterface {
  method?: string;
  headers: {
    authorization?: string;
    "Content-Type": string;
  };
}

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
const TripDetails = () => {
  const { token } = useCurrentToken();
  const [fetchedData, setFetchedData] = useState<Trip>();
  const [error, setError] = useState<string | null>(null);
  const { card } = useCurrentCard();
  const { setPage } = useRouter();
  const { setCardDetails } = useCurrentCardDetails();

  useEffect(() => {
    const fetchDataFromURL = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/trips/${card}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFetchedData(data);
        setCardDetails(data);
        setError(null);
      } catch (error) {
        setError("Error fetching data");
      }
    };

    fetchDataFromURL();
  }, []);
  const deleteDataFromURL = async () => {
    try {
      if (!token) throw new Error("Please Login!");
      console.log(token);

      const options: ReqInterface = {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (token) options.headers.authorization = token;
      const response = await fetch(
        `http://localhost:3000/api/trips/${card}`,
        options
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.log("Error fetching data");
    }
  };
  return (
    <div>
      {error && <p>{error}</p>}
      {!error && (
        <div className="cards-area">
          {fetchedData !== undefined && (
            <div className="card">
              <img src={fetchedData.image} alt={fetchedData.destination} />
              <div className="card-body">
                <h5 className="card-title">{fetchedData.destination}</h5>
                <p className="card-text">Price: ${fetchedData.price}</p>
                <p className="card-text">
                  Description: {fetchedData.description}
                </p>
                <p className="card-text">startDate: {fetchedData.startDate}</p>
                <p className="card-text">endDate: {fetchedData.endDate}</p>
                <p className="card-text">
                  activities: {String(fetchedData.activities)}
                </p>
                <button
                  className="card-button"
                  onClick={() => {
                    setPage("UpdateTripForm");
                  }}
                >
                  update
                </button>
                <button
                  className="card-button"
                  onClick={() => {
                    deleteDataFromURL();
                    setPage("Trips");
                  }}
                >
                  delete
                </button>
                <button
                  className="card-button"
                  onClick={() => setPage("Trips")}
                >
                  back to "Trips"
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TripDetails;
