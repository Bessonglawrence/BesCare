import { View, Platform, StyleSheet} from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  const icons = {
    index : (props: any) => (<Feather name='home' size={24} {...props}/>),
    profile : (props: any) => (<Feather name='user' size={24} {...props} />),
    notifications : (props: any) => (<Feather name='bell' size={24} {...props}/>),
  }
  return (
    <View style={styles.tabBar}>
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
          <PlatformPressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
          >
            {icons[route.name]({ color: isFocused ? "brown" : colors.text })}
            <Text style={{ color: isFocused ? "brown" : colors.text }}>
                {(label as string).charAt(0).toUpperCase() + (label as string).slice(1)}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  tabBar: {
   position: 'absolute',
   bottom: 50,
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
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    padding: 10,
  }
});