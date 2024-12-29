import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email, // Corrected reference to email
          password: password, // Corrected reference to password
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/'); // Navigate to home page
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Network error occurred. Please try again.');
    }
  };
  
  
  
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <p className="subtitle">Please enter your details to sign in</p>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
            />
          </div>
          
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button">
            Sign in
          </button>
        </form>

        <p className="signup-link">
          Don't have an account ? <Link to="/signup">Don't Worry Create It</Link>
        </p>
      </div>

      <style jsx>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg,rgb(167, 206, 234) 0%,rgb(134, 205, 229) 100%);
          padding: 20px;
        }

        .login-box {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
          backdrop-filter: blur(10px);
        }

        h2 {
          color: #1f2937;
          font-size: 2rem;
          margin-bottom: 8px;
          text-align: center;
        }

        .subtitle {
          color: #6b7280;
          text-align: center;
          margin-bottom: 24px;
        }

        .input-group {
          margin-bottom: 20px;
        }

        input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
        }

        input:focus {
          border-color:rgb(135, 202, 233);
          outline: none;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .login-button {
          width: 100%;
          padding: 12px;
          background:rgb(24, 145, 225);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .login-button:hover {
          background: #4f46e5;
          transform: translateY(-1px);
        }

        .error-message {
          color: #ef4444;
          margin-bottom: 16px;
          text-align: center;
          font-size: 0.875rem;
        }

        .signup-link {
          margin-top: 24px;
          text-align: center;
          color: #6b7280;
        }

        .signup-link a {
          color: #6366f1;
          text-decoration: none;
          font-weight: 600;
        }

        .signup-link a:hover {
          text-decoration: underline;
        }

        @media (max-width: 640px) {
          .login-box {
            padding: 24px;
          }

          h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;

