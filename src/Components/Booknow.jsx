// BookNowButton.jsx
import { useNavigate } from 'react-router-dom';

function BookNowButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout');
  };

  return (
    <button onClick={handleClick} className="btn-primary">
      Book Now
    </button>
  );
}

export default BookNowButton;
