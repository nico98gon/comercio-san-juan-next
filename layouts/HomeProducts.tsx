'use client'

import { Box, Grid } from "@mui/material";
import { AppTheme } from "theme/AppTheme";
import { LoadingWrapper } from "components/LoadingWrapper";
import { ProductCard } from "components/ProductCard";
import PageNavigation from "components/PageNavigation";

//TODO: crear map para ProductCard
export const HomeProducts = () => {
    return (
        <AppTheme>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={2}>

                    </Grid>

                    <Grid item xs={8}>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />

                        <PageNavigation />

                        <LoadingWrapper />
                    </Grid>

                    <Grid item xs={2}>

                    </Grid>
                </Grid>
            </Box>
        </AppTheme>
    )
}
