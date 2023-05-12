// export default function A() {
//     return (
//         <>
//             <div className="">
//                 aaa
//             </div>
//         </>
//     )
// }

// app/layout.js
import { ApolloWrapper } from "@/lib/apollo-client-for-client-component";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}