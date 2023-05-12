
export default function RootLayout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <>
        <div className="" style={{display : "flex" , flexDirection : "column" , gap : "5em"}}>
            <div className="">
            this is layout for nested component

            </div>
            <div className="">
                {children}

            </div>
        </div>
    
    </>
  )
}
