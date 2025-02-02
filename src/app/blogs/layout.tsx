
import Header from '@/components/layout/Header';
import React from 'react'


function Layout({ children }: { children: React.ReactNode}) {
  return (
    <>
    <Header
    opacity='0.6'
    />
    {children}
    </>
  )
}

export default Layout;