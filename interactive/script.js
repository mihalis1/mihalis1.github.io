const original = document.querySelector('.heart');
const heartnum = 20
const clone = original.cloneNode(true);
let heartable = true

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

window.scrollTo({
  top: 0,
});

for (let i = 0; i < heartnum; i++) {
  const newHeart = clone.cloneNode(true);
  newHeart.style.bottom = `-${getRandom(0, 20)}vh`;
  newHeart.style.left = `${(Math.random() * 100) - 5}vw`;
  newHeart.style.animationDuration = `${Math.random() * 2 + 3}s`;
  newHeart.style.transition = `transform ${getRandom(1000, 5000)}ms`;
  document.body.querySelector('#heartsdiv').appendChild(newHeart);
}

function heartAnimation() {
      if (heartable == false) return;
    console.log('Button clicked');
    heartable = false;
  const hearts = document.querySelectorAll('.heart');
  hearts.forEach(heart => {
    heart.classList.add('activeheart');
  });
  setTimeout(async () => {
    hearts.forEach(heart => {
        heart.style.transition = `0ms`;
        heart.classList.remove('activeheart');
        heartable = true
    });
  }, 3000);
  hearts.forEach(heart => {
    heart.style.transition = `transform ${getRandom(1000, 5000)}ms`;
  })
}

document.querySelector('#btn1').addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('#slide2').offsetTop,
    behavior: 'smooth'
  });
  heartAnimation();
});

let letteropened = true;
let closeopen = document.querySelector('.triangle-up');

document.querySelector('#wrapperletter').addEventListener('click', () => {
  if (letteropened){
    letteropened = false;
    heartAnimation()
    closeopen.classList.remove('active');
  }else {
    letteropened = true;
    closeopen.classList.add('active');
  }
})


function quiz() {
  let selected = null;
  const checkboxes = document.querySelectorAll('.checkbox');

  checkboxes.forEach(element => {
    element.addEventListener('click', () => {
      checkboxes.forEach(x => x.classList.remove('greencheckbox'));
      element.classList.add('greencheckbox');
      selected = element;
    });
  });

  document.querySelector('#questions button').addEventListener('click', () => {
    if (selected) {
      // Get the parent wrapper that includes both h3 and checkbox
      const parent = selected.parentElement;
      const answerText = parent.querySelector('h3')?.textContent.trim();

      console.log(answerText);

      if (answerText === 'more than inf x inf') {
        console.log('correct');
        document.querySelector('#questions button').innerHTML = 'Correct!'
      } else {
        console.log('incorrect');
        document.querySelector('#questions button').innerHTML = 'Incorrect, try again';
      }
    } else {
      console.log('No option selected');
    }
  });
}

quiz();