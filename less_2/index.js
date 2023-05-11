const item = document.querySelector('.item');
const placeholdsers = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', (event) => {
  console.log('drag start');
  event.target.classList.add('hold');

  setTimeout(() => event.target.classList.add('hide'), 0);
});

item.addEventListener('dragend', (event) => {
  console.log('drag end');
  event.target.classList.remove('hold', 'hide');
});

for (const placeholder of placeholdsers) {
  placeholder.addEventListener('dragover', (event) => {
    event.preventDefault();
  });
  placeholder.addEventListener('dragenter', (event) => {
    event.target.classList.add('hovered');
  });
  placeholder.addEventListener('dragleave', (event) => {
    event.target.classList.remove('hovered');
  });
  placeholder.addEventListener('drop', (event) => {
    event.target.classList.remove('hovered');
    event.target.append(item);
  });
}