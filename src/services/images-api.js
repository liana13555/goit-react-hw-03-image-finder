function fetchImage(name) {
  return fetch(`https://pixabay.com/api/?q=${name}&page=номер_страницы&key=22568340-3d930d703d1ad37110880a9ab&image_type=photo&orientation=horizontal&per_page=12
`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет фото с именем ${name}`));
  });
}

const api = {
  fetchImage,
};

export default api;
