import Home from "../Home";
import Trips from "../Trips";
import TripsDetails from "../TripDetails";
import NewTripForm from "../NewTripForm";
import UpdateTripForm from "../UpdateTripForm";
import UserLogin from "../UserLogin";
import UserRegistration from "../UserRegistration";
import { useRouter } from "../RouterContext";

const Main = () => {
  const { page } = useRouter();
  return (
    <>
      <div className="main">
        {/* remove the switch case!!!!!!!!!!!!!!!!! */}
        {(() => {
          switch (page) {
            case "Home":
              return <Home />;
            case "Trips":
              return <Trips />;
            case "TripDetails":
              return <TripsDetails />;
            case "NewTripForm":
              return <NewTripForm />;
            case "UpdateTripForm":
              return <UpdateTripForm />;
            case "UserLogin":
              return <UserLogin />;
            case "UserRegistration":
              return <UserRegistration />;
            default:
              return <div>the page can't be reloaded!</div>;
          }
        })()}
      </div>
    </>
  );
};

export default Main;
