import React, { Component } from 'react';
import ToHome from '../toHome/ToHome';
import DayForecast from '../dayForecast/DayForecast';
import './City.css';
import laClear from '../images/laClear.jpg';
import seattleClear from '../images/seattleClear.jpg';
import houstonHaze from '../images/houstonHaze.jpg';
import chicagoClear from '../images/chicagoClear.jpg';
import newyorkClear from '../images/newyorkClear.jpg';
import Loading from '../loading/Loading';
import { Link } from 'react-router-dom';

//use these background images based on the url parameter
const styles = {
    la: { backgroundImage: `url(${laClear})` },
    seattle: { background: `url(${seattleClear})` },
    houston: { background: `url(${houstonHaze})` },
    chicago: { background: `url(${chicagoClear})` },
    newYork: { background: `url(${newyorkClear})` }
};

//City component renders the city based on the url parameter
class City extends Component {
    //data from ajax request sent here to the state:
    state = {
        day1: {temp:'', date:'', conditions:'', icon:''},
        day2: {temp:'', date:'', conditions:'', icon:''},
        day3: {temp:'', date:'', conditions:'', icon:''},
        day4: {temp:'', date:'', conditions:'', icon:''},
        la: false, seattle: false, chicago: false, houston: false, newYork: false,
        loading: true,
        error: false
    }

    async componentDidMount() {
        const { city } = this.props.match.params;
        console.log(city);
        //change city id based on url param:
        const id = () => {
            if(city === "la") {
                this.setState({ la: true });
                return 5368361;
            } else if (city === "seattle"){
                this.setState({ seattle: true });
                return 5809844
            } else if (city === "houston") {
                this.setState({ houston: true });
                return 4699066;
            } else if (city === "chicago") {
                this.setState({ chicago: true });
                return 4887398;
            } else {
                this.setState({ newYork: true });
                return 5128581;
            }
        }

        //fetch the api:
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id()}&APPID=4ae641e8880d4cdb0796bb5b4bd85f98&units=imperial`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            if (response === null) {
                this.setState({ error: true });
            }
            const data = await response.json();
            console.log(data);

            //loop through list. Grab the Noontime ones
            const fourDays = () => {
                const dateZero = data.list[0].dt_txt.split(" ")[0];
                let days = [];
                for(let d of data.list){
                    let date_text = d.dt_txt.split(" ");
                    if( date_text[1] === "21:00:00" && date_text[0] !== dateZero ){
                        days.push(d);
                    }
                }
                return days;
            }

            //save the new array to "forecast":
            let forecast = fourDays();
            console.log("the days:", forecast);

            //set the state according to the data retrieved:
            this.setState({
                day1: {temp: forecast[0].main.temp, date: forecast[0].dt, conditions: forecast[0].weather[0].description, icon: forecast[0].weather[0].icon},
                day2: {temp: forecast[1].main.temp, date: forecast[1].dt, conditions: forecast[1].weather[0].description, icon: forecast[1].weather[0].icon},
                day3: {temp: forecast[2].main.temp, date: forecast[2].dt, conditions: forecast[2].weather[0].description, icon: forecast[2].weather[0].icon},
                day4: {temp: forecast[3].main.temp, date: forecast[3].dt, conditions: forecast[3].weather[0].description, icon: forecast[3].weather[0].icon},
                loading: false, 
                error: false
            });
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { city } = this.props.match.params;
        const { day1, day2, day3, day4, la, seattle, chicago, houston, newYork, loading, error } = this.state;

        //will give correct title based on url param (city)
        const title = () => {
            if(city === "la") {
                return 'LOS ANGELES';
            } else if (city === "seattle"){
                return 'SEATTLE'
            } else if (city === "houston") {
                return 'HOUSTON';
            } else if (city === "chicago") {
                return 'CHICAGO';
            } else {
                return 'NEW YORK CITY';
            }
        }

        //will give correct icon based on url param and the current conditions
        const icon = () => {
            if(city === "la") {
                return this.props.la.icon;
            } else if (city === "seattle"){
                return this.props.seattle.icon;
            } else if (city === "houston") {
                return this.props.houston.icon;
            } else if (city === "chicago") {
                return this.props.chicago.icon;
            } else {
                return this.props.newYork.icon;
            }
        }

        //gives correct temperature based on the url param
        const temp = () => {
            if(city === "la") {
                return this.props.la.temp;
            } else if (city === "seattle"){
                return this.props.seattle.temp;
            } else if (city === "houston") {
                return this.props.houston.temp;
            } else if (city === "chicago") {
                return this.props.chicago.temp;
            } else {
                return this.props.newYork.temp;
            }
        }

        //gives visibility based on url param
        const visibility = () => {
            let vis;
            if(city === "la") {
                vis = this.props.la.visibility;
            } else if (city === "seattle"){
                vis = this.props.seattle.visibility;
            } else if (city === "houston") {
                vis = this.props.houston.visibility;
            } else if (city === "chicago") {
                vis = this.props.chicago.visibility;
            } else {
                vis = this.props.newYork.visibility;
            }
            let miles = vis / 1609.344;
            const distance = Math.round(miles) <= 1 ? `${Math.round(miles)} mile` : `${Math.round(miles)} miles`;
            return distance;
        }

        //gives humidity based on url param
        const humidity = () => {
            if(city === "la") {
                return this.props.la.humidity;
            } else if (city === "seattle"){
                return this.props.seattle.humidity;
            } else if (city === "houston") {
                return this.props.houston.humidity;
            } else if (city === "chicago") {
                return this.props.chicago.humidity;
            } else {
                return this.props.newYork.humidity;
            }
        }

        //gives wind speed based on url param
        const windSpeed = () => {
            if(city === "la") {
                return this.props.la.windSpeed;
            } else if (city === "seattle"){
                return this.props.seattle.windSpeed;
            } else if (city === "houston") {
                return this.props.houston.windSpeed;
            } else if (city === "chicago") {
                return this.props.chicago.windSpeed;
            } else {
                return this.props.newYork.windSpeed;
            }
        }
        
        //gives wind direction based on url param
        const windDirection = () => {
            let direction;
            if(city === "la") {
                direction = this.props.la.windDirection;
            } else if (city === "seattle"){
                direction = this.props.seattle.windDirection;
            } else if (city === "houston") {
                direction = this.props.houston.windDirection;
            } else if (city === "chicago") {
                direction = this.props.chicago.windDirection;
            } else {
                direction = this.props.newYork.windDirection;
            }
            //change degrees to correct cardinal direction
            if (direction >= 340 && direction <= 360) {
                return "North"
            } else if (direction <= 20) {
                return "North"
            } else if (direction > 20 && direction < 70) {
                return "Northeast"
            } else if (direction >= 70 && direction < 120) {
                return "East"
            } else if (direction >= 120 && direction < 160) {
                return "Southeast"
            } else if (direction >= 160 && direction < 210) {
                return "South"
            } else if (direction >= 210 && direction < 250) {
                return "Southwest"
            } else if (direction >= 250 && direction < 290) {
                return "West"
            } else return "Northwest"
        }

        //gives conditions based on url param
        const condition = () => {
            if(city === "la") {
                return this.props.la.condition;
            } else if (city === "seattle"){
                return this.props.seattle.condition;
            } else if (city === "houston") {
                return this.props.houston.condition;
            } else if (city === "chicago") {
                return this.props.chicago.condition;
            } else {
                return this.props.newYork.condition;
            }
        }

        //gives correct tagline based on conditions
        const tagLine = () => {
            if(condition() === "clear sky") {
                return "It's beautiful out there!";
            } else if (condition().includes("cloud")){
                return "It's a bit cloudy";
            } else if (condition().includes("rain")) {
                return "Might need an umbrella...";
            } else if (condition() === "thunderstorm") {
                return "Take shelter!";
            } else if(condition() === "snow"){
                return "Get the sleds out!";
            } else if(condition() === "mist" || condition() === "haze"){
                return "It's a little hard to see out there"
            }
        }

        //If there's an error, return this with a link:
        if (error) {
            return(
                <div>
                    <p>There seems to be a problem retrieving the data.</p>
                    <Link to="/">Home</Link>
                </div>
            )
        }

        //if loading is true, render it, otherwise show the content
        return (
            <div>
            {loading ? <Loading /> :
            <div className='city-bg' style={Object.assign({},
                la && styles.la,
                seattle && styles.seattle,
                houston && styles.houston,
                chicago && styles.chicago,
                newYork && styles.newYork
            )}> 
                <ToHome />
                <div className='city-name'>
                    <h1>{title()}</h1>
                </div>
                <div className='current-conditions'>
                    <h3>Current Conditions</h3>
                        <p className='gen-conditions-temp'>{Math.floor(temp())} F</p>
                    <div className='gen-conditions'>
                        <img src={`https://openweathermap.org/img/w/${icon()}.png`} alt='current weather'/>
                        <p>{condition().toUpperCase()}</p>
                    </div>
                </div>
                <div style={{textAlign: 'center'}}>
                    <p className='tagline'>{tagLine()}</p>
                </div>
                <div className='specific-conditions'>
                    <p>Wind speed: {Math.floor(windSpeed())} mph</p>
                    <p>Wind direction: {windDirection()}</p>
                    <p>Visibility: {visibility()}</p>
                    <p>Humidity: {`${humidity()}%`}</p>
                </div>
                  
                <DayForecast 
                  day1={day1}
                  day2={day2}
                  day3={day3}
                  day4={day4}
                /> 
              
            </div>}
            </div>
        )
    }
}

export default City;

