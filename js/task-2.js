const galleryList = document.querySelector(".gallery");
const images = [
  // ... (as provided in the task)
];

const createGalleryItem = (image) => {
  const listItem = document.createElement("li");
  const imageElement = document.createElement("img");
  imageElement.src = image.url;
  imageElement.alt = image.alt;
  listItem.appendChild(imageElement);
  return listItem;
};

const galleryItems = images.map(createGalleryItem);
galleryList.append(...galleryItems);