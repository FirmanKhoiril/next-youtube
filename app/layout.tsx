"use client";
import { Footer, Navbar } from "@/components";
import "./globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ContextProvider } from "@/context/Context";
import { TRootLayout, metadata } from "@/types/Types";

export default function RootLayout({ children }: TRootLayout) {
  const client = new QueryClient();
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Andika:ital@1&family=Inter:wght@500&family=Open+Sans&family=Play&family=Poppins&display=swap" rel="stylesheet" />

        <link rel="icon" href="/public/logo.png" />
      </head>
      <body suppressHydrationWarning={true}>
        <QueryClientProvider client={client} contextSharing={true}>
          <ContextProvider>
            <Navbar />
            {children}
            <ReactQueryDevtools />
            <Footer />
          </ContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
