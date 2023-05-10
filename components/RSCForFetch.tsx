
export default async function ExampleServerComponent() {

    const res = (typeof window === "undefined")
                ? await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json())
                : null 

    return (
        <>
            <div className="" style={{border : "1px solid red"}}>
                <div className="">
                    i am RSCForFetch
                </div>                
                <div className="">
                    {JSON.stringify(res)}
                </div>
            </div>
        </>
    )
}