import { useRouter } from "./RouterContext";

const Home = () => {
  const { setPage } = useRouter();

  return (
    <>
      <div className="button-area">
        <button className="home-button" onClick={() => setPage("Trips")}>
          מעבר לכל הטיולים
        </button>
        <button className="home-button" onClick={() => setPage("UserLogin")}>
          להתחברות
        </button>
        <button
          className="home-button"
          onClick={() => setPage("UserRegistration")}
        >
          לרישום
        </button>
      </div>
    </>
  );
};

export default Home;
