import {createTheme} from "@mui/material";

export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: 'var(--green)',
                    color: 'white',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    '&:hover': {
                        opacity: 0.7,
                        backgroundColor: 'var(--green)'
                    }
                }
            }
        }
        // MuiSelect: {
        //     styleOverrides: {
        //         root: {
        //             border: "none",
        //             outline: 'none',
        //         },
        //         select: {
        //             border: '1px solid var(--green)',
        //             borderRadius: '12px',
        //             outline: "none",
        //         }
        //     }
        // },
        // MuiInputBase: {
        //     styleOverrides: {
        //         root: {
        //             border: 'none',
        //             outline: 'none'
        //         }
        //     }
        // }
    },
});