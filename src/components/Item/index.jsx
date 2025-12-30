import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    //鼠标状态
    state ={
      mouse:false
    }
    //鼠标移入移出事件的回调 
    handleMouse=(flag)=>{
      return ()=>{
        this.setState({mouse:flag})
      }
    }
  render() {
    //批量接受props
    const {name,done} = this.props
    const {mouse}  = this.state
    return (
      <div>
          {/* 鼠标悬浮在li上高亮，现实删除按钮，移开则清除效果 */}
          <li style={{backgroundColor:mouse?'#f5f5f5':'#fff'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
            <label>
                <input type="checkbox" defaultChecked={done}/>
                <span>{name}</span>
            </label>
            <button className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
          </li>
      </div>
    )
  }
}
