import React from 'react';
import { View, Text, Image } from 'react-native';
import * as assets from './assets';

const Tips = () => {
  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{
        fontSize: 18,
        color: '#FFF',
      }}>
        Immunitites
      </Text>
        <View style={{ height: 80, flexDirection: 'row', alignItems: 'center' }}>
          <Image 
            source={assets.normal} 
            style={{ 
              borderRadius: 100, 
              width: 50, 
              height: 50, 
            }}
          />
          <Text style={{color: '#FFFFFF', paddingHorizontal: 20}}>is immune to</Text>
          <Image 
            source={assets.ghost} 
            style={{
              borderRadius: 100, 
              width: 50, 
              height: 50, 
            }}
          />
        </View>
        <View style={{ height: 80, flexDirection: 'row', alignItems: 'center', marginLeft: 60 }}>
          <Image 
            source={assets.ghost} 
            style={{ 
              borderRadius: 100, 
              width: 50, 
              height: 50, 
            }}
          />
          <Text style={{color: '#FFFFFF', paddingHorizontal: 20}}>is immune to</Text>
          <View style={{flexDirection: 'row'}}>
            <Image 
              source={assets.normal} 
              style={{
                borderRadius: 100, 
                width: 50, 
                height: 50, 
              }}
            />
            <Image 
              source={assets.fighting} 
              style={{
                borderRadius: 100, 
                width: 50, 
                height: 50,
                marginLeft: 10,
              }}
            />
          </View>
        </View>
        <View style={{ height: 80, flexDirection: 'row', alignItems: 'center' }}>
          <Image 
            source={assets.flying} 
            style={{ 
              borderRadius: 100, 
              width: 50, 
              height: 50, 
            }}
          />
          <Text style={{color: '#FFFFFF', paddingHorizontal: 20}}>is immune to</Text>
          <Image 
            source={assets.ground} 
            style={{
              borderRadius: 100, 
              width: 50, 
              height: 50, 
            }}
          />
        </View>
        <View style={{ height: 80, flexDirection: 'row', alignItems: 'center' }}>
          <Image 
            source={assets.ground} 
            style={{ 
              borderRadius: 100, 
              width: 50, 
              height: 50, 
            }}
          />
          <Text style={{color: '#FFFFFF', paddingHorizontal: 20}}>is immune to</Text>
          <Image 
            source={assets.eletric} 
            style={{
              borderRadius: 100, 
              width: 50, 
              height: 50, 
            }}
          />
        </View>
        <View style={{ height: 80, flexDirection: 'row', alignItems: 'center' }}>
          <Image 
            source={assets.fairy} 
            style={{ 
              borderRadius: 100, 
              width: 50, 
              height: 50, 
            }}
          />
          <Text style={{color: '#FFFFFF', paddingHorizontal: 20}}>is immune to</Text>
          <Image 
            source={assets.dragon} 
            style={{
              borderRadius: 100, 
              width: 50, 
              height: 50, 
            }}
          />
        </View>
        <View style={{ height: 80, flexDirection: 'row', alignItems: 'center' }}>
          <Image 
            source={assets.dark} 
            style={{ 
              borderRadius: 100, 
              width: 50, 
              height: 50, 
            }}
          />
          <Text style={{color: '#FFFFFF', paddingHorizontal: 20}}>is immune to</Text>
          <Image 
            source={assets.psychic} 
            style={{
              borderRadius: 100, 
              width: 50, 
              height: 50, 
            }}
          />
        </View>
        <View style={{ height: 80, flexDirection: 'row', alignItems: 'center' }}>
          <Image 
            source={assets.steel} 
            style={{ 
              borderRadius: 100, 
              width: 50, 
              height: 50, 
            }}
          />
          <Text style={{color: '#FFFFFF', paddingHorizontal: 20}}>is immune to</Text>
          <Image 
            source={assets.poison} 
            style={{
              borderRadius: 100, 
              width: 50, 
              height: 50, 
            }}
          />
        </View>
    </View>
  );
};

export default Tips;
