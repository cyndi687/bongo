import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createshipping, getFormDetails } from '../redux/actions'
import ShippingTo from './shippingTo'
import ShippingFrom from './shippingFrom'
import ShipmentDetail from './shipmentDetail'


class CreateShipment extends Component {
    render() {
        const {shipmentCreated} = this.props
        return (
            <section className="calculate pt-100 pb-100">
                {shipmentCreated == 1 ? <ShippingTo/> : 
                shipmentCreated == 2 ? <ShippingFrom/> :
                <ShipmentDetail/>
            }
            </section>

        )
    }
}

const mapStateToProps = (state) =>{
 
    const {shipmentCreated} = state.Shipping
   
    return { shipmentCreated}
}

export default connect(mapStateToProps, {createshipping, getFormDetails})(CreateShipment)