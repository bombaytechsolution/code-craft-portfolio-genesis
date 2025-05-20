import ClientProviders from "@/src/components/ClientProviders";
import "./globals.css";

export const metadata = {
  title: "Senior Backend Engineer Portfolio",
  description: "Senior Backend Engineer with 7 years of experience building scalable, high-performance applications",
  openGraph: {
    title: "Senior Backend Engineer Portfolio",
    description: "Senior Backend Engineer with 7 years of experience building scalable, high-performance applications",
    type: "website",
    images: "https://lovable.dev/opengraph-image-p98pqg.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
    images: "https://lovable.dev/opengraph-image-p98pqg.png",
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
        <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
      </body>
    </html>
  );
} 