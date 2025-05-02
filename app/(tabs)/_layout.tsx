import { Tabs } from "expo-router"


const _Layout = () => {

    return(

        <Tabs>
            <Tabs.Screen name="index"
            options={{title:"Home", headerShown: false}}/>
            <Tabs.Screen name="movie" options={{title:"Movie"}}/>
            <Tabs.Screen name="search" options={{title:"Search"}}/>
            <Tabs.Screen name="profile" options={{title:"Profile"}}/>   
        </Tabs>
    )
}
export default _Layout