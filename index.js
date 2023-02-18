let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputButton = document.getElementById("input-button");
const ulEl = document.getElementById("ul-el");
const deleteButton = document.getElementById("delete-button");
const saveTabButton = document.getElementById("saveTab-button");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

saveTabButton.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a target='_blank' href='${leads[i]}'>  
        ${leads[i]}
        </a>
      </li>`;
  }
  ulEl.innerHTML = listItems;
}

deleteButton.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputButton.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
  inputEl.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
