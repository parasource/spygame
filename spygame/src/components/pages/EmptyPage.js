import React from "react";
import {View} from 'react-native'
import { AppButton } from "../UI/AppButton";

export default function EmptyPage({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <AppButton
                pressHandler={
                    () => navigation.navigate('Home')
                }>
                Назад
            </AppButton>
        </View>
    )
}
