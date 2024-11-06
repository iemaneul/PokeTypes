import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from './imports';
import ScrollContent from './ScrollContent';
import Tips from './Tips';

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: '#2A2A2A', flex: 1 }}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 15 }}>
        <ScrollContent />
        <Tips />
      </ScrollView>
    </SafeAreaView>
  );
}