"use client";

import React, { type ReactNode } from "react";
import "./globals.css";

import { Toaster } from "@/app/components/ui/toaster";
import { Toaster as Sonner } from "@/app/components/ui/sonner";
import { TooltipProvider } from "@/app/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigation } from "@/app/components/Navigation";
import { FooterMinimal } from "@/app/components/layout/FooterMinimal";
import { FloatingContactButton } from "@/app/components/ui/FloatingContactButton";
import { PageContainer } from "@/app/components/layout/PageContainer";
import { Analytics } from "@vercel/analytics/react";

import "@/app/i18n/config";

import { PostHogProvider } from "@/app/components/PostHogProvider";
import { usePathname } from 'next/navigation';

const queryClient = new QueryClient();

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = typeof window !== "undefined" ? window.location.pathname : undefined;
  // Soporte Next SSR/CSR: usar hook en uso client y fallback al render
  // Si estamos en /wip, sólo renderizar children plano
  if (pathname === '/wip') {
    return (
      <html lang="en" suppressHydrationWarning>
        <body>{children}</body>
      </html>
    );
  }
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <PostHogProvider>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <PageContainer>
                <Navigation />
                {children}
                <FooterMinimal />
                <FloatingContactButton />
              </PageContainer>
              <Analytics />
            </TooltipProvider>
          </QueryClientProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}