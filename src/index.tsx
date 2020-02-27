// import React, { memo } from 'react'
import { AppRegistry, Platform } from 'react-native'
import Main from './Main'

const appName = 'InterNations'

AppRegistry.registerComponent(appName, () => Main)

if (Platform.OS === 'web') {
    AppRegistry.runApplication(appName, {
        rootTag: document.getElementById('root'),
    })
}
