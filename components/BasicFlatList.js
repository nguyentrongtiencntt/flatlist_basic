import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import flatListData from '../flatListData';



// function FlatListItem({item, index}) {
//   return (
//     <View style={{
//       flex: 1,
//       backgroundColor: index % 2 == 0? 'mediumseagreen': 'tomato'
//     }}>
    
    
//     <Text style={styles.listItem}>{item.name}</Text>
//     <Text style={styles.listItem}>{item.email}</Text>


//     </View>
//   );
// }

export default function BasicFlatList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={flatListData}
        renderItem={
          ({ item, index }) => {
            //console.log(`item ${JSON.stringify(item)} index ${index}`)
            return (
              
             <Text>{item.name}</Text>
            )
          }
        }
      >

      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem:{
    color:TouchableWithoutFeedback,
    padding: 10
  }
});
