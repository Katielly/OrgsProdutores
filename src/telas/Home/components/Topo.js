import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import { carregarTopo } from '../../../services/loadData';
import logo from '../../../assets/logo.png';

class Topo extends React.Component {
    
    state = {
        topo : {
            boasVinda: '',
            legenda: '',
        }
    }

    atualizaTopo () {
        const retorno = carregarTopo();
        this.setState({topo: retorno});
    }
    
    componentDidMount() { 
        this.atualizaTopo();
    }
    
    render() {
        return <View style={estilos.topo}>
            <Image style={estilos.imagem} source={logo} />
            <Text style={estilos.boasVinda}> { this.state.topo.boasVindas } </Text>
            <Text style={estilos.leganda}> { this.state.topo.legenda } </Text>
        </View>
    }
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: '#f6f6f6',
        padding: 16
    },
    imagem: {
        width: 70,
        height: 28
    },
    boasVinda: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    leganda: {
        fontSize: 16,
        lineHeight: 26
    }
});

export default Topo;