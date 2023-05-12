
// export const runtime = 'edge'; 
export const runtime = 'experimental-edge'; 
// https://github.com/vercel/next.js/issues/39800
// - error Provided runtime "edge1111" is not supported. Please leave it empty or choose one of: edge, experimental-edge, nodejs

export default async function C() {

    console.log('this function runs on experimental-edge');
    
     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
  
    return (
        <>
            <div className="" style={{border : "1px solid red"}}>
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