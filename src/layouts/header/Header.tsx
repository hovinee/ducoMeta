'use client'

import MainMenu from '@/components/menu/MainMenu'
import AutoSizeImage from '@/components/ui/auto-size-image/AutoSizeImage'
import CSText from '@/components/ui/text/CSText'
import { useSticky } from '@/hooks'
import clsx from 'clsx'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Header = () => {
  const path = usePathname()

  const { sticky, measuredRef } = useSticky()
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const header = clsx(
    'fixed z-10 lg:h-[8.4rem] bg-181818 lg:px-[12rem] flex w-full md:items-center lg:justify-between flex-col lg:flex-row py-[1rem] lg:py-0',
    path === '/' && !sticky && 'absolute bg-transparent',
    sticky && 'fixed bg-181818 shadow-2xl shadow-181818',
  )

  const handleLogout = () => {
    setOpenMenu(false)
  }

  return (
    <>
      <header className={header} ref={measuredRef}>
        <div className="flex items-center gap-[1rem] pl-[2rem] md:gap-[5rem] md:pl-0">
          <Link href={'/'} className="w-[8rem] md:w-[12rem] ">
            <AutoSizeImage src={'/images/logo.png'} full />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-[1rem] md:flex-row">
          <MainMenu />
          <div className="hidden md:block">
            {false ? (
              <div className="relative">
                <AutoSizeImage
                  src={'/images/my_profile.png'}
                  className="h-[4.2rem] w-[4.2rem] cursor-pointer"
                  onClick={() => setOpenMenu(!openMenu)}
                />
                {openMenu && (
                  <ul className="absolute right-full w-[15rem] bg-white pt-[1rem] shadow-lg">
                    <Link href="/my-info">
                      <li
                        className="cursor-pointer border-b py-[0.5rem] text-center text-16 hover:opacity-75"
                        onClick={() => setOpenMenu(false)}
                      >
                        마이페이지
                      </li>
                    </Link>
                    <Link href="/">
                      <li
                        className="cursor-pointer border-b py-[0.5rem] text-center text-16 hover:opacity-75"
                        onClick={handleLogout}
                      >
                        로그아웃
                      </li>
                    </Link>
                  </ul>
                )}
              </div>
            ) : (
              <Link href={'/auth/login'} className="cursor-pointer">
                <CSText size="12 xl:14" color="white" weight="semiBold">
                  로그인
                </CSText>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  )
}
export default Header
