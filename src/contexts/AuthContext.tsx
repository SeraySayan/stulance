import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface AuthContextProps {
    accessToken: string | null;
    setAccessToken: (accessToken: string | null) => void;
    userType: string | null;
    setUserType: (accessToken: string | null) => void;
}

const AuthContext = createContext<AuthContextProps>({
    accessToken: null,
    setAccessToken: () => {},
    userType: null,
    setUserType: () => {},
});

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [userType, setUserType] = useState<string | null>(null);

    useEffect(() => {
        const storedAccessToken = localStorage.getItem('accessToken');
        const storedUserType = localStorage.getItem('userType');

        if (storedAccessToken) {
            setAccessToken(storedAccessToken);
        }
        if (storedUserType) {
            setUserType(storedUserType);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ accessToken, setAccessToken, setUserType, userType }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
