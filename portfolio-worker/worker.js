const corsHeaders = {
    "Access-Control-Allow-Origin": "*", // Allow requests from any origin
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  export default {
    async fetch(request, env, ctx) {
        console.log('Received request:', request.method, request.url);
      // Handle CORS preflight requests
      if (request.method === "OPTIONS") {
        return new Response(null, {
          headers: corsHeaders
        });
      }

      // Only handle POST requests
      if (request.method !== 'POST') {
        console.log('Received non-POST request');
        return new Response('Send a POST request', {
          status: 405,
          headers: { ...corsHeaders, "Content-Type": "text/plain" }
        });
      }

      try {
        console.log('Parsing form data');
        // Parse the form data
        const formData = await request.json();
        console.log('Received form data:', formData);
        const { name, email, message } = formData;

        // Validate the form data
        if (!name || !email || !message) {
          return new Response('All fields are required', {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "text/plain" }
          });
        }

        // Supabase details
        const SUPABASE_URL = 'https://vfuetwtiumsljzqbjldz.supabase.co';
        const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmdWV0d3RpdW1zbGp6cWJqbGR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExNzMyOTgsImV4cCI6MjAzNjc0OTI5OH0.GjxPZ_X_DytdgaBiOcM5SYXu2mhXSVwTfeYi91pjI0o';

        // Send data to Supabase
        const response = await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
            submitted_at: new Date().toISOString()
          })
        });

        if (response.ok) {
          return new Response('Thank you for your message!', {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "text/plain" }
          });
        } else {
          const errorText = await response.text();
          throw new Error(`Failed to submit to Supabase: ${errorText}`);
        }
      } catch (error) {
        console.error('Error:', error);
        return new Response(`An error occurred while processing your request: ${error.message}`, {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "text/plain" }
        });
      }
    },
  };