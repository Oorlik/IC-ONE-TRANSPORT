

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.elementAnimation' );


for (let elm of elements) {
  observer.observe(elm);
}

function showAlert(event) {
  event.preventDefault(); // Предотвращаем отправку формы
  alert("Successfully sent");
}
