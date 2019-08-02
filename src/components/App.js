import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'
import About from './About'
import Vip from './Vip'
// import Prifile from './Prifile'
import NoMatch from './Error'
import queryString from 'query-string'


const User = (props) => {
  // console.log(props)
  // const params=new URLSearchParams(props.location.search)
  // console.log(params.get('aa'))
  const values = queryString.parse(props.location.search)
  console.log(values)
  return (
    <div>
      {props.match.params.id}
    </div>
  )
}

class DynameicImport extends Component{
  state={
    component:null
  }
  //componentDidMount
  componentWillMount(){
    this.props.load().then((mod)=>this.setState({
      component:mod.default
    }))
  }
  render(){
    return this.props.children(this.state.component)
  }
}

const Prifile =(props)=>(
  <DynameicImport load={()=>import('./Prifile')}>
    {(Component)=>Component===null
      ? <h1>Loding....</h1>
      : <Component {...props} />
    }
  </DynameicImport>
)

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li ><NavLink exact activeStyle={{ color: 'green' }} to="/">Home</NavLink></li>
            <li ><NavLink activeStyle={{ color: 'green' }} to="/about">about</NavLink></li>
            <li ><NavLink activeStyle={{ color: 'green' }} to="/vip">vip</NavLink></li>
            <li ><NavLink activeStyle={{ color: 'green' }} to="/users/yy">users</NavLink></li>
            <li ><NavLink activeStyle={{ color: 'green' }} to="/prifile">Profile</NavLink></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Vip} />
            <Route path="/about" component={About} />
            <Route path="/vip" component={Vip} />
            <Route path="/users/:id" component={User} />
            <Route path="/prifile" component={Prifile} />
            <Route component={NoMatch} />
          </Switch>

        </div>
      </Router>

    );
  }
}

export default App;
