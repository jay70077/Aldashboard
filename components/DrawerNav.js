
import {createDrawerNavigator,createAppContainer} from 'react-navigation';
import Dashboard from './Dashboard';
import Chart from './chart'
// eslint-disable-next-line no-unused-vars
import Myheader from './Header';
const DrawerNavigator = createDrawerNavigator(
    {
        Home: Dashboard,
        Settings: Chart,
    },
    {
        hideStatusBar: true,
        drawerBackgroundColor: 'rgba(255,255,255,.9)',
        overlayColor: '#6b52ae',
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#6b52ae',
        },
    }
);

export default createAppContainer(DrawerNavigator);