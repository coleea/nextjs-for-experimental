import JustServerComponents from '../../components/JustServerComponents'

export default async function SomeComponent() {

    // const res = await fetch('https://hacker-news.firebaseio.com/v0/1.json')
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    // .then(json => console.log(json))

    // console.log({res});
    
    return (
        <>
            <div className="">
                {JSON.stringify(res)}
                <JustServerComponents />
            </div>
        </>
    )
}