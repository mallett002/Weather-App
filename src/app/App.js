import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../homepage/HomePage';
import City from '../city/City';
import Loading from '../loading/Loading';

//city Ids for api call
const cityIds = [
    "5368361",  //la
    "5809844",  //seattle
    "4699066",  //houston
    "4887398",  //chicago
    "5128581"   //newyork
];


class App extends Component {
    //State holds the data from the ajax request & checks if "loading" is true to render the "Loading" component
    state = {
        la: {temp:"", visibility:'', humidity: '', windSpeed:'', windDirection:'', condition:"", icon: ''},
        seattle: {temp:"", visibility:'', humidity: '', windSpeed:'', windDirection:'', condition:"", icon: ''},
        houston: {temp:"", visibility:'', humidity: '', windSpeed:'', windDirection:'', condition:"", icon: ''},
        chicago: {temp:"", visibility:'', humidity: '', windSpeed:'', windDirection:'', condition:"", icon: ''},
        newYork: {temp:"", visibility:'', humidity: '', windSpeed:'', windDirection:'', condition:"", icon: ''},
        loading: true,
    }

    // API call for the current weather
    async componentDidMount() {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/group?id=${cityIds[0]},${cityIds[1]},${cityIds[2]},${cityIds[3]},${cityIds[4]}&APPID=4ae641e8880d4cdb0796bb5b4bd85f98&units=imperial`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const data = await response.json();
            console.log(data);
            this.setState({
                loading: false,
                la: {
                    temp: data.list[0].main.temp, 
                    visibility: data.list[0].visibility,
                    humidity: data.list[0].main.humidity,
                    windSpeed: data.list[0].wind.speed,
                    windDirection: data.list[0].wind.deg,
                    condition: data.list[0].weather[0].description, 
                    icon: data.list[0].weather[0].icon},
                seattle: {
                    temp: data.list[1].main.temp, 
                    visibility: data.list[1].visibility,
                    humidity: data.list[1].main.humidity,
                    windSpeed: data.list[1].wind.speed,
                    windDirection: data.list[1].wind.deg,
                    condition: data.list[1].weather[0].description, 
                    icon: data.list[1].weather[0].icon},
                houston: {
                    temp: data.list[2].main.temp, 
                    visibility: data.list[2].visibility,
                    humidity: data.list[2].main.humidity,
                    windSpeed: data.list[2].wind.speed,
                    windDirection: data.list[2].wind.deg,
                    condition: data.list[2].weather[0].description, 
                    icon: data.list[2].weather[0].icon},
                chicago: {
                    temp: data.list[3].main.temp, 
                    visibility: data.list[3].visibility,
                    humidity: data.list[3].main.humidity,
                    windSpeed: data.list[3].wind.speed,
                    windDirection: data.list[3].wind.deg,
                    condition: data.list[3].weather[0].description, 
                    icon: data.list[3].weather[0].icon},
                newYork: {
                    temp: data.list[4].main.temp,
                    visibility: data.list[4].visibility,
                    humidity: data.list[4].main.humidity,
                    windSpeed: data.list[4].wind.speed,
                    windDirection: data.list[4].wind.deg,
                    condition: data.list[4].weather[0].description, 
                    icon: data.list[4].weather[0].icon},
            });
        } catch (error) {
            console.log(error);
        }
    }

    //Check if Loading is true, if so render it instead of the routes
    render() {
        const { la, seattle, houston, chicago, newYork, loading } = this.state;
        return (
            <div>
                {loading ? <Loading /> : 
                <Switch>
                    <Route path='/' exact 
                        render={() => 
                            <HomePage 
                                la={la} 
                                seattle={seattle} 
                                houston={houston} 
                                chicago={chicago} 
                                newYork={newYork} 
                            />}
                    />
                    <Route path='/:city'
                        render={props => 
                            <City 
                                {...props}
                                la={la} 
                                seattle={seattle} 
                                houston={houston} 
                                chicago={chicago} 
                                newYork={newYork} 
                            />}
                    />
                </Switch>}
            </div>
        )
    }
}

export default App;

