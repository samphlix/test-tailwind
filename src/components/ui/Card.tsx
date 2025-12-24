import type { FC, PropsWithChildren } from "react";
import Logo from "../../assets/react.svg"

export const Card: FC<PropsWithChildren> = ({children}) => {
    return <div className="mx-auto flex gap-x-4 outline outline-neutral-300 rounded-xl px-4 py-4 items-center bg-neutral-100 shadow-lg">
        <img src={Logo} />
        <div>
            {children}
        </div>
    </div>
}
