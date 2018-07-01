import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

//HomePage component renders the overview of the app
class HomePage extends Component {    
    render() {
        return (
            <div className='homepage'>
                <h1 className='home-title'>SELECT A CITY</h1>
                <div className='city-cat-container'>
                    <Link to='/la'>
                        <div className='city-cat la-cat'>
                            <h1 className='city-title'>LOS ANGELES</h1>
                            <p className='city-temp'>{Math.floor(this.props.la.temp)} F</p>
                            <div className='condition-container'>
                                <img src={`http://openweathermap.org/img/w/${this.props.la.icon}.png`} alt={this.props.la.condition}/>
                                <p className='city-condition'>{this.props.la.condition.toUpperCase()}</p>
                           </div>
                        </div>
                    </Link>
                    <Link to='/seattle'>
                        <div className='city-cat seattle-cat'>
                            <h1 className='city-title'>SEATTLE</h1>
                            <p className='city-temp'>{Math.floor(this.props.seattle.temp)} F</p>
                            <div className='condition-container'>
                                <img src={`http://openweathermap.org/img/w/${this.props.seattle.icon}.png`} alt={this.props.seattle.condition}/>
                                <p className='city-condition'>{this.props.seattle.condition.toUpperCase()}</p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/houston'>
                        <div className='city-cat houston-cat'>
                            <h1 className='city-title'>HOUSTON</h1>
                            <p className='city-temp'>{Math.floor(this.props.houston.temp)} F</p>
                            <div className='condition-container'>
                                <img src={`http://openweathermap.org/img/w/${this.props.houston.icon}.png`} alt={this.props.houston.condition}/>
                                <p className='city-condition'>{this.props.houston.condition.toUpperCase()}</p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/chicago'>
                        <div className='city-cat chicago-cat'>
                            <h1 className='city-title'>CHICAGO</h1>
                            <p className='city-temp'>{Math.floor(this.props.chicago.temp)} F</p>
                            <div className='condition-container'>   
                                <img src={`http://openweathermap.org/img/w/${this.props.chicago.icon}.png`} alt={this.props.chicago.condition}/>
                                <p className='city-condition'>{this.props.chicago.condition.toUpperCase()}</p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/newyork'>
                        <div className='city-cat newyork-cat'>
                            <h1 className='city-title'>NEW YORK</h1>
                            <p className='city-temp'>{Math.floor(this.props.newYork.temp)} F</p>
                            <div className='condition-container'>
                                <img src={`http://openweathermap.org/img/w/${this.props.newYork.icon}.png`} alt={this.props.newYork.condition}/>
                                <p className='city-condition'>{this.props.newYork.condition.toUpperCase()}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default HomePage;
