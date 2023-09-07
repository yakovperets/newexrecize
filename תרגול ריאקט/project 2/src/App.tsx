import Header from "./componnent/SiteStructure/Header";
import Main from "./componnent/SiteStructure/Main";
import Footer from "./componnent/SiteStructure/Footer";
import { RouterProvider } from "./componnent/RouterContext";
import { CurrentCardProvider } from "./componnent/CurrentCard";
import { CurrentCardDetailsProvider } from "./componnent/CurrentCardDetails";
import { CurrentUserProvider } from "./componnent/CurrentUser";
import { CurrentTokenProvider } from "./componnent/CurrentToken";

import "./App.css";

function App() {
  return (
    <>
      <CurrentTokenProvider>
        {" "}
        <CurrentUserProvider>
          <CurrentCardDetailsProvider>
            {" "}
            <CurrentCardProvider>
              <RouterProvider>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
              </RouterProvider>
            </CurrentCardProvider>
          </CurrentCardDetailsProvider>
        </CurrentUserProvider>
      </CurrentTokenProvider>
    </>
  );
}

export default App;
