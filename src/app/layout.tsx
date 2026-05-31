import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Archivo } from "next/font/google";



export const metadata: Metadata = {
  title: 'Premium Landry Services | Laundry Day Made Easy in Augusta, GA',
  description: 'Professional wash & fold laundry service with pickup and delivery in Augusta, GA. Enjoy free time with fresh, folded clothes with Premium Landry Services.',
  keywords: ["laundry service Augusta GA, wash and fold, laundry pickup delivery, same-day laundry, Augusta Georgia laundry"],
  openGraph: {
    "title": "LaundryFlow - Laundry Day Made Easy",
    "description": "Professional wash & fold laundry service with pickup and delivery in Augusta, GA. Enjoy free time with fresh, folded clothes.",
    "url": "https://laundryflow.com",
    "siteName": "LaundryFlow",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/front-view-person-holding-laundry-basket-head_23-2148251806.jpg",
        "alt": "LaundryFlow hero image showing fresh folded clothes and delivery van"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "LaundryFlow - Laundry Day Made Easy",
    "description": "Professional wash & fold laundry service with pickup and delivery in Augusta, GA. Enjoy free time with fresh, folded clothes.",
    "images": [
      "http://img.b2bpic.net/free-photo/front-view-person-holding-laundry-basket-head_23-2148251806.jpg"
    ]
  },
};

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${archivo.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
