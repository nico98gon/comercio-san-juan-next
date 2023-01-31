'use client'

import Link from "next/link"

// import { useAnchor } from "../../hooks";


export const PagesButtons = () => {

    // const { handleCloseNavMenu } = useAnchor();

    return (
        <>
            {/* <button className="cta" onClick={ handleCloseNavMenu }> */}
            <Link href="/">
                <button className="cta">
                    <span className="hover-underline-animation"> Inicio </span>
                </button>
            </Link>

            {/* <button className="cta" onClick={ handleCloseNavMenu }> */}
            <Link href="/virtual-stores">
                <button className="cta">
                    <span className="hover-underline-animation"> Tiendas Online </span>
                </button>
            </Link>

            {/* <button className="cta" onClick={ handleCloseNavMenu }> */}
            <Link href="/products">
                <button className="cta">
                    <span className="hover-underline-animation"> Productos </span>
                </button>
            </Link>

            {/* <button className="cta" onClick={ handleCloseNavMenu }> */}
            <Link href="/services">
                <button className="cta">
                    <span className="hover-underline-animation"> Servicios </span>
                </button>
            </Link>
        </>
    )
}
