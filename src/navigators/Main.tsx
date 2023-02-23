import * as React from 'react';
import {
  Alert,
  Animated,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';

import Home from '@screens/Home';
import {assets} from '@assets/assets';
import styles from './styles';

export type MainParamList = {
  Home: undefined;
};

const MainNavigator = () => {
  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = null;
    const isSelected = routeName === selectedTab ? '#3494AA' : '#7A7A7A';

    switch (routeName) {
      case 'Beranda':
        icon = assets.images.homeIcon;
        break;
      case 'Eksplor':
        icon = assets.images.squareFourIcon;
        break;
      case 'Berlian':
        icon = assets.images.diamondIcon;
        break;
      case 'Profil':
        icon = assets.images.userIcon;
        break;
    }

    return (
      <Image source={icon} style={[styles.navIcon, {tintColor: isSelected}]} />
    );
  };

  const renderTabBar = ({routeName, selectedTab, navigate}: any) => {
    const isSelected = routeName === selectedTab ? '#3494AA' : '#7A7A7A';

    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
        <Text style={[styles.navText, {color: isSelected}]}>{routeName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <CurvedBottomBar.Navigator
        style={styles.bottomBar}
        strokeWidth={0.5}
        strokeColor="transparent"
        height={55}
        circleWidth={50}
        bgColor="white"
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Beranda"
        renderCircle={({selectedTab, navigate}) => (
          <Animated.View style={styles.btnCircle}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
              }}
              onPress={() => Alert.alert('Click Action')}>
              <Image
                source={assets.images.bookCloseIcon}
                style={{width: 25, height: 25, tintColor: 'white'}}
              />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen
          name="Beranda"
          position="LEFT"
          component={() => <Home />}
        />
        <CurvedBottomBar.Screen
          name="Eksplor"
          position="LEFT"
          component={() => <View style={{backgroundColor: '#FFF', flex: 1}} />}
        />
        <CurvedBottomBar.Screen
          name="Berlian"
          component={() => <View style={{backgroundColor: '#FFF', flex: 1}} />}
          position="RIGHT"
        />
        <CurvedBottomBar.Screen
          name="Profil"
          component={() => <View style={{backgroundColor: '#FFF', flex: 1}} />}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};

export default MainNavigator;
