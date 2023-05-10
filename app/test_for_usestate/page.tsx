'use client'
import { Suspense, useState, lazy, ComponentType } from "react";
import RSCForFetch from '../../components/RSCForFetch'
import JustServerComponents from '../../components/JustServerComponents'
export default function SomeComponent() {
    const [someValue, setsomeValue] = useState('some state');
    const Lazied = lazy(()=> import('../../components/JustServerComponents'))
    return (
        <>
            <div className="">
                {someValue}
                <Suspense fallback={"loading..."}>
                    {}
                    {/* <RSCForFetch/> */}
                    <Lazied />
                    <Lazied />
                    <Lazied />
                </Suspense>
                {/* @ts-expect-error Async Server Component */}
                <RSCForFetch />
                {/* <JustServerComponents /> */}
            </div>
        </>
    )
}