let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputButton = document.getElementById("input-button");
const ulEl = document.getElementById("ul-el");

inputButton.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
      <li>
        <a target='_blank' href='${myLeads[i]}'>  
        ${myLeads[i]}
        </a>
      </li>`;
  }
  ulEl.innerHTML = listItems;
}
