import { FC, ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const MainLayout: FC<LayoutProps> = ({ children }) => {
  return <div>{children}</div>
}

export default MainLayout
