import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./ToursApp.css";
import { motion } from "framer-motion";

const mainVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const url = "https://course-api.com/react-tours-project";

const ToursApp = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = id => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <div className="toursApp">
        <main>
          <Loading />
        </main>
      </div>
    );
  }
  if (tours.length === 0) {
    return (
      <div className="toursApp">
        <main>
          <div className="title">
            <h2>no tours left</h2>
            <button className="btn" onClick={() => fetchTours()}>
              refresh
            </button>
          </div>
        </main>
      </div>
    );
  }
  return (
    <div className="toursApp">
      <motion.main variants={mainVariants} initial="hidden" animate="visible">
        <Tours tours={tours} removeTour={removeTour} />
      </motion.main>
    </div>
  );
};

export default ToursApp;
