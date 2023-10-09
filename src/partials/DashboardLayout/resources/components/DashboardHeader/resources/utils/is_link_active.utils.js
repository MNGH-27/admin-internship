import path from 'path'

export const IsLinkActive = (pathName, href) => {
  let className = ''

  if (href === '/' && pathName === '/dashboard') {
    className = 'bg-[#F6F7F8] text-black'
  }

  if (href !== '/' && pathName.includes(href)) {
    className = 'bg-[#F6F7F8] text-black'
  }

  return className
}
