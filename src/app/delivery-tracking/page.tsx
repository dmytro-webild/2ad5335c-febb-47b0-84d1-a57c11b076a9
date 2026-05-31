"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree'; // For tracking steps
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm'; // For tracking number input
import FooterBase from '@/components/sections/footer/FooterBase';
import { Package, Truck, Home, CheckCircle } from "lucide-react"; // Icons for tracking

export default function DeliveryTrackingPage() {
  const navItems = [
    { name: "Services", id: "#services" },
    { name: "How It Works", id: "#how-it-works" },
    { name: "Pricing", id: "/pricing" },
    { name: "About", id: "#about" },
    { name: "Contact", id: "#contact" },
    { name: "Schedule Pickup", id: "/schedule-pickup" },
    { name: "Delivery Tracking", id: "/delivery-tracking" } // New item
  ];

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
            navItems={navItems}
            brandName="Premium Laundry Services"
            button={{ text: "Schedule Pickup", href: "/schedule-pickup" }}
            animateOnLoad={true}
          />
        </div>

        <div id="tracking-input" data-section="tracking-input">
          <ContactSplitForm
            useInvertedBackground={false}
            title="Track Your Laundry Order"
            description="Enter your tracking number below to view its current status and updates. Real-time updates and customer notifications are available via SMS/Email based on your preferences."
            inputs={[
              {
                name: "trackingNumber",                type: "text",                placeholder: "e.g., PLS123456789",                required: true
              }
            ]}
            buttonText="Track Order"
            imageSrc="http://img.b2bpic.net/free-photo/courier-doing-jobs-logistics_23-2149229220.jpg?_wi=2"
            imageAlt="Delivery tracking illustration"
            mediaPosition="right"
          />
        </div>

        <div id="tracking-status" data-section="tracking-status">
          <MetricCardThree
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={true} // Use inverted background to differentiate from the form
            title="Current Order Status"
            description="Your order's journey from pickup to pristine delivery."
            metrics={[
              {
                id: "1",                icon: Package,
                title: "Order Received",                value: "Your order (PLS123456789) was received on 2024-07-20 10:00 AM."
              },
              {
                id: "2",                icon: Truck,
                title: "In Transit - Pickup",                value: "Driver John is en route for pickup. Estimated arrival: 2024-07-21 09:00 AM."
              },
              {
                id: "3",                icon: CheckCircle,
                title: "Processing",                value: "Your clothes are being washed. Expected completion: 2024-07-22 12:00 PM."
              },
              {
                id: "4",                icon: Home,
                title: "Out for Delivery",                value: "Your fresh laundry is with driver Jane. Estimated delivery: 2024-07-22 04:00 PM."
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
                        title: "Navigation",                        items: [
                            { label: "Services", href: "#services" },
                            { label: "How It Works", href: "#how-it-works" },
                            { label: "Pricing", href: "/pricing" },
                            { label: "About", href: "#about" },
                            { label: "Contact", href: "#contact" },
                            { label: "Schedule Pickup", href: "/schedule-pickup" },
                            { label: "Delivery Tracking", href: "/delivery-tracking" }
                        ]
                    }
                ]}
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}