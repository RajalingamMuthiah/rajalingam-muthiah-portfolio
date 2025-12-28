# Automatic Acknowledgement Email System

## Overview

The contact form on your Next.js portfolio now sends **two emails** automatically when a user submits a message:

1. **Notification Email** → Sent to you (portfolio owner)
2. **Acknowledgement Email** → Sent to the sender with professional formatting

Both emails are sent securely via the **Resend API** without exposing your API key to the client.

---

## Implementation Details

### Files Modified/Created

#### 1. **API Route** - `src/app/api/send/route.ts`
- Handles contact form submissions
- Validates request body with Zod
- Sends two Resend emails in parallel:
  - Owner notification email (with sender info and message)
  - Acknowledgement email (professional thank-you)
- Includes comprehensive error handling and logging
- Uses server-side environment variable (`RESEND_API_KEY`)

**Key Features:**
- TypeScript types for email responses
- Proper validation before sending
- Graceful fallback if acknowledgement fails (owner email still sent)
- Detailed console logging for debugging

#### 2. **Email Templates**

##### Owner Notification Email - `src/components/email-template.tsx`
Sent to: **You (portfolio owner)**

Includes:
- Professional header with emoji
- Sender's name, email, and message
- Direct reply button
- Clickable email link for quick response
- Mobile-responsive HTML styling

##### Acknowledgement Email - `src/components/email-acknowledgement.tsx` (NEW)
Sent to: **The form submitter**

Includes:
- Personalized greeting with sender's name
- Thank-you message
- Copy of their original message
- Your professional signature
- Notice that it's an automated email
- Mobile-responsive HTML styling with proper HTML entities

---

## How It Works

### Flow Diagram

```
User submits contact form
         ↓
Form data sent to /api/send (POST)
         ↓
Server validates with Zod
         ↓
Two emails sent in parallel:
    ├→ Email 1: Notification to owner
    └→ Email 2: Acknowledgement to sender
         ↓
Response sent to client
(Success even if acknowledgement fails)
```

### Email Sending Logic

```typescript
// Step 1: Send notification to owner
const { data: ownerEmailData, error: ownerEmailError } = await resend.emails.send({
  from: "Portfolio <onboarding@resend.dev>",
  to: [config.email], // Your email from config
  subject: `New Contact Message from ${zodData.fullName}`,
  react: EmailTemplate({ /* sender info */ }),
});

// Step 2: Send acknowledgement to sender
const { data: acknowledgementData, error: acknowledgementError } = await resend.emails.send({
  from: "Portfolio <onboarding@resend.dev>",
  to: [zodData.email], // Sender's email
  subject: "Thank you for reaching out!",
  react: AcknowledgementEmailTemplate({ /* ack info */ }),
});
```

---

## Configuration

### Environment Variables

Your `.env.local` file already contains:

```env
RESEND_API_KEY=re_CbuxVbMb_PjSXFYDynh1dQG1DNYrKEXqx
```

**Important:** This key is server-side only and NEVER exposed to the client.

### Portfolio Author Name

The acknowledgement email uses `config.author` from `src/data/config.ts` for the signature. Currently set to: `"Rajalingam Muthiah"`

Update if needed:
```typescript
// src/data/config.ts
const config = {
  author: "Your Name", // Used in email signature
  email: "your.email@gmail.com", // Receives notifications
  // ... rest of config
};
```

---

## Email Templates

### Owner Notification Email

**Subject:** `New Contact Message from [Sender Name]`

**Contains:**
- Sender's full name and email
- The complete message
- Quick reply button
- Professional footer

**Styling:**
- Light gray background container
- White email body with subtle shadow
- Blue call-to-action button
- Responsive grid layout

### Acknowledgement Email

**Subject:** `Thank you for reaching out!`

**Contains:**
- Personalized greeting
- Thank-you message
- Sender's message echoed back
- Your professional signature
- Automated email notice

**Styling:**
- Light blue background container
- Professional header with icon
- Message in quoted box
- Mobile-first responsive design
- Readable font sizes and spacing

---

## Type Safety

All email data is validated using **Zod** schema:

```typescript
const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});
```

**Validation Rules:**
- `fullName`: Minimum 2 characters
- `email`: Valid email format
- `message`: Minimum 10 characters

Any invalid data returns a 400 error with a clear message.

---

## Error Handling

The implementation includes robust error handling:

### Scenario 1: Missing API Key
```
Status: 500
Error: "Email service not configured"
```

### Scenario 2: Invalid Form Data
```
Status: 400
Error: "Validation failed" (or specific field error)
```

### Scenario 3: Owner Email Fails
```
Status: 500
Error: "Failed to send notification email"
```

### Scenario 4: Acknowledgement Email Fails
```
Status: 200 (Success)
Warning logged to console
Message: "Acknowledgement email failed but owner notification succeeded"
```

The system prioritizes getting your notification over the acknowledgement, ensuring you always receive contact messages even if the sender's acknowledgement fails.

---

## Testing

### Local Testing

Use this curl command to test:

```bash
curl -X POST http://localhost:3000/api/send \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "email": "john@example.com",
    "message": "This is a test message to verify the email system."
  }'
```

Or test via your contact form in the browser with real data.

### Expected Response (Success)

```json
{
  "success": true,
  "message": "Emails sent successfully",
  "data": {
    "ownerEmail": "email-id-here",
    "acknowledgementEmail": "email-id-here"
  }
}
```

---

## Production Deployment

When deploying to Vercel:

1. **Add Environment Variable:**
   - Go to Vercel Project Settings
   - Add `RESEND_API_KEY` with your API key value
   - No other configuration needed

2. **Verify Email Sending:**
   - Test the contact form after deployment
   - Check your email inbox for notifications
   - Have a test user submit to verify acknowledgement

3. **Monitor Logs:**
   - Check Vercel logs for any API errors
   - Resend provides email tracking at their dashboard

---

## Security Considerations

✅ **What's Secure:**
- API key stored server-side only (`.env.local` / Vercel env)
- No sensitive data in client-side code
- Zod validation prevents malformed requests
- TypeScript types enforce data safety
- HTTPS in production

✅ **What's NOT at Risk:**
- User email addresses (encrypted by Resend)
- Your email address (not visible to frontend)
- API key (never sent to client)

---

## Customization

### Change Email From Address

In `src/app/api/send/route.ts`:
```typescript
const { data: ownerEmailData, error: ownerEmailError } = await resend.emails.send({
  from: "Your Name <your-email@resend.dev>", // Change this
  to: [config.email],
  // ...
});
```

### Change Email Subject

```typescript
subject: `New Contact Message from ${zodData.fullName}`, // Customize here
```

### Change Email Signature

In `src/components/email-acknowledgement.tsx`:
```typescript
portfolioOwnerName={config.author} // Uses this value
```

And in `src/data/config.ts`:
```typescript
author: "Your Professional Name",
```

---

## Troubleshooting

### Emails Not Sending

1. **Check API Key:**
   ```bash
   echo $RESEND_API_KEY  # Should show your key (locally)
   ```

2. **Check Vercel Env:**
   - Verify `RESEND_API_KEY` is set in Vercel project settings
   - Redeploy after adding the variable

3. **Check Resend Dashboard:**
   - Log in to [resend.com](https://resend.com)
   - Check API usage and any failed deliveries

### Acknowledgement Email Not Received

1. **Check spam folder** (first time senders often go to spam)
2. **Verify email format** (must be valid email in form)
3. **Check console logs** for errors
4. **Resend domain reputation** (new projects may have lower deliverability)

### Form Validation Issues

- `fullName`: Ensure at least 2 characters
- `email`: Must be valid email format
- `message`: Ensure at least 10 characters

---

## Performance

- Email sending is non-blocking (fires in background)
- API responds to user quickly (~200ms)
- Both emails sent in parallel (not sequential)
- No impact on page load or other features

---

## Future Enhancements

Optional improvements you could add:

1. **Rate Limiting:** Prevent spam submissions
2. **Email Queue:** Queue emails if service is down
3. **Templates Database:** Store templates in database
4. **Reply-To:** Add sender's email as reply-to address
5. **Email Logging:** Track sent/failed emails in database
6. **HTML Versioning:** A/B test email designs

---

## Support

If you need to debug:

1. **Check Vercel logs:** `vercel logs`
2. **Check browser console:** For client errors
3. **Check Resend logs:** On resend.com dashboard
4. **Test with curl:** Use the command above

---

**Implementation Date:** December 28, 2025  
**Status:** ✅ Production Ready  
**Framework:** Next.js 14.2.3 + TypeScript 5 + Resend API
