
export const runtime = 'experimental-edge'; 

export default async function C() {

     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
                      .then(response => response.json())
  
    return (
        <>
            <div className="" style={{border : "1px solid red"}}>
                test-for-recoil page
                {JSON.stringify(res)}
                {/* @ts-expect-error Async Server Component */}
                <D />
            </div>
        </>
    )
}

async function D() {

    const res = await fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => response.json())

    return (
        <>
            <div className="" style={{border : "1px solid green"}}>
                d
                {JSON.stringify(res)}
            </div>
        </>
    )
}