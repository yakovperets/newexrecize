import { useCurrentUser } from "../CurrentUser";
import { useRouter } from "../RouterContext";
import { useCurrentToken } from "../CurrentToken";
import barakuniImage from "C:/Users/User/Downloads/client/project 2/Barakuni.jpeg";

const Header = () => {
  const { user } = useCurrentUser();
  const { setPage } = useRouter();
  const { token } = useCurrentToken();
  return (
    <>
      <div className="header">
        <button onClick={() => setPage("Home")}>
          <i className="fa fa-home"></i>
        </button>
        <h1 className="managment">Managment Trips</h1>
        <h2>
          <i className="&#xf505">{user?.email}</i>
        </h2>
        <h2>token: {token ? token : "no token"}</h2>
        {token && (
          <img className="barakuni" src={barakuniImage} alt="barakuni" />
        )}
      </div>
    </>
  );
};

export default Header;
