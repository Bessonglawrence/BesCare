import React,{useState} from 'react';
import { View, Platform, StyleSheet, TouchableOpacity, Touchable, LayoutChangeEvent} from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { icon } from '@/constants/icon';
import  TabBarButton  from '@/components/TabBarButton/TabBarButton.component';
import Animated,{ useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  const [dimensions, setDimensions] = useState({
    width: 20,
    height: 100,
  });

  const buttonWidth = dimensions.width / state.routes.length;
  const buttonHeight = dimensions.height; // Adjust height as needed

  const onTabBarLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setDimensions({ width, height });
  };

  const tabPositionX = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: tabPositionX.value,
        },
      ],
    };
  });

  return (
    <View onLayout={onTabBarLayout} style={styles.tabBar}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            width: buttonWidth - 35, // Adjust width to fit the button
            height: buttonHeight,
            backgroundColor: 'brown',
            borderRadius: 40,
            left: 17, // Adjust left position to center the indicator
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 3.5,
            elevation: 5,
          },
          animatedStyle,
        ]}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          tabPositionX.value = withSpring(index * buttonWidth, {duration: 2000});
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            label={label}
            colors={isFocused ? 'brown' : '#222'}
          />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  tabBar: {
   position: 'absolute',
   bottom: 20,
   flexDirection: 'row',
   backgroundColor: 'ghostwhite',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginHorizontal: 45,
   borderRadius: 40,
   shadowOffset: {
     width: 0,
     height: 10,
   },
   shadowColor: '#000',
   shadowOpacity: 0.25,
   shadowRadius: 3.5,
   elevation: 5,
  },
});