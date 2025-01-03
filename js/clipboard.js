// Add the copy button and functionality to each <pre> block
document.querySelectorAll('pre').forEach(pre => {
  // Create the copy button
  const button = document.createElement('button');
  button.classList.add('copy-button');
  button.innerHTML = '<img src="images/copy.svg" alt="Copy">複製程式碼';

  // Append the button to the <pre> block
  pre.style.position = 'relative';
  button.style.position = 'absolute';
  button.style.top = '1px';
  button.style.right = '1px';
  button.style.border = 'none';
  button.style.background = 'transparent';
  button.style.backgroundColor = '#f0f0f0';
  button.style.cursor = 'pointer';

  // Add hover effect
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#f0f0f0';
  });

  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#b2b2b2';
  });

  pre.appendChild(button);

  // Copy functionality
  button.addEventListener('click', () => {
      button.innerHTML = '<img src="images/copy.svg" alt="Copy">';
    const textToCopy = pre.textContent;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        button.innerHTML = '<img src="images/check.svg" alt="Copied">已複製！';
        setTimeout(() => {
          button.innerHTML = '<img src="images/copy.svg" alt="Copy">複製程式碼 ';
        }, 800);
      });
    } else {
      const tempTextArea = document.createElement('textarea');
      tempTextArea.value = textToCopy;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand('copy');
      document.body.removeChild(tempTextArea);
      button.innerHTML = '<img src="check.svg" alt="Copied">已複製！';
      setTimeout(() => {
        button.innerHTML = '<img src="copy.svg" alt="Copy">複製程式碼';
      }, 800);
    }
  });
});
