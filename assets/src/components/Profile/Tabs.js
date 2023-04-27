import { useWindowDimensions, StyleSheet } from 'react-native'
import { Box, Image, View ,Heading, Input, VStack, Button, Pressable, Text, Center } from 'native-base'

import React from 'react'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import { useState } from 'react'
import Profile from './Profile'
import Order from './Order'
import Colors from '../../Color'


const renderscene = SceneMap({
    first:Profile,
    second: Order,
})


export default function Tabs() {
    const layout = useWindowDimensions()
    const [index, setindex] = useState(0)
    const [routes]=useState([
        {
            key:'first',title:"PROFILE",
        },
        {
            key: "second",
            title: "ORDERS",
        }
    ])

    const renderTabsBar = (props) =>(
        <TabBar {...props} tabStyle={styles.tabStyle} indicatorStyle={{backgroundColor:Colors.black}}
        activeColor={Colors.main} inactiveColor={Colors.white}
        renderLabel={({route,color})=>(
            <Text style={{color, ...styles.text}}>{route.title}</Text>
        )}
        ></TabBar>
    )

  return (
    <TabView navigationState={{index, routes}}
    renderScene={renderscene}
    onIndexChange={setindex} initialLayout={{width: layout.width}}
    renderTabBar={renderTabsBar}
    > 

    </TabView>
  )
}

const styles= StyleSheet.create({
    tabStyle:{
        backgroundColor:"black", 
    },
    text:{
        fontSize:13,
        fontWeight: "bold",
    }
})