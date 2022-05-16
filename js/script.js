function pictureGenerator() {
  let image = document.createElement("img");
  let div = document.getElementById("generatedPictures");
  let id = Math.floor(Math.random() * 1000 + 1);
  image.src = `https://picsum.photos/id/${id}/200`;
  div.appendChild(image);
  console.log(id);
}
