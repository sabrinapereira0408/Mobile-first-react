import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SideBar extends Component {
    render() {
        return (
            <ul>
                {this.props.usuarios.map(user =>(
                    <li>{user}</li>
                ))}
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    usuarios: state.usuariosReducer
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
