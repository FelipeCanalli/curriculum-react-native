import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import QuemSouScreen from "../screens/QuemSouScreen";
import CompetenciasScreen from "../screens/CompetenciasScreen";
import FormacaoScreen from "../screens/FormacaoScreen";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="QuemSou"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Quem Sou Eu"
        component={QuemSouNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user-circle" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Competências"
        component={CompetenciasNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="github" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Formação Acadêmica"
        component={FormacaoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="graduation-cap" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const QuemSouStack = createStackNavigator();
function QuemSouNavigator() {
  return (
    <QuemSouStack.Navigator>
      <QuemSouStack.Screen
        name="QuemSouScreen"
        component={QuemSouScreen}
        options={{ headerTitle: "Quem sou eu" }}
      />
    </QuemSouStack.Navigator>
  );
}

const CompetenciasStack = createStackNavigator();

function CompetenciasNavigator() {
  return (
    <CompetenciasStack.Navigator>
      <CompetenciasStack.Screen
        name="CompetenciasScreen"
        component={CompetenciasScreen}
        options={{ headerTitle: " Competências" }}
      />
    </CompetenciasStack.Navigator>
  );
}

const FormacaoStack = createStackNavigator();

function FormacaoNavigator() {
  return (
    <FormacaoStack.Navigator>
      <FormacaoStack.Screen
        name="FormacaoScreen"
        component={FormacaoScreen}
        options={{ headerTitle: " Formação" }}
      />
    </FormacaoStack.Navigator>
  );
}
