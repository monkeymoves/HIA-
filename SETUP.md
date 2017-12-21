## What You Need

*   An [Auth0 account](https://auth0.com/)

## Step 1: Add your credentials to .env

Having created an Auth0 account, it automatically created a default app. From the 'Clients' section, you can select that app and it will display your client credentials. Copy and paste the values for domain, Client ID and Client Secret into the `.env` file in your project. You'll see variables for `AUTH0_CLIENT_SECRET`, `AUTH0_CLIENT_ID` and `AUTH0_DOMAIN` already in there.

## Step 2: Add callback URL

The callback URL is what Auth0 will use to return the auth token back to your app. The URL to use is your project's publish URL, which has the format https://project-name.glitch.me, and ends with '/callback/', so in this example app we used the callback URL: https://auth0.glitch.me/callback/. Paste yours into the 'Allowed Callback URLs' section for your app in Auth0. While you're there, set the Client Type to 'regular web app', and select 'POST' for 'Token Endpoint Authentication Method'. All other values are fine, so click 'save changes' and you're done. Your app should now work - you can try it out by clicking 'Show' and creating an account and logging in.

When you click 'Login' the Auth0 login screen is shown. You can create your account or sign in if you already have one. When you submit your details, Auth0 handles the authentication and it returns to your /callback URL, which checks you're authenticated and redirects to /user if you are.


## Getting Help

You can see other example projects on our [Community Projects](https://glitch.com/) page. And if you get stuck, let us know on the [forum](http://support.glitch.com/) and we can help you out.