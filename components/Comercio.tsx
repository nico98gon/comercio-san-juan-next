'use client'

import { Box } from "@mui/material"
import Link from "next/link"

export const Comercio = () => {
    return (
        <Box sx={{ display: { md: 'block', xs: 'none' }}}> 
            <Link href="/">
                <button type="button">
                    <span className="actual-text">&nbsp;&nbsp;Comercio&nbsp;<br />&nbsp;San&nbsp;Juan&nbsp;</span>
                    {/* <span className="hover-text" aria-hidden="true">&nbsp;&nbsp;Comercio&nbsp;<br />&nbsp;San&nbsp;Juan&nbsp;</span> */}
                </button>
            </Link>
        </Box>
    )
}