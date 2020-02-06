
      countries => {
        for (const country of countries) {
            console.log(country)
            let {
                name,
                capital,
                population,
                region,
                languages,
                flag,
                topLevelDomain: domain
            } = country
            let div = document.createElement("div")
            let countryName = document.createElement("h2")
            let countryCapital = document.createElement("p")
            let countryPopulation = document.createElement("p")
            let countryflag = document.createElement("img")
            countryName.textContent = name
            countryCapital.textContent = capital
            countryPopulation.textContent = population
            countryflag.src = flag
            div.appendChild(countryName)
            div.appendChild(countryCapital)
            div.appendChild(countryPopulation)
            div.appendChild(countryflag)
            flexContainer.appendChild(div)
            //console.log(name, capital, population, region, languages, domain[0])
        }
    }
