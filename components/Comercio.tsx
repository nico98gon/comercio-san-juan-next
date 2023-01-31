'use client'

import { Box } from "@mui/material"

export const Comercio = () => {
    return (

        <Box sx={{ display: { md: 'block', xs: 'none' }}}> 
            <button href="/" data-text="Awesome" className="buttonSweep">
                <span className="actual-text">&nbsp;&nbsp;Comercio&nbsp;<br />&nbsp;San&nbsp;Juan&nbsp;</span>
                {/* <span className="hover-text" aria-hidden="true">&nbsp;&nbsp;Comercio&nbsp;<br />&nbsp;San&nbsp;Juan&nbsp;</span> */}
            </button>
        </Box>

    )
}