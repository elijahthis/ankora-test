import React, { useReducer } from "react";
import { DateContext } from "../contexts/dateContext";
import Header from "./header";
import Calendar from "./calendar";

const Main = () => {
  const today = new Date();
  const initialState = { date: today };
  const dateReducer = (state, action) => {
    switch (action.type) {
      case "increment":
        const newww = state.date;
        newww.setDate(newww.getDate() + 1);
        return { date: newww };
      case "decrement":
        const neww = state.date;
        neww.setDate(neww.getDate() - 1);
        return { date: neww };
      default:
        throw new Error();
    }
  };
  const [state, dispatchDate] = useReducer(dateReducer, initialState);

  return (
    <main>
      <DateContext.Provider value={{ state, dispatchDate }}>
        <Header />
        <section>
          <Calendar />
        </section>
      </DateContext.Provider>
    </main>
  );
};

export default Main;
