
# Lawsuit Finder
This is a project that allows you to find a lawsuit based on its CNJ identifier and court.
<br><br>
## 🛠 Dependencies

Database:
- MongoDB Atlas
  
API:
- Express
- Mongoose
- Nodemon
- Cors
  
Client:
- React (with TypeScript)
- Axios
- Sass
- CSS Modules
- InputMask
<br><br>
## 🖥 Running the project 

```
# Clone the repository

$ git clone github.com/kaiocp/lawsuit-finder-challenge
```

To run the project Docker must be installed and running on your machine.

```
# Run the project

$ docker-compose up
```
## 👩‍💻 Try it out!
You can see all lawsuits that are on the database accessing http://localhost:8000/lawsuits. Next, open http://localhost:3000/

Get one of the lawsuits' cnj_number and court properties from the lawsuits route and put it on the respective fields of the client side.


