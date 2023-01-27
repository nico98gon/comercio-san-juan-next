'use client'

// import { useAnchor } from "../../hooks";


export const PagesButtons = () => {

    // const { handleCloseNavMenu } = useAnchor();

    return (
        <>
            <button className="cta" onClick={ handleCloseNavMenu }>
                <span className="hover-underline-animation"> Inicio </span>
            </button>

            <button className="cta" onClick={ handleCloseNavMenu }>
                <span className="hover-underline-animation"> Tiendas Online </span>
            </button>

            <button className="cta" onClick={ handleCloseNavMenu }>
                <span className="hover-underline-animation"> Productos </span>
            </button>

            <button className="cta" onClick={ handleCloseNavMenu }>
                <span className="hover-underline-animation"> Servicios </span>
            </button>
        </>
    )
}
