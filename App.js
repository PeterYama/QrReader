import React,{Component} from 'react';
import UserLogin from './components/loginPage'
  
export default class App extends Component{
  state = {
      accounts:{
        userName:'Peter',
        password:'123',
      }
  }
  render(){
    return (
      <UserLogin user={this.state.accounts}/>
    );
  }
}

