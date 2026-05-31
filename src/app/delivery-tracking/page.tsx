"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TimelineProcessFlow from '@/components/cardStack/layouts/timelines/TimelineProcessFlow';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Calendar, Zap, Truck, Home, CheckCircle } from "lucide-react";

export default function DeliveryTrackingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="small"
        sizing="mediumLargeSizeLargeTitles"
        background="noise"
        cardStyle="gradient-bordered"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Services", id: "services" },
              { name: "How It Works", id: "how-it-works" },
              { name: "Pricing", id: "/pricing" },
              { name: "Subscriptions", id: "/subscription-payments" },
              { name: "About", id: "about" },
              { name: "Contact", id: "contact" },
              { name: "Track Delivery", id: "/delivery-tracking" }
            ]}
            brandName="Premium Laundry Services"
            button={{ text: "Book Now", href: "#booking" }}
            animateOnLoad={true}
          />
        </div>

        <div id="delivery-tracking-section" data-section="delivery-tracking-section">
          <TimelineProcessFlow
            animationType="slide-up"
            textboxLayout="default"
            title="Track Your Laundry Delivery"
            description="Stay updated on the status of your fresh, clean clothes. Real-time tracking from pickup to delivery."
            items={[
              {
                content: (
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-lg">Pickup Scheduled</h3>
                    <p className="text-sm text-gray-600">Your laundry pickup is scheduled for today between 9 AM - 12 PM.</p>
                  </div>
                ),
                media: <Calendar className="h-8 w-8 text-primary-cta" />,
                reverse: false
              },
              {
                content: (
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-lg">Laundry in Progress</h3>
                    <p className="text-sm text-gray-600">Your clothes are currently being expertly washed and dried with premium care.</p>
                  </div>
                ),
                media: <Zap className="h-8 w-8 text-primary-cta" />,
                reverse: true
              },
              {
                content: (
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-lg">Quality Check & Folding</h3>
                    <p className="text-sm text-gray-600">Each item is carefully inspected and professionally folded, ready for delivery.</p>
                  </div>
                ),
                media: <CheckCircle className="h-8 w-8 text-primary-cta" />,
                reverse: false
              },
              {
                content: (
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-lg">Out for Delivery</h3>
                    <p className="text-sm text-gray-600">Your fresh, folded laundry is on its way to your door! Estimated delivery within the next 2 hours.</p>
                  </div>
                ),
                media: <Truck className="h-8 w-8 text-primary-cta" />,
                reverse: true
              },
              {
                content: (
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-lg">Delivered!</h3>
                    <p className="text-sm text-gray-600">Your laundry has been successfully delivered. Enjoy your clean clothes!</p>
                  </div>
                ),
                media: <Home className="h-8 w-8 text-primary-cta" />,
                reverse: false
              }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBase
            logoText="Premium Laundry Services"
            copyrightText="© 2024 Premium Laundry Services LLC. All rights reserved. Serving Augusta, Georgia."
            columns={[
              {
                title: "Navigation",                items: [
                  { label: "Services", href: "#services" },
                  { label: "How It Works", href: "#how-it-works" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "Subscriptions", href: "/subscription-payments" },
                  { label: "About", href: "#about" },
                  { label: "Contact", href: "#contact" },
                  { label: "Track Delivery", href: "/delivery-tracking" }
                ]
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}