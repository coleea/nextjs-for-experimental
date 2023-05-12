import Link from "next/link"


export default function A() {
    return <div className="">
        <div className="">
            more nested page
        </div>

        <Link href={'/test_for_nested_layout'}>
            goto test_for_nested_layout
        </Link>
        </div>
}