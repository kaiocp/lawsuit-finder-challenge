# API

## Architecture:

I choose **Model-View-Controller** as the architecture pattern for this project since it separates code responsabilities and helps with organization.
## Database:
**MongoDB** was the chosen database since it's a NoSQL and there's no need to establish relationships between tables, all we need is a Lawsuits collection in order to store the data.
## Dependencies:
I've decided to use **express** since it's a very lightweight backend framework and all that this API has to provide is a get route in order for the client side to render the lawsuits.

I had to install **mongoose** to manage the connection with MongoDB.

**Nodemon** is being used as a dev dependecy since it helps with productivity.

## Routes

There are three routes in this API. The first one returns all lawsuits, the second one return a lawsuit based on its court and CNJ identifier and the third one post a lawsuit to the API. 

Since all we need in the client side is to return a single lawsuit based on a search field put, patch and delete HTTP methods weren't implemented.



