// Get references to the elements
const uploadPhotoButton = document.getElementById('upload-photo');
const uploadedImage = document.getElementById('uploaded-image');
const captionElement = document.getElementById("caption");
const spotifyElement = document.getElementById("spotify");
const titleElement = document.getElementById("title");

const uploadPhotoLabel = document.querySelector('label[for="upload-photo"]');

const captions = [
  
  " I woke up like this",
 
 
];

let isFirstUpload = true;

// Add event listener for when file is uploaded
uploadPhotoButton.addEventListener('change', function() {
  const file = this.files[0];

  const reader = new FileReader();

  reader.addEventListener('load', async function() {

    let uploadedImageNew = new Image();

     // Convert HEIC format to JPEG
  // if (file && file.type === 'image/heic') {
  //   try {
  //     const jpegBlob = await window.heicConvert({
  //       blob: file,
  //       toType: "image/jpeg"
  //     });
  //     file = new File([jpegBlob], `${file.name.slice(0, -5)}.jpg`, {type: 'image/jpeg'});
  //   } catch (error) {
  //     console.error("HEIC conversion failed:", error);
  //     return;
  //   }
  // }

      // const url = URL.createObjectURL(file);

      // uploadedImageNew.src = url;


    // create new image element for uploaded image

    uploadedImageNew.src = reader.result;
    
    // create new image element for fishbowl image
    const borderImg = new Image();
    borderImg.src = "images/border.png";
    const randomIndex = Math.floor(Math.random() * captions.length);

    titleElement.textContent = "if i were a were a fish and you caught me you'd say" +  captions[randomIndex];

    uploadedImage.src = borderImg.src;


    

    uploadedImage.style.backgroundImage = `url('${uploadedImageNew.src}')`;

    uploadedImage.style.backgroundSize = "cover";
    uploadedImage.style.backgroundPosition = "center";


    // Increase font size on first upload
    if (isFirstUpload) {
      captionElement.classList.add("decreased");
      spotifyElement.classList.add("decreased");
      uploadPhotoLabel.textContent = "Retake Photo";
      uploadedImage.classList.add("circle");
      isFirstUpload = false;
    }

       // revoke the object URL
    uploadedImageNew.onload = function() {
      URL.revokeObjectURL(url);
    };
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }

});