import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile119132Navigator from '../features/UserProfile119132/navigator';
import Tutorial119131Navigator from '../features/Tutorial119131/navigator';
import NotificationList119103Navigator from '../features/NotificationList119103/navigator';
import Settings119102Navigator from '../features/Settings119102/navigator';
import Settings119094Navigator from '../features/Settings119094/navigator';
import UserProfile119092Navigator from '../features/UserProfile119092/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile119132: { screen: UserProfile119132Navigator },
Tutorial119131: { screen: Tutorial119131Navigator },
NotificationList119103: { screen: NotificationList119103Navigator },
Settings119102: { screen: Settings119102Navigator },
Settings119094: { screen: Settings119094Navigator },
UserProfile119092: { screen: UserProfile119092Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
