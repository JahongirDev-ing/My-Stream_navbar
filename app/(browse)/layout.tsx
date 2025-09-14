import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { RootLayoutProps } from '@/types'
import React from 'react'
import { AppSidebar } from './_components/sidebar/app-sidebar'
import AppNavbar from './_components/navbar/app-navbar'

const Browselayout = ({children}:RootLayoutProps) => {
  return (
    <div>
  

    <SidebarProvider>
      <AppSidebar />
      <main className='w-full h-full'>
        <AppNavbar/>
        
        {children}
      </main>
    </SidebarProvider>

    </div>
  )
}

export default Browselayout
