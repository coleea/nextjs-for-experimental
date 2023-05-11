'use client';


import { useAtom } from 'jotai';
import {animeAtom, citiesAtom, countAtom, countryAtom} from '../lib/atom'
import { useEffect, useState } from "react";
 
// This pattern will **not** work!
// You cannot import a Server Component into a Client Component.
 
export function AnotherClientComponent({children,}: {
  children: React.ReactNode;
}) {
    
  const [anime, setanime] = useAtom(animeAtom)
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    setTimeout(() => {
      setanime(prev => {
        const copied = structuredClone(prev)
        copied.at(0)!.title = "title is changed"
        console.log('title has changed');        
        return copied
      })
    }, 3000);  
  }, []);

  return (
    <>
    <div className=""  style={{border : "1px solid blue"}}>
      <button onClick={() => setCount(count + 1)}>{count}</button>
        <div className="">i am example-client-component</div>
        <div className="">
            {children}
        </div>
        <div className="">
          below is atom
          <div className="">
              {JSON.stringify(anime)}
          </div>
        </div>

    </div>
    </>
  );
}