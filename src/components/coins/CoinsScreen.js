import React, { Component} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

class CoinsScreen extends Component {
    
    handlePress = () => {
        console.log("go to detail", this.props);
        this.props.navigation.navigate('CoinDetail');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Coins Screen</Text>
                <Pressable style={styles.btn} onPress={this.handlePress}>
                    <Text style={styles.btnText}>Ir a detail</Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        alignItems: "center"
    },
    btn: {
        padding: 8,
        backgroundColor: "blue",
        borderRadius: 8,
        margin: 16
    },
    btnText: {
        color: "#fff",
        textAlign: "center"
    }
})

export default CoinsScreen;