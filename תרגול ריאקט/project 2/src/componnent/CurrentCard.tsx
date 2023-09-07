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
  card: number | null;
  setCardId: Dispatch<SetStateAction<number | null>>;
};

const CurrentCardContext = createContext<null | ContextValue>(null);
const { Provider } = CurrentCardContext;

type CurrentCardProviderProps = {
  children: ReactNode;
};

export const CurrentCardProvider: FC<CurrentCardProviderProps> = ({
  children,
}) => {
  const [card, setCardId] = useState<number | null>(null);

  return <Provider value={{ card, setCardId }}>{children}</Provider>;
};

export const useCurrentCard = () => {
  const context = useContext(CurrentCardContext);
  if (!context)
    throw new Error("useCurrentCard must be used within a CurrentCardProvider");
  return context;
};

export default CurrentCardProvider;
