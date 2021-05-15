import React from "react";
import Tour from "./Tour";
import { AnimatePresence } from "framer-motion";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        <AnimatePresence>
          {tours.map(tour => {
            return (
              <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Tours;
