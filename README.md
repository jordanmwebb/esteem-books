Esteem Books
======

https://lucid-lamport-b6d955.netlify.app

#### Library app that allows users to search and keep track of the books they love or want to read.

### Functionality
This app was built as a Single Page Application using **React** in order to render components quickly. The search functionality communicates with **Google Books API** to deliver a list of books associated with a user's search. Users can add books from a search result to their favorites and view the books they have saved on their favorites page. All book data saved by a user is stored in **Cloud Firestore** and pulled in order to render dynamic components to the page for each user. Authentication is handled through **Firebase Authentication**.

### Design
This application is meant to serve as a utility and so a minimalist design was implemented to provide the user with a very straightfoward experience. The login page, with its fun and vibrant background gradient, quickly guides users through the login journey. White space is largely used for the remaining pages in the site with brand colors applied in small splashes to draw the user's eye to different functions. The book cards returned from search results, or stored on the favorites page, provide ever-changing, dynamically rendered content that is the main attraction of the application.

### Tech Stack
* React
* React-Router
* Webpack
* Firebase | Cloud Firestore
* Google Books API
* Netlify

### Run Locally
* Run `git clone https://github.com/jordanmwebb/esteem-books.git`
* Run `npm install` to download dependencies
* Run `npm run start`
* You will be directed to a locally served version of the site where you can experiment