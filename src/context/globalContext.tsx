import React from "react";
import {
  Action,
  globalReducer,
  isWinner,
  winner,
} from "../reducers/globalReducer";

export interface gloabalContext {
  isWinner: winner;
  dispatch: React.Dispatch<Action>;
}

export const GlobalContext = React.createContext<any | winner>(isWinner);

export const GlobalProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = React.useReducer(globalReducer, isWinner);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
