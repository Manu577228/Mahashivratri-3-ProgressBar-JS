let i = 0;

const move = () => {
  if (i === 0) {
    i = 1;
    let element = document.getElementById("moveBar");
    let width = 2;

    const frame = () => {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        element.style.width = width + "%";
      }
    };

    let id = setInterval(frame, 100);
  }
};
