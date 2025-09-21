export const metadata = {
  title: "TruckMitra Driver Dashboard",
  description: "Driver dashboard for TruckMitra AI logistics platform",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>TruckMitra Driver Dashboard</title>
        <meta name="description" content="Driver dashboard for TruckMitra AI logistics platform" />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
