import React from 'react'
import { Transition } from "@headlessui/react";
 
export default function MyComponent() {
  return (
    <div>
      {/*<Transition appear={true} show={true} enter="transition transform ease-in-out duration-1000" enterFrom="-translate-x-full" leave="transition opacity transform duration-2500" leaveFrom="opacity-100  translate-x-5" leaveTo="opacity-0  translate-x-0"></Transition>*/}
      <div className="  absolute overflow-hidden">
        <Transition
          appear={true}
          show={true}
          enter="transition transform ease-in-out duration-2000 delay-1000"  //value 2000 to be defined 
          enterFrom=" translate-x-full " // -before transition  to trannsform from back
          enterTo=" translate-x-0"
          leave="transition opacity transform duration-2500"
          leaveFrom="opacity-100  translate-x-5"
          leaveTo="opacity-0  translate-x-0">
          {<div>
            <div className="h-auto w-396 bg-white shadow-lg rounded p-5 m-12 mt-32">
              <div>

              </div>
              <div >
                <h1 className="flex justify-center items-center text-6xl font-bold ">Hardik Singh</h1>
                <p className="flex justify-center items-center mt-5 text-xl">
                <span className="inline-block mt-2">
                    <svg id="emoji" className="h-8 w-8 animate-wiggle" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <g id="hair" />
                      <g id="skin">
                        <path fill="#FCEA2B" d="M18.6575,19.2409c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115c-1.6927,0.9684-2.2799,3.1256-1.3115,4.8183 c0.1552,0.2714,0.3458,0.5209,0.5667,0.742l11.5324,15.0998l2.6883,3.3878l-7.8906-10.3314 c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799,3.1256-1.3115,4.8183c0.1552,0.2714,0.3458,0.5209,0.5667,0.7421 L21.752,46.226l6.2707,7.899c5.467,6.2731,14.5147,5.9306,20.7863,0.465c3.6045-3.1684,5.9226-7.5482,6.5154-12.3105 c0.3858-4.2326,0.807-15.301,0.807-15.301c-0.1826-2.6008-3.1353-4.5234-3.5158-3.1802l-4.8939,9.7575l-3.3657-4.2224 l3.3657,4.2224l-3.3657-4.2224L30.8909,12.1248c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799,3.1256-1.3115,4.8183 c0.1552,0.2714,0.3458,0.5209,0.5667,0.742l4.2488,5.5631L36,30.4167L22.581,12.7366c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115 s-2.2799,3.1256-1.3116,4.8183c0.1552,0.2714,0.3458,0.5209,0.5667,0.7421L31.6894,36" />
                      </g>
                      <g id="skin-shadow" />
                      <g id="color" />
                      <g id="line">
                        <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.6575,19.2409 c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115c-1.6927,0.9684-2.2799,3.1256-1.3115,4.8183 c0.1552,0.2714,0.3458,0.5209,0.5667,0.742l11.5324,15.0998l2.6883,3.3878l-7.8906-10.3314 c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799,3.1256-1.3115,4.8183c0.1552,0.2714,0.3458,0.5209,0.5667,0.7421 L21.752,46.226l6.2707,7.899c5.467,6.2731,14.5147,5.9306,20.7863,0.465c3.6045-3.1684,5.9226-7.5482,6.5154-12.3105 c0.3858-4.2326,0.807-15.301,0.807-15.301c-0.1826-2.6008-3.1353-4.5234-3.5158-3.1802l-4.8939,9.7575l-3.3657-4.2224 l3.3657,4.2224l-3.3657-4.2224L30.8909,12.1248c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799,3.1256-1.3115,4.8183 c0.1552,0.2714,0.3458,0.5209,0.5667,0.742l4.2488,5.5631L36,30.4167L22.581,12.7366c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115 s-2.2799,3.1256-1.3116,4.8183c0.1552,0.2714,0.3458,0.5209,0.5667,0.7421L31.6894,36" />
                        <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M11.6726,42.8719c0,2.5663,1.747,4.6428,3.9059,4.6428" />
                        <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M7.0614,42.4369c0,5.5959,3.8094,10.1241,8.5171,10.1241" />
                        <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M45.2619,21.2377c0-2.5663-1.747-4.6428-3.9059-4.6428" />
                        <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M49.8731,21.6727c0-5.5959-3.8094-10.1241-8.5171-10.1241" />
                      </g>
                    </svg>
                  </span>
                  Hii !! I am a innovative UX Designer and creative web developer
                </p>
              </div>
              <div className="flex justify-center items-center mt-3">
                <ul>
                  <li className="inline-block m-2">
                    <button className="text-lg font-medium text-gray-900 dark:text-gray-100 group">
                      <span>Desgin</span>
                      <span className="block w-full h-1 transition-transform  scale-x-50 rounded-full transform group-hover:scale-x-100 bg-gradient-to-r from-blue-400 to-blue-500"></span>
                    </button>
                  </li>
                  <li className="inline-block bg-gradient-to-r from-blue-400 to-blue-500 rounded-full h-2 w-2"></li>
                  <li className="inline-block m-2">
                    <button className="text-lg font-medium text-gray-900 dark:text-gray-100 group">
                      <span>Code</span>
                      <span className="block w-full h-1 transition-transform  scale-x-50 rounded-full transform group-hover:scale-x-100 bg-gradient-to-r from-blue-400 to-blue-500"></span>
                    </button>
                  </li>
                  <li className="inline-block bg-gradient-to-r from-blue-400 to-blue-500 rounded-full h-2 w-2"></li>
                  <li className="inline-block m-2">
                    <button className="text-lg font-medium text-gray-900 dark:text-gray-100 group">
                      <span>Resume</span>
                      <span className="block w-full h-1 transition-transform  scale-x-50 rounded-full transform group-hover:scale-x-100 bg-gradient-to-r from-blue-400 to-blue-500"></span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center items-center mt-8 cursor-pointer">
                <div className="flex justify-center items-center bg-blue-500 rounded-full h-14 w-14 opacity-75 hover:opacity-100 transition-transform  scale-50 ease-in-out transform hover:scale-100 text-white">Li</div>
                <div className="flex justify-center items-center bg-red-500 rounded-full h-14 w-14 opacity-50 hover:opacity-100 transition-transform  scale-50 ease-in-out transform hover:scale-100 text-white">G</div>
                <div className="flex justify-center items-center bg-black rounded-full h-14 w-14 opacity-50 hover:opacity-100 transition-transform  scale-50 ease-in-out transform hover:scale-100 text-white">Be</div>
              </div>
            </div>
          </div>}
        </Transition>
      </div>
    </div>
  );
}