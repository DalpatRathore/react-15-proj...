import React from "react";
import Review from "./Review";
import "./ReviewsApp.css";
const ReviewsApp = () => {
  return (
    <div className="reviewsApp">
      <main>
        <section className="container">
          <div className="title">
            <h2>our reviews</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
    </div>
  );
};

export default ReviewsApp;
