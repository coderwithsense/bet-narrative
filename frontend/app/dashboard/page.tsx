import { subtitle, title } from '@/components/primitives';
import React from 'react'

const page = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-[#333333] rounded-xl p-2">
        <h1 className={subtitle({ class: "font-extrabold text-xl" })}>Hello, {"Akshat"}!</h1>
        <div className='m-4'>
            <p className='font-semibold'>Total Balance</p>
            <div className='flex justify-around'>
                <p>$ {"1,511"}</p>
                
            </div>
        </div>
      </div>
      <div className="bg-[#333333] rounded-xl">sdwdq</div>
    </div>
  );
}

export default page