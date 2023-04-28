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
"that's one fishy fish!",
"you reely caught me!",
"i'm a keeper for sure!",
"looks like you're a pro!",
"i'm quite a catch, eh?",
"you really hooked me!",
"well, well, well... fish you!",
"i'm the big one today!",
"you netted a winner!",
"that's a whopper catch!",
"i'm a fin-tastic catch!",
"you got me, hook, line and sinker!",
"i'm a slippery little devil!",
"looks like i'm on the menu tonight!",
"i guess i'm a goner now!",
"you caught me fair and square!",
"i'm your catch of the day!",
"you're a master angler!",
"i'm feeling a bit baited!",
"that's a fishin' miracle!",
"you're really casting a wide net!",
"i'm quite the catch, aren't i?",
"looks like you're a lucky fisherman!",
"i'm the one that got away... until now!",
"you caught me red-fin'd!",
"i'm the perfect catch for you!",
"you're quite the fish whisperer!",
"looks like i'm a star catch!",
"i'm all caught up in your net!",
"that's a reel-y impressive catch!",
"you must have used some good bait!",
"i'm quite the slippery fish!",
"looks like i'm your lucky catch!",
"i'm a fish out of water now!",
"you're a real catch, just like me!",
"looks like i'm all washed up!",
"you're really fishing for compliments!",
"i'm hooked on you now!",
"looks like i'm on the hook for a while!",
"you're making a splash with this catch!",
"i'm feeling a bit fishy now!",
"looks like you're fishing for trouble!",
"you're really reeling them in!",
"i'm a fish of many talents!",
"looks like i'm quite the surprise catch!",
"you're quite the fish catcher!",
"i'm the catch you've been waiting for!",
"looks like you're hooked on fishing!",
"you're really making waves with me!",
"i'm the fish that got caught... or did i?",
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
      ctx.font = "bold 23px' Messy Handwritten', sans-serif" ;
      ctx.textAlign = "center";
      const randomIndex = Math.floor(Math.random() * captions.length);

      ctx.fillText("if i were a fish and you caught me you'd say ", canvas.width / 2, 55);
      ctx.fillText(captions[randomIndex], canvas.width / 2, 95);

      borderImg.onload = function() {
        ctx.drawImage(borderImg,
          (canvas.width - imageSize) / 2,
          (canvas.height - imageSize * 0.75) / 2,
          imageSize,
          imageSize
          );
      };
    };

  



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
      link.download = 'corookmeme.png';
      link.href = document.getElementById('canvas').toDataURL()
      link.click();
    }