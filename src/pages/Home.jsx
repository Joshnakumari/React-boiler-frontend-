import React from "react";

const Home = () => {
  return (
    <div className="container my-5">
      <div className="bg-white p-5 rounded shadow-sm" style={{ background: 'linear-gradient(to right, #ffe0b2, #ffccbc)' }}>
        <h1 className="mb-4 text-center text-dark">👋 Welcome to Your React Boilerplate</h1>

        <p className="lead">
          🚀 This boilerplate offers a modern and minimal setup for building fast, scalable React applications.
          It comes bundled with <strong>React Router</strong> for navigation and custom styling for a beautiful user experience.
        </p>

        <p>
          🎯 Use this landing page to briefly introduce your project or product. It’s the first impression—
          clean, focused, and easy to navigate.
        </p>

        <p>
          🛠️ As your app grows, extend it with tools like <strong>Redux</strong>, <strong>Context API</strong>, or <strong>API integrations</strong>.
          This template is designed to help you stay organized and productive from the start.
        </p>

        <p>
          ✨ Want more features? Add animations, charts, or authentication—all are just a few components away.
          Your creativity defines the limit!
        </p>
      </div>
    </div>
  );
};

export default Home;
