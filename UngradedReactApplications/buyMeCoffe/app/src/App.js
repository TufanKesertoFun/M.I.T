import React, { useState } from 'react';
import './App.css';

const FunnyButton = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [audio] = useState(new Audio('/happybirthday.mp3'));

  const handleClick = () => {
    setShowAnimation(true);
    setShowMessage(true);
    audio.play().catch((error) => console.error('Audio playback failed:', error));

    setTimeout(() => {
      setShowAnimation(false);
      setShowMessage(false);
      audio.pause();
      audio.currentTime = 0;
    }, 10000);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: '#FFDD00',
          border: 'none',
          borderRadius: '5px',
          color: '#000',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Buy me Coffee For my birthday 
      </button>
      {showAnimation && (
        <div className="johnny-bravo-container">
          <img src="/johnnybravoogo.png" alt="Johnny Bravo" className="johnny-bravo" />
          {showMessage && (
            <div className="message">
              All you need to do is think, thanks a bunch, pals! No coffee required! Thanks for celebrating!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FunnyButton;
