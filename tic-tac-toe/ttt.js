const cellElements = document.querySelectorAll([data - cell]);

cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

handleClick(e){
     
}