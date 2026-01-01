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

    //复选框变化回调
    handleCheck=(id)=>{
      return (event)=>{
        //event.target.checked 获取复选框状态
        this.props.updateTodo(id,event.target.checked)
      }
    }

    //根据id删除对应todo回调
    handleDelete=(id)=>{
      //此处confirm为浏览器内置函数，作用是弹出一个对话框，提示用户确认某个操作是否进行，
      // 返回值为布尔值，用户点击“确定”返回true，点击“取消”返回false
      if(window.confirm('确定删除吗？')){
        //调用App传过来的方法
        this.props.deleteTodo(id)
      }
    }
  render() {
    //批量接受props
    const {id,name,done} = this.props
    const {mouse}  = this.state
    return (
      <div>
          {/* 鼠标悬浮在li上高亮，现实删除按钮，移开则清除效果 */}
          <li style={{backgroundColor:mouse?'#f5f5f5':'#fff'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
            <label>
                <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
                <span>{name}</span>
            </label>
            <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
          </li>
      </div>
    )
  }
}
