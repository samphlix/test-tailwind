import type { FC, PropsWithChildren } from "react"

export const Button: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className="px-4 py-2 rounded bg-blue-400 text-white hover:bg-blue-700 transition">
      {children}
    </button>
  )
}
