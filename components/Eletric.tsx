import { Text, SafeAreaView, View, Image } from 'react-native';
import eletricCenter from '../assets/eletric-center.png';
import ground from '../assets/ground.png';
import flying from '../assets/flying.png';
import steel from '../assets/steel.png';
import eletric from '../assets/eletric.png';
import water from '../assets/water.png';

export default function Eletric() {
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
              paddingHorizontal: 20,
              paddingVertical: 20
            }}
          >
            <Image 
              source={ground} 
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
              paddingHorizontal: 20,
              paddingVertical: 20
            }}
          >
            <Image 
              source={flying} 
              style={{ 
                width: 20, 
                height: 20, 
              }}
            />
            <Image 
              source={water} 
              style={{ 
                width: 20, 
                height: 20,
                marginLeft: 5

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
              paddingHorizontal: 20,
            }}
          >
            <Text style={{color: '#FFFFFF', textAlign: 'center', paddingTop: 10}}>
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
              source={steel} 
              style={{ 
                width: 20, 
                height: 20, 
              }}
            />
            <Image 
              source={eletric} 
              style={{ 
                width: 20, 
                height: 20,
                marginHorizontal: 5
              }}
            />
            <Image 
              source={flying} 
              style={{ 
                width: 20, 
                height: 20, 
              }}
            />
          </View>
          </View>
          <Image 
            source={eletricCenter} 
            style={{ 
              width: 70, 
              height: 70, 
              position: 'absolute',
              marginTop: -5,
              left: '50%', 
              transform: [{ translateX: -35 }]
            }}
          />
          
        </View>
      </View>
  );
}