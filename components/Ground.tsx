import { Text, SafeAreaView, View, Image } from 'react-native';
import * as assets from '../assets';

export default function Fairy() {
  return (
      <View style={{justifyContent: 'space-evenly', flex: 1, marginBottom: 90}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={{ padding: 10 }}>
            <Text style={{ color: '#FFFFFF' }}>
              Weak against
            </Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ color: '#FFFFFF' }}>
            </Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ color: '#FFFFFF' }}>
              Strong against
            </Text>
          </View>
        </View>
        <View style={{ 
          flexDirection: 'row', 
          justifyContent: 'space-evenly', 
          flex: 1, 
          marginHorizontal: 25, 

          position: 'relative'
        }}>
          <View 
            style={{ 
              backgroundColor: '#1B1B1B', 
              width: '50%', 
              height: 60, 
              borderTopLeftRadius: 15, 
              alignItems: 'flex-start',
              flexDirection: 'row',
              paddingHorizontal: 15,
              paddingVertical: 20
            }}
          >
            <Image 
              source={assets.grass} 
              style={{ 
                width: 20, 
                height: 20, 
              }}
            />
            <Image 
              source={assets.ice} 
              style={{ 
                width: 20, 
                height: 20,
                marginHorizontal: 5
              }}
            />
            <Image 
              source={assets.water} 
              style={{ 
                width: 20, 
                height: 20, 
              }}
            />
          </View>
          <View 
            style={{ 
              backgroundColor: '#1B1B1B', 
              width: '50%', 
              height: 60, 
              borderTopRightRadius: 15, 
              justifyContent: 'flex-end', 
              alignItems: 'flex-end',
              flexDirection: 'row',
              paddingHorizontal: 15,
              paddingVertical: 20
            }}
          >
            <Image 
              source={assets.eletric} 
              style={{ 
                width: 20, 
                height: 20, 
              }}
            />
            <Image 
              source={assets.fire} 
              style={{ 
                width: 20, 
                height: 20,
                marginHorizontal: 5
              }}
            />
            <Image 
              source={assets.poison} 
              style={{ 
                width: 20, 
                height: 20, 
              }}
            />
            <Image 
              source={assets.rock} 
              style={{ 
                width: 20, 
                height: 20,
                marginHorizontal: 5
              }}
            />
            <Image 
              source={assets.steel} 
              style={{ 
                width: 20, 
                height: 20, 
              }}
            />
          </View>
          <View 
            style={{ 
              backgroundColor: '#000000', 
              width: '100%', 
              height: 60, 
              position: 'absolute', 
              marginTop: 60,
              borderBottomLeftRadius: 15, 
              borderBottomRightRadius: 15, 
              alignItems: 'center',
              paddingHorizontal: 15,
            }}
          >
            <Text style={{color: '#FFFFFF', textAlign: 'center', paddingTop: 5}}>
              Resistances
            </Text>
            <View 
            style={{ 
              alignItems: 'flex-start',
              flexDirection: 'row',
              marginTop: 5
            }}
          >
            <Image 
              source={assets.eletric} 
              style={{ 
                width: 20, 
                height: 20, 
              }}
            />
            <Image 
              source={assets.rock} 
              style={{ 
                width: 20, 
                height: 20,
                marginHorizontal: 5
              }}
            />
            <Image 
              source={assets.poison} 
              style={{ 
                width: 20, 
                height: 20, 
              }}
            />
          </View>
          </View>
          <Image 
            source={assets.fightingCenter} 
            style={{
              borderRadius: 200, 
              width: 60, 
              height: 60, 
              position: 'absolute',
              marginTop: -5,
              left: '50%', 
              transform: [{ translateX: -30 }]
            }}
          />
          
        </View>
      </View>
  );
}
