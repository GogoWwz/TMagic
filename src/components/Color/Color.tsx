import React from 'react'
import './index.scss'

const Color: React.FC = props => {
    return (
        <div className='tm-color'>
            <div className='tm-color-box primary'></div>
            <div className='tm-color-box success'></div>
            <div className='tm-color-box warning'></div>
            <div className='tm-color-box danger'></div>
        </div>
    )
}

export default Color