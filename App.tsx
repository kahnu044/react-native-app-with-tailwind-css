/**
 * Sample React Native App With Tailwind CSS
 * https://github.com/kahnu044/react-native-app-with-tailwind-css
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

const App: () => Node = () => {

  const backgroundStyle =
    'bg-[#748ef6] h-screen flex justify-center items-center';

  return (
    <SafeAreaView className={backgroundStyle}>
      <View>
        <Text className="text-white text-2xl">Welcome To DeveloperNoob</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
