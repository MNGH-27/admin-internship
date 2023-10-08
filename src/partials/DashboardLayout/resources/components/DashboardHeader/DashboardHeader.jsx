'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@atom/index'
import { SmallLogo } from '@public/image'
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { IsLinkActive, LINKS_LIST } from './resources'
import Link from 'next/link'
const DashboardHeader = () => {
  const pathName = usePathname()

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <header className="border-b-2 border-b-[#EEEEF2] shadow-[0_3px_4px_0px_rgba(24,24,28,0.03)]">
      <div className=" py-3 md:py-5 mx-auto max-w-7xl px-5 xl:px-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-14">
            <Button
              onClick={() => setIsSidebarOpen(true)}
              type="Button"
              className="md:hidden text-black"
            >
              <HiOutlineMenuAlt1 size={24} />
            </Button>
            <Image
              src={SmallLogo}
              alt="logo"
              className="h-10 w-10 hidden md:block"
              height={40}
              width={40}
            />
            <div
              className={`${
                isSidebarOpen ? '' : 'hidden md:block'
              } fixed md:relative z-10 top-0 right-0 w-full h-full`}
            >
              <div
                onClick={() => setIsSidebarOpen(false)}
                className="absolute -z-10 w-full h-full bg-black/70 md:hidden"
              ></div>
              <ul
                className={`flex flex-col md:flex-row items-center justify-start gap-x-5 gap-y-5 z-10 bg-white w-3/4 sm:w-1/2 md:w-fit h-full p-5 md:p-0`}
              >
                <div className="flex flex-col justify-center items-center w-full md:hidden">
                  <Button
                    type="text"
                    className="mr-auto"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <AiOutlineClose />
                  </Button>

                  <Image
                    src={SmallLogo}
                    alt="logo"
                    className="h-14 w-14"
                    height={60}
                    width={60}
                  />
                </div>

                {LINKS_LIST.map((route, index) => (
                  <li
                    className={`${IsLinkActive(
                      pathName,
                      route.path,
                    )} w-full md:w-fit transition-all duration-200 text-[#8B91A7] hover:bg-[#F6F7F8] hover:text-black px-3 py-3 md:py-2 rounded-md`}
                    key={index}
                  >
                    <Link
                      className="flex items-start justify-start gap-x-1 text-sm font-semibold"
                      href={'/dashboard' + route.path}
                    >
                      {route.icon}
                      {route.value}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 text-[#6C7389]">
            {/* <SearchSvg />
            <NotificationSvg />
            <img
              src={UserTempPic}
              alt="user icon"
              className="w-10 h-10 rounded-full"
            /> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
