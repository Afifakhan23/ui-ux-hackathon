import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const AuthGuard = ({children} : {children : React.ReactNode}) => {
const [isLoading, setIsLoading] = useState(true)
const {isSignedIn} = useUser()
const router = useRouter()

useEffect(() => {
    if(isSignedIn === false){
        router.replace("account")
    }
else {
setIsLoading(false)
    }
}, [isSignedIn, router])

if (isLoading) return <p className="h-screen w-full bg-slate-100 text-blue-700 flex justify-center items-center text-2xl md:text-4xl font-medium">Loading ...</p>

return <>{children}</>
}
export default AuthGuard