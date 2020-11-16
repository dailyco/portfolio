import React from "react";
import Event from "../Molecule/Event";

function Events({ events }) {
  return (
    <>
      {events.map((e) => {
        return <Event direction={e.direc} data={e.data}></Event>;
      })}
    </>
  );
}

export default Events;
