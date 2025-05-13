import sgMail from '@sendgrid/mail';
import { ContactSubmission } from '@shared/schema';

// Initialize SendGrid with API Key
if (!process.env.SENDGRID_API_KEY) {
  console.warn('SENDGRID_API_KEY is not set. Email notifications will not be sent.');
} else {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

// Notification email address - change this to your desired recipient
const ADMIN_EMAIL = 'admin@bestcaredme.com';
const FROM_EMAIL = 'noreply@bestcaredme.com';

export async function sendFormSubmissionNotification(submission: ContactSubmission): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('SENDGRID_API_KEY is not set. Email notification not sent.');
    return false;
  }

  const affectedExtremityMap: Record<string, string> = {
    'upper': 'Upper (Ex. hand)',
    'lower': 'Lower (Ex. foot)',
    'both': 'Upper and Lower',
    'unknown': 'Don\'t Know'
  };

  const injuryTypeMap: Record<string, string> = {
    'ischemic-stroke': 'Ischemic Stroke',
    'tbi': 'Traumatic Brain Injury (TBI)',
    'avm-stroke': 'Stroke following an AVM',
    'spinal-cord': 'Spinal Cord Injury',
    'other-brain': 'Other type of brain injury',
    'other-injury': 'Other type of injury'
  };

  try {
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Date:</strong> ${new Date(submission.createdAt).toLocaleString()}</p>
      
      <h3>Personal Information</h3>
      <p><strong>Name:</strong> ${submission.firstName} ${submission.lastName}</p>
      <p><strong>Email:</strong> ${submission.email}</p>
      <p><strong>Phone:</strong> ${submission.phone || 'Not provided'}</p>
      <p><strong>State:</strong> ${submission.state || 'Not provided'}</p>
      
      <h3>Injury Information</h3>
      <p><strong>Injury Type:</strong> ${injuryTypeMap[submission.injuryType] || submission.injuryType || 'Not provided'}</p>
      <p><strong>Affected Extremity:</strong> ${affectedExtremityMap[submission.affectedExtremity] || submission.affectedExtremity || 'Not provided'}</p>
      <p><strong>Injury Year:</strong> ${submission.injuryYear || 'Not provided'}</p>
      <p><strong>Currently Doing Therapy:</strong> ${submission.currentTherapy === 'yes' ? 'Yes' : 'No'}</p>
      <p><strong>How They Found Us:</strong> ${submission.referralSource || 'Not provided'}</p>
      
      <h3>Additional Information</h3>
      <p><strong>Message:</strong> ${submission.message || 'No message provided'}</p>
    `;

    const msg = {
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      subject: `New Contact Form Submission: ${submission.firstName} ${submission.lastName}`,
      text: `New contact form submission from ${submission.firstName} ${submission.lastName}. Please check the admin dashboard for details.`,
      html: htmlContent,
    };

    await sgMail.send(msg);
    console.log(`Notification email sent for submission ID: ${submission.id}`);
    return true;
  } catch (error) {
    console.error('Error sending notification email:', error);
    return false;
  }
}

export async function testEmailConnection(): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('SENDGRID_API_KEY is not set. Test email not sent.');
    return false;
  }

  try {
    const msg = {
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
      subject: 'BestCare DME Email System Test',
      text: 'This is a test email to confirm your SendGrid integration is working correctly.',
      html: '<h1>Email System Test</h1><p>This is a test email to confirm your SendGrid integration is working correctly.</p>',
    };

    await sgMail.send(msg);
    console.log('Test email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending test email:', error);
    return false;
  }
}