import React, { Component } from 'react'

import Day3 from './City/Day3'
import Day1 from './City/Day1'
import Day2 from './City/Day2'
import Day4 from './City/Day4'
import Day5 from './City/Day5'
 import classes from './Cities.module.css'



class Cities extends Component{

    state={
        day1:false,
        day2:false,
        day3:false,
        day4:false,
        day5:false
     }

    render(){
        
    return (
        <div className={classes.Cities}>
            <button onClick={()=>{
                this.setState({day1:!this.state.day1})
            }} className={classes.button}>Day1</button>
            
            <button onClick={()=>{
                this.setState({day2:!this.state.day2})
            }} className={classes.button}>Day2</button>
            
            <button  onClick={()=>{
                this.setState({day3:!this.state.day3})
            }} className={classes.button}>Day3</button>
            
            <button  onClick={()=>{
                this.setState({day4:!this.state.day4})
            }} className={classes.button}>Day4</button>
            
            <button  onClick={()=>{
                this.setState({day5:!this.state.day5})
            }} className={classes.button}>Day5</button>
            {
                this.state.day1?(<Day1/>):null
            }
            {
                this.state.day2?(<Day2/>):null
            }
            {
                this.state.day3?(<Day3/>):null
            }
            {
                this.state.day4?(<Day4/>):null
            }
            {
                this.state.day5?(<Day5/>):null
            }
        </div>
        
    )
    }
} 

export default Cities
