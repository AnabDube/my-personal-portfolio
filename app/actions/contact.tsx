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

    // Create the email content
    const emailContent = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not specified'}
Project Type: ${data.projectType}
Timeline: ${data.timeline || 'Not specified'}

Message:
${data.message}

---
This message was sent from your portfolio contact form.
    `.trim()

    // For now, simulate successful email sending
    // TODO: Uncomment the fetch call once Netlify function is deployed with proper env vars
    console.log("[Contact Form] Would send email:", {
      to: 'anabdube030@gmail.com',
      subject: `New Contact Form Submission from ${data.name}`,
      content: emailContent
    })

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Thank you, your message has been sent.",
    }
  } catch (error) {
    console.error("[Contact Form] Error:", error)
    return {
      success: false,
      message: "There was an error sending your message. Please try again.",
    }
  }
}
