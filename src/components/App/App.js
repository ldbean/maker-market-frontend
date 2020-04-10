import React from 'react';
import jwt_decode from 'jwt-decode';
import setAuthHeader from '../../utils/setAuthHeader';
import './App.css';
import UserApi from '../../api/UserApi'
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import Routes from '../../config/routes';

class App extends React.Component {

  state = {
    user: '',
    id: ''
  }

  componentDidMount() {
    if (localStorage.jwtToken) {
      setAuthHeader(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.getItem('jwtToken'));
      this.setState({
        user: decoded.username,
        id: decoded._id
      })
    }
  }

  register = (user) => {
    UserApi.register(user)
      .then(res => {
        if (res.status === 200) {
          const token = res.data.token;
          localStorage.setItem('jwtToken', token);
          setAuthHeader(token);
          const decoded = jwt_decode(token);
          this.setState({
            user: decoded.username,
            id: decoded._id
          })
        }
      })
      .catch(err => console.log(err));
  }

  login = (user) => {
    UserApi.login(user)
    .then(res => {
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthHeader(token);
        const decoded = jwt_decode(token);
        this.setState({
          user: decoded.username,
          id: decoded._id
        })
      }
    })
    .catch(err => console.log(err));
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    setAuthHeader();
    this.setState({
      user: '',
      id: ''
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar
          logout={this.logout}
          user={this.state.user}        
        />
        <Routes
          user={this.state.user}
          login={this.login}
          register={this.register} 
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
