import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <main>
         
        {children}
    </main>
  );
}
