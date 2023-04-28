// Get references to the elements
const uploadPhotoButton = document.getElementById('upload-photo');
const uploadedImage = document.getElementById('uploaded-image');
const captionElement = document.getElementById("caption");
const spotifyElement = document.getElementById("spotify");
const titleElement = document.getElementById("title");
const canvasElement = document.getElementById("canvas");
const uploadPhotoLabel = document.querySelector('label[for="upload-photo"]');
const downloadElement = document.getElementById('download');

// <img id="uploaded-image" src="images/album.png" alt="Placeholder Image" class="img-fluid ">
const captions = [
  
  " I woke up like this",
 
 
];

let isFirstUpload = true;

// Add event listener for when file is uploaded
uploadPhotoButton.addEventListener('change', function() {
  const file = this.files[0];

  const reader = new FileReader();

  reader.addEventListener('load', async function() {
    var myCanvas = document.getElementById('canvas');
    var ctx = myCanvas.getContext('2d');
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

    // create new image element for fishbowl image
    const borderImg = new Image();
    borderImg.src = "images/border.png";
    uploadedImageNew.src = reader.result;
    // uploadedImageNew.onload = function() {
    //   ctx.drawImage(uploadedImageNew, 0, 0);
    //   borderImg.onload = function() {
    //     ctx.drawImage(borderImg, 0, 0);
    //   };
    // };

    uploadedImageNew.onload = function() {
      // Draw the border image

      // Draw the uploaded image centered within the border
      const imageSize = Math.min(canvas.width, canvas.height * 0.75);
      ctx.drawImage(
        uploadedImageNew,
        (canvas.width - imageSize) / 2,
        (canvas.height - imageSize * 0.75) / 2,
        imageSize,
        imageSize
      );

      // Add text above the uploaded image
      ctx.font = "bold 24px Arial";
      ctx.textAlign = "center";
      ctx.fillText(captions[randomIndex], canvas.width / 2, 60);
      borderImg.onload = function() {
        ctx.drawImage(borderImg,
          (canvas.width - imageSize) / 2,
          (canvas.height - imageSize * 0.75) / 2,
          imageSize,
          imageSize
          );
      };
    };


    const randomIndex = Math.floor(Math.random() * captions.length);

    // titleElement.textContent = "if i were a were a fish and you caught me you'd say" +  captions[randomIndex];

    // uploadedImage.src = borderImg.src;


    

    // uploadedImage.style.backgroundImage = `url('${uploadedImageNew.src}')`;

    // uploadedImage.style.backgroundSize = "cover";
    // uploadedImage.style.backgroundPosition = "center";


    // Increase font size on first upload
    if (isFirstUpload) {
      captionElement.classList.add("decreased");
      spotifyElement.classList.add("decreased");
      uploadPhotoLabel.textContent = "Retake Photo";
      canvasElement.classList.remove("unloader");
      downloadElement.classList.remove("unloader")
      // uploadedImage.classList.add("circle");
      isFirstUpload = false;
    }

       // revoke the object URL
    // uploadedImageNew.onload = function() {
    //   URL.revokeObjectURL(url);
    // };
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }

});

function downloadImage() {
      var link = document.createElement('a');
      link.download = 'fredagain.png';
      link.href = document.getElementById('canvas').toDataURL()
      link.click();
    }