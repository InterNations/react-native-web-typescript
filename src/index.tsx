import React, { memo } from 'react'
import { AppRegistry, View, Text, Platform, StyleSheet, FlatList, Button } from 'react-native'

const appName = 'InterNations'

enum colors {
    neutralDarkest = 'rgb(0,0,0)',
    neutralDarker = 'rgb(50,50,50)',
    neutralDark = 'rgb(100,100,100)',
    neutral = 'rgb(200, 200, 200)',
    neutralBright = 'rgb(228,228,228)',
    neutralBrighter = 'rgb(241,241,241)',
    neutralBrightest = 'rgb(255,255,255)',
    transparent = 'transparent',
    success = 'rgb(95,161,37)',
    error = 'red',
    primary = 'rgb(30, 112, 161)',
    secondary = 'rgb(14, 50, 71)',
    secondaryTransparent = 'rgba(14, 50, 71, 0.8)',
    notification = 'rgb(255, 59, 48)',
    blackTransparent = 'rgba(0, 0, 0, 0.3)',
    transparentHighOpacity = 'rgba(0, 0, 0, 0.6)',
    black60 = 'rgba(0, 0, 0, 0.6)',
    white80 = 'rgba(255, 255, 255, 0.8)',
    white60 = 'rgba(255, 255, 255, 0.6)',
    badge = 'rgb(255, 59, 48)',
    adminBackground = 'rgb(32,48,73)',
    activityGroupConsul = 'rgb(32,48,73)',
    ambassador = 'rgb(160,36,42)',
    gradientProfileEnd = 'rgb(126,195,227)',
    accent = 'rgb(255,158,27)',
    lightBlue = 'rgb(43, 160, 227)',
    lightBlueTransparent = 'rgba(43, 160, 227, 0.2)',
    lighterBlue = 'rgb(174, 208, 233)',
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    listItem: {
        padding: 4,
        color: colors.primary,
    },
})

function makeStr(length: number) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

const generateListItems = (prefix: number | string) => {
    const result = []
    for (let i = 0; i < 500; i++) {
        result.push(`${prefix} ${makeStr(25)}\n${prefix} ${makeStr(10)}\n${prefix} ${makeStr(15)}`)
    }
    return result
}

export const Main = memo(function Main() {
    return (
        <View style={styles.container}>
            <Text>react native with web and typescript</Text>
            <View>
                <FlatList
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <Text>{item}</Text>
                            <Button onPress={() => {}} title="Button"></Button>
                        </View>
                    )}
                    data={generateListItems(1)}
                />
            </View>
        </View>
    )
})

AppRegistry.registerComponent(appName, () => Main)
if (Platform.OS === 'web') {
    AppRegistry.runApplication(appName, {
        rootTag: document.getElementById('root'),
    })
}
