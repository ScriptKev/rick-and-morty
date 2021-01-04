import { createContext, ReactNode } from 'react'

export const CharactersContext = createContext([])

type Props = { children: ReactNode }

export const CharactersProvider = ({ children }: Props) => {
  <CharactersContext.Provider value={[]}>
    {children}
  </CharactersContext.Provider>
}
