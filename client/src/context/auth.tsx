import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";


// https://hackernoon.com/creating-context-in-reactjs-using-typescript--very important next time so you dont spend 2hours again

interface AuthInterface {
  user: string | null;
  accesstoken: string;
  refreshtoken: string;
}
interface AuthContextInterface {
  auth: AuthInterface | null;
  setAuth: Dispatch<SetStateAction<AuthInterface>>;
}

const defaultState = {
  auth: {
    user: null,
    accesstoken: "",
    refreshtoken: "",
  },
  // plase check the console.log(auth)
  setAuth: (auth: AuthInterface) => {console.log(auth)},
} as AuthContextInterface;

const AuthContext = createContext<AuthContextInterface>(defaultState);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthInterface>({
    user: null,
    accesstoken: "",
    refreshtoken: "",
  });

  useEffect(() => {
    let LS = localStorage.getItem("auth");
    if (LS) {
      setAuth(JSON.parse(LS));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
