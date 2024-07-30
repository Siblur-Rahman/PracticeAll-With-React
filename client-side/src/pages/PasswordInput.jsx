import { useState } from 'react';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    // Allow input only if it's a number and less than or equal to 5 digits
    if (/^\d{0,5}$/.test(value)) {
      setPassword(value);
    }
  };

  // Validate password
  const validatePassword = () => {
    if (password.length === 5) {
      setMessage('Password is valid!');
    } else {
      setMessage('Password must be exactly 5 digits long.');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    validatePassword();
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Enter 5-digit password:
          <input
            type="text"
            value={password}
            onChange={handleChange}
            maxLength={5} // Restrict input to 5 characters
            placeholder="Enter password"
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      {message && <p style={message === 'Password is valid!' ? styles.success : styles.error}>{message}</p>}
    </div>
  );
};

// Basic styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  label: {
    marginBottom: '10px',
    fontSize: '16px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    width: '150px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
  },
  success: {
    color: 'green',
  },
};

export default PasswordInput;
