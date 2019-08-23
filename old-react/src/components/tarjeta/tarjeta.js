// imports
import React, { Component } from 'react';
import { Skeleton, Switch, Card, Icon, Avatar } from 'antd';
import PropTypes from "prop-types";
const { Meta } = Card;
// Ejemplo de clase, esta se le llama la clase padre, esta inyecta a las demás
// esta es la forma vieja de crear clases

class Tarjeta extends Component {
    constructor(props){
        super(props)
        this.state={
            message:'Este mensaje aparece para que reclames este boleto! Recuerda que puedes ingresar en tu sucursal más cercana.'
        }
    }
  render (){
    return(
        <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />,
          ]}
        >
          <Skeleton loading={this.props.checked} avatar active>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={this.props.title}
              description={this.state.message}
            />
          </Skeleton>
        </Card>
    )
    
  }
}
Tarjeta.propTypes={
    checked:PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
}
export default Tarjeta;
