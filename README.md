# Full Stack Developer Interview Exercise

## What has been implemented?

The following features and functionalities have been added to the photo search website:

### Frontend (web)

1. **Header Component**: A responsive header with the logo, search input, and collection dropdown.

2. **Photo Grid**: A masonry-style grid to display search results.

3. **Collection Dropdown**: A dropdown menu to select different photo collections.

4. **Search Functionality**: Users can search for photos by entering a query and selecting a collection.

5. **Modal for Photo Details**: Clicking on a photo opens a modal with the full photo and photographer details.

6. **Pagination**: A "More" button to load additional search results.

7. **Loading State**: A loading spinner is displayed while fetching initial photos.

8. **No Results Handling**: A message is shown when the search returns no results.

### Backend (api)

1. **API Endpoints**:

   - `/collections`: Fetches all available collections
   - `/photos`: Fetches initial photos or searches photos based on query and collection
   - `/photographer`: Fetches photographer details by ID

2. **Database Integration**: Connected to the PostgreSQL database to retrieve photo, collection, and photographer data.

### Custom Hooks

Three custom hooks have been implemented to manage state and API calls:

1. `usePhotoData`: Manages photo-related state and operations (fetching, searching, pagination).
2. `useCollections`: Handles collection-related state and operations.
3. `usePhotographerSearch`: Manages photographer search functionality.

## How to use the application

1. When the page loads, you'll see a search input, a collection dropdown, and initial photos.
2. Select a collection from the dropdown menu.
3. Enter a search query in the input field.
4. Click the "Search" button to find photos based on your query and selected collection.
5. Click on any photo to view it in full size along with the photographer's details.
6. Use the "More" button at the bottom of the page to load additional results.

## Additional Improvements

1. Responsive design for better mobile experience.
2. Error handling for API calls and data fetching.
3. Custom loading spinner for better user experience.
4. No results message for empty search results.

## Future Improvements

If given more time, I would consider implementing the following enhancements:

5. **Unit Testing**: Add unit tests for critical components and functions using testing libraries like Jest or React Testing Library to ensure reliability and maintainability of the codebase.

6. **Accessibility Improvements**: Conduct an accessibility audit and implement changes to ensure that all users can navigate and interact with the application effectively.

7. **Deployment**: Deploy the application on a cloud-based platform like Heroku or Vercel for easier access by users and reviewers.

8. **Styling Enhancements**: Refine CSS styles for better responsiveness across various devices and screen sizes, ensuring an optimal user experience on mobile devices.

First off, thank you for taking the time to do this exercise. We find that doing a contained development exercise like this one is much more effective than an in-person technical interview. No matter what our hiring decision is, we will make sure that you receive a complete code review for the work you deliver.

Be sure to carefully review this README before cloning the repository and getting started. It contains important setup instructions and lays out our expectations for how the final web app you build should work.

### What is the goal of this exercise?

The topics covered by this project are the basics of full stack web development. Completing this exercise will prepare you for working at Disco. Having a decent knowledge on these topics will allow you to easily join the team and learn new skills faster.

### Basic topics / skills covered by this exercise

- Version control (git)
- API interactions
- Javascript / Typescript
- React frontend
- Node (Express) backend
- SQL databases
- Layout & style implementation

## What are you going to build?

We would like you to build a photo search website.

- This boilerplate repository should serve as your starting point for this exercise. Included here is a PostgreSQL database that includes ~100 photos to be displayed on this website.
- In this web application, photos are categorized into "Collections". Users will search photos by selecting a specific Collection and searching within that collection via keywords. For example, someone might want to find mountain photos around Vancouver. They can type in "Vancouver" and select the "Mountains" collection from the dropdown.
- You will need to build the backend API which exposes the photos in the postgres database to your frontend. You will find 3 tables in the database: photo, collection, and photographer. Each photo belongs to a single collection and photographer. You can review the “schema.sql” file to see the exact structure of these 3 tables.
- After a successful search, the user should be displayed a page with a masonry grid of search results. Refer to designs to see how this page should look like.
- When a user clicks on any photo in the results page, it should open a modal which will display the full photo and details about its photographer.

### Design

Transforming complex designs to HTML & CSS in a seamless and accessible way is a critical skill for being a part of the team. Your final implementation will be reviewed against the provided design comp.

### Timing

You should ideally complete this exercise within 72 hours of receiving it. If you are not able to complete this exercise within 72 hours of receiving this, please let us know and we'd be more than happy to extend the deadline.

### Bonus points

Additional features and improvements on the basic requirements are welcome. A few ideas:

- There’s no design for a “no result” case for the search list. You may display something that you think fits the design language.
- Make the website responsive and suitable for mobile devices: Building responsive sites is a time-consuming task, so this is only a bonus feature, but it will go a long way towards proving your CSS skills if you are able to deliver a responsive implementation.
- Update the README file to explain the changes you made and the reasoning for them.
- Deploy this web app to a cloud-based server
- Add unit tests

# Setup

Now you are ready to get going! We have provided this repository as a starting point for your work. We believe that this will prevent wasted time configuring your environment and instead allow you to showcase your full-stack capabilities within an existing system. This project uses `docker compose` to run a React/Next.JS frontend, Express / Node API, and PostgreSQL database. Before starting, fork this repository and ensure you have up-to-date `docker` and `docker compose` installed.

To run the project locally, you can use a single command from the root of the project:

```bash
docker compose up
```

This may take a while on the first run as the `postgres` and `node` docker images are downloaded.

Once you see logs from the `postgres` service saying "database system is ready to accept connections", you will need to import the database schema and records:

```bash
docker compose exec postgres psql -U postgres -d photos -f /migration/migration.sql
```

This command will initialize your database with pre-populated `photo`, `collection`, and `photographer` tables.

## Running locally

After the initial setup above, you can run the local environment at any time with:

```bash
docker compose up
```

Both the `api` and `web` servers will automatically restart as you make code changes.

# Codebase structure

You will need to work within the `web` and `api` subdirectories of this repo.

### web

The `web` directory contains a template React/Next.JS frontend using [create-next-app](https://nextjs.org/docs/pages/api-reference/create-next-app) with TypeScript enabled. No changes have been made to the default setup, so see their documentation for how to go about making changes. Please note that we have used the Pages Router feature of Next.JS for this setup - make sure to view this version of the documentation. Once started, the web server is accessible from `http://localhost:3000`.

### api

The `api` directory has a boilerplate Express server written in TypeScript. The server is set up to get a Postgres connection and then listen at `http://localhost:8080`. We have provided an existing Postgres connection, but feel free switch to a different package for interacting with the database.

# Installing npm packages

You may install any packages that will help you on the front or back end. However, note that we may ask you about your dependency decisions in the follow-up interview, so be prepared to justify your choices.

To install packages, you **cannot** run `yarn` or `npm` commands directly. These commands must be run through docker while you have the containers running:

```bash
docker-compose exec api yarn add _______
```

or

```bash
docker-compose exec web yarn add _______
```
