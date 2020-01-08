import React from "react";
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';

function App() {
  return (
    <div className="App">
      <p>
        <FormattedHTMLMessage
          id="app.text"
          defaultMessage="Hello, welcome {user}"
          description="Welcome message"
          values={{ user: "John Doe" }}/>
      </p>
      <a href="https://www.positronx.io" target="_blank" rel="noopener noreferrer">
        <FormattedMessage
          id="app.link"
          defaultMessage="Go to link"
          description="Check website"/>
      </a>
    </div>
  );
}

export default App;