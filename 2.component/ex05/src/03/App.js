import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor() {
        super(...arguments);
        const now = new Date();
        // 생성자 내에서는 setState를 사용하지 않고 this.state로 초기값을 할당해준다.
        this.state = {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
            session: now.getHours()
        };
    }

    updateTime() {
        const now = new Date();
        this.setState({
          hours: now.getHours(),
          minutes: now.getMinutes(),
          seconds: now.getSeconds(),
          session: now.getHours()
        });
      }
      
    render() {
        this.updateTime();
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                    <Clock 
                        hours={this.state.hours}
                        minutes={this.state.minutes}
                        seconds={this.state.seconds}
                        session={this.state.session}/>
            </div>
        );
    }
}