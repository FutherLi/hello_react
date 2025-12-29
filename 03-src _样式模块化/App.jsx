import React,{Component} from 'react'
import Hello from './components/Hello/Hello'
import World from './components/World'

export default class App extends Component{
    render(){
        return(
            <div>
                <Hello/>
                <World/>
            </div>
        )
    }
}