import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json().catch(() => null)

    // Check if body was successfully parsed
    if (!body) {
      return NextResponse.json({ success: false, error: "Invalid request body" }, { status: 400 })
    }

    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: "Invalid email format" }, { status: 400 })
    }

    // Try Resend first, then fallback to SMTP
    let emailSent = false
    let emailResult: any = null

    // Attempt 1: Try Resend
    try {
      const { Resend } = await import("resend")
      const resend = new Resend(process.env.RESEND_API_KEY || "re_cNrEjfHw_PrRXeR4X4MALn99qjmuQ2p7n")

      emailResult = await resend.emails.send({
        from: "ENGINEERS4URSERVICE <support@engineers4urservice.co.za>",
        to: ["support@engineers4urservice.co.za"],
        subject: `New Contact Form Submission from ${name}`,
        html: generateEmailHTML(name, email, message),
        text: generateEmailText(name, email, message),
      })

      console.log("Email sent successfully via Resend:", emailResult)
      emailSent = true
    } catch (resendError: any) {
      console.error("Resend failed, trying SMTP fallback:", resendError)

      // Attempt 2: Try SMTP fallback
      try {
        const nodemailer = await import("nodemailer")

        // SMTP configuration based on the domains.co.za settings
        const transporter = nodemailer.default.createTransporter({
          host: "da11.domains.co.za",
          port: 465,
          secure: true, // SSL
          auth: {
            user: "support@engineers4urservice.co.za",
            pass: "Engineers@95",
          },
          tls: {
            rejectUnauthorized: false, // TLS disabled as per instructions
          },
        })

        // Verify SMTP connection
        await transporter.verify()

        // Send email via SMTP
        const smtpResult = await transporter.sendMail({
          from: '"ENGINEERS4URSERVICE" <support@engineers4urservice.co.za>',
          to: "support@engineers4urservice.co.za",
          subject: `New Contact Form Submission from ${name}`,
          html: generateEmailHTML(name, email, message),
          text: generateEmailText(name, email, message),
        })

        console.log("Email sent successfully via SMTP:", smtpResult)
        emailSent = true
        emailResult = { data: { id: smtpResult.messageId } }
      } catch (smtpError: any) {
        console.error("SMTP also failed:", smtpError)

        // Log the form submission for manual processing
        console.log("Form submission (both email services failed):", {
          name,
          email,
          message,
          timestamp: new Date().toISOString(),
        })

        return NextResponse.json(
          {
            success: false,
            error:
              "Email service temporarily unavailable. Please contact us directly at info@engineers4urservice.co.za or call 011 640 9700",
          },
          { status: 500 },
        )
      }
    }

    if (emailSent) {
      return NextResponse.json(
        {
          success: true,
          message: "Thank you for your message! We will get back to you within 24 hours.",
          emailId: emailResult?.data?.id,
        },
        { status: 200 },
      )
    }
  } catch (error) {
    console.error("General error:", error)

    // Log the form submission for manual processing
    const { name, email, message } = await request.json().catch(() => ({}))
    if (name && email && message) {
      console.log("Form submission (general error):", {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      })
    }

    return NextResponse.json(
      {
        success: false,
        error:
          "An unexpected error occurred. Please contact us directly at info@engineers4urservice.co.za or call 011 640 9700",
      },
      { status: 500 },
    )
  }
}

function generateEmailHTML(name: string, email: string, message: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #dc2626, #2563eb); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">ENGINEERS4URSERVICE</h1>
        <p style="color: white; margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">New Contact Form Submission</p>
      </div>
      
      <!-- Contact Details -->
      <div style="background-color: #f8fafc; padding: 25px; margin: 0; border-left: 4px solid #2563eb;">
        <h3 style="color: #1e293b; margin-top: 0; margin-bottom: 20px; font-size: 18px;">Contact Information:</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
            <td style="padding: 12px 0; color: #6b7280; font-size: 16px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: bold; color: #374151;">Email:</td>
            <td style="padding: 12px 0; color: #6b7280; font-size: 16px;">
              <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: bold; color: #374151;">Date:</td>
            <td style="padding: 12px 0; color: #6b7280; font-size: 16px;">${new Date().toLocaleString("en-ZA", {
              timeZone: "Africa/Johannesburg",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}</td>
          </tr>
        </table>
      </div>
      
      <!-- Message -->
      <div style="background-color: #ffffff; padding: 25px; border-left: 4px solid #dc2626;">
        <h3 style="color: #1e293b; margin-top: 0; margin-bottom: 15px; font-size: 18px;">Message:</h3>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; border: 1px solid #e5e7eb;">
          <p style="white-space: pre-wrap; color: #374151; line-height: 1.6; margin: 0; font-size: 15px;">${message}</p>
        </div>
      </div>
      
      <!-- Action Button -->
      <div style="background-color: #dbeafe; padding: 25px; text-align: center; border-radius: 6px; margin: 20px 0;">
        <p style="margin: 0 0 15px 0; color: #1e40af; font-size: 16px; font-weight: 500;">
          📧 Reply directly to this customer:
        </p>
        <a href="mailto:${email}?subject=Re: Your inquiry to ENGINEERS4URSERVICE" 
           style="display: inline-block; background-color: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">
          Reply to ${name}
        </a>
      </div>
      
      <!-- Footer -->
      <div style="background-color: #1f2937; color: #d1d5db; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
        <p style="margin: 0 0 10px 0; font-weight: bold; color: #ffffff;">ENGINEERS4URSERVICE</p>
        <p style="margin: 0; font-size: 14px; line-height: 1.4;">
          Professional ICT Infrastructure Services<br>
          1 Pioneer Ave, Midrand, Johannesburg, South Africa<br>
          <a href="mailto:info@engineers4urservice.co.za" style="color: #60a5fa;">info@engineers4urservice.co.za</a> | 
          <a href="tel:0116409700" style="color: #60a5fa;">011 640 9700</a>
        </p>
      </div>
    </div>
  `
}

function generateEmailText(name: string, email: string, message: string): string {
  return `
New Contact Form Submission - ENGINEERS4URSERVICE

Contact Information:
Name: ${name}
Email: ${email}
Date: ${new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}

Message:
${message}

---
This email was sent from the ENGINEERS4URSERVICE website contact form.
Reply directly to the customer at: ${email}

ENGINEERS4URSERVICE - Professional ICT Infrastructure Services
1 Pioneer Ave, Midrand, Johannesburg, South Africa
info@engineers4urservice.co.za | 011 640 9700
  `
}
