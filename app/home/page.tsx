import { useId } from "react"

export default function A() {
    const someid = useId()
    console.log({someid});
    return (
        <>
            {/* <div className="" id={Math.random().toString()}> */}
            <div className="" id={someid}>
                this is home1111
            </div>
        </>
    )
}