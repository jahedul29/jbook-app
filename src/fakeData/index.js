import posts from "./posts";
import comments from "./comments";
import people from "./people";

// Function to get photos from random users
function getPhotos() {
  let photos = [];
  for (let i = 0; i < people.length; i++) {
    const singlePeople = people[i];
    const photo = {};
    photo.userId = i;
    photo.large = singlePeople.picture.large;
    photo.medium = singlePeople.picture.medium;
    photo.thumbnail = singlePeople.picture.thumbnail;
    photos = [...photos, photo];
  }
  return photos;
}

// Getting the photos
const photos = getPhotos();

// function to include photo to posts
function getPostsWithPhoto() {
  let newPosts = [];
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    for (let j = 0; j < 11; j++) {
      const photo = photos[j];
      if (post.userId === photo.userId) {
        post.large = photo.large;
        post.medium = photo.medium;
        post.thumbnail = photo.thumbnail;
        break;
      }
    }
    newPosts = [...newPosts, post];
  }
  return newPosts;
}

// function to include photo with comments
function getCommentsWithPhoto() {
  let newComments = [];
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    comment.large = photos[500 - i].large;
    comment.medium = photos[500 - i].medium;
    comment.thumbnail = photos[500 - i].thumbnail;
    newComments = [...newComments, comment];
  }
  return newComments;
}

// Function to shuffle the posts
const shuffle = (a) => {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
};

// Getting the photo included posts and comments
const newPost = getPostsWithPhoto();
const newComments = getCommentsWithPhoto();

// Shuffling the posts
shuffle(newPost);

// Making a fakeData consisting of photo included posts and comments
const fakeData = { posts: newPost, comments: newComments };

export default fakeData;
