"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MediaAbout from '@/components/sections/about/MediaAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Calendar, Facebook, Home, Instagram, Linkedin, Sparkles, Truck, Twitter, Zap } from "lucide-react";

export default function LandingPage() {
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
          name: "Services",          id: "services"},
        {
          name: "How It Works",          id: "how-it-works"},
        {
          name: "Pricing",          id: "pricing"},
        {
          name: "About",          id: "about"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="LaundryFlow"
      button={{
        text: "Book Now",        href: "#booking"}}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "plain"}}
      title="Laundry Day Made Easy"
      description="We pick up, wash, fold, and deliver your clothes directly to your door in Augusta, Georgia. Skip the laundry basket, embrace your free time."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-person-holding-laundry-basket-head_23-2148251806.jpg",          imageAlt: "A full laundry basket"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/rendering-elegant-neoclassical-interior_23-2151059681.jpg",          imageAlt: "A modern washing machine"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/assortment-beige-tone-colored-pants_23-2150773374.jpg",          imageAlt: "A stack of freshly folded clothes"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-housewife-with-ironing-board-holding-iron-white_140725-154210.jpg",          imageAlt: "Someone ironing clothes"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/lady-closing-washing-machine-door_23-2148387010.jpg",          imageAlt: "A modern clothes dryer"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-composition-spa-bath-concept_23-2148094220.jpg",          imageAlt: "Laundry detergent bottle"},
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/courier-doing-jobs-logistics_23-2149229220.jpg",          imageAlt: "A white laundry delivery van"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/bed-arrangement-with-fresh-sheets_23-2150551122.jpg",          imageAlt: "A pile of clean, soft clothes"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-lady-pointing-cardboard-box-dress_176474-83134.jpg",          imageAlt: "A happy person holding clean laundry"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-cheery-young-housekeeper-sitting-front-washer-laundry-basket-white-background_140725-112210.jpg",          imageAlt: "A laundry bag ready for pickup"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/delivery-person-getting-parcel-out-delivery_23-2149371918.jpg",          imageAlt: "Delivery person handing over laundry"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-cleaning-products-arrangement_23-2148883450.jpg",          imageAlt: "Fabric softener bottle"},
      ]}
      tag="✨ Fresh Clothes, Zero Stress"
      buttons={[
        {
          text: "Schedule Pickup",          href: "#booking"},
        {
          text: "Learn More",          href: "#about"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/happy-young-woman-door-restaurant-cold-winter-day-lettering-takeaway-food_343596-4739.jpg",          alt: "Happy young woman, customer"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-couple-celebrating-gender-reveal_23-2150154681.jpg",          alt: "Happy couple, customers"},
        {
          src: "http://img.b2bpic.net/free-photo/smiley-couple-home-preparing-boxes-move-out_23-2148647455.jpg",          alt: "Smiling couple at home, customers"},
        {
          src: "http://img.b2bpic.net/free-photo/indoor-image-happy-cheerful-young-woman-holding-cardboard-box-delivered-her-apartment-expressing-excitement-going-unpack-parcel_343059-1954.jpg",          alt: "Cheerful woman with delivered box"},
        {
          src: "http://img.b2bpic.net/free-photo/person-giving-order-customer-curbside-pickup_23-2149106372.jpg",          alt: "Person receiving order from customer"},
      ]}
      avatarText="Loved by 100+ Happy Customers"
      marqueeItems={[
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/laundry-warm-clothes-hamper_169016-3755.jpg",          alt: "Laundry, warm clothes in the hamper"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/basket-clothes_93675-130522.jpg",          alt: "Basket of clothes"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/stack-clothes-white-background-closeup_93675-132633.jpg",          alt: "Stack of clothes on white background"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/close-up-cozy-texture-detail_23-2149385239.jpg",          alt: "Close up on cozy texture detail"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/white-towel-bed-decoration-bedroom-interior_1339-7132.jpg",          alt: "White towel on bed decoration"},
      ]}
      tagIcon={Sparkles}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "No more piles of dirty clothes",          "Avoid crowded laundromats",          "Save precious weekend hours"],
      }}
      positiveCard={{
        items: [
          "Wash & Fold: Expert care for all your everyday clothing.",          "Pickup & Delivery: Convenient scheduled service right to your door.",          "Same-Day Service: Need it fast? Get your clothes back in a flash.",          "Residential Plans: Flexible weekly or bi-weekly subscriptions.",          "Delicate Care: Specialized handling for all delicate fabrics.",          "Bulk Services: Large load discounts for businesses and organizations."],
      }}
      title="Our Services"
      description="Complete laundry solutions designed for your lifestyle"
    />
  </div>

  <div id="how-it-works" data-section="how-it-works">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",          icon: Calendar,
          title: "Schedule Pickup",          value: "Choose your pickup date and time. We'll send a confirmation and track your laundry every step of the way."},
        {
          id: "2",          icon: Zap,
          title: "We Wash & Fold",          value: "Your clothes are professionally washed, dried, and expertly folded using premium care for every item."},
        {
          id: "3",          icon: Truck,
          title: "Get Delivery",          value: "Your fresh, folded laundry arrives at your door within 48 hours. No hassle, pure convenience."},
      ]}
      title="How It Works"
      description="Three simple steps to fresh, folded clothes"
    />
  </div>

  <div id="why-us" data-section="why-us">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      negativeCard={{
        items: [
          "Worrying about laundry day",          "Time-consuming trips to the laundromat",          "Shrinking and fading clothes",          "Dealing with laundry detergent mess"],
      }}
      positiveCard={{
        items: [
          "Fast Turnaround: 48-hour standard, same-day available for urgent needs.",          "Professional Care: Expert handling of all fabric types for spotless results.",          "Local & Trusted: Licensed LLC serving Augusta, GA since 2024 with a smile.",          "Flexible Scheduling: Schedule pickups that fit seamlessly into your busy lifestyle."],
      }}
      title="Why Choose LaundryFlow?"
      description="We're not just a laundry service—we're your time back"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",          badge: "Occasional",          price: "$45",          subtitle: "per load",          features: [
            "Standard wash & fold",            "48-hour turnaround",            "Free pickup & delivery",            "Professional care"],
        },
        {
          id: "premium",          badge: "Most Popular",          badgeIcon: Sparkles,
          price: "$89",          subtitle: "per month",          features: [
            "4 pickups per month",            "48-hour turnaround",            "Priority scheduling",            "Free pickup & delivery",            "10% savings vs. per-load",            "Dedicated support"],
        },
        {
          id: "family",          badge: "Best Value",          price: "$159",          subtitle: "per month",          features: [
            "Unlimited pickups",            "48-hour turnaround",            "Premium member priority",            "Free pickup & delivery",            "Free delicate service",            "SMS status updates",            "24/7 support"],
        },
      ]}
      title="Simple, Transparent Pricing"
      description="Choose the plan that works best for you"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Sarah Mitchell",          role: "Busy Professional",          company: "Tech Solutions",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-positive-mature-business-leader-enjoying-coffee_74855-3525.jpg"},
        {
          id: "2",          name: "James Patterson",          role: "Working Parent",          company: "Creative Agency",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-girl-sitting-her-dads-lap-laughing-father-enjoying-time-with-daughter-while-holding-tablet_74855-8093.jpg"},
        {
          id: "3",          name: "Maria Garcia",          role: "Home-based Worker",          company: "Freelance Designer",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-working-from-home_23-2148854153.jpg"},
        {
          id: "4",          name: "David Chen",          role: "Business Owner",          company: "Local Bistro",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/blond-man-happy-expression_1194-2854.jpg"},
        {
          id: "5",          name: "Lisa White",          role: "Marketing Manager",          company: "Global Brands",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-candid-woman-walking-park-stylish-outfit-wearing-elegant-sunglasses-purse_285396-8209.jpg"},
        {
          id: "6",          name: "Mark Taylor",          role: "College Student",          company: "Augusta University",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-relaxing-with-cup-coffee-home_329181-2678.jpg"},
      ]}
      kpiItems={[
        {
          value: "5,000+",          label: "Loads Washed"
        },
        {
          value: "99%+",          label: "Customer Satisfaction"
        },
        {
          value: "100+",          label: "Happy Families"
        }
      ]}
      title="What Our Customers Say"
      description="Join hundreds of happy customers in Augusta"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "What areas do you serve in Augusta?",          content: "We currently serve the greater Augusta metropolitan area including downtown, Summerville, Evans, and surrounding neighborhoods. Check our service map or call for confirmation of your specific address."},
        {
          id: "q2",          title: "How long does the wash and fold service take?",          content: "Standard service is 48 hours from pickup. Our Premium Plan offers same-day service for an additional fee. Express service available for urgent needs."},
        {
          id: "q3",          title: "What's included in the wash and fold service?",          content: "We wash, dry, and professionally fold all regular clothing. Delicate items are hand-washed. Dry cleaning and specialty items handled separately with additional pricing."},
        {
          id: "q4",          title: "Do you offer subscription plans?",          content: "Yes! Our Weekly Subscription Plan is our most popular option. You get scheduled pickups every week with 10% savings compared to per-load pricing."},
        {
          id: "q5",          title: "Is my clothing insured?",          content: "All items are handled with care. We're insured for standard wear and tear. Valuables should be noted during scheduling. Full details in our service agreement."},
        {
          id: "q6",          title: "Can I schedule a pickup on short notice?",          content: "Same-day and next-day pickups available in most areas. Use our app or call for availability. Premium members get priority same-day booking."},
      ]}
      title="Frequently Asked Questions"
      description="Everything you need to know about our service"
      faqsAnimation="slide-up"
      textboxLayout="default"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      tag="Our Story"
      title="About LaundryFlow"
      description="We created this business to make life easier for busy families and professionals in Augusta, Georgia. Our goal is to provide fast, reliable, and professional laundry services with modern convenience. Every wash, fold, and delivery is handled with care because we know your time is valuable. LaundryFlow is a Georgia LLC dedicated to transforming laundry day from a chore into a convenience. We combine traditional care with modern logistics technology to deliver an experience that's as simple as ordering food or calling a rideshare—but for your laundry."
      imageSrc="http://img.b2bpic.net/free-photo/volunteer-selecting-organizing-clothes-donations-charity_23-2149230518.jpg"
      imageAlt="Clean modern laundry station"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Schedule Your Pickup"
      description="Fast, easy, and convenient. Enter your name and email, and we'll get in touch to arrange your service. By scheduling, you agree to our terms and privacy policy."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true
        },
        {
          name: "email",          type: "email",          placeholder: "Your email address",          required: true
        }
      ]}
      buttonText="Schedule Now"
      imageSrc="http://img.b2bpic.net/free-photo/courier-doing-jobs-logistics_23-2149229220.jpg"
      imageAlt="A white laundry delivery van"
      mediaPosition="right"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      logoText="LaundryFlow"
      copyrightText="© 2024 LaundryFlow LLC. All rights reserved. Serving Augusta, Georgia."
      columns={[
        {
          title: "Navigation",          items: [
            { label: "Services", href: "#services" },
            { label: "How It Works", href: "#how-it-works" },
            { label: "Pricing", href: "#pricing" },
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