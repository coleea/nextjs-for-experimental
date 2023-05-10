'use client'
import { useState } from "react";
import RSCForFetch from '../../components/RSCForFetch'
import JustServerComponents from '../../components/JustServerComponents'
export default function SomeComponent() {
    const [someValue, setsomeValue] = useState('some state');
    return (
        <>
            <div className="">
                {someValue}
                {/* <RSCForFetch/> */}
                <JustServerComponents />
            </div>
        </>
    )
}