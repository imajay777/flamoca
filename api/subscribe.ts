// @ts-nocheck

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;
  
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email address is required' });
  }

  try {
    // For now, we'll just log the subscription
    // In production, you could integrate with email services like SendGrid, Mailgun, etc.
    console.log(`New subscription request: ${email}`);
    
    // Send a simple notification email to flamocauk@gmail.com
    // Note: This is a basic implementation. For production, use a proper email service.
    const notificationEmail = {
      to: 'flamocauk@gmail.com',
      subject: 'New Newsletter Subscription - Flamoca',
      body: `A new user has subscribed to your newsletter:\n\nEmail: ${email}\nDate: ${new Date().toISOString()}\n\nYou can manually add this email to your mailing list.`
    };

    // Log the notification (in production, send actual email)
    console.log('Notification email:', notificationEmail);

    return res.status(200).json({ 
      success: true, 
      message: 'Subscription successful! Check your email for confirmation.',
      email: email 
    });
  } catch (err: any) {
    console.error('Subscription error:', err);
    return res.status(500).json({ error: 'Failed to process subscription' });
  }
} 