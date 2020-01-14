import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import loginPage from '../components/loginPage';
import cameraView from '../components/cameraView';

const screens = {
    loginPage: {
        screen: loginPage
    },
    cameraView:{
        screen: cameraView
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
