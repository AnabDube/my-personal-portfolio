"use server"

interface ContactFormData {
  name: string
  email: string
  company: string
  projectType: string
  timeline: string
  message: string
}

interface ContactFormResult {
  success: boolean
  message?: string
}

export async function submitContactForm(data: ContactFormData): Promise<ContactFormResult> {
  try {
    // Validate required fields
    if (!data.name || !data.email || !data.projectType || !data.message) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      }
    }

    // Log the form submission (in a real app, you'd send this to your email service)
    console.log("[v0] Contact form submission:", {
      name: data.name,
      email: data.email,
      company: data.company,
      projectType: data.projectType,
      timeline: data.timeline,
      message: data.message.substring(0, 100) + "...",
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real application, you would:
    // 1. Send email using a service like Resend, SendGrid, or Nodemailer
    // 2. Store the submission in a database
    // 3. Add to newsletter list if opted in
    // 4. Send auto-reply confirmation

    // Example with Resend (commented out):
    /*
    import { Resend } from 'resend'
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Contact Form <anabdube030@gmail.com>',
      to: 'anabdube030@gmail.com',
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || 'Not specified'}</p>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Timeline:</strong> ${data.timeline || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `
    })
    */

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return {
      success: false,
      message: "There was an error sending your message. Please try again.",
    }
  }
}
