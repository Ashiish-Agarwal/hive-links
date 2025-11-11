
import Logo from '@/components/logo'

import {SideBaar , MobileNavBar} from '@/components/SideBaar'
import { Toaster } from '@/components/ui/sonner'
import React from 'react'


const layout = ({children}: {children: React.ReactNode}) => {


  return (
<>
{/* large screen */}
{children}


<Toaster richColors={true}   duration={5000}/>

</>
  )
}

export default layout