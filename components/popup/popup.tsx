// PopUp component
import React from 'react';

interface PopUpProps {
  onClose: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ onClose }) => {
  return (
    <div className="popup">
      <p>Would you like to chat?</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PopUp;
