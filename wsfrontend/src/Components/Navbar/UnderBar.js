import React from 'react'

function UnderBar({page}) {
    return (
        <div>

            <div className='navbar' style={{ height: '48px', borderBottom: '5px solid #181823', backgroundColor: '#28458a' }}>
                <div className='header' style={{ fontSize: '25px' }}>{page}</div>
            </div>
        </div>
    )
}

export default UnderBar;
