'use client'

import './global.css';
import { Box } from "@mui/system";
import { NavBar } from "layouts/NavBar";

// import { ThemeButton } from "../../helpers";
// import { NavBar, FavoritesBar } from "../components";
// import { CategoriesAndFavoritesButtons } from "../components/CategoriesAndFavoritesButtons";
// import SideBar from "../components/SideBar"; //*! No me deja importar del archivo de barril

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box sx={{ display: "flex" }}>

      <NavBar />

      {/* <SideBar drawerWidth={ drawerWidth }/> */}

      {/* <SideBar drawerWidth={ drawerWidth }/>

      {/* <Box 
          sx={{ position: { xs: 'fixed', md: 'absolute'}, zIndex: '2', top: {xs: '1%', md: '8vh'}, transform: 'translate( -50%, 5% )', right: { xs: '2%', md: '49%'}}}
      >
          <ThemeButton />
      </Box> */}

      {/* <CustomBox
          position="fixed"
          zIndex={5}
          backgroundColor="primary"
          display={{ xs: 'none', md:'block' }}
          sx={{ top: 96, width: '78%', height: 65, left: '50%', transform: 'translate( -50%, -50% )' }}
      >
          <CategoriesAndFavoritesButtons />
      </CustomBox>

      <Box
          component='main'
          sx={{ p: 3, mt: { xs: 0, md: 9 }, ml: { xs: "14%", md: `${drawerWidth}px` }, mr: { xs: 0, xl: `${drawerWidth}px` }}}
      >

          { children }

      </Box>

      <FavoritesBar drawerWidth={ drawerWidth }/> */}

    </Box>
  )
}
