function showLastUpdated(){

const lastModified = new Date(document.lastModified);
  const formattedDate = lastModified.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  document.getElementById("result").textContent = "Page last updated on: " + formattedDate;

}


function openImageModal(largeSrc){

    const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));
    document.getElementById("modalImage").src = largeSrc;
    imageModal.show();
}

//showLastUpdated();

window.addEventListener("load", showLastUpdated);