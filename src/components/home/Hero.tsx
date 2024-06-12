import React from 'react';
import {
  FaApple,
  FaGooglePlay,
  FaPlay,
} from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import '../../styles/Hero.css';

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="overlay"></div>
      <div className="hero-content">
        <div>
          <h1>
            Easy Payments. <br />
            Make Mun-e Moves.
          </h1>
        </div>
        <div className="input-with-button-container">
          <div className="overlay"></div>
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            id=""
          />
          <button className="input-button">
            <strong>Get Mun-e</strong>
          </button>
        </div>
        <div className="hero-button-group">
          <button>
            <FaGooglePlay />
            <div className="hero-button-group-text">
              <p>Get it on</p>
              <strong>Google Play</strong>
            </div>
          </button>
          <button>
            <FaApple />
            <div className="hero-button-group-text">
              <p>Download on the</p>
              <strong>App Store</strong>
            </div>
          </button>
        </div>
      </div>
      <div className="hero-button">
        <div className="overlay"></div>
        <FaPlay />
        <button>Watch the Mun-e story</button>
      </div>
      <div className="hero-button-mobile">
        <div className="overlay"></div>
        <FaPlay />
      </div>
      <div className="hero-input-mobile">
        <input
          type="text"
          name="email"
          placeholder="Enter your email address"
          id=""
        />
        <div>
          <FiPhone />
        </div>
      </div>
      <div className="hero-button-mobile">
        <div className="overlay"></div>
        <FaPlay />
      </div>
    </div>
  );
}
