import React, { memo } from 'react'
import { View, Text, FlatList, Button, Alert } from 'react-native'
import { styles, generateListItems } from './utils'

export default memo(function Main() {
    return (
        <View style={styles.container}>
            <Text>react native with web and typescript</Text>
            <View>
                <FlatList
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <Text style={styles.listItemText}>{item.text}</Text>
                            <Button
                                onPress={() => Alert.alert('Left button pressed')}
                                title={item.button.toLowerCase()}
                                testID={item.button.replace(/\W+/g, '')}
                            ></Button>
                        </View>
                    )}
                    data={generateListItems(1)}
                />
            </View>
        </View>
    )
})
