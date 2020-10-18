import React from "react";
import {
  Action,
  globalReducer,
  isWinner,
  winner,
} from "../reducers/globalReducer";

export interface gloabalContext {
  decideWinner: winner;
  dispatch: React.Dispatch<Action>;
}

export const GlobalContext = React.createContext<any | winner>(isWinner);

export const GlobalProvider: React.FC = ({ children }): JSX.Element => {
  const [decideWinner, dispatch] = React.useReducer(globalReducer, isWinner);
  return (
    <GlobalContext.Provider value={{ decideWinner, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
