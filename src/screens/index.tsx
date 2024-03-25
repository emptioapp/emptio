import { Image, StyleSheet, Text, View } from "react-native"
import { ButtonDefault, ButtonSuccess } from "@components/form/Buttons"
import SplashScreen from "@components/general/SplashScreen"
import { getUser } from "../services/memory"
import { useEffect, useState } from "react"
import theme from "@src/theme"
import { useTranslate } from "../services/translate"
import { getHexKeys, createPairKeys } from "../services/nostr"

const Initialize = ({ navigation }: any) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => { 

        const { privateKey } = getUser()

        if(privateKey)
            navigation.reset({ index: 0, routes: [{name: "authenticate-stack"}]})

        setLoading(false)
    },[])

    const handlerLogin = () => navigation.navigate("login-stack")

    const handlerRegister = () => navigation.navigate("register-stack")

    if(loading)
        return <SplashScreen />

    return (
        <View style={theme.styles.container}>
            <Image style={styles.logo} source={require("@assets/emptio.png")} />
 
            <Text style={styles.title}>{useTranslate("initial.message")}</Text>

            <View style={styles.buttonArea}>
                <ButtonDefault label={useTranslate("commons.signup")} onPress={handlerRegister} />
                <ButtonSuccess label={useTranslate("commons.signin")} onPress={handlerLogin} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        maxWidth: "90%",
        height: "35%",
        marginTop: -100
    },
    title: {
        marginVertical: 10,
        color: theme.colors.gray,
    },
    buttonArea: {
        width: '100%',
        position: 'absolute',        
        justifyContent: 'center',
        marginVertical: 30,
        flexDirection: "row",
        bottom: 10,
    }
})

export default Initialize;