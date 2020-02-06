
  // All the gets
  const headerContainer = document.querySelector(".header-container");
  const header = document.querySelector(".header");   
  const currentTotal = document.querySelector(".current-total");
  const resutlFlash = document.querySelector(".result-flash");
  const inputField = document.querySelector(".input-field");
  const buttons = document.querySelector(".buttons");
  const nameBtn = document.querySelector(".name")
  const capitalBtn = document.querySelector(".capital");
  const populationBtn = document.querySelector(".population");
  const graphBtn = document.getElementById("#chart");

  const flexContainer = document.querySelector(".countries-container")
  //const url = "https://restcountries.eu/rest/v2/all"
  //fetch(url)
      //.then(response => response.json())



  // function to filter nations by start letter
  const filterCountriesByStartingStr = (arr, term) => {
      const filteredCountries = arr.filter((country) =>  country.name.toLowerCase().startsWith(term.toLowerCase()))
      return filteredCountries
    }
    
    // function to filter nations by string segment
    const filterNationsByStrSequence = (arr, term) => {
      const filteredCountries = arr.filter((country) =>  country.name.toLowerCase().includes(term.toLowerCase()))
      return filteredCountries
    }
    
    const showCountries = (arr) => {
    
      flexContainer.innerHTML = ''
    
      let content = ''
      for(const country of arr){
            
        let {name,capital,population,region,languages,flag} = country;

        flexContainer.innerHTML +=  `<div><h3>Name:  ${name}</h3>
        <h4> Capital: ${capital}</h4><h4> Pop: ${population}</h4><h4> Lang.: ${languages}</h4></div>`
                
      }
      //flexContainer.innerHTML = content
    }
    
    showCountries(countries)
    
    const filterCountriesByInclude = (arr, term) => {
      const filteredCountries = arr.filter((country) =>  country.name.toLowerCase().includes(term.toLowerCase()))
      
      return filteredCountries
    }
    
    // Event listener for starting word button
    inputField.addEventListener('input', (event) => {
      let inputField = event.target.value;
      const filteredCountries = filterCountriesByInclude(countries, inputField)
      showCountries(filteredCountries)
    
    })


