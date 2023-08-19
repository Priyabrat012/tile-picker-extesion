const btn = document.querySelector(".changeColorBtn")

const colorGrid = document.querySelector('.colorGrid');

const colorValue = document.querySelector('.colorValue');

btn.addEventListener("click",async () => {
  let [tab] = await chrome.tabs.query({active: true,currentWindow: true})
  console.log(tab)
  chrome.scripting.executeScript({
    target: {tabId:tab.id},
    function: pickColor,
  }, async (injeectionResult) => {
        const [data] = injeectionResult;
        if(data.result){
            const color = data.result.sRGBHex;
            colorGrid.style.background =color
            colorValue.innerText = color
            await navigator.clipboard.writeText(color);
            
        }
  })
})

async function pickColor() {
   
try {
    const eyeDropper = new EyeDropper();
    return  await eyeDropper.open();
   

} catch (error) {
    console.error(error);
}


}