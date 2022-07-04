import { createContext, useContext } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
export const LayoutContext = createContext(null);

export function useLayoutContext() {
  const providerValues = useContext(LayoutContext);
  return { ...providerValues };
}

export default function Layout(props) {
  const { children } = props;
  const contextProps = { ...props };

  return (
    <LayoutContext.Provider value={contextProps}>
      <Header />
      <Outlet />
      {children}
    </LayoutContext.Provider>
  );
}
