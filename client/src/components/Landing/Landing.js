import React from 'react';
import styles from './Landing.module.css';
import axios from "axios";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {incoming: "Calling API..."};
  }

  componentDidMount() {
      axios.get("/api/test")
      .then(({data : {message}}) => {
          console.log(message)
          this.setState({incoming: message})
      })
  }

  render() {
    return (<div className={styles.LandingContainer}>
    <div>
      <h1><span role="img" aria-label="computer-emoji">💻</span> Welcome to React + Express Boilerplate.</h1>
      <h3>This boilerplate is powered by <code><a className={styles.Link} href="https://create-react-app.dev">create-react-app</a></code> with Node & Express backend.</h3>
      <h3>See <code>package.json</code> for the full list of dependencies.</h3>
      <h3>Visit <code>/api/test</code> to go to the test api route.</h3>
      <h3>Click <a className={styles.Link} href="https://github.com/isaac1104/create-react-express">here</a> for documentation.</h3>
    <h2>{this.state.incoming}</h2>
    </div>
  </div>);
  };
}

export default Landing;