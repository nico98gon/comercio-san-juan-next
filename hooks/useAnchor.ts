import { useState } from 'react';

export const useAnchor = () => {

    const [ anchorElNav, setAnchorElNav ] = useState( null );

    const [ anchorElUser, setAnchorElUser ] = useState( null );

    const handleOpenNavMenu = ({ currentTarget }) => {
        setAnchorElNav( currentTarget );
    };

    const handleOpenUserMenu = ( event ) => {
        setAnchorElUser( event.currentTarget );
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav( null );
    };
    
    const handleCloseUserMenu = () => {
        setAnchorElUser( null );
    };

    return {
        anchorElNav,
        anchorElUser,

        handleOpenNavMenu,
        handleOpenUserMenu,
        handleCloseNavMenu,
        handleCloseUserMenu,
    }
}