document.addEventListener('DOMContentLoaded', function() {
    const fetchTitleButton = document.getElementById('fetchTitleButton');
    const titleContainer = document.getElementById('titleContainer');
  
    fetchTitleButton.addEventListener('click', async () => {
        // get chrome apis // tab info 
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
     // console.log(tab);
      const tabTitle = tab.title;
      titleContainer.textContent = `Current Tab Title: ${tabTitle}`;
    });
  });
  