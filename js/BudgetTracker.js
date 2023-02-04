export default class BudgetTracker{

constructor(querySelectorString)
{
this.root = document.querySelector(querySelectorString);
this.root.innerHTML = BudgetTracker.html();

this.root.querySelector(".new-entry").addEventListener("click",() => {
this.onNewEntryBtnClick();

});

//Load initial data from Local Storage
this.load();

}

static html()
{
  return `
  <table class="budget-tracker">
    <thead>
    <tr>
      <th>Date</th>
      <th>Description</th>
      <th>Type</th>
      <th>Amount</th>
    <th></th>
    </tr>
    </thead>

    <tbody class="entries"></tbody>

    <tfoot>
         <tr>
             <td colspan="5" class="summary">
                  <strong>Total: </strong>
                  <span class="total">0.0 Rs</span>

             </td>

         </tr>

    </tfoot>

</table>
  `

}

static entryHtml()
{



}

load()
{


}

updateSummary()
{


}

save()
{


}

addEntry(entry = {})
{


}

getEntryRows()
{


}

onNewEntryBtnClick()
{


}

onDeleteEntryBrnClick(e) {



}


}