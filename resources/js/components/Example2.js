import React from 'react';
import ReactDOM from 'react-dom';

function Example2() {
    return (
        <div className="container">
            hello there
        </div>
    );
}

export default Example2;

if (document.getElementById('example2')) {
    ReactDOM.render(<Example2 />, document.getElementById('example2'));
}
