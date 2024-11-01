var myHeaders = new Headers();
myHeaders.append("apikey", "RQr8msxjvVGu3hdUoSDkm0UE6ne14XPo");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/fixer/latest?symbols=ARS,BRL,EUR,USD&base=PYG", requestOptions)
.then(response => response.json())
.then(data => {
    let element = document.getElementById('elem2')
    element.innerHTML = `<p><b>Divisas:</b> <b>ARS:</b> ${data.rates.ARS} <b>BRL:</b> ${data.rates.BRL} <b>EUR:</b> ${data.rates.EUR} <b>USD:</b> ${data.rates.USD}</p>
    `;
    console.log(data)

})
.catch(err=>console.log(err))