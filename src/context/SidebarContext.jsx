/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const SidebarContext = createContext();

const initialState = {
  mobileNavOpen: false,
  cartOpen: false,
};

function sidebarReducer(state, action) {
  switch (action.type) {
    case "sidebar/toggleMobileNav":
      return { ...state, mobileNavOpen: !state.mobileNavOpen };
    case "sidebar/toggleCart":
      return { ...state, cartOpen: !state.cartOpen };
    default:
      return state;
  }
}

export const SidebarProvider = ({ children }) => {
  const [{ mobileNavOpen, cartOpen }, dispatch] = useReducer(
    sidebarReducer,
    initialState
  );

  function toggleCart() {
    dispatch({ type: "sidebar/toggleCart" });
  }

  function toggleMobileNav() {
    dispatch({ type: "sidebar/toggleMobileNav" });
  }
  return (
    <SidebarContext.Provider
      value={{ mobileNavOpen, cartOpen, toggleCart, toggleMobileNav }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
