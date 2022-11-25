

# Social Blogging Platform

Social Blogging Platform project built with [Vite](https://vitejs.dev/) with use of [React](https://github.com/facebook/react) library and [Typescript](https://www.typescriptlang.org/) along with [Redux-Toolkit](https://redux-toolkit.js.org/) for application client-side centralized state container. [TailwindCSS](https://tailwindcss.com/) CSS framework was used for application styling tool. [Slate](https://docs.slatejs.org/) framework was used to build fully customized text editor. [Firebase](https://firebase.google.com/) was used for the backend.

### Live: [click here](https://husky93.github.io/social-blogging-platform/)

## Features
- Display Loading indicator while page components load (Route Switch level React Suspense + Lazy loading).
- Display "Skeleton" loading indicator before data loads for components that require it.
- Homepage render based on user login state.
  - Checks if user is already logged in before each render.
  - Renders starting page when user is not logged in.
  - Renders Blog page when user is logged in.
- **Starting page:**
  - Trending section fetches top 4 liked posts from database and displays them.
  - Login functionality using Firebase Google Authentication.
- **Blog page:**
  - Fetches 5 most liked posts initially and displays them.
  - Loads more posts from database when user scrolls over the last displayed post and if there are any more posts left in database. [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) based infinite scroll functionality.
  - Saves all fetched posts inside global app store (Might not be good frontend feature as a posts database gets bigger, but it reduces database queries number significantly while browsing the app).
  - When user is logged in displays "Create Post" button and User Interface dropdown inside Header.
- **Post page:**
  - Displays error when post URL is wrong.
  - Displays post based on entered URL.
  - Fetches post data from global Redux app store, or from database if it doesn't find it there.
  - Serializes Slate editor Node / Leaf data into JSX and displays Article.
  - Like and Bookmark buttons that update data in global store and in database simultaneously.
  - Checks if User already liked / bookmarked a post before rendering Like / Bookmark user interface.
  - Alert that displays only when user does something wrong (likes when not logged in / tries to add comment that is too short)
  - Comment section.
  - Option to add comments while logged in.
  - Option to like comments while logged in.
- **Create Post page:**
  - Tag input with an ability to add 4 tags.
  - Alert element displaying message when something goes wrong.
  - Custom text editor built on top of [Slate](https://docs.slatejs.org/) framework.
  - Option to create H1, H2, Blockquote, List item elements.
  - Option to make selected text bold, italic or line through.
  - Option to Save draft in database and load it whenever user visits Create Post page again.
  - Submit post to database when all necessary conditions are met.
- **Bookmarks page:**
  - Fetch user bookmarked posts from either global app store or from database if they are not inside store already.
  - Display posts bookmarked by user
- **Dashboard page:**
  - Fetch dashboard user posts from either global app store or from database if they are not inside store already.
  - Display posts created by user.
  - Option to delete posts created by logged in user from database.
  - Delete confirmation popup modal.
- **Settings page:**
  - Nested Route switch.
  - Ability to change your display name.
  - Profile picture change functionality with an update to user posts (upload and read from Firebase storage).

 
<img src="https://github.com/husky93/social-blogging-platform/blob/main/website.jpg?raw=true"/>

#### Dependencies Used:
- [React](https://github.com/facebook/react)
- [React-DOM](https://github.com/facebook/react/tree/main/packages/react-dom)
- [Redux-Toolkit](https://redux-toolkit.js.org/)
- [react-router-dom](https://github.com/remix-run/react-router)
- [TailwindCSS](https://tailwindcss.com/) 
- [Slate](https://docs.slatejs.org/)
- [date-fns](https://date-fns.org/v2.29.1/docs/format)
- [Firebase](https://firebase.google.com/)

#### Dev dependencies:
- [vite](https://github.com/facebook/create-react-app)
- [typescript](https://www.typescriptlang.org/)
- [gh-pages](https://www.npmjs.com/package/gh-pages)

#### Assets used:
- [xicons](https://www.xicons.org/#/)
- [Football field photo by Tom Fisk from Pexels](https://www.pexels.com/photo/bird-s-eye-view-of-a-soccer-field-3441727/) 


