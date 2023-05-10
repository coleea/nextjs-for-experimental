import { ReactNode } from "react";

export default function Layout({children} : {children : ReactNode}) {
    return ( <>
        <html>
            <body>
                <div className="">i am dashboard layout</div>
                {children}</body>
        </html>    
        {/* <div className="">i am layout for dashboard
            <children />
        </div> */}
    </> );
}
