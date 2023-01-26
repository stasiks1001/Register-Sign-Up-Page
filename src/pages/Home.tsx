import { Link } from 'react-router-dom';

function Home() {
  const handleFunction = () => {};
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h1>Register Page</h1>
      <button
        style={{
          height: '3rem',
          borderRadius: '10px',
          backgroundColor: ' rgb(11, 195, 195)',
          border: 'none',
          color: 'green',
          fontSize: '1.2rem',
          cursor: 'pointer',
        }}
        onClick={handleFunction}
      >
        <Link
          to="/form"
          style={{
            textDecoration: 'none',
            color: 'rgb(174, 255, 0)',
            backgroundColor: ' rgb(11, 195, 195)',
          }}
        >
          Go to Form
        </Link>
      </button>
    </div>
  );
}

export default Home;
