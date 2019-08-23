// imports
import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import { Switch , Typography} from 'antd';
import './App.css';
import Sencillo from './components/sencillo/sencillo'
import Tarjeta from './components/tarjeta/tarjeta'
// IMPORTANT IMPORT for Ant Design 
import "antd/dist/antd.css";
// Ejemplo de clase, esta se le llama la clase padre, esta inyecta a las demás
// esta es la forma vieja de crear clases
const { Title } = Typography;
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      checked:false,
      titulos:[],
      longitud:4
    }
  }
  // Generate Randon Names

  componentWillMount(){
    this.getTitles()
  }
  getTitles = ()=>{
    let randomTitles= []
    for (let i = 0; i < this.state.longitud; i++) {
      randomTitles.push("Boleto #"+ this.getRandomInt(1,1000))
      
    }
    this.setState({titulos:randomTitles})
  }
  // get randm integer
  getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  onChange=(checked)=>{
    console.log(checked)
    this.setState({checked:checked})
  }
  render (){
    return(
    <div style={{padding:'4em'}}>
      <Title level={2}>Esto es React!</Title>
      
      <Sencillo/>
      <div style={{padding:'1em'}}>
      <Switch onChange={this.onChange} />
      <Button type="primary" onClick={this.getTitles} style={{marginLeft:'3em'}}>Actualizar</Button>
      </div>
      
      <div style={{display:'flex', justifyContent:'space-between'}}>
      {this.state.titulos && this.state.titulos.map((titulo, key )=>(
        <Tarjeta checked={this.state.checked} title={titulo} key={key}/>
      ))}
      {/* <Tarjeta checked={this.state.checked} title={"Título 1"}/>
      <Tarjeta checked={this.state.checked} title={"Título 2"}/>
      <Tarjeta checked={this.state.checked} title={"Título 3"}/> */}
      </div>
    </div>
    )
  }
}
// se exporta de manera default la clase app
export default App;
