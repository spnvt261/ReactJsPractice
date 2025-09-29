import { Component } from "react";
import TemperatureInput from "./TemperatureInput";

class PrManageState extends Component{
    constructor(props){
        super(props);
        this.state ={
            temp:'',
            currentInputChanged:'tempCel'
        }
    }
    _inputChange = e=>{
        // console.log(e.target.value);
        // console.log(e.target.name);
        this.setState({
            temp:Number(e.target.value),
            currentInputChanged: e.target.name
        })
    }
    _toCelsius = Fah =>{
        return (Fah - 32)*5/9;
    }
    _toFahrenheit = Cel =>{
        return Cel*9/5 + 32;
    }
    render(){
        let tempFah = this.state.currentInputChanged == 'tempFah'? this.state.temp:this._toFahrenheit(this.state.temp);
        let tempCel = this.state.currentInputChanged == 'tempCel'? this.state.temp:this._toCelsius(this.state.temp);
        return(
            <div>
                <TemperatureInput
                    temperatureType ='Cel'
                    name='tempCel'
                    inputChange={this._inputChange}
                    value = {tempCel}
                /> 
                <TemperatureInput
                    temperatureType ='Fah'
                    name='tempFah'
                    inputChange={this._inputChange}
                    value = {tempFah}
                /> 
            </div>
        )
    }
}

export default PrManageState;