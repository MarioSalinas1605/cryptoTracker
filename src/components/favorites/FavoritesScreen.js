import React from 'react';
import { View, StyleSheet } from 'react-native';
import FavoritesEmptyState from './FavoritesEmptyState';
import Colors from '../../resources/colors'

class FavoritesScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FavoritesEmptyState />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.charade,
        flex: 1
    }
})

export default FavoritesScreen;