import React, { Component } from 'react';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import Main from "../containers/Main";
import {configureStore} from "../store";
import Navbar from "./Navbar";
import jwtDecode from "jwt-decode";
import {setTokenHeader} from "../services/api";
import {addUser} from "../store/actions/currentUser";
export const store = configureStore();
if(localStorage.length > 0){
  const user = jwtDecode(localStorage.jwtToken);
  store.dispatch(addUser(user));
  setTokenHeader(user.token);
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar/>
            <div className="main">
              <Main/>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
