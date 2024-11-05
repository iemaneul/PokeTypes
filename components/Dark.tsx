import { Text, SafeAreaView, View, Image } from 'react-native';
import darkCenter from '../assets/dark-center.png';
import dark from '../assets/dark.png';
import ghost from '../assets/ghost.png';
import fairy from '../assets/fairy.png';
import bug from '../assets/bug.png';
import fighting from '../assets/fighting.png';
import psychic from '../assets/psychic.png';

export default function Dark() {
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
              source={bug} 
              style={{ 
                width: 20, 
                height: 20, 
              }}
            />
            <Image 
              source={fairy} 
              style={{ 
                width: 20, 
                height: 20,
                marginHorizontal: 5
              }}
            />
            <Image 
              source={fighting} 
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
              source={ghost} 
              style={{ 
                width: 20, 
                height: 20, 
              }}
            />
            <Image 
              source={psychic} 
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
              source={ghost} 
              style={{ 
                width: 20, 
                height: 20, 
              }}
            />
            <Image 
              source={dark} 
              style={{ 
                width: 20, 
                height: 20,
                marginHorizontal: 5
              }}
            />
            <Image 
              source={psychic} 
              style={{ 
                width: 20, 
                height: 20, 
              }}
            />
          </View>
          </View>
          <Image 
            source={darkCenter} 
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
