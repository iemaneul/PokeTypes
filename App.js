import { Text, SafeAreaView, ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Bug from './components/Bug';
import Dark from './components/Dark';
import Dragon from './components/Dragon';
import Eletric from './components/Eletric';
import Fairy from './components/Fairy';

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: '#2A2A2A', flex: 1 }}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 15 }}>
        <Bug />
        <Dark />
        <Dragon />
        <Eletric />
        <Fairy />
      </ScrollView>
    </SafeAreaView>
  );
}
