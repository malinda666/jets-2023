import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  FC,
  SetStateAction,
  Dispatch,
} from 'react'

interface IScrollContext {
  scroll: number
  updateScroll: (val: number) => void
}

interface IScrollContextProvider {
  children: ReactNode
}

const ScrollContext = createContext<IScrollContext>({ scroll: 0, updateScroll: () => {} })

export const ScrollContextProvider: FC<IScrollContextProvider> = ({ children }) => {
  const [scroll, setScroll] = useState(0)

  const updateScroll = (val: number) => {
    setScroll(val)
  }

  return (
    <ScrollContext.Provider value={{ scroll, updateScroll }}>{children}</ScrollContext.Provider>
  )
}

export const useScroll = () => useContext(ScrollContext)
