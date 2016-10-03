import React, { Component } from 'react';

class CarDetail extends Component {
  render(){
    return (<h1>{this.props.params.id}</h1>);
  }
}

export default CarDetail
