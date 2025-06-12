import React from "react";
import { FaReact, FaFolderOpen, FaTools, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background: "linear-gradient(135deg, #ffe0b2 0%, #ffccbc 100%)",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-dark">
            <FaReact className="me-2 text-primary" /> About This Project
          </h1>
          <p className="lead text-muted">
            A clean and scalable React boilerplate to kickstart your apps.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  <FaRocket className="me-2" />
                  Purpose
                </h5>
                <p className="card-text">
                  This boilerplate speeds up project setup by including routing, layout, and custom styling out of the box. No repetitive configs!
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title text-success">
                  <FaFolderOpen className="me-2" />
                  Folder Structure
                </h5>
                <ul className="mb-0">
                  <li><strong>components/</strong> - Reusable UI elements</li>
                  <li><strong>pages/</strong> - Page-level views</li>
                  <li><strong>routes/</strong> - Route config</li>
                  <li><strong>utils/</strong> - Helper functions</li>
                  <li><strong>assets/</strong> - Static resources</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title text-warning">
                  <FaTools className="me-2" />
                  What's Next?
                </h5>
                <p className="card-text">
                  This template can easily be extended with:
                  <ul>
                    <li>🔐 Authentication flows</li>
                    <li>📡 API integration (Axios, React Query)</li>
                    <li>📦 State management (Redux, Context)</li>
                    <li>🔁 Custom hooks, theming, testing, etc.</li>
                  </ul>
                </p>
                <p className="fw-semibold text-center mt-3">
                  🚀 Fork it, build on it, and make it your own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
