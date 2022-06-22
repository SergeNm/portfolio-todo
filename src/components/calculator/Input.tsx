import React from 'react';
import { useAppSelector } from "../../redux/hooks";

const Input = () => {
    const {showValue} = useAppSelector(state => state.calculator)
  return (
    <div>
        <input type='test' placeholder='0' value={showValue.join('')} className='p-3 my-2 w-full rounded text-xl bg-gray-800 text-gray-300 font-bold text-right' disabled />
    </div>
  )
}

export default Input