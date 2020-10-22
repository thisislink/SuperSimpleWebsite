let siteDetailsForm = document.getElementById("getSiteDetailsForm");

let siteTitleField = document.getElementById("getSiteTitleField");
let updateSiteTabTitle = document.getElementById("updateSiteTabTitle");

let nameField = document.getElementById("getNameField");
let updateHeader = document.getElementById("updateHeader");

let subtitleField = document.getElementById("getSubtitleField");
let updateSubtitle = document.getElementById("updateSubtitle");

let websiteLinkField = document.getElementById("getUserWebsite");
let updateWebsiteLink = document.getElementById("updateWebsiteLink");

siteDetailsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("updateSiteTabTitle").innerHTML = "";
    document.getElementById("updateHeader").innerHTML = "";
    document.getElementById("updateSubtitle").innerHTML = "";
    document.getElementById("updateWebsiteLink").innerHTML = "";
    getSiteTitle(siteTitleField.value);
    getNameValue(nameField.value);
    getSubtitleValue(subtitleField.value);
    getWebsiteLink(websiteLinkField.value);
})

function getWebsiteLink(enteredWebsiteLink) {
    enteredWebsiteLink = websiteLinkField.value;
    updateWebsiteLink.insertAdjacentHTML("beforeend", `${(enteredWebsiteLink)}`);
    updateWebsiteLink.setAttribute("href", `${(enteredWebsiteLink)}`);
    websiteLinkField.value = "";
    websiteLinkField.focus();
}

function getSiteTitle(enteredSiteTabTitle) {
    enteredSiteTabTitle = siteTitleField.value;
    updateSiteTabTitle.insertAdjacentHTML("beforeend", `${(enteredSiteTabTitle)}`);
    siteTitleField.value = "";
    siteTitleField.focus();
}

function getNameValue(enteredName) {
    enteredName = nameField.value;
    updateHeader.insertAdjacentHTML("beforeend", `${(enteredName)}`);
    nameField.value = "";
    nameField.focus();
}

function getSubtitleValue(enteredSubtitle) {
    enteredSubtitle = subtitleField.value;
    updateSubtitle.insertAdjacentHTML("beforeend", `${(enteredSubtitle)}`);
    subtitleField.value = "";
    subtitleField.focus();
}