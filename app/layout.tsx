import ClientProviders from "@/src/components/ClientProviders";
import "./globals.css";

export const metadata = {
  title: "Shubhankar Borade | Senior Backend Engineer",
  description: "Senior Backend Engineer with 7+ years experience building scalable systems that ship fast and scale clean",
  openGraph: {
    title: "Shubhankar Borade | Senior Backend Engineer",
    description: "Senior Backend Engineer with 7+ years experience building scalable systems that ship fast and scale clean",
    type: "website",
    images: "/profile.JPG",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ShubhankarBorade",
    images: "/profile.JPG",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      </head>
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
} 