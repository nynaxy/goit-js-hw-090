import Notiflix from 'notiflix';


const form = document.querySelector(".form")

function createPromise(position, delay) {
return new Promise((resolve, reject) => { 
  setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
  } else {
          reject(`Rejected promise ${position} in ${delay}ms`);
  }
    }, delay)
  })
    };

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);

  for (let i = 0; i < amount; i++) {
    const delayOfPromise = delay + i * step;
  
    createPromise(i+1, delayOfPromise)
      .then(message => Notiflix.Notify.success(message))
      .catch(message => Notiflix.Notify.failure(message))
    
  };
  form.reset();
})