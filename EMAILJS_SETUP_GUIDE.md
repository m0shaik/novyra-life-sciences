# EmailJS Setup Guide for Novyra Life Sciences Contact Form

## 🚀 Complete Step-by-Step Setup

### Step 1: EmailJS Account Setup

1. **Visit EmailJS**: Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Create Account**: Sign up with your email
3. **Verify Email**: Check your inbox and verify your account

### Step 2: Add Email Service

1. **Dashboard Navigation**:
   - Log into EmailJS dashboard
   - Click **"Email Services"** in the left sidebar

2. **Add New Service**:
   - Click **"Add New Service"**
   - Choose your email provider (recommended: Gmail)

3. **Gmail Configuration**:
   - Select **"Gmail"**
   - Enter: `info@novyra.com`
   - Click **"Connect Account"**
   - Complete Google OAuth authorization
   - **SAVE YOUR SERVICE ID** (appears as `service_xxxxxxx`)

### Step 3: Create Email Template

1. **Template Creation**:
   - Click **"Email Templates"** in sidebar
   - Click **"Create New Template"**

2. **Template Configuration**:
   ```
   Template Name: Novyra Contact Form
   ```

3. **Email Settings**:
   ```
   To Email: info@novyra.com
   Subject: New Contact Form Submission from {{from_name}}
   ```

4. **Email Body Template** (copy exactly):
   ```html
   Hello Novyra Life Sciences Team,

   You have received a new contact form submission:

   📧 Contact Details:
   • Name: {{from_name}}
   • Email: {{from_email}}
   • Phone: {{from_phone}}

   💬 Message:
   {{message}}

   ---
   Sent from Novyra Life Sciences website contact form
   Reply to: {{from_email}}
   ```

5. **Save Template** and note your **Template ID** (`template_xxxxxxx`)

### Step 4: Get Your Public Key

1. **Account Settings**:
   - Click **"Account"** in sidebar
   - Find **"Public Key"** section
   - Copy the key (starts with letters/numbers)

### Step 5: Update Contact.tsx

Replace these values in your Contact.tsx file:

```tsx
// Replace these with your actual EmailJS values:
const serviceId = 'service_YOUR_ID';      // From Step 2
const templateId = 'template_YOUR_ID';    // From Step 3  
const publicKey = 'YOUR_PUBLIC_KEY';      // From Step 4
```

### Step 6: Test the Setup

1. **Development Testing**:
   - Start your development server: `npm run dev`
   - Go to the contact page
   - Fill out and submit the form
   - Check for success/error messages

2. **Email Verification**:
   - Check `info@novyra.com` inbox
   - Verify email formatting and content

### 🔧 Troubleshooting

**Common Issues:**

1. **"User ID not found"**:
   - Ensure Public Key is correct
   - Check Account settings in EmailJS

2. **"Template not found"**:
   - Verify Template ID matches exactly
   - Ensure template is saved and active

3. **"Service not found"**:
   - Confirm Service ID is correct
   - Check if email service is properly connected

4. **Gmail Authorization Issues**:
   - Re-authorize Gmail connection
   - Check Google account security settings

### 📋 Your Configuration Checklist

- [ ] EmailJS account created and verified
- [ ] Gmail service connected and Service ID saved
- [ ] Email template created with correct variables
- [ ] Template ID saved
- [ ] Public Key copied
- [ ] Contact.tsx updated with all three values
- [ ] Form tested successfully
- [ ] Email received at info@novyra.com

### 🎯 Expected Result

When working correctly:
1. User fills out contact form
2. Form shows "Sending..." during submission
3. Success toast appears: "Message sent successfully!"
4. Email arrives at info@novyra.com with all form data
5. Form resets to empty state

### 📞 Need Help?

If you encounter issues:
1. Check browser console for error messages
2. Verify all IDs match exactly (case-sensitive)
3. Test with EmailJS's test feature in their dashboard
4. Ensure Gmail account has proper permissions

---

**Security Note**: The public key is safe to use in frontend code - it's designed for client-side usage and has built-in rate limiting.