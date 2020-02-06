
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
      const filteredCountries = arr.filter((country) =>  country.toLowerCase().startsWith(term.toLowerCase()))
      return filteredCountries
    }
    
    // function to filter nations by string segment
    const filterNationsByStrSequence = (arr, term) => {
      const filteredCountries = arr.filter((country) =>  country.toLowerCase().includes(term.toLowerCase()))
      return filteredCountries
    }
    
    const showCountries = (arr) => {
    
      flexContainer.innerHTML = ''
    
      let content = ''
      for(const country of arr){
        
        
            
          
        content +=  `<div><h3> Country: ${country.name && country.capital}</h3></div>`
          console.log(content)
        content.textCon
        
        
      }
    
      flexContainer.innerHTML = content
    
    }
    
    showCountries(countries)
    
    const filterCountries = (arr, term) => {
      const filteredCountries = arr.filter((country) =>  country.name.toLowerCase().includes(term.toLowerCase()))
      return filteredCountries
    }
    
    // Event listener for starting word button
    inputField.addEventListener('input', (event) => {
      let inputField = event.target.value;
      const filteredCountries = filterCountries(countries, inputField)
      showCountries(filteredCountries)
    
    })


  /*
  //General filter for one element at a time
  const filteredStatesStartLetter = (arr, term) => { 
      const filteredStates = arr.filter((state) => state.toLowerCase().startsWith
      (term.toLowerCase()))
      
      return filteredStates
  }



  // Function to create the display divs
  const displayStates = (arr) => {
      flexContainer.innerHTML = ''
      let content = ''
      for(const country of arr){
    
        content += `<div>
        <h1>${country.name}</h1>,
        
        </div>`
      }
      flexContainer.innerHTML = content  
    }
    
  displayStates(countries)

  // Event listener for starting word button
  inputField.addEventListener('input', (e) => {
      let inputField = e.target.value;
      const filteredStates = filteredStatesStartLetter(countries, inputField)
      displayStates(filteredStates);
    
    })


  */
    







