import AddFriendModal from './AddFriendModal';
import AddCityModal from './AddCityModal';
import AddRecModal from './AddRecModal';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import jwt_decode from "jwt-decode";

var token = localStorage.getItem('access_token');
if (token !== null) {
  var logged_user = jwt_decode(token);
}
else { var logged_user = { user_id: '0' } }
let logged = logged_user.user_id
console.log(logged)
var user_page = 'user/'+logged



const navigation = [
  // { name: 'Dashboard', href: '#', current: true },
  { name: 'My List', href: user_page, current: false },
  // { name: 'Add Recommendation', href:'#', current: false },
  // { name: 'Add City', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-red-600 recco-roboto-text drop-shadow-xl">
      {({ open }) => (
        <>
          <div className="max-w-9xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    // src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    src="../recologo.png"
                    alt="RECCO"
                  />
                  </a>
                  <a href="/">
                  <img
                    className="hidden lg:block h-8 w-auto"
                    // src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    src="../recologo.png"
                    alt="RECCO"
                  />
                  </a>
                  {/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/W3bTRSR/Screen-Shot-2022-04-26-at-5-16-42-PM.png" alt="Screen Shot 2022-04-26 at 5.16.42 PM" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>upload a pic</a><br /> */}
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          // item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          // 'px-3 py-2 rounded-md text-sm font-medium'
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-100',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    <AddRecModal />
                    <AddCityModal />
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    { logged !== "0"
                    ? 
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="logout"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                    :

                    
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/signup"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign Up
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/signin"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign In
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                    }       
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300',
                    'px-3 py-2 rounded-md text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <br></br>
              <AddRecModal /><br></br>
              <AddCityModal/>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

// import AddFriendModal from './AddFriendModal';
// import AddCityModal from './AddCityModal';
// import AddRecModal from './AddRecModal';

// function NavBar() {
//   return (
//     <nav className="bg-rose-600 sticky top-0 z-50 shadow-2xl">
//       <div className="container px-6 py-4 mx-auto">
//         <div className="lg:flex lg:items-center lg:justify-between">
//           <div className="flex items-center justify-between">
//             <div className="text-xl font-semibold text-gray-700">
//               <a
//                 className="text-2xl font-bold text-white lg:text-3xl hover:text-gray-200"
//                 href="/"
//               >
//                 Restaurant Recommendations
//               </a>
//             </div>

//             {/* Mobile menu button */}
//             <div class="flex lg:hidden relative inline-block text-left">
//               <div>
//                 <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
//                   Options
//                   {/* <!-- Heroicon name: solid/chevron-down --> */}
//                   <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                     <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
//                   </svg>
//                 </button>
//               </div>

//                 {/* <!--
//                   Dropdown menu, show/hide based on menu state.

//                   Entering: "transition ease-out duration-100"
//                     From: "transform opacity-0 scale-95"
//                     To: "transform opacity-100 scale-100"
//                   Leaving: "transition ease-in duration-75"
//                     From: "transform opacity-100 scale-100"
//                     To: "transform opacity-0 scale-95"
//                 --> */}
//                 <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
//                   <div class="py-1" role="none">
//                     {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
//                     <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
//                     <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
//                     <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
//                     <form method="POST" action="#" role="none">
//                       <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
//                     </form>
//                   </div>
//                 </div>
//               </div>

//             {/* <div className="flex lg:hidden">
//               <button
//                 type="button"
//                 className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
//                 aria-label="toggle menu"
//               >
//                 <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
//                   <path
//                     fillRule="evenodd"
//                     d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//           </div> */}

//           {/* Mobile Menu open: "block", Menu closed: "hidden" */}
//           <div className="hidden -mx-4 lg:flex lg:items-right">
//             <a
//               href="/logout"
//               className="block mx-4 mt-2 text-sm text-white capitalize lg:mt-0 hover:text-gray-200"
//             >
//               Logout
//             </a>
//           </div>
//         </div>
//       </div>
//       </div>
//     </nav>
//   );}


// export default NavBar;
