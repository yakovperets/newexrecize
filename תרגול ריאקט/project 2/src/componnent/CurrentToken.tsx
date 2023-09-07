import {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
} from "react";

type ContextValue = {
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
};

const CurrentTokenContext = createContext<ContextValue | undefined>(undefined);

// Destructure the Provider
const { Provider } = CurrentTokenContext;

type CurrentTokenProviderProps = {
  children: ReactNode;
};

export const CurrentTokenProvider: FC<CurrentTokenProviderProps> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);

  return <Provider value={{ token, setToken }}>{children}</Provider>;
};

export const useCurrentToken = () => {
  const context = useContext(CurrentTokenContext);
  if (!context) {
    throw new Error(
      "useCurrentToken must be used within a CurrentTokenProvider"
    );
  }
  return context;
};

export default CurrentTokenProvider;
