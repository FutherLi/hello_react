import React,{Component} from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component{
    //初始化状态
    state={todos:[
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'睡觉',done:true},
        {id:'003',name:'打代码',done:false}
    ]}

    //通过props实现子组件Header向父组件App传递数据
    addTodo=(todoObj)=>{
        //获取原todos
        const {todos} = this.state
        //追加用户输入到todos
        const newTodos = [todoObj,...todos]
        //更新状态
        this.setState({todos:newTodos})
    }

    //复选框选中状态改变，更新todos状态
    updateTodo=(id,done)=>{
        //获取todos原始状态
        const {todos} = this.state
        //遍历todos，找到id与当前id相同的todo，更新done值
        const newTodoObj = todos.map((todo)=>{
            if(todo.id === id){
                return {...todo,done}
            }else{
                return todo
            }
        })
        //更新状态
        this.setState({todos:newTodoObj})
    }
    render(){
        const {todos} = this.state
        return(
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos = {todos} updateTodo={this.updateTodo}/>
                    <Footer/>
                </div>
            </div>
        )
    }
}