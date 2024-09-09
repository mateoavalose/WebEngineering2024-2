import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Membership = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Container className="membership-container">
      <h1>Exclusive Memberships</h1>
      
      <Col className="tiers">
        <h2>Available Tiers</h2>
        <Col className="tier-grid">
          <Row className="tier-grid-card">
            <h3>Bronze Member</h3>
            <p>Basic benefits with minimal access to exclusive content.</p>
            <p>Strictly legal benefits included.</p>
            <p>50$ monthly</p>
          </Row>
          <Row className="tier-grid-card">
            <h3>Silver Member</h3>
            <p>Better perks, including discounts and more exclusive content.</p>
            <p>Not strictly legal benefits included.</p>
            <p>100$ monthly</p>
          </Row>
          <Row className="tier-grid-card">
            <h3>Gold Member</h3>
            <p>Top-tier benefits, access to all content, and premium perks.</p>
            <p>Access to everything we have to offer.</p>
            <p>500$ monthly</p>
          </Row>
        </Col>
      </Col>

      <div className="access">
        <h2>{isLoggedIn ? 'Exclusive Content' : 'Member Access'}</h2>

        {isLoggedIn ? (
          <div className="loggedIn">
            <p>Welcome, esteemed member! Here are your exclusive benefits:</p>
            <ul>
              <li>Access to private content</li>
              <li>Member-only discounts</li>
              <li>Not strictly legal business deals</li>
            </ul>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <div className="login-signup">
              <h3>Login to Access Exclusive Content</h3>
              <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="button" onClick={handleLogin}>Login</button>
              </form>
              <p>New member? <a href="/signup">Sign up here!</a></p>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};
