// https://mycodings.fly.dev/blog/2022-11-16-nextjs-13-how-to-ssg-isr-and-not-found

import React from 'react'

type Props = {
  params: {
    slug : string,
  },
}
type TodoType = {
  "userId": number
  "id": number
  "title": string
  "completed": boolean
}

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { cache: 'force-cache' },
  )
  const todo: TodoType = await res.json()
  return todo
}

async function TodoId(props: Props) {


  // console.log('props.params');
    // console.log(props.params);
    // console.log({todoId});
    // const todoId = 1
  const todo = await fetchTodo(props.params.slug.toString())

  return (
    <div className='space-y-2 border-4 border-blue-400 bg-slate-300 p-2'>
      <div>Todo Id : {todo.id}</div>
      <div>Todo Title : {todo.title}</div>
      <div className='border-t border-black py-2'>
        Completed :{todo.completed ? <span> Yes</span> : <span> No</span>}
      </div>
    </div>
  )
}

export default TodoId

// ssg
export async function generateStaticParams() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
//   const todos: TodoType[] = await res.json()

  // splice first 10
//   const trimmedTodos = todos.splice(0, 10)

    return Array(10).map((_, i) => ({slug : i}))
  // [ { todoId: '1'}, {todoId: '2'}, ...{todoId: '200'}]
//   return trimmedTodos.map(todo => ({
//     todoId: todo.id.toString(),
//   }))
}