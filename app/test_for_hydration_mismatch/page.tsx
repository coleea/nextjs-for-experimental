'use client'
import { useEffect, useId } from "react"

export default function A() {
    const someid = useId()
    console.log({someid});

    useEffect(() => {
        console.log(
            document.querySelector(`#${CSS.escape(someid)}`)
        );        
    }, []);

    return (
        <>
            {/* Warning: Prop `id` did not match. Server: "0.5971144041520453" Client: "0.577785766430871" */}
            {/* <div className="" id={Math.random().toString()}> */}
            <div className="" id={someid}>
                this is home1111
                {/* Error: Text content does not match server-rendered HTML. */}
                {/* {Math.random()} */}
            </div>
        </>
    )
}