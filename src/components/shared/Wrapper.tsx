import { FC } from "react"
const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="px-2 py-5 mx-auto max-w-screen-2xl">
            {children}
        </div>
    )
}

export default Wrapper