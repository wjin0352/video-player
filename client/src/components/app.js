import React, { Component } from 'react';
import { render } from 'react-dom';
// For material ui access wrap child components in MuiThemeProvider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// // Needed for onTouchTap 
// // http://stackoverflow.com/a/34015469/988941 
// injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div>{this.props.children}</div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
