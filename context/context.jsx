import React, { createContext, useState, useCallback, useEffect } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <AppContext.Provider
      value={{
        filter,
        setFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
