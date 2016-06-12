const buttonFunction = () => {
  const text = document.getElementById('id');
  text.addEventListener('click', () => {
    text.style.color = '#E0575B';
  });
};

module.exports = buttonFunction;
