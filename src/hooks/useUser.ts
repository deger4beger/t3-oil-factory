import { Session } from "next-auth"
import { createContext, useContext } from "react"

export const UserContext = createContext<Session["user"]>(undefined)

export const useUser = () => useContext(UserContext)