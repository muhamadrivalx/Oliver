function downloadVideo() {
  const url = document.getElementById("urlInput").value;
  const result = document.getElementById("result");

  if (!url) {
    result.innerHTML = "<p style='color:red'>Masukkan URL dulu bro!</p>";
    return;
  }

  // Sementara tampilkan link dummy
  result.innerHTML = `
    <p>Ini link download dummy-nya:</p>
    <a href="${url}" target="_blank">${url}</a>
    <p><i>(Belum terhubung ke API asli)</i></p>
  `;
}
