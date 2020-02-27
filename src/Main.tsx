import React, { memo } from 'react'
import { View, Text, FlatList, Button, Alert, TextInput } from 'react-native'
import { styles, colors, generateListItems } from './utils'

export default memo(function Main() {
    return (
        <View style={styles.container}>
            <Text>react native with web and typescript</Text>
            <View>
                <FlatList
                    renderItem={({ item, index }) => (
                        <View style={styles.listItem} key={item}>
                            <Text style={styles.listItemText}>{item}</Text>
                            {index === 2 ? <TextInput style={styles.textInput} /> : null}
                            <Button
                                onPress={() => Alert.alert(`Button ${index} pressed`)}
                                title={`Button ${index}`}
                                testID={item.replace(/\W+/g, '')}
                                color={colors.primary}
                            ></Button>
                        </View>
                    )}
                    data={generateListItems(1)}
                />
            </View>
        </View>
    )
})
