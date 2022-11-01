# Cross Chain Coalition 

This repo the web application for [www.crosschaincoalition.com](https://www.crosschaincoalition.com/)

## Setup

To run this locally, you will need a Storyblok Api Key.

To set up the app for local development:
```
git clone https://github.com/Cross-Chain-Coalition/ccc-website.git
cd ccc-website

### Local Development

# Getting environment variables set
cp .env.example .env.local

After seeing your .env.local file, make sure to replace placeholders with your Storyblok Api Key

STORYBLOK_ACCESS_TOKEN=YOUR_STORYBLOK_API_KEY
```

## Run
```
npm install
npm run dev
```

You can see the website at [http://localhost:3000](http://localhost:3000)
