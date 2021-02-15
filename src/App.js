import React from 'react';
// import { observer } from 'mobx-react'
import './index.css';
import { ThemeProvider,LanguageProvider } from "./theme"
import { HashRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from "react-router";
import NavBar from './components/navbar/Navbar';

function App() {
 
  return (
    <ThemeProvider>
      
      <LanguageProvider>
      <div className="bg-gray-100 dark:bg-gray-800 h-screen scrollbar " >
        <HashRouter>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/home" />} />
            {/* <Route path="/home/login" exact render={() => <Redirect to="/login" />} /> */}
            <Route path="/home" component={NavBar} />
            {/* <Route path="/login" component={Toggle} /> */}
          </Switch>
        </HashRouter>
      </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
