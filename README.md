
# Blog Website with CRUD operations

A full-featured blog website with CRUD (Create, Read, Update, Delete) operations built using React for the frontend and MySQL for the backend database.


## Technologies used

- **Frontend:** React, Axios
- **Backend:** Node.js, Express.js
- **Database:** MySQL


## Features

- User Authentication
- Create, Read, Update, and Delete blog posts
- Responsive design
- Comment system
- Categories and tags for posts

## CRUD operation

- **Create Operation:**
  - Users can fill out a form to create a new blog post. The form includes fields for the title, content, and tags. When the form is submitted, the data is sent to the backend using Axios, where the new post is stored in the MySQL database.
  
- **Read Operation:**
  - The main page of the blog displays a list of all blog posts. This data is fetched from the backend API. Each post in the list is clickable, leading to a detailed view of the post. The detailed view fetches the specific post data using the post ID.
  
- **Update Operation:**
  - Users can update an existing post by clicking an edit button on the post's detail page. This brings up a form pre-filled with the current post data. After making changes, users can submit the form, and the updated data is sent to the backend and updated in the database.
  
- **Delete Operation:**
  - Users can delete a post by clicking a delete button on the post's detail page. A confirmation prompt ensures the user wants to delete the post. Upon confirmation, the delete request is sent to the backend, and the post is removed from the database.
 
## Screenshots
<img width="932" alt="Screenshot 2024-03-10 130358" src="https://github.com/user-attachments/assets/9e1ed509-f1e3-4a2c-9838-fee873fdc914">
<img width="943" alt="Screenshot 2024-03-10 130428" src="https://github.com/user-attachments/assets/6967e9d9-5e14-4883-ba10-8bc0b836f027">
<img width="936" alt="Screenshot 2024-03-10 130208" src="https://github.com/user-attachments/assets/b5e9fbcd-8b04-4739-9d53-e24fb0a9c01b">
<img width="933" alt="Screenshot 2024-03-10 130306" src="https://github.com/user-attachments/assets/90cc7486-7740-4405-96e4-4ce267ecc0db">
<img width="938" alt="Screenshot 2024-03-10 130334" src="https://github.com/user-attachments/assets/6d0adfa8-db4c-476b-8d5f-f3acb5c36030">
