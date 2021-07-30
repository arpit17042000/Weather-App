import React,{Component}from 'react'
import { WiDayCloudy } from "weather-icons-react"
import classes from './City.module.css'
import axios from 'axios'

class Day5 extends Component {

    state={
        DateAndTime:null,
        MaxTemp:null,
        MinTemp:null,
        Humidity:null,
        Precipitation:null
    }

    componentDidMount(){
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q=München,DE&units=metric&appid=b606f9db39d148829c9500a2651c63dd').then(
            response=>{
                this.setState({DateAndTime:response.data.list[32].dt_txt})
                this.setState({MaxTemp:response.data.list[32].main.temp_max})
                this.setState({MinTemp:response.data.list[32].main.temp_min})
                this.setState({Humidity:response.data.list[32].main.humidity})
                if(response.data.list[32].rain){
                    this.setState({Precipitation:response.data.list[32].main.temp_max})
                }
                else{
                    this.setState({Precipitation:'none'})
                }
                // console.log(response)
            }
        )
    }

    render(){
        if(this.state.MaxTemp!==null && this.state.MinTemp!==null && this.state.Humidity!==null && this.state.Precipitation!==null && this.state.DateAndTime!==null){
            return(
            <div className={classes.City}>
            <WiDayCloudy size={100} color='rgb(156, 231, 231)' />
            <h1>Day5 {this.state.DateAndTime}</h1>
            <h4>Maximum temperature={this.state.MaxTemp}</h4>
            <h4>Minimum Temperature={this.state.MinTemp}</h4>
            <h4>Humidity={this.state.Humidity}</h4>
            <h4>Rain={this.state.Precipitation}</h4>
            </div>
        )
        }
        return(
            <div className={classes.City}>
            <h1>Loading...</h1>
            <h4>Maximum temperature=Loading...</h4>
            <h4>Minimum Temperature=Loading...</h4>
            <h4>Humidity=Loading...</h4>
            <h4>Rain=Loading...</h4>
            </div>
        )
        
    }
}
    

export default Day5
