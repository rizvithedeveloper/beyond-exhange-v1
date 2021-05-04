/*--##### FOR HEADER #####--*/
$(document).ready(function(){
    let navHeight = $('header').outerHeight();

    // Apply PaddingTop to body according to navHeight
    $('body').css('padding-top', navHeight)
})

/*--##### CHANGE GAS FEE #####--*/
function changeGasFee(event){
    let gasFee = event.closest('.changeable-gasfee').querySelector('.gas-fee');
    // let selectButton = $('.gas-fee-modal .button');
    let selectButton = event.closest('.gas-fee-modal').querySelector('.button');
    let inputValue = event.value;

    // Change text according to inputValue
    gasFee.innerHTML = inputValue;

    // Remove Class Active Class of Selected Button
    selectButton.classList.remove('active')
}

/*--##### CHANGE THE GAS VALUE #####--*/
function changetheGasFeeValue(event){
    let selectButton = event.closest('.gas-fee-modal').querySelector('.button');
    let selectedBtnValue = event.value;
    let gasFee = event.closest('.changeable-gasfee').querySelector('.gas-fee');
    let customGasFeeInput = event.closest('.changeable-gasfee').querySelector('.custom-gasfee-input')

    // Remove Other Buttons active Class
    selectButton.classList.remove('active')

    // Add active class to clicked button
    event.classList += ' active';

    // Change text according to Selected Button Value
    gasFee.innerHTML = selectedBtnValue;

    // Empty Custom Gas Fee Input 
    customGasFeeInput.value = '';

    // Close Modal 
    $('.modal').modal('hide');
}

/*--##### TRANSFER CURRENCY TYPE CHANGED #####--*/
function transferCurrencyTypeChanged(currencyType){
    let transferableCurrencyType = $('#currencyType');

    transferableCurrencyType.html(currencyType);
}

/*--##### VIEW TRANSFERABLE BYN INPUT #####--*/
function viewTransferableBynInput(event){
    event.innerHTML = 'Transferable BYN being unlocked:'
    $('.transferable-byn-input').css('display', 'block');
}


/*--##### FILTER TABLE #####--*/
function filterTable(event, text) {
    let allFilterElement = event.offsetParent.getElementsByClassName('filterRow')
    let filterTextElement = event.offsetParent.getElementsByClassName(text);
    let filterButtons = event.offsetParent.getElementsByClassName('filter-btn');
    let clickedButton = event;
    
    for(let i = 0; i < allFilterElement.length; i++){

        // Remove Show Class from allFilterElement 
        allFilterElement[i].classList.remove('show');
        allFilterElement[i].classList.remove('active');

        // Text is equal to all add show class to all
        if(text == 'all'){
            allFilterElement[i].classList.add('show');
            allFilterElement[i].classList.add('active');
        }
    }

    for(let i = 0; i < filterTextElement.length; i++){
        // Add Show Class for filtered Tab
        filterTextElement[i].classList.add('show');
        filterTextElement[i].classList.add('active');
    }

    /*-- FOR FILTER BUTTONS --*/
    for(let i = 0; i < filterButtons.length; i++){
        filterButtons[i].classList.remove('active');
    }
    // Add active Class to selected Button 
    clickedButton.classList.add('active')
}

/*--##### CHANGE RANGE VALUES #####--*/
function changeRangeValue(event){
    let inputValue = event.value;
    let rangeSliderValueSpan = event.closest('.range-slider').querySelector('span');

    /* Change Value */
    rangeSliderValueSpan.innerHTML = inputValue;
}

/*--##### SEARCH BAR FOR TABLE #####--*/
function searchMarket(event){
    let searchValue = event.value.toLowerCase()
    let tableFirstData = event.closest('.search-market').querySelectorAll('.bootstrap-table tr.active > td:first-child');

        for(let i = 0; i < tableFirstData.length; i++){
            if(tableFirstData[i].innerText.substring(0, 5).toLowerCase().includes(searchValue)){
                tableFirstData[i].parentElement.classList.add('show')
            } else {
                tableFirstData[i].parentElement.classList.remove('show')
            }
        }
}

/*--##### Sortable Bootstrap Table  #####--*/
$('.table-row-filtered table').on('sort.bs.table', function(e,name,order){
    // Sort Started
    $('.table-row-filtered table').on('post-body.bs.table', function(event,params){
            // Sort Finished!
            let activeFilterBtnAttributeSplit1; let activeFilterBtnAttributeSplit2; let SplitedText; let filterButtonHasActive;
            let tableRow = event.target.closest('.table-row-filtered').querySelectorAll('tr.filterRow');
            let filterBtn = event.target.closest('.table-row-filtered').querySelectorAll('.filter-btn');

            filterButtonHasActive = false;
            for(let i = 0; i < filterBtn.length; i++){
                if(filterBtn[i].classList.contains('active')){
                    filterButtonHasActive = true;
                }
            }
            
            if(filterButtonHasActive){
                activeFilterBtnAttributeSplit1 = event.target.closest('.table-row-filtered').querySelectorAll('.filter-btn.active')[0].getAttribute("onclick").split(',');
                activeFilterBtnAttributeSplit2 = activeFilterBtnAttributeSplit1[1].split("'");
                SplitedText = activeFilterBtnAttributeSplit2[1];

                for(let i = 0; i < tableRow.length; i++){

                    // IF Filter Button has Class of Active
                    if(tableRow[i].classList.contains(SplitedText)){
                        tableRow[i].classList.add('show');
                    } else {
                        if(SplitedText == 'all'){
                            tableRow[i].classList.add('show');
                        }
                    }
                }

            } else {
                for(let i = 0; i < tableRow.length; i++){
                    tableRow[i].classList.add('show');
                }
            }
     });
});

