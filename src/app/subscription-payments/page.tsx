"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles } from "lucide-react";

export default function SubscriptionPaymentsPage() {
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

        <div id="subscription-plans" data-section="subscription-plans">
          <PricingCardThree
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            title="Choose Your Subscription Plan"
            description="Select the perfect plan for uninterrupted laundry service. Flexible options, transparent pricing."
            plans={[
              {
                id: "basic-subscription",                badge: "Weekly Plan",                price: "$79",                name: "Basic Weekly",                features: [
                  "1 pickup per week",                  "Standard wash & fold (up to 20lbs)",                  "48-hour turnaround",                  "Free pickup & delivery"
                ],
                buttons: [{ text: "Subscribe Now", href: "/contact" }]
              },
              {
                id: "premium-subscription",                badge: "Most Popular",                badgeIcon: Sparkles,
                price: "$149",                name: "Premium Weekly",                features: [
                  "1 pickup per week",                  "Standard wash & fold (up to 30lbs)",                  "Priority scheduling",                  "Same-day service option",                  "Free pickup & delivery",                  "Delicate item care"
                ],
                buttons: [{ text: "Subscribe Now", href: "/contact" }]
              },
              {
                id: "family-subscription",                badge: "Best Value",                price: "$249",                name: "Family Unlimited",                features: [
                  "Unlimited pickups per month",                  "Standard wash & fold (up to 50lbs/pickup)",                  "Premium member priority",                  "Same-day service included",                  "Free pickup & delivery",                  "Delicate item care included",                  "SMS status updates"
                ],
                buttons: [{ text: "Subscribe Now", href: "/contact" }]
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