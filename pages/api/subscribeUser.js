// subscribeUser.js
import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  console.log('Request body:', req.body); // Log the request body
  
  const { email } = req.body;
  if (!email) {
    return res.status(401).json({ error: 'Email is required' });
  }

  const mailChimpData = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
      },
    ],
  };

  try {
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const URL = `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${audienceId}`;
    
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        Authorization: `auth ${process.env.MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mailChimpData),
    });

    let data;
    try {
      data = await response.json();
    } catch (e) {
      return res.status(500).json({
        error: 'Response from Mailchimp API is not correctly formatted JSON',
      });
    }

    if (data.errors && data.errors.length > 0 && data.errors[0].error) {
      return res.status(401).json({ error: data.errors[0].error });
    } else {
      return res.status(200).json({ success: true });
    }
  } catch (e) {
    console.error(e); // Log the error for debugging
    return res.status(500).json({ error: 'Something went wrong, please try again later.' });
  }
};
