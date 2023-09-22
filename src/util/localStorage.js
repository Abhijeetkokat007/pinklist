export const saveListToLocalStorage = (tasks) => {
  localStorage.setItem('pinklist', JSON.stringify(tasks))
}
