import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PuppyBookingRequest {
  name: string;
  phone: string;
  email: string;
  preferred_sex: string;
  notes?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const bookingData: PuppyBookingRequest = await req.json();
    
    console.log("Received puppy booking request:", { ...bookingData, email: "***" });

    // Validate required fields
    if (!bookingData.name || !bookingData.phone || !bookingData.email || !bookingData.preferred_sex) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Store booking in database
    const { data: booking, error: dbError } = await supabase
      .from("puppy_bookings")
      .insert([
        {
          name: bookingData.name,
          phone: bookingData.phone,
          email: bookingData.email,
          preferred_sex: bookingData.preferred_sex,
          notes: bookingData.notes || null,
        },
      ])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save booking" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Booking saved to database:", booking.id);

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "Kirangi Dogs <onboarding@resend.dev>",
      to: [bookingData.email],
      subject: "Black Russian Terrier Puppy Booking Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0f172a; color: #e2e8f0;">
          <h1 style="color: #06b6d4; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">Thank You for Your Interest!</h1>
          
          <p style="font-size: 16px; line-height: 1.6;">Dear ${bookingData.name},</p>
          
          <p style="font-size: 16px; line-height: 1.6;">
            Thank you for submitting your reservation request for our upcoming Black Russian Terrier litter expected in December!
          </p>
          
          <div style="background-color: #1e293b; border-left: 4px solid #06b6d4; padding: 15px; margin: 20px 0; border-radius: 4px;">
            <h3 style="color: #06b6d4; margin-top: 0;">Your Booking Details:</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${bookingData.name}</p>
            <p style="margin: 5px 0;"><strong>Phone:</strong> ${bookingData.phone}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${bookingData.email}</p>
            <p style="margin: 5px 0;"><strong>Preferred Puppy Sex:</strong> ${bookingData.preferred_sex}</p>
            ${bookingData.notes ? `<p style="margin: 5px 0;"><strong>Notes:</strong> ${bookingData.notes}</p>` : ''}
          </div>
          
          <p style="font-size: 16px; line-height: 1.6;">
            We'll review your request and get back to you within 24-48 hours with more information about the upcoming litter, 
            pricing, and next steps in the reservation process.
          </p>
          
          <p style="font-size: 16px; line-height: 1.6;">
            If you have any immediate questions, feel free to reach out:
          </p>
          
          <ul style="font-size: 16px; line-height: 1.8;">
            <li>📞 Phone: <a href="tel:+254785535569" style="color: #06b6d4;">+254-785-535-569</a></li>
            <li>📧 Email: <a href="mailto:kirangidogs@gmail.com" style="color: #06b6d4;">kirangidogs@gmail.com</a></li>
            <li>💬 WhatsApp: <a href="https://wa.me/254785535569" style="color: #06b6d4;">Chat with us</a></li>
          </ul>
          
          <p style="font-size: 16px; line-height: 1.6;">
            Best regards,<br>
            <strong style="color: #06b6d4;">The Kirangi Dogs Team</strong>
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #334155; font-size: 14px; color: #94a3b8;">
            <p>Champion Bloodlines | Professional Training | Elite Protection Dogs</p>
          </div>
        </div>
      `,
    });

    // Send notification email to breeder
    const breederEmailResponse = await resend.emails.send({
      from: "Kirangi Dogs Bookings <onboarding@resend.dev>",
      to: ["kirangidogs@gmail.com"],
      subject: "New Puppy Booking Request - December Litter",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #0f172a; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">New Puppy Booking Request</h1>
          
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0f172a; margin-top: 0;">Customer Details:</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${bookingData.name}</p>
            <p style="margin: 5px 0;"><strong>Phone:</strong> ${bookingData.phone}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${bookingData.email}</p>
            <p style="margin: 5px 0;"><strong>Preferred Puppy Sex:</strong> ${bookingData.preferred_sex}</p>
            ${bookingData.notes ? `<p style="margin: 5px 0;"><strong>Additional Notes:</strong><br>${bookingData.notes}</p>` : ''}
          </div>
          
          <p style="color: #64748b; font-size: 14px;">
            Booking ID: ${booking.id}<br>
            Submitted: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    console.log("Emails sent successfully:", {
      customer: customerEmailResponse,
      breeder: breederEmailResponse
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Booking submitted successfully",
        bookingId: booking.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-puppy-booking function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
