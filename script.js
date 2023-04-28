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
"looks like i found a catch of the day!", "i think i just landed a fish-tastic prize!", "well, well, well...what do we have here?", "i'm the fish that got away...until now!", "i'm officially off the hook!", "you really scaled up with this one!", "now that's what i call a fish story!", "i guess i'm the catch of the day!", "looks like i'm taking the bait this time!", "looks like i'm in deep water now!", "are you sure you're not a cat? you're a great fisherman!", "you're really making a splash with this catch!", "i'm sure glad i'm not a mermaid!", "you know what they say...there are plenty of fish in the sea, but you caught the best one!", "looks like you're the master baiter!", "i guess i'm a little fish in a big pond!", "i guess it's time for me to scale back.", "well, looks like i'm a little hooked on you too!", "looks like i'm fresh out of luck!", "i'm a fish, not a miracle worker!", "looks like i'm your catch of the day...again!", "you're a real catch, and so am i!", "i'm floundering over here!", "you're really going fishing for compliments with this one!", "looks like you're fishing for a good time, and you found it!", "you must have used some good bait to catch me!", "i'm the fish that got caught...or was it the other way around?", "looks like i'm your lucky catch!", "looks like i'm the fish that got fried!", "i guess i'm not as slippery as i thought!", "looks like i'm the one who's hooked now!", "you're really making a splash with this catch of the day!", "you're really going overboard with this catch!", "looks like i'm on the hook for a little while!", "looks like i'm a little fish in a big fisherman's net!", "you really know how to reel 'em in!", "looks like i'm the one who's all wet now!", "you're really making waves with this catch!", "looks like i'm all out of bait!", "you're really fishing for compliments now, aren't you?", "looks like you're the one who's hooked on me!", "i guess i'm the one who's in deep water now!", "looks like i'm the one who's getting caught up in your net!", "you're really making a splash with this fish tale!", "looks like i'm the one who's on the line now!", "i'm the one who's really fishing for a compliment now!", "looks like you're the one who's swimming upstream now!", "i'm the one who's feeling a little fishy now!", "looks like i'm the one who's caught up in your web!", "you're really making a splash with this big catch!", "looks like i'm the one who's hooked on your fishing skills!", "i guess i'm the one who's all wet now!", "you're really making waves with this catch of the day!", "looks like i'm the one who's on the line now!", "you're really fishing for compliments with this one!", "looks like i'm the one who's all washed up!", "i'm the one who's really fishing for a good time now!", "looks like i'm the one who's caught your eye!", "you're really making a splash with this fish tale!", "looks like i'm the one who's in a net of trouble now!"
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
 
      ctx.fillText("if i were a fish and you caught me you'd say ", canvas.width / 2, 60);
      ctx.fillText(captions[randomIndex], canvas.width / 2, 80);

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