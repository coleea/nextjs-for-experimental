'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function A() {
    const router = useRouter()

    useEffect(() => {
        router.push('/test?a=1&b=2', {forceOptimisticNavigation : true}, ) 
    }, []);
    
    return (
        <>

        </>
    )
}