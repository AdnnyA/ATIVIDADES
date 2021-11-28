import React, {Component} from "react";
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import IMCCalc from "./IMCCalc.jsx";


export default class IMCApp extends Component{

    constructor(props){
        super(props)
        this.state = {altura:null, peso:null, ativo: false}
    }

    Clicar = ()=>{
        if(this.state.altura != null && this.state.peso != null){
            this.setState({ativo: true})
        }
    }

    Calcular (ativo) {
        
        if(ativo === true){
            return(
                <View>
                    <IMCCalc altura={this.state.altura} peso={this.state.peso}> </IMCCalc>
                </View>
            )
        }   
       
    }

    render(){
        return (
            <View>
                <Text style={{fontSize:20}}>
                    Digite abaixo
                </Text>

                <br/>
              
                <Text style={styles.texto}>
                    Peso
                </Text>
                        
                <TextInput
                    onChangeText={(peso)=>{this.setState({peso})}}
                    placeholder="Ex: 65.5"
                
                />

                <br/>

                <Text style={styles.texto}>
                   Altura
                </Text>
                <TextInput
                    onChangeText={(altura)=>{this.setState({altura})}}
                    placeholder="Ex: 1.62"
                
                />

                <br/>

                <View>
                    <Button
                        
                        title="Calcular"
                        onPress={()=>{
                            this.Clicar()
                        }}
                    
                    />
                     
                </View>
                <br/>
                {this.Calcular(this.state.ativo)} 

            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 16,
        alignItems: 'center',
        
    },
   
})