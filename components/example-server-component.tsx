import * as fs from 'fs'
import * as marked from 'marked'
// const fetch = require('sync-fetch')

export default async function SomeComponent() {

  // const res = await fetch('https://hacker-news.firebaseio.com/v0/1.json')
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  // .then(json => console.log(json))

  // console.log({res});
  
  return (
      <>
          <div className="" style={{border : "1px solid red"}}>
                <div className="">i am example-server-component</div>
              {JSON.stringify(res)}
          </div>
      </>
  )
}


// export default  function SomeComponent() {

//     const txt = fs.readFileSync('./README.md', "utf-8")
//     // marked(txt)    
//     console.log("typeof marked");
//     console.log(typeof marked);
//     console.log("typeof marked.marked");
//     console.log(typeof marked.marked);
    
//     const markettxt = marked.marked(txt)
    
//     // const res = fetch('https://jsonplaceholder.typicode.com/todos/1').json()

//     // const res = await fetch('https://hacker-news.firebaseio.com/v0/1.json')
//     // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // .then(response => response.json())
//     // .then(json => console.log(json))
  
//     // console.log({res});
    
//     return (
//         <>
//             <div className="">
//                 {/* {JSON.stringify(txt)} */}
//                 <div className="" dangerouslySetInnerHTML={{__html : markettxt}}></div>
//                 {/* {markettxt} */}
//                 {/* {JSON.stringify(res)} */}
//             </div>
//         </>
//     )
//   }