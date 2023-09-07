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
const UserLogin = () => {
  const { setPage } = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [fetchedData, setFetchedData] = useState<User>();
  const { setUser } = useCurrentUser();
  const { token, setToken } = useCurrentToken();

  const [loger, setLoger] = useState<User>({
    id: "set id here....",
    email: "set your @email here...",
    password: "set your passw###...",
    role: "admin",
  });
  const fetchDataFromURL = () => {
    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        Authorization: "test-token",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loger),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFetchedData(data);
        setError(null);
        setToken(data.responseObj.token);
      })
      .catch(() => {
        setError("Error fetching data");
      });
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
        <h1>Log In!</h1>
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
            onClick={() => {
              console.log(loger);
              fetchDataFromURL();
              console.log(fetchedData, error);
              setUser(loger);
              console.log(token);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
