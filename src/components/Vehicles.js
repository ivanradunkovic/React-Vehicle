import { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('VehicleStore')
@observer

class Vehicles extends Component {}

export default Vehicles;