// import React, { memo } from 'react'
import { AppRegistry, Platform } from 'react-native'
import Main from './Main'

const appName = 'example'

AppRegistry.registerComponent(appName, () => Main)

if (Platform.OS === 'web') {
    AppRegistry.runApplication(appName, {
        rootTag: document.getElementById('root'),
    })
}
// else if (Platform.OS === 'ios') {
//     AppRegistry.runApplication(appName)
// }
