import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import loginPage from '../components/loginPage';
import cameraView from '../components/cameraView';
import errorPage from '../components/errorPage';
import productList from '../components/productList';
import AuthScreen from '../controllers/googleLogin';
import Login from '../controllers/facebook';
import createAccount from '../components/accountRegistration';

const screens = {
    "Login Page": {
        screen: loginPage
    },
    "Camera View": {
        screen: cameraView
    },
    "Error Page": {
        screen: errorPage
    },
    "Product List": {
        screen: productList
    },
    "AuthScreen": {
        screen: AuthScreen
    },
    "Login": {
        screen: Login
    },
    "Create Account": {
        screen: createAccount
    }
}
const HomeStack = createStackNavigator(screens, { headerMode: false });

export default createAppContainer(HomeStack);
