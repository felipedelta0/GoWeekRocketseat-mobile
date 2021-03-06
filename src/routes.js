import { createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Timeline from './pages/Timeline';
import NewTweet from './pages/New';

const Routes = createStackNavigator({
    Login,
    Timeline,
    NewTweet,
});

export default Routes;