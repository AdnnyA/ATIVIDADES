import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Alunos extends Component {
    render() {
        return (
            <View>
                <Text>Disciplina: {this.props.disciplina} </Text>
            </View>
        )
    }
}