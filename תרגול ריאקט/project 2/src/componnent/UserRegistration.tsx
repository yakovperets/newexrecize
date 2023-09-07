import { useState } from "react";
import { useRouter } from "./RouterContext";
import { useCurrentUser } from "./CurrentUser";
import { useCurrentToken } from "./CurrentToken";
interface User {
  id: string;
  email: string;
  password: string;
  role?: "admin";
}
const UserRegistration = () => {
  const { setPage } = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [fetchedData, setFetchedData] = useState<User>();
  const { user, setUser } = useCurrentUser();
  const { token, setToken } = useCurrentToken();
  const [loger, setLoger] = useState<User>({
    id: "set id here....",
    email: "set your @email here...",
    password: "set your passw###...",
    role: "admin",
  });
  const fetchDataFromURL = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          Authorization: "test-token",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loger),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);

      setFetchedData(data);
      setError(null);
    } catch (error) {
      setError("Error fetching data");
    }
  };
  const fetchDataFromURLForGettingToken = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          Authorization: "test-token",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loger),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setFetchedData(data);
      setError(null);
      setToken(data.responseObj.token);
    } catch (error) {
      setError("Error fetching data");
    }
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLoger({
      ...loger,
      [name]: value,
    });
  };
  return (
    <>
      <div>
        <h1>Registeration</h1>
        <button className="card-button" onClick={() => setPage("Home")}>
          Home
        </button>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loger.email}
            onChange={handleInputChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loger.password}
            onChange={handleInputChange}
          />

          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={loger.role || ""}
            onChange={handleInputChange}
          />

          <button
            onClick={async () => {
              console.log(loger);
              await fetchDataFromURL();
              await fetchDataFromURLForGettingToken();
              console.log(token);
              console.log(fetchedData, error, user);
              setUser(loger);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default UserRegistration;
