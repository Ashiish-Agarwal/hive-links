'use client'
import Stepper, { Step } from './Stepper';

import React from 'react';
import { Input } from './ui/input';

import { CopyButton } from './ui/shadcn-io/copy-button';

const StepperCmp = () => {
    const [name, setName] = React.useState('');
    const [Lname, LsetName] = React.useState('');
  return (
    <>
    <div className=' flex flex-col gap-10 p-2  '>
      <div className='  '>

 <h1 className=' text-4xl md:text-5xl  h-full w-full lg:text-6xl xl:text-6xl text-center fontSourGummy'> How easy is it </h1>
 <p className=' text-xl md:text-5xl  h-full w-full lg:text-3xl xl:text-3xl text-center fontSourGummy'> takes only 1 minute </p>
      </div>
<div className=''>

<Stepper className='h-full md:h-[80vh]'
  initialStep={1}
  onStepChange={(step) => {
    console.log(step);
  }}
  onFinalStepCompleted={() => console.log("All steps completed!")}
  backButtonText="Previous"
  nextButtonText="Next"
>
  <Step>
    <h2>Welcome to the bee Tree</h2>
    <p>Create a cutome app for your links store</p>
  </Step>
  <Step>
    <h2>Step 2</h2>
    <p> Go and get all your social links .  </p>
    
  </Step>
  <Step >
    <div className='flex flex-col gap-2'>

    <h2>Paste the links</h2>
    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="enter name!" />
    <Input value={Lname} onChange={(e) => LsetName(e.target.value)} placeholder="enter Links" />
    </div>
  </Step>
  <Step >
    <h1>You made it! 🎉</h1>
    <div className='flex gap-4 items-center'>

    <code className='text-black w-fit pr-2  flex gap-4 items-center     p-2 rounded'>https://beelink.in{name} 
          <CopyButton  className='bg-slate-700/20  text-black hover:bg-slate-400/80'
        content={name}
        onCopy={() => console.log("Link copied!")}
        />
        </code>

    </div>
  </Step>
</Stepper>




    </div>
    
  </div>
 
  </>
  )
}

export default StepperCmp
  