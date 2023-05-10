import { use } from "react"

export default function A() {
    const res = use(fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()))
  
    return (
        <>
            <div className="">
                this is in use_test
                {JSON.stringify(res)}
            </div>
        </>
    )
}