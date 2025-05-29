function downloadVideo() {
    const link = document.getElementById("videoLink").value;
    const result = document.getElementById("result");
    if (link) {
        result.innerHTML = "Processing... Please wait!";
        // Tambahin logika download nanti (pake yt-dlp atau API gratis)
        setTimeout(() => {
            result.innerHTML = "Download ready! <a href='#' download>Click here</a>";
        }, 2000);
    } else {
        result.innerHTML = "Please enter a valid link!";
    }
}
