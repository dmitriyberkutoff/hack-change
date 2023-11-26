'use client'

import './globals.css';
import { StoreProvider } from '@/redux/StoreProvider';
import {Header} from "@/app/components/Header/Header";
import styles from '@/app/page.module.css';
import {ThemeProvider} from "@mui/material";
import {theme} from "@/app/mui";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap" rel="stylesheet"/>

      </head>
      <body>
        <div id="portals"></div>
        <StoreProvider>
            <ThemeProvider theme={theme}>
                <Header/>
                <main className={styles.main}>{children}</main>
            </ThemeProvider>
        </StoreProvider>

      </body>
      <script src="http://code.jivo.ru/widget/y8PCgqRTSX" async></script>
    </html>
  );
}
