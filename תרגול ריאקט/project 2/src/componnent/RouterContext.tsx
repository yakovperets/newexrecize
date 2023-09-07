import {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
} from "react";
type pages =
  | "Home"
  | "Trips"
  | "TripDetails"
  | "NewTripForm"
  | "UpdateTripForm"
  | "UserLogin"
  | "UserRegistration";

type ContextValue = {
  page: pages;
  setPage: Dispatch<SetStateAction<pages>>;
};

const RouterContext = createContext<null | ContextValue>(null);
const { Provider } = RouterContext;

type RouterProviderProps = {
  children: ReactNode;
};

export const RouterProvider: FC<RouterProviderProps> = ({ children }) => {
  const [page, setPage] = useState<pages>("Home");

  return <Provider value={{ page, setPage }}>{children}</Provider>;
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context)
    throw new Error("useRouter must be used within a RouterProvider");
  return context;
};

export default RouterProvider;

// add Router.tsx component
//
