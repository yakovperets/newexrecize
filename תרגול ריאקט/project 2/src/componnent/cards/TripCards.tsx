import { useCurrentCard } from "../CurrentCard";
import { useRouter } from "../RouterContext";
import { FC } from "react";
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

type ComponentNameProps = { trip: Trip };

const ComponentName: FC<ComponentNameProps> = ({ trip }) => {
  const { setPage } = useRouter();
  const { setCardId } = useCurrentCard();
  return (
    <div className="card">
      <img src={trip.image} alt={trip.destination} />
      <div className="card-body">
        <h5 className="card-title">{trip.destination}</h5>
        <p className="card-text">Start-Date: {trip.startDate}</p>
        <p className="card-text">End-Date: {trip.endDate}</p>
        <button
          className="card-button"
          onClick={() => {
            setPage("TripDetails");
            setCardId(Number(trip.id));
          }}
        >
          for more details
        </button>
      </div>
    </div>
  );
};

export default ComponentName;
