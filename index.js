var $tbody = document.querySelector("tbody");
var $stateInput = document.querySelector("#StateFormControl");
var $cityInput = document.querySelector("#CityFormControl")
var $dateInput = document.querySelector("#DateFormControl")
var $countryInput = document.querySelector("#CountryFormControl")
var $fileBtn = document.querySelector("#upload");





var $searchBtn = document.querySelector("#Filter");
var $removeBtn = document.querySelector("#Remove");


$removeBtn.addEventListener("click", function(){
  filteredAddresses = dataSet
  renderTable();
})


$fileBtn.addEventListener("fileselect", function(){
  var dataSet = document.getElementById('fileupload').files[0];
})

$searchBtn.addEventListener("click", handleSearchButtonClick);

var dataSet
var filteredAddresses = dataSet;

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredAddresses.length; i++) {
    var address = filteredAddresses[i];
    var fields = Object.keys(address);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

function handleSearchButtonClick() {
  
  var filterState = $stateInput.value.trim().toLowerCase();
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterDate = $dateInput.value.trim().toLowerCase();
  var filterCountry = $countryInput.value.trim().toLowerCase();

if (filterState != "" ){
  filteredAddresses = filteredAddresses.filter(function(address) {
    var addressState = address.state.toLowerCase();
    return addressState === filterState ;
  })
}
  
if (filterCity != "" ){
  filteredAddresses = filteredAddresses.filter(function(address) {
    var addressCity = address.city.toLowerCase();
    return addressCity === filterCity ;
  })
}

if (filterDate != "" ){
  filteredAddresses = filteredAddresses.filter(function(address) {
    var addressDate = address.datetime;
    return addressDate === filterDate ;
  })
}

if (filterCountry != "" ){
  filteredAddresses = filteredAddresses.filter(function(address) {
    var addressCountry = address.country.toLowerCase();
    return addressCountry === filterCountry;
  })
}
  ;
  renderTable();
}


renderTable();

$(document).ready(function() {
  $('#TheTable').DataTable();
} );