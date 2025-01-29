import React from "react";
import { useNavigate } from "react-router-dom";

function LocationDetails() {
  const navigate = useNavigate();

  const submitHandler = () => {};
  return (
    <div class="hero">
      <div class="hero-content">
        <h1>Your Main Headline</h1>

        <form class="form-section" onSubmit={submitHandler}>
          <div class="form-group">
            <label for="from">From</label>
            <input type="text" id="from" placeholder="Enter Pickup City" />
          </div>
          <div class="form-group">
            <label for="to">To</label>
            <input type="text" id="to" placeholder="Enter Drop City" />
          </div>
          <div class="form-group">
            <label for="pickup-date">Pick Up</label>
            <input type="date" id="pickup-date" />
          </div>
          <div class="form-group">
            <label for="pickup-time">Pick Up At</label>
            <input type="time" id="pickup-time" />
          </div>
          <div class="form-button">
            <button
              class="cta-button"
              type="submit"
              onClick={() => {
                navigate("/vehicles");
              }}
            >
              Explore Cabs
            </button>
          </div>
        </form>

        <a href="#" class="cta-button">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default LocationDetails;
