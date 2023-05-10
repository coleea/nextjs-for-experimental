'use client'

import { useParams } from "next/navigation"

export default function A({}) {

    const params = useParams()

    console.log({params});
    
    return (
        <div className="">
            this page is user - id - favorites
            {/* {params.args?.map((v, i) => <div className="" key={i}>{v}</div> )} */}
        </div>
    )
}