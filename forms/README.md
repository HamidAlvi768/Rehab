# SOAN Garden Forms Setup Guide

This guide explains how to set up and configure the contact and newsletter forms for the SOAN Garden website.

## Prerequisites

1. PHP server with PHP version 7.4 or higher
2. SMTP server credentials (if using SMTP for email sending)
3. Access to update the website files

## Configuration Steps

### 1. Email Configuration

1. Open `contact.php` and `newsletter.php`
2. Replace `[Add Official Email]` with the actual email address where you want to receive:
   - Contact form submissions
   - Newsletter subscriptions

### 2. SMTP Setup (Optional but Recommended)

If you want to use SMTP for reliable email delivery:

1. Uncomment the SMTP configuration section in both PHP files
2. Update the following credentials:
   ```php
   $contact->smtp = array(
       'host' => 'your-smtp-host.com',
       'username' => 'your-smtp-username',
       'password' => 'your-smtp-password',
       'port' => '587'
   );
   ```

### 3. Form Fields

#### Contact Form
The contact form includes the following fields:
- Name (required)
- Email (required)
- Department Selection (required)
- Message (required)

#### Newsletter Form
The newsletter form includes:
- Email address (required)

## Testing

After configuration:

1. Submit a test contact form
2. Submit a test newsletter subscription
3. Verify that emails are being received at the configured email address
4. Check that the success/error messages are displaying correctly

## Maintenance

Regular tasks:
1. Monitor form submissions
2. Keep SMTP credentials secure
3. Update email addresses if needed
4. Check spam folder for legitimate submissions

## Security Notes

1. The forms include basic validation
2. CSRF protection is implemented
3. Email addresses are validated
4. Rate limiting is recommended on the server side

## Troubleshooting

Common issues and solutions:

1. Emails not receiving:
   - Check SMTP configuration
   - Verify receiving email address
   - Check spam folder

2. Form submission errors:
   - Verify PHP version
   - Check error logs
   - Ensure all required fields are filled

## Support

For technical support with the forms:
1. Contact the website administrator
2. Check the PHP Email Form library documentation
3. Consult your hosting provider for SMTP issues 