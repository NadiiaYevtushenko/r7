import { createContext, useState, ReactNode } from 'react'

interface AppContextType {
    username: string
    setUsername: (name: string) => void
}

// Створюємо контекст з початковими значеннями
export const AppContext = createContext<AppContextType>({
    username: 'Guest',
    setUsername: () => {}
})

//приймає дочірні елементи (children)
interface AppProviderProps {
    children: ReactNode
}

// Створюємо компонент-провайдер, який зберігає username у стані
export const AppProvider = ({ children }: AppProviderProps) => {
    const [username, setUsername] = useState<string>('Admin User')

    return (
        // Передаємо username і функцію setUsername всім дочірнім компонентам
        <AppContext.Provider value={{ username, setUsername }}>
            {children}
        </AppContext.Provider>
    )
}