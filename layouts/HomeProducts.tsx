'use client'

import { Box } from "@mui/material";
import { AppTheme } from "theme/AppTheme";
import { LoadingWrapper } from "components/LoadingWrapper";
import { ProductCard } from "components/ProductCard";

//TODO: crear map para ProductCard
export const HomeProducts = () => {
    return (
        <AppTheme>
            <Box>
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
                <ProductCard />
            </Box>
            <LoadingWrapper></LoadingWrapper>
        </AppTheme>
    )
}
