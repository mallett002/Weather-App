import React from 'react';
import Day from './Day';

//Container for the forecast items:
const DayForecast = (props) => (
    <div className='days'>
        <Day day='1' temp={props.day1.temp} icon={props.day1.icon} date={props.day1.date} conditions={props.day1.conditions} />
        <Day day='2' temp={props.day2.temp} icon={props.day2.icon} date={props.day2.date} conditions={props.day2.conditions} />
        <Day day='3' temp={props.day3.temp} icon={props.day3.icon} date={props.day3.date} conditions={props.day3.conditions} />
        <Day day='4' temp={props.day4.temp} icon={props.day4.icon} date={props.day4.date} conditions={props.day4.conditions} />
    </div>
);

export default DayForecast;

