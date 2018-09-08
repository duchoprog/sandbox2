import React, { Component } from "react";

export default class Saludo extends Component {
  render() {
    return <h1> Hola {this.props.nombre}</h1>;
  }
}
