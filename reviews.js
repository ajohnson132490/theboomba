function handleSubmit(event) {
  event.preventDefault();

  let form = event.target;
  let name = form.name.value;
  let review = form.review.value;

  let list = document.querySelector('#revs');
  list.innerHTML += `<li><strong>${name} says: </strong> ${review}</li>`;

  form.reset();
}

let form = document.querySelector('#submit-review');
form.addEventListener('submit', handleSubmit);
