import './Nav.css';

import React from 'react';

export function Nav() {
  return (
    <nav>
      <h2 className="btn">Logo</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Store</li>
        <li>Team</li>
        <li>Projects</li>
      </ul>
    </nav>
  );
}
