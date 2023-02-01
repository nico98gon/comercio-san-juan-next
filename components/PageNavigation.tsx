'use client'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PageNavigation() {
    return (
        <Stack spacing={2} alignItems="center">
            <Pagination count={10} color="secondary" />
        </Stack>
    );
}