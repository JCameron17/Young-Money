import React from 'react';
import { StyleSheet,Component, Text,TouchableWithoutFeedback, View,Image,SafeAreaView, Button, ScrollView } from 'react-native';

function ExploreScreen({navigation}) 
{
    return (
      <View style={styles.container}>
        <Text>ExploreScreen</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})

export default ExploreScreen;