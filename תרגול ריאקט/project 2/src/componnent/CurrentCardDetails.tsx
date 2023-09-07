import {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
} from "react";

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

const init: Trip = {
  id: "",
  name: "",
  destination: "",
  startDate: "",
  endDate: "",
  description: "",
  price: 0,
  image: "",
  activities: [],
};

type ContextValue = {
  card: Trip;
  setCardDetails: Dispatch<SetStateAction<Trip>>;
};

const CurrentCardDetailsContext = createContext<ContextValue | undefined>(
  undefined
);

const { Provider } = CurrentCardDetailsContext;

type CurrentCardDetailsProviderProps = {
  children: ReactNode;
};

export const CurrentCardDetailsProvider: FC<
  CurrentCardDetailsProviderProps
> = ({ children }) => {
  const [card, setCardDetails] = useState<Trip>(init);

  return <Provider value={{ card, setCardDetails }}>{children}</Provider>;
};

export const useCurrentCardDetails = () => {
  const context = useContext(CurrentCardDetailsContext);
  if (!context) {
    throw new Error(
      "useCurrentCardDetails must be used within a CurrentCardDetailsProvider"
    );
  }
  return context;
};
