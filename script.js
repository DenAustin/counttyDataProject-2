
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

    const showCountries = (arr) => {
    
            flexContainer.innerHTML = ''
      let content = ''
      for(const country of arr){
        let {name,capital,population,region,languages,flag} = country;
        flexContainer.innerHTML +=  `<div class="tagsWrap"><h3>Name:  ${name}</h3>
        <h4> Capital: ${capital}</h4><h4> Pop: ${population}</h4><h4> Lang.: ${languages}</h4><img class="image" src="${flag}"></img></div>`
                
      }
      //flexContainer.innerHTML = content
    }
    
    showCountries(countries)

    //Fuction to filter countries by sequential strings 
    const filterCountriesByStartLeter = (arr, term) => {
      const filteredCountries = arr.filter((country) =>  country.name.toLowerCase().startsWith(term.toLowerCase()))
      
      return filteredCountries
    }

    // Event listener for starting word button
    inputField.addEventListener('input', (event) => {
      let inputField = event.target.value;
      const filteredCountries = filterCountriesByStartLeter(countries, inputField)
      showCountries(filteredCountries)
    
    })
       //Filter by strng sequence
       const filterStatesByStrgSeq = (arr, term) => {
        const filteredReps = arr.filter((country) =>  country.name.toLowerCase().includes(term.toLowerCase()))
        return filteredReps
      }
  

    //Event listener for name button 
    nameBtn.addEventListener('click', (event) =>{
      
      if(inputField.value.length <= 0){
        let reverseArr = countries.reverse();
        showCountries(reverseArr)
    
      }else if(inputField.value.length >=1){
        let clue = inputField.value
        let revArr = countries.reverse()
        const filteredStates = filterStatesByStrgSeq(revArr, clue);
        showCountries(filteredStates)
      }
      
    });

    //Fuction to filter countries by sequential strings 
    const filterCapCityByStartLeter = (arr, term) => {
      const filteredCities = arr.filter((country) =>  country.capital.toLowerCase().startsWith(term.toLowerCase()))
      return filteredCities
    }

    //Filter by strng sequence
    const filterCitiesByStrgSeq = (arr, term) => {
      const sievedCities = arr.filter((country) =>  country.capital.toLowerCase().includes(term.toLowerCase()))
        
      return sievedCities
      }

    //Event listener for capitalBtn

    capitalBtn.addEventListener('click', (event) =>{
      
      if(inputField.value.length <= 0){
        alert("Enter key letter/s to search by capital city")
    
      }else if(inputField.value.length >=1){
        let termz = inputField.value
        let revArrayz = countries.reverse()
        const capCities = filterCitiesByStrgSeq(revArrayz, termz);
        showCountries(capCities)
        
      }
      
    });
    
