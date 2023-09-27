import React, { Component } from 'react'

export default class UnderBar extends Component {
    render() {
        return (
            <>
                <div className='navbar' style={{height: '48px', borderBottom: '5px solid #181823', backgroundColor: '#28458a'}}>
                    <div className='header' style={{fontSize: '25px'}}>Overview</div>
                </div>
            </>
        )
    }
}
