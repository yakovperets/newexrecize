import {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
} from "react";

interface User {
  id: string;
  email: string;
  password: string;
  role?: "admin";
}

type ContextValue = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

const CurrentUserContext = createContext<ContextValue | undefined>(undefined);

const { Provider } = CurrentUserContext;

type CurrentUserProviderProps = {
  children: ReactNode;
};

export const CurrentUserProvider: FC<CurrentUserProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  return <Provider value={{ user, setUser }}>{children}</Provider>;
};

export const useCurrentUser = () => {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error("useCurrentUser must be used within a CurrentUserProvider");
  }
  return context;
};

export default CurrentUserProvider;
