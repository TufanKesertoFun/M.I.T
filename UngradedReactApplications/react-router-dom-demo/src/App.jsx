import React from "react";

function App() {
  return (
    <div>
      <ul>
        <li>
          <a href={`/contacts`}>Contacts</a>
        </li>
        <li>
          <a href={`/about`}>About</a>
        </li>
        <li>
          <a href={`/products`}>Products</a>
        </li>
      </ul>
    </div>
  );
}

export default App;