import React, { Component } from 'react'
import TeslaNotice from '../../components/TeslaNotice/TeslaNotice'
import './TeslaBattery'
import TeslaCar from '../../components/TeslaCar/TeslaCar'


export default class TeslaBattery extends Component {
    render() {
        return (
            <form className='tesla-battery'>
                <h1>Range per Charge</h1>
                <TeslaCar />
                <TeslaNotice />
            </form>
        )
    }
}
