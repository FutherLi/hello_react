import React, { Component } from 'react'
import PropTypes from 'prop-types'
//导入nanoid用于生成唯一id(通过nanoid()返回一个唯一字符串)
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
  //对接收的props进行：类型、必要性的限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  //绑定键盘事件，获取用户输入
  handlerKeyUp=(event)=>{
    const {keyCode,target} = event
    const {addTodo} = this.props
    if(keyCode !== 13) return

    //校验任务类型
    if((typeof(target.value) === 'number')){
      console.log(typeof(target.value))
      alert('任务名称不能位数字')
      return
    }
    //包装用户输入为todoObj
    const todoObj = {id:nanoid(),name:target.value,done:false}

    //向父组件传递数据
    addTodo(todoObj)

    //清空输入框
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp = {this.handlerKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
