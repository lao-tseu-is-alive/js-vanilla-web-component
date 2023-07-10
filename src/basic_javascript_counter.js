export function setupCounter(element, initialValue=0) {
  let counter = initialValue
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `counter is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(initialValue)
}
