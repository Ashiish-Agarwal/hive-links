'use client'

import React from 'react'

import { authClient } from '@/lib/auth-client'

import { Button } from './ui/button'
import { redirect } from 'next/navigation'
import { LogOut } from 'lucide-react'



const Logout = () => {
    const handleLogout = () => {
        authClient.signOut()
        redirect('/signin')
    }


    return (
<>



<Button className='hover:bg-destructive/85' variant='destructive' onClick={()=>handleLogout()}>Logout <LogOut/></Button>



        
</>
    )
    
}

export default Logout