import clsx from 'clsx'
import NavLink from './NaveLink'

import CSText from '../ui/text/CSText'

const menu = [
  {
    id: 1,
    label: 'ABOUT',
    path: '/',
  },
]

const MainMenu = () => {
  return (
    <nav className="mt-[2rem] md:mt-0">
      <ul className="grid grid-cols-3 md:block">
        {menu.map(({ id, label, path }, index) => {
          return (
            <li
              key={id}
              className={clsx(
                'group relative inline-flex items-center px-[1rem] xl:px-[3rem]',
              )}
              role="none"
            >
              <NavLink
                id={`nav-${id}`}
                path={path}
                className="relative hover:opacity-50"
              >
                <CSText size="12 xl:14" color="white" weight="medium">
                  {label}
                </CSText>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default MainMenu
