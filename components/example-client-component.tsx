'use client';

import { useState } from "react";
 
// This pattern will **not** work!
// You cannot import a Server Component into a Client Component.
 
export default function ExampleClientComponent({children,}: {
  children: React.ReactNode;
}) {
    
  const [count, setCount] = useState(0);
 
  return (
    <>
    <div className=""  style={{border : "1px solid blue"}}>
      <button onClick={() => setCount(count + 1)}>{count}</button>
        <div className="">i am example-client-component</div>
        <div className="">
            {children}
        </div>

    </div>
    </>
  );
}