import React, { useState } from "react";
function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  return (
    <div>
      <h1>Welcome to Our Website!</h1>
      {isSubscribed ? (
        <SubscribedContent />
      ) : (
        <div>
          <p>Subscribe to unlock premium content:</p>
          <button onClick={() => setIsSubscribed(true)}>Subscribe Now</button>
        </div>
      )}
    </div>
  );
}
function SubscribedContent() {
  return (
    <div>
      <h2>Premium Content</h2>
      <p>
        Thank you for subscribing! You now have access to exclusive articles and
        features.
      </p>
    </div>
  );
}
export default App;
