export default function SomeComponent({params} : {params : {args : string[]}}) {

    return (
        <div className="">
            this page is rendered
            {params.args?.map((v, i) => <div className="" key={i}>{v}</div> )}
        </div>
    )
}