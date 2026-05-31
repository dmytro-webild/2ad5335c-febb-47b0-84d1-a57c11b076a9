"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import FooterBase from '@/components/sections/footer/FooterBase';
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
              {
                name: "Services", id: "#services"},
              {
                name: "How It Works", id: "#how-it-works"},
              {
                name: "Pricing", id: "/pricing"},
              {
                name: "Subscribe", id: "/subscription"},
              {
                name: "About", id: "#about"},
              {
                name: "Contact", id: "#contact"},
              {
                name: "Schedule Pickup", id: "/schedule-pickup"},
            ]}
            brandName="Premium Laundry Services"
            button={{
              text: "Schedule Pickup", href: "/schedule-pickup"}}
            animateOnLoad={true}
          />
        </div>

        <div id="pricing" data-section="pricing">
          <PricingCardTwo
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            plans={[
              {
                id: "basic", badge: "Occasional", price: "$45", subtitle: "per load", features: [
                  "Standard wash & fold", "48-hour turnaround", "Free pickup & delivery", "Professional care"],
                buttons: [{
                  text: "Subscribe Now", href: "/subscription"
                }]
              },
              {
                id: "premium", badge: "Most Popular", badgeIcon: Sparkles,
                price: "$89", subtitle: "per month", features: [
                  "4 pickups per month", "48-hour turnaround", "Priority scheduling", "Free pickup & delivery", "10% savings vs. per-load", "Dedicated support"],
                buttons: [{
                  text: "Subscribe Now", href: "/subscription"
                }]
              },
              {
                id: "family", badge: "Best Value", price: "$159", subtitle: "per month", features: [
                  "Unlimited pickups", "48-hour turnaround", "Premium member priority", "Free pickup & delivery", "Free delicate service", "SMS status updates", "24/7 support"],
                buttons: [{
                  text: "Subscribe Now", href: "/subscription"
                }]
              },
            ]}
            title="Simple, Transparent Pricing"
            description="Choose the plan that works best for you and proceed to checkout"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBase
            logoText="Premium Laundry Services"
            copyrightText="© 2024 Premium Laundry Services LLC. All rights reserved. Serving Augusta, Georgia."
            columns={[
              {
                title: "Navigation", items: [
                  { label: "Services", href: "#services" },
                  { label: "How It Works", href: "#how-it-works" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "Subscribe", href: "/subscription" },
                  { label: "About", href: "#about" },
                  { label: "Contact", href: "#contact" },
                  { label: "Schedule Pickup", href: "/schedule-pickup" }
                ]
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}