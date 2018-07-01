import React, {Component} from 'react';


//Forecast for each day
class Day extends Component {
    render() {

        //get the date information:
        const date = new Date(this.props.date * 1000);
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const weekDay = days[date.getDay()];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "nov", "Dec"];
        const month = months[date.getMonth()];
        const day = date.getDate();
        
        return (
               <div className='day'>
                    <p className='forecast-date'>{weekDay}, {month} {day}</p>
                    <div>
                        <p className='forecast-temp'>{Math.floor(this.props.temp)} f</p>
                    </div>
                    <div>
                        <img className='forecast-icon' src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt='current weather'/>  
                    </div>
                    <div>
                        <p className='forecast-condition'>{this.props.conditions}</p>
                    </div>
                
                </div> 
        )
    }
}
    

export default Day;

