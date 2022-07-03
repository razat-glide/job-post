import { createContext, useContext } from "react";
import Header from "./Header";

export const LayoutContext = createContext(null);

export function useLayoutContext() {
  const providerValues = useContext(LayoutContext);
  return { ...providerValues };
}

export default function Layout(props) {
  const { children } = props;
  const contextProps = {};

  return (
    <LayoutContext.Provider value={contextProps}>
      <Header />
      {children}
    </LayoutContext.Provider>
  );
}
