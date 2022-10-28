import StoryblokClient from "storyblok-js-client";

import { LATEST_BLOG_SHOW_CNT } from "./constants.js";

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  region: 'us'
});

export const fetchNewsletters = async () => {
  const newsletters = [];
  let response = await Storyblok.get("cdn/stories/", {
    version: "draft",
    per_page: 100,
  })

  for (const story of response.data.stories) {
    if (story.published_at != null) {
      if (
        story.full_slug.startsWith("media-content/") &&
        !story.full_slug.endsWith("media-content/")
      ) {
        newsletters.push(story);
      }
    }
  }

  newsletters.sort((a, b) => {
    const aTimestamp = Date.parse(a.content.published_date);
    const bTimestamp = Date.parse(b.content.published_date);

    return aTimestamp > bTimestamp ? -1 : 1;
  });

  return newsletters;
};

export const fetchEvents = async () => {
  const events = [];
  let response = await Storyblok.get("cdn/stories/", {
    starts_with: "events/",
  });

  for (const story of response.data.stories) {
    if (story.published_at != null) {
      if (
        story.full_slug.startsWith("events/") &&
        !story.full_slug.endsWith("events/")
      ) {
        events.push(story);
      }
    }
  }

  return events;
};

// export const filterBlogs = (eventList, category = "") => {
//   const blogs = eventList.filter((event) => {
//     if (category === "") {
//       return true;
//     }

//     if ("Category" in event.content) {
//       return event.content.Category === category;
//     }

//     return false;
//   });

//   blogs.sort((a, b) => {
//     const aTime = Date.parse(a.content.published_date);
//     const bTime = Date.parse(b.content.published_date);

//     return aTime > bTime ? -1 : 1;
//   });

//   return blogs;
//   // return blogs.slice(0, LATEST_BLOG_SHOW_CNT);
// };

// export const fetchPageValues = async (param) => {
//   let response = await Storyblok.get("cdn/stories/", {
//     "starts_with": param,
//   });

//   if (response.data.stories.length > 0) {
//     return response.data.stories[0];
//   }

//   return null;
// };
