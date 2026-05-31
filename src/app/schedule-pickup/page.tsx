"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FooterBase from '@/components/sections/footer/FooterBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import { CalendarDays, Users } from "lucide-react"; // Using CalendarDays for the scheduling theme, Users for team


export default function SchedulePickupPage() {
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
              { name: "Services", id: "#services" },
              { name: "How It Works", id: "#how-it-works" },
              { name: "Pricing", id: "/pricing" },
              { name: "About", id: "#about" },
              { name: "Contact", id: "#contact" },
              { name: "Schedule Pickup", id: "/schedule-pickup" },
            ]}
            brandName="Premium Laundry Services"
            button={{
              text: "Schedule Pickup",              href: "/schedule-pickup"
            }}
            animateOnLoad={true}
          />
        </div>

        <div id="schedule-appointment" data-section="schedule-appointment">
          <ContactSplitForm
            useInvertedBackground={false}
            title="Schedule Your Team Appointment"
            description="Easily book a slot with our team through the integrated Google Calendar. Select a date and time that works for you, and we'll confirm your appointment. Please fill out your details below. For direct calendar access and team availability, please use the booking widget below the form."
            inputs={[
              { name: "name", type: "text", placeholder: "Your Name", required: true },
              { name: "email", type: "email", placeholder: "Your email address", required: true },
              { name: "phone", type: "tel", placeholder: "Phone Number (Optional)" },
              { name: "teamMember", type: "text", placeholder: "Preferred Team Member (Optional)" },
            ]}
            textarea={{ name: "appointmentReason", placeholder: "Reason for Appointment (Optional)", rows: 4 }}
            buttonText="Submit Appointment Request"
            imageSrc="http://img.b2bpic.net/free-photo/diverse-colleagues-meeting-board-room_23-2148906967.jpg"
            imageAlt="Diverse colleagues meeting in a board room"
            mediaPosition="right"
          />
          {/* Placeholder for Google Calendar Integration and Team Availability Management */}
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Google Calendar Booking Widget (Integration Point)</h2>
            <p className="text-lg text-gray-600 mb-8">
              This section would host the embedded Google Calendar widget or a custom booking UI connected to the Google Calendar API for real-time team availability and appointment booking.
            </p>
            <div className="bg-gray-100 p-8 rounded-lg shadow-inner flex flex-col items-center justify-center min-h-[300px]">
                <CalendarDays className="h-16 w-16 text-gray-400 mb-4" />
                <p className="text-gray-500 italic">
                    (Here you would integrate your actual Google Calendar booking widget or custom API-driven calendar component.)
                </p>
                <div className="mt-4 text-sm text-gray-500">
                    <p>Example integration details:</p>
                    <ul className="list-disc list-inside mt-2 text-left">
                        <li>Connect to Google Calendar API for team availability.</li>
                        <li>Display available time slots based on team calendars.</li>
                        <li>Allow users to select a slot and confirm booking.</li>
                        <li>Manage team schedules, buffer times, and recurring appointments.</li>
                    </ul>
                </div>
            </div>
            <h3 className="text-2xl font-bold mt-12 mb-4">Team Availability Management (Backend Integration)</h3>
            <p className="text-lg text-gray-600">
              The backend for this page would handle authentication with Google API, manage team member calendars, check for conflicts, and confirm bookings. This would be a custom implementation.
            </p>
            <div className="bg-gray-100 p-8 rounded-lg shadow-inner flex flex-col items-center justify-center min-h-[150px] mt-8">
                <Users className="h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-500 italic">
                    (This area would represent features for internal team availability dashboards, configuration of working hours, and meeting types.)
                </p>
            </div>
          </div>
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