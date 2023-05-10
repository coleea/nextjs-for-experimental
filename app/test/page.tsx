'use client'

import { useEffect } from 'react'
import RSCForFetch from '../../components/RSCForFetch'
import {useParams, usePathname, useRouter, useSearchParams, useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation'

export default function A() {

    console.log('in test page');
    
    // URLSearchParams()
    // const params = useParams()
    const router = useRouter()
    const searchparams = useSearchParams()
    const selectedLayoutSegment = useSelectedLayoutSegment()
    console.log({selectedLayoutSegment});
    
    console.log('searchparams', searchparams.values());
    
    // why it is needed ?
    // const pathname = usePathname()
    // console.log({params});
    // console.log({pathname});
    
    // useEffect(() => {
    //     console.log('passname changed');        
    // }, [pathname]);

    return (
        <>
            <div className="">
                i am test page
                {/* @ts-expect-error Async Server Component */}
                {/* <RSCForFetch /> */}
            </div>
        </>
    )
}