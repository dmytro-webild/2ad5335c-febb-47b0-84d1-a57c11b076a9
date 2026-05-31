"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactForm from '@/components/form/ContactForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { CreditCard, Sparkles } from "lucide-react";

export default function SubscriptionPage() {
  const handlePayment = (email: string) => {
    console.log("Payment Email:", email);
    alert("Subscription process initiated! (This is a demo. No actual payment processed.)");
    // Here you would integrate with Stripe/PayPal SDK to handle payment
    // e.g., stripe.redirectToCheckout({ /* ... */ });
  };

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

        <div id="subscription" data-section="subscription">
          <ContactForm
            title="Complete Your Subscription"
            description="Enter your payment details to finalize your plan. All transactions are secure and encrypted."
            tag="Secure Payment Gateway"
            tagIcon={CreditCard}
            useInvertedBackground={false}
            inputPlaceholder="Card Number"
            buttonText="Pay Now"
            centered={true}
            onSubmit={handlePayment}
            formWrapperClassName="max-w-md mx-auto py-12 px-6"
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