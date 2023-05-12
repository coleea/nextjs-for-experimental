import { ApolloWrapper } from "@/lib/apollo-client-for-client-component";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


export default function RootLayout({  children, }: { children: React.ReactNode, }) {
  return (
    <html lang="en">
      <body>
        {/* - error createContext only works in Client Components. 
        Add the "use client" directive at the top of the file to use it. 
        Read more: https://nextjs.org/docs/messages/context-in-server-component */}
        <RecoilRoot>
          {children}
        </RecoilRoot>
      </body>
    </html>
  );
}