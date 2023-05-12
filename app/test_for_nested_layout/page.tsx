import Link from "next/link";

export default function A() {
    return (
        <>
            <div className="">
                <div className="`">
                this is nested page 

                </div>
                <Link href={"/test_for_nested_layout/more_nested"}>
                    {`go to test_for_nested_layout/more_nested`}
                </Link>
            </div>
        </>
    )
}