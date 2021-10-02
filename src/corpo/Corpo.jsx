import React, { Component } from 'react'
import { Image } from 'react-native'

export default class Imagem extends Component {
    render() {
        let img = {uri:'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo.jpg'}

        return (
            //props = properties
            <Image 
                source = {img}
                style = {{width: 240, height: 120}}
            />
        )
    }
}