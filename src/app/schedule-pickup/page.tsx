"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function SchedulePickupPage() {
  // Navbar navItems will be consistent across all pages
  const navItems = [
    { name: "Services", id: "#services" },
    { name: "How It Works", id: "#how-it-works" },
    { name: "Pricing", id: "/pricing" },
    { name: "About", id: "#about" },
    { name: "Contact", id: "#contact" },
    { name: "Schedule Pickup", id: "/schedule-pickup" }, // New page link
  ];

  // Footer columns will be consistent across all pages
  const footerColumns = [
    {
      title: "Navigation",      items: [
        { label: "Services", href: "#services" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Pricing", href: "/pricing" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
        { label: "Schedule Pickup", href: "/schedule-pickup" }, // New page link
      ]
    }
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
            button={{ text: "Schedule Pickup", href: "/schedule-pickup" }} // Link to new page
            animateOnLoad={true}
          />
        </div>

        <div id="schedule-pickup" data-section="schedule-pickup">
          <ContactSplitForm
            useInvertedBackground={false}
            title="Arrange Your Pickup"
            description="Select your preferred date and time for a convenient laundry pickup. Our team will confirm your slot shortly."
            inputs={[
              { name: "name", type: "text", placeholder: "Your Name", required: true },
              { name: "email", type: "email", placeholder: "Your Email", required: true },
              { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
              { name: "date", type: "date", placeholder: "Preferred Date", required: true },
              { name: "time", type: "time", placeholder: "Preferred Time", required: true }
            ]}
            textarea={{
              name: "notes",              placeholder: "Any special instructions or preferences?",              rows: 3,
              required: false,
            }}
            buttonText="Confirm Pickup"
            imageSrc="http://img.b2bpic.net/free-photo/courier-doing-jobs-logistics_23-2149229220.jpg?_wi=2" // Reusing an existing image
            imageAlt="Laundry delivery van"
            mediaPosition="right"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBase
            logoText="Premium Laundry Services"
            copyrightText="© 2024 Premium Laundry Services LLC. All rights reserved. Serving Augusta, Georgia."
            columns={footerColumns}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}