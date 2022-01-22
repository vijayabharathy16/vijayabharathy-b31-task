const getCountries = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v3.1/all');
    xhr.send();
    xhr.responseType = 'json';
    xhr.onload = ()=> {
        let data = xhr.response;


        //Country names
        let countryNames = data.map((country) => country.name.common);

        // country flags in png format
        let countryFlagsPng = data.filter((country) => country.flags && country.flags.png)
        .map((country) => country.flags.png);
        //console.log(countryFlagsPng);




        // lets loop
        for (var i = 0; i < data.length; i++) {
            let flagLinks = [
                name = `Country name = ${countryNames[i]}`,
                flag_png_link = `Flag png link = ${countryFlagsPng[i]}`,

            ]

            console.log(flagLinks);
        }
    }
}


getCountries(); 