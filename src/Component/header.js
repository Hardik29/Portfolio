import React from 'react'
import { Transition } from "@headlessui/react";

export default function header() {
    return (
        <div className="absolute overflow-hidden">
            <div>
            <Transition 
            appear={true} 
            show={true} 
            enter="transition transform ease-in-out duration-2000 delay-1000" 
            enterFrom="-translate-y-full" 
            enterTo=" translate-y-0"
            leave="transition opacity transform duration-2500" 
            leaveFrom="opacity-100  translate-x-5" 
            leaveTo="opacity-0  translate-x-0"
        >
        <div className="w-396 h-10  rounded-b-md ml-12">
            <ul className="flex justify-center">
                <li className="pr-1">
                    About
                </li>
                <li className="pr-4">
                    Home
                </li>
            </ul>
        </div>        
        </Transition>
        </div>
        </div>
    )
}
