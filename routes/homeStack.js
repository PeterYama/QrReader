import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import loginPage from '../components/loginPage';
import cameraView from '../components/cameraView';
import errorPage from '../components/errorPage';
import productList from '../components/productList';

const screens = {
    "Login Page": {
        screen: loginPage
    },
    "Camera View":{
        screen: cameraView
    },
    "Error Page":{
        screen: errorPage
    },
    "Product List":{
        screen:productList
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
