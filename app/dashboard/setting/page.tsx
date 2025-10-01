import React from 'react'
import SettingsPage from '@/components/setting/setting'
import { UuidAction } from '@/actions/read'
import { redirect } from 'next/navigation'

const Setting = async () => {
  const user = await UuidAction()
  if(!user[0].id){
    return redirect('/landingpage')
    
}
  return(

    
    <div className='flex items-center justify-center h-screen pt-20'>
      
      <SettingsPage user={{...user[0], createdAt: user[0].createdAt.toISOString(), updatedAt: user[0].updatedAt.toISOString()}}/>
    </div>
    )
}

export default Setting