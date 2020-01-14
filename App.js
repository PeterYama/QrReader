import React,{Component} from 'react';
import UserLogin from './components/loginPage'
import Navigator from './routes/homeStack'
  
export default class App extends Component{
  state = {
      accounts:{
        userName:'Peter',
        password:'123',
      }
  }
  render(){
    return (
      <Navigator />
    );
  }
}
   
{/* <UserLogin user={this.state.accounts}/> */}
 
