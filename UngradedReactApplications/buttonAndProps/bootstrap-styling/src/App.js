import React from 'react';
import Button from './Button';

const App = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div>
            <Button
                onClick={handleClick}
                type="button"
                disabled={false}
                label="Click me"
            />
            <Button
                onClick={() => console.log('Another button clicked!')}
                type="button"
                disabled={true}
                label="Disabled button"
            />
        </div>
    );
};

export default App;
