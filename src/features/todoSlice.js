import { createSlice } from '@reduxjs/toolkit'



const todoSlice = createSlice({
    name: 'todos',
    initialState:{
        todoList:[],
    },
    reducers: {
    saveTodo:(state,{payload})=>{
        state.todoList.push(payload);
    },
    setCheck:(state,action)=>{
        state.todoList.map(item=>{
            if(action.payload==item.id){
                  if(item.done==true)
                  item.done=false
                else
                  item.done=true;
            }
        })
    }
    }
});

export const {
saveTodo,setCheck
} = todoSlice.actions

export const selectTodoList=state=>state.todos.todoList
export default todoSlice.reducer