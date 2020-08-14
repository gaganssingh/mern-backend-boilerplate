## Boilerplate for a MERN Stack backend

### Instructions:
- Clone the repo: `git clone https://github.com/gaganssingh/mern-backend-boilerplate.git <app-name>`
- `cd` into the app folder
- Delete existing git repo and re-initialize:`rm -rf .git`
- Install all dependencies: `npm install`
- Rename `example.env` file to `.env`
- If connecting to cloud db: Add mongodb database uri to `DATABASE` field in the .env file
- If connecting to local db: Add mongodb database uri to `DATABASE_LOCAL` field in the .env file and change connection variable in server.js file
- Add password to `DATABASE_PASSWORD` field in the .env file

### Running the server:
- To use nodemon: `npm run dev`