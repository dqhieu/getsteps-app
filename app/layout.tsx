import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steps - Daily Step Counter & Workouts",
  description: "Track your daily steps, workouts, and health data with Steps - the ultimate fitness companion for your Apple device.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{ fontFamily: 'SF Pro Rounded, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
