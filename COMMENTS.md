# API

## Architecture

I choose **Model-View-Controller** as the architecture pattern for this project since it separates code responsabilities and helps with organization.
## Database
**MongoDB** was the chosen database since it's a NoSQL and there's no need to establish relationships between tables, all we need is a Lawsuits collection in order to store the data.
## Dependencies
I've decided to use **express** since it's a very lightweight backend framework and all that this API has to provide is a get route in order for the client side to render the lawsuits. Despite that, I've also created a post route if it's necessary to post a new lawsuit to the database.

I had to install **mongoose** to manage the connection with MongoDB.

**Nodemon** is being used as a dev dependecy since it helps with productivity.

The moment I started to make requests from the client side I got some cross-origin errors, which is the reason why I had to install **Cors** afterwards.

## Routes

There are three routes in this API. The first one returns all lawsuits, the second one return a lawsuit based on its court and CNJ identifier and the third one post a lawsuit to the API. 

Since all we need in the client side is to return a single lawsuit based on a search field put, patch and delete HTTP methods weren't implemented.
<br><br>
# Client

## Architecture

I've decided to use **TypeScript** as a React template for this project. Beyond the many other benefits of static typing, as we'll be making http requests to an API, TS will give us the benefit of using interfaces to the objects that will be rendered, avoiding unexpected behaviors.

## Dependencies
For making HTTP requests this project uses **Axios** over Fetch API, since it supports older browsers and helps with JSON data transformation, among many other benefits.

I'm also using **Sass** as a CSS pre-processor to increase productivity for styling components.

**CSS Reset** is being used in the index.scss file to avoid inconsistent stylization.

**CSS Modules** are also being used to avoid further conflicts between stylesheets.

To make the input where the user will type the CNJ identifier more user-friendly I've decided to use **InputMask** to mask the lawsuit number input.

## Styles
As this is a service that is related to a field known for being more "serious" I've decided to go with sober color palette (https://coolors.co/palette/0c101b-0d1f35-102a45-c2c2c2-eaeaeb-d39b22) and typographies (Montserrat and OpenSans).

I've also resorted to **media queries** to make the website responsive. **Mobile-first** is the responsivity approach used in this project.

## Utils
There are four files in the utils folder, inside the common folder. The **"_variables.scss"** file contains the styles variables that are used in this app.

**courtsList.ts** contains the list of all 27 state and federal district and territories courts. This file is used in the Home page to render the dropdown court list, but I've decided to put it in a separate file to avoid the pollution of the home page ts file.

**dateFormatter.ts** is a pipe to format the dates in brazilian date pattern.

**sortArrayByDate.ts** is a function that orders the array with the lawsuit occurrences in order to show the most recent occurrence to the older one in the SearchResult page.

## Tests

Both Home and SearchResult pages are being tested with **Jest**. The first one has a test that ensures that the button should only be enabled when the inputs are filled and also that it should be disabled when the inputs are empty.

In the SearchResult page the tests are ensuring that the page should exhibit the correct template whether there's a lawsuit to show or not. 

# Containerization
In order to avoid cross-platform compatibility and to facilitate the execution I've decided to containerize the application with **Docker** and **Docker Compose**. 






