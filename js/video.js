var video;

// ÷Initialize the video element and turn off autoplay and turn off looping. //
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1");
	video.autoplay = false;
	console.log("Audioplay off")
	video.loop = false;
	console.log("Video loop off")

});
// Play the video and update the volume information. //
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");

document.querySelector("#volume").innerHTML = video.volume * 100 +"%";
	console.log("Volume level is " + video.volume * 100 + "%");
});

// Pause the video.
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
	});


// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video")
	console.log("Speed is " + video.playbackRate.toFixed(5));
	video.playbackRate *= 0.9;
});
// 0.9 because it is asking to slow down by 10%. So 1.0 - 0.1 = 0.9?//

// Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video")
	console.log("Speed is " + video.playbackRate.toFixed(5));
	video.playbackRate /= 0.9;
});

// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
		console.log("Start of video");
	}
	else {
		video.currentTime += 10; 
		console.log ("Skip ahead")
		console.log("Video current time is " + video.currentTime);}
	});

// Mute/unmute the video and update the text in the button.
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		this.innerHTML = "Mute";
		console.log("Unmuted Video");
	}
	else {
		video.muted = true;
		this.innerHTML = "Unmute";
		console.log("Muted Video");
	}
	});

// Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("input", function () {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
		console.log("Current volume level is " + video.volume * 100 + "%")
		});

// Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
	console.log("Apply Old School style");
		});

// Remove the  oldSchool class on the video element
document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
	console.log("Apply original video style");});








