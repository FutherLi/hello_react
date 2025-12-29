//引入React
import React from 'react'
import Hello from  './Hello'
import World from './World/World'

export default class App extends React.Component{
    render(){
        return(
            <div>
                <World/>
                <Hello/>
            </div>
        )
    }
}