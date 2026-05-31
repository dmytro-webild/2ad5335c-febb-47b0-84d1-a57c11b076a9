"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import { Sparkles } from "lucide-react";

export default function PricingPage() {
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
              { name: "Services", id: "services"},
              { name: "How It Works", id: "how-it-works"},
              { name: "Pricing", id: "/pricing"},
              { name: "About", id: "about"},
              { name: "Contact", id: "contact"},
            ]}
            brandName="Premium Laundry Services"
            button={{ text: "Book Now", href: "#booking"}}
            animateOnLoad={true}
          />
        </div>

        <div id="pricing-page-section" data-section="pricing-page-section">
          <PricingCardThree
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            title="Choose Your Perfect Laundry Plan"
            description="Select from our flexible pricing options designed to fit your needs, from occasional washes to unlimited monthly service."
            plans={[
              {
                id: "basic",                badge: "One-Time Clean",                price: "$45",                name: "Standard Load",                features: [
                  "Standard wash & fold",                  "48-hour turnaround",                  "Free pickup & delivery",                  "Professional care"],
                buttons: [{
                  text: "Schedule Pickup",                  href: "/contact"
                }]
              },
              {
                id: "premium",                badge: "Most Popular",                badgeIcon: Sparkles,
                price: "$89",                name: "Monthly Subscription",                features: [
                  "4 pickups per month",                  "48-hour turnaround",                  "Priority scheduling",                  "Free pickup & delivery",                  "10% savings vs. per-load",                  "Dedicated support"],
                buttons: [{
                  text: "Subscribe Now",                  href: "/contact"
                }]
              },
              {
                id: "family",                badge: "Best Value",                price: "$159",                name: "Unlimited Monthly",                features: [
                  "Unlimited pickups",                  "48-hour turnaround",                  "Premium member priority",                  "Free pickup & delivery",                  "Free delicate service",                  "SMS status updates",                  "24/7 support"],
                buttons: [{
                  text: "Go Unlimited",                  href: "/contact"
                }]
              }
            ]}
          />
        </div>

        <div id="contact-cta" data-section="contact-cta">
          <ContactSplitForm
            useInvertedBackground={false}
            title="Ready to Get Started?"
            description="Contact us today to schedule your first pickup or inquire about our services."
            inputs={[
              { name: "name", type: "text", placeholder: "Your Name", required: true },
              { name: "email", type: "email", placeholder: "Your email address", required: true }
            ]}
            buttonText="Send Inquiry"
            imageSrc="http://img.b2bpic.net/free-photo/courier-doing-jobs-logistics_23-2149229220.jpg?_wi=2"
            imageAlt="A white laundry delivery van"
            mediaPosition="right"
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
                  { label: "About", href: "#about" },
                  { label: "Contact", href: "#contact" }
                ]
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}