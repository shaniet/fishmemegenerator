// Get references to the elements
const uploadPhotoButton = document.getElementById('upload-photo');
const uploadedImage = document.getElementById('uploaded-image');
const captionElement = document.getElementById("caption");
const spotifyElement = document.getElementById("spotify");
const titleElement = document.getElementById("title");
const canvasElement = document.getElementById("canvas");
const uploadPhotoLabel = document.querySelector('label[for="upload-photo"]');
const downloadElement = document.getElementById('download');

const captions = [
"Looks like I found a catch of the day!", "I think I just landed a fish-tastic prize!", "Well, well, well...what do we have here?", "I'm the fish that got away...until now!", "I'm officially off the hook!", "You really scaled up with this one!", "Now that's what I call a fish story!", "I guess I'm the catch of the day!", "Looks like I'm taking the bait this time!", "Looks like I'm in deep water now!", "Are you sure you're not a cat? You're a great fisherman!", "You're really making a splash with this catch!", "I'm sure glad I'm not a mermaid!", "You know what they say...there are plenty of fish in the sea, but you caught the best one!", "Looks like you're the master baiter!", "I guess I'm a little fish in a big pond!", "I guess it's time for me to scale back.", "Well, looks like I'm a little hooked on you too!", "Looks like I'm fresh out of luck!", "I'm a fish, not a miracle worker!", "Looks like I'm your catch of the day...again!", "You're a real catch, and so am I!", "I'm floundering over here!", "You're really going fishing for compliments with this one!", "Looks like you're fishing for a good time, and you found it!", "You must have used some good bait to catch me!", "I'm the fish that got caught...or was it the other way around?", "Looks like I'm your lucky catch!", "Looks like I'm the fish that got fried!", "I guess I'm not as slippery as I thought!", "Looks like I'm the one who's hooked now!", "You're really making a splash with this catch of the day!", "You're really going overboard with this catch!", "Looks like I'm on the hook for a little while!", "Looks like I'm a little fish in a big fisherman's net!", "You really know how to reel 'em in!", "Looks like I'm the one who's all wet now!", "You're really making waves with this catch!", "Looks like I'm all out of bait!", "You're really fishing for compliments now, aren't you?", "Looks like you're the one who's hooked on me!", "I guess I'm the one who's in deep water now!", "Looks like I'm the one who's getting caught up in your net!", "You're really making a splash with this fish tale!", "Looks like I'm the one who's on the line now!", "I'm the one who's really fishing for a compliment now!", "Looks like you're the one who's swimming upstream now!", "I'm the one who's feeling a little fishy now!", "Looks like I'm the one who's caught up in your web!", "You're really making a splash with this big catch!", "Looks like I'm the one who's hooked on your fishing skills!", "I guess I'm the one who's all wet now!", "You're really making waves with this catch of the day!", "Looks like I'm the one who's on the line now!", "You're really fishing for compliments with this one!", "Looks like I'm the one who's all washed up!", "I'm the one who's really fishing for a good time now!", "Looks like I'm the one who's caught your eye!", "You're really making a splash with this fish tale!", "Looks like I'm the one who's in a net of trouble now!"
]



let isFirstUpload = true;

// Add event listener for when file is uploaded
uploadPhotoButton.addEventListener('change', function() {
  const file = this.files[0];

  const reader = new FileReader();

  reader.addEventListener('load', async function() {
    var myCanvas = document.getElementById('canvas');
    var ctx = myCanvas.getContext('2d');
    let uploadedImageNew = new Image();

    const borderImg = new Image();
    borderImg.src = "images/border.png";
    uploadedImageNew.src = reader.result;

    uploadedImageNew.onload = function() {

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
 
      ctx.fillText("if i were a fish and you caught me you'd say "+ captions[randomIndex], canvas.width / 2, 60);
      
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