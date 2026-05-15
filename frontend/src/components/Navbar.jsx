import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-10 py-6 text-white">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold">
          L
        </div>

        <h1 className="text-2xl font-bold">
          Logara AI
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 text-neutral-300">

      <Link
  to="/#features"
  className="hover:text-white transition"
>
  Features
</Link>

<Link
  to="/#architecture"
  className="hover:text-white transition"
>
  Architecture
</Link>
        <Link
          to="/docs"
          className="hover:text-white transition"
        >
          Docs
        </Link>

        <a
          href="https://github.com/Dharanish-AM/Logara-AI"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>

      </div>

      {/* CTA */}
      <button
        onClick={() => navigate('/dashboard')}
        className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:bg-neutral-200 transition"
      >
        Get Started
      </button>

    </nav>
  );
};

export default Navbar;