# EmailJS Setup Guide

This guide will help you set up EmailJS for your portfolio contact form.

## Step 1: Create EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service

1. Go to **Email Services** in your dashboard
2. Click **Add Service**
3. Select **Gmail** (or your preferred email provider)
4. Follow the setup wizard to connect your email

## Step 3: Get Your Credentials

You need three pieces of information:

### A. Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key**
3. Replace `YOUR_PUBLIC_KEY_HERE` in `components/Contact.tsx`

### B. Service ID
1. Go to **Email Services**
2. Click on your service
3. Copy the **Service ID**
4. Replace `YOUR_SERVICE_ID_HERE` in `components/Contact.tsx`

### C. Template ID
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use these template variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_email}}`

Example template content:
```
Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}
```

4. Save the template and copy its **Template ID**
5. Replace `YOUR_TEMPLATE_ID_HERE` in `components/Contact.tsx`

## Step 4: Update Contact Component

Open `components/Contact.tsx` and replace:
- `YOUR_PUBLIC_KEY_HERE` with your EmailJS Public Key
- `YOUR_SERVICE_ID_HERE` with your EmailJS Service ID
- `YOUR_TEMPLATE_ID_HERE` with your EmailJS Template ID

## Step 5: Test the Contact Form

1. Run your portfolio locally: `npm run dev`
2. Fill out the contact form
3. Click "Send Message"
4. Check your email to verify it works!

## How It Works

When a user submits the contact form:
1. The form data is captured (name, email, message)
2. EmailJS sends it directly to your Gmail inbox
3. The user sees a success/error message
4. No backend server needed!

## Troubleshooting

**"Failed to send message"?**
- Check that you replaced all three credentials correctly
- Verify the Template ID variables match exactly
- Check browser console for detailed error messages

**Not receiving emails?**
- Check spam folder
- Verify Gmail is connected to EmailJS
- Try sending a test email from EmailJS dashboard

**Free Tier Limits:**
- 200 emails per month
- For higher volume, upgrade your plan

## Security Note

Your Public Key is exposed in the frontend (which is normal), but keep your Private Key secret - never expose it in frontend code.

---

For more help, visit: https://www.emailjs.com/docs/
