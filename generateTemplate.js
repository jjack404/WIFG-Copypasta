import { templates } from './templates.js';
import { profilePictureUrls } from './profilePictures.js';

document.addEventListener("DOMContentLoaded", function () {
    const templateTitle = document.getElementById("templateTitle");
    const templateText = document.getElementById("templateText");
    const randomTemplateBtn = document.getElementById("randomTemplateBtn");
    const resultText = document.getElementById("resultText");
    const copyClipboardBtn = document.getElementById("copyClipboardBtn");
    const pfpImage = document.querySelector('.pfp'); // Ensure this is the correct selector for your image element

    function createInputField(placeholder) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = placeholder.replace(/[\[\]]/g, ''); // Remove the brackets for display
        input.classList.add("inputField");
        input.setAttribute('data-placeholder', placeholder); // Use the placeholder text for replacement
        input.addEventListener('input', updateResultText); // Update the textarea on input
        return input;
    }

    function updateResultText() {
        const templateString = templateText.getAttribute('data-template');
        const inputs = document.querySelectorAll('input.inputField');
        let filledTemplate = templateString;

        inputs.forEach(input => {
            const placeholder = input.getAttribute('data-placeholder');
            filledTemplate = filledTemplate.replace(placeholder, input.value || placeholder);
        });

        resultText.value = filledTemplate; // Display the updated text in the textarea
    }

    function parseTemplate(templateObj) {
        templateTitle.textContent = templateObj.title;
        templateText.setAttribute('data-template', templateObj.template);
        templateText.innerHTML = ''; // Clear the previous content

        const placeholderRegex = /\[.*?\]/g;
        let lastIndex = 0;
        let match;

        while ((match = placeholderRegex.exec(templateObj.template)) !== null) {
            const textNode = document.createTextNode(templateObj.template.substring(lastIndex, match.index));
            const inputField = createInputField(match[0]);

            templateText.appendChild(textNode);
            templateText.appendChild(inputField);
            lastIndex = placeholderRegex.lastIndex;
        }

        templateText.appendChild(document.createTextNode(templateObj.template.substring(lastIndex))); // Add the text after the last placeholder
        updateResultText(); // Set the initial value of the textarea
    }

    function loadRandomTemplate() {
        const randomIndex = Math.floor(Math.random() * templates.length);
        const selectedTemplateObj = templates[randomIndex];
        parseTemplate(selectedTemplateObj);

        // Randomize the profile picture
        const randomImageUrlIndex = Math.floor(Math.random() * profilePictureUrls.length);
        pfpImage.src = profilePictureUrls[randomImageUrlIndex];
    }

    randomTemplateBtn.addEventListener("click", loadRandomTemplate);

    copyClipboardBtn.addEventListener("click", function () {
        resultText.select();
        document.execCommand("copy");
        alert('Copied to clipboard!');
    });

    loadRandomTemplate(); // Load a random template and image on start
});
