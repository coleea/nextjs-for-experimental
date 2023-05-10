import RSCForFetch from '../components/RSCForFetch'

export default function A() {
    return (
        <>
            <div className="">
                {/* @ts-expect-error Async Server Component */}
                <RSCForFetch />
            </div>
        </>
    )
}