const imgAddr = document.querySelector('#img-source');
const textTop = document.querySelector('#text-1-source');
const textBottom = document.querySelector('#text-2-source');
const memeForm = document.querySelector('#meme-inputs');
const memeSection = document.querySelector('#memes-generated');


memeForm.addEventListener("submit", function(e) {
    e.preventDefault();

    if (imgAddr.value && (textBottom.value || textTop.value)) {
        const newMeme = addMeme(imgAddr.value, textTop.value, textBottom.value);
        memeSection.prepend(newMeme);

        imgAddr.value = "";
        textBottom.value = "";
        textTop.value = "";
    } else {
        alert("Please check that an image and at least 1 text box has been provided!");
    }
    
})


const addMeme = (imageAddr, textTop = "", textBottom = "") => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("meme-output");
    newDiv.style.backgroundImage = `url('${imageAddr}')`;

    if (textTop) {
        const divTextTop = document.createElement("p");
        divTextTop.innerText = (textTop);
        divTextTop.classList.add("meme-text");
        divTextTop.classList.add("text-1");
        newDiv.appendChild(divTextTop);
    }

    if (textBottom) {
        const divTextBottom = document.createElement("p");
        divTextBottom.innerText = (textBottom);
        divTextBottom.classList.add("meme-text");
        divTextBottom.classList.add("text-2");
        newDiv.appendChild(divTextBottom);
    }

    const deleteButton = document.createElement("input");
    deleteButton.value="X";
    deleteButton.classList.add("remove-meme");
    deleteButton.addEventListener("click", function(e) {
        if(e.target.tagName === 'INPUT') {
            e.target.parentElement.remove();
        }
    });

    newDiv.appendChild(deleteButton);

    return newDiv;
}


const addSampleMeme = (imgLink, textTop, textBottom) => {
    const newMeme = addMeme(imgLink, textTop, textBottom);
    memeSection.prepend(newMeme);
}

addSampleMeme("https://imgflip.com/s/meme/Roll-Safe-Think-About-It.jpg","NEVER MESS WITH AN OCTOPUS", "THEY'RE WELL ARMED");

addSampleMeme("https://imgflip.com/s/meme/X-All-The-Y.jpg", "PROCRASTINATORS UNITE", "TOMORROW");
