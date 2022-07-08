const divHomePage = document.querySelector('.homePage');
divHomePage.addEventListener('click', async (event) => {
  const buttonClass = event.target.className;
  const apartID = event.target.closest('.card').dataset.id;
  if (buttonClass === 'editButton') {
    const response = await fetch(
      `/housing/edit/${apartID}`,
      {
        method: 'GET',
      },
    );
    const result = await response.text();
    console.log('🚀 ~ file: client.js ~ line 9 ~ divHomePage.addEventListener ~ result', result);
    divHomePage.insertAdjacentHTML('beforebegin', result);
  }
  if (buttonClass === 'delButton') {
    const response = await fetch(
      `/housing/del/${apartID}`,
      {
        method: 'GET',
      },
    );
    const result = await response.json();
    event.target.closest('.card').remove();
  }
});
