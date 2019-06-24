import React from 'react';
import UserList from "./components/user-list";

import styled from 'styled-components';

const AppFont = styled.div`
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
`;

function App() {
  return (
    <AppFont className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <UserList/>
      </header>
    </AppFont>
  );
}

export default App;
