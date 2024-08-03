import { useState } from 'react';
import '../css/welcome.css';

export default function Welcome() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Remove' : 'Show'}
      </button>
      <hr />
      {show && <h1 className="welcome">Welcome</h1>}
    </div>
  );
}
