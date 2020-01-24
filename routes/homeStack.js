import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import loginPage from '../components/loginPage';
import cameraView from '../components/cameraView';
import errorPage from '../components/errorPage';
import productList from '../components/productList';

const screens = {
    loginPage: {
        screen: loginPage
    },
    cameraView:{
        screen: cameraView
    },
    errorPage:{
        screen: errorPage
    },
    productList:{
        screen:productList
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
