import { ReactNode } from 'react'
interface Props {
    children : ReactNode
}
function Layout({children} : Props) {
  return (
    <nav>
        About Nav
        {children}
    </nav>
  )
}

export default Layout
