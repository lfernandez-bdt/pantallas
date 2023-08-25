import * as React from "react"
import '@/styles/stylesComponents/mainNavTop.css'
import { useAuth } from "@/helpers/AuthProvider"
import Link from "next/link"
import { Icon } from "./Icon";


export function MainNavTop({ items }) {
    const auth = useAuth()

    return (
        <div className="containerNavMain">
            {items?.length ? (
                <div className="containerNavTop">
                    {items?.map((item, index) => {
                        if (item.href) {
                            if (item.protected) {
                                if (auth.user) {
                                    return (
                                        <div key={index}>
                                            <Link
                                                /* key={index} */
                                                href={item.href}
                                                className={"linkText"}
                                            >
                                            </Link>
                                        </div>

                                    )
                                }
                            } else {
                                return (
                                    <div key={index}>
                                        <Icon
                                            dataTestId={`icon-${item.title}`}
                                            type={item.icon} 
                                        />
                                        <Link
                                            /* key={index} */
                                            href={item.href}
                                            className={"linkText"}
                                        >
                                            {item.title}
                                        </Link>
                                    </div>
                                )
                            }
                        }
                    })}
                </div>
            ) : null}
        </div>
    )
}