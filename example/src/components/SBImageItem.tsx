import React from 'react';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';

const ISBImageItem: React.FC = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="small" />
            <Image
                style={styles.image}
                source={{
                    uri: `https://picsum.photos/800/600?t=${new Date().getTime()}`,
                }}
            />
        </View>
    );
};

export const SBImageItem = ISBImageItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    image: {
        borderRadius: 4,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
