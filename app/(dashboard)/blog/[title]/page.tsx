
type props = {
    params :{
    title : string}
}
function BlogPage({params} : props) {
    console.log({params});
    
    return ( <>
        <div className="">
            this is blog page
            <div className="">postname : {params.title}</div>
        </div>
    </> );
}

export default BlogPage;