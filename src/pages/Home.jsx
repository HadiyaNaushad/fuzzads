import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCartPlus, FaMedal, FaRocket, FaDollarSign, FaSignInAlt, FaChartLine } from "react-icons/fa";
import Login from "./Login";
import "./Home.css";

export default function Home() {

return (
<main>
<section id="home" className="hero">
<div className=" hero-content">
<h1>FuzzAds – Powering Your Social Media Growth! The Ultimate Cheap & Fast SMM Panel.</h1>
<p>
The Best and Most Affordable SMM Panel for Instagram, Facebook, YouTube & Twitter.
Get High-Quality Services at the Lowest Prices with Lightning-Fast Order Completion.
</p>
</div>
<Login />
</section>

<div className="wave">  
    <svg viewBox="0 0 1440 320">  
      <path  
        fill="#f5f1e8"  
        fillOpacity="1"  
        d="M0,160L60,170C120,180,240,200,360,208C480,216,600,212,720,186.7C840,160,960,112,1080,96C1200,80,1320,96,1380,104L1440,112V320H0Z">  
      </path>  
    </svg>  
  </div>  


  {/* ----------------- Features Section ----------------- */}  

  <section id="features" className="features-section">  
    <h2 className="features-title">Why order SMM services here?</h2>  
    <p>Learn how you can benefit from ordering SMM services on our panel..</p>  
    <div className="features-container">  

      <div className="feature-card">  
        <div className="icon-circle">  
          <FaMedal size={40} />  
        </div>  
        <h3>Prime quality</h3>  
        <p>  
          Enjoy excellent SMM services at amazing prices!!  
        </p>  
      </div>  

      <div className="feature-card">  
        <div className="icon-circle">  
          <FaDollarSign size={40} />  
        </div>  
        <h3>Various payment options</h3>  
        <p>  
          You can add funds via any payment option we provide..  
        </p>  
      </div>  

      <div className="feature-card">  
        <div className="icon-circle">  
          <FaCartPlus size={40} />  
        </div>  
        <h3>Cheap services</h3>  
        <p>  
          We always make sure that our services are affordable..  
        </p>  
      </div>  

      <div className="feature-card">  
        <div className="icon-circle">  
          <FaRocket size={40} />  
        </div>  
        <h3>Super fast delivery</h3>  
        <p>  
          You can rest assured that your orders will be delivered fast..  
        </p>  
      </div>  

    </div>  
  </section>  

  <div className="concave">  
    <svg viewBox="0 0 1440 320">  
      <path  
        fill="#8daa91"  
        d="M0,0 C720,120 720,120 1440,0 L1440,320 L0,320 Z"  
      />  
    </svg>  
  </div>  
  { /*--------------------How Its Work------------------*/}  



  <section className="how-section">  
    <h2 className="section-title">How It Works</h2>  
    <p className="section-subtitle">  
      Follow these 4 easy steps to get started  
    </p>  

    <div className="steps-container">  
      <div className="step">  
        <div className="circle">  
          <FaSignInAlt size={30} />  
        </div>  
        <h3>Register & Login</h3>  
        <p>Create your account and login.</p>  
      </div>  

      <div className="arrow">  
        <svg  
          width="120"  
          height="40"  
          viewBox="0 0 120 40"  
          fill="none"  
          xmlns="http://www.w3.org/2000/svg"  
        >  
          <path  
            d="M5 20 Q60 0 110 20"  
            stroke="white"  
            strokeWidth="2"  
            fill="transparent"  
          />  
          <polygon points="105,15 120,20 105,25" fill="white" />  
        </svg>  
      </div>  

      <div className="step">  
        <div className="circle">  
          <FaDollarSign size={30} />  
        </div>  
        <h3>Add Funds</h3>  
        <p>Add balance using your preferred method.</p>  
      </div>  
      <div className="arrow1">  
      <svg  
        width="120"  
        height="40"  
        viewBox="0 0 120 40"  
        fill="none"  
        xmlns="http://www.w3.org/2000/svg"  
      >  
        <path  
          d="M5 20 Q60 0 110 20"  
          stroke="white"  
          strokeWidth="2"  
          fill="transparent"  
        />  
        <polygon points="105,15 120,20 105,25" fill="white" />  
      </svg>  
    </div>  

    <div className="step">  
      <div className="circle">  
        <FaCartPlus size={30} />  
      </div>  
      <h3>Place Order</h3>  
      <p>Select service and confirm your order.</p>  
    </div>

 <div className="arrow">  
        <svg  
          width="120"  
          height="40"  
          viewBox="0 0 120 40"  
          fill="none"  
          xmlns="http://www.w3.org/2000/svg"  
        >  
          <path  
            d="M5 20 Q60 0 110 20"  
            stroke="white"  
            strokeWidth="2"  
            fill="transparent"  
          />  
          <polygon points="105,15 120,20 105,25" fill="white" />  
        </svg>  </div>  
        <div className="step">  
          <div className="circle">  
            <FaChartLine size={30} />  
          </div>  
          <h3>Get Results</h3>  
          <p>Enjoy amazing results instantly.</p>  
        </div>  
</div>  
      </section >  <div className="wave1">  
        <svg viewBox="0 0 1440 320">  
          <path  
            fill="#163020"  
            fillOpacity="1"  
            d="M0,160L60,170C120,180,240,200,360,208C480,216,600,212,720,186.7C840,160,960,112,1080,96C1200,80,1320,96,1380,104L1440,112V320H0Z">  
          </path>  
        </svg>  
      </div>  {/* ---------------- Customer Reviews ---------------- */}

</main>  
  );  
}