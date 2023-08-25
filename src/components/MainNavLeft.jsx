"use client"
import * as React from "react"
import '@/styles/stylesComponents/narvarLeft.css'
import { useAuth } from "@/helpers/AuthProvider"
import Link from "next/link"
import { Icon } from "./Icon";
import Image from "next/image"
import MenuItems from "./MenuItems"


export function MainNavLeft({ items }) {
    const auth = useAuth()

    return (
        <div className="containerNavMainLeft">
            {items?.length ? (
                <div className="containerNav">
                    {items?.map((item, index) => {
                        if (item.href) {
                            if (item.protected) {
                                if (true) {
                                    const depthLevel = 0;
                                    return (
                                        <MenuItems
                                            items={item}
                                            key={index}
                                            depthLevel={depthLevel}
                                        />
                                    )
                                }
                            } else {
                                return (
                                    <div className="containerNavOption">
                                        <Icon
                                            dataTestId={`icon-${item.title}`}
                                            type={'point'}
                                            className="iconPoin"
                                        />
                                        <Icon
                                            dataTestId={`icon-${item.title}`}
                                            type={item.icon}
                                            className="iconMenu"
                                        />
                                        <Link
                                            key={index}
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