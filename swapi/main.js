const btn = document.querySelector('button')
const body = document.querySelector('body')

function btnClicked (event) {
    event.preventDefault();
    axios.get('https://swapi.dev/api/planets/?search=Alderaan').then((res)=> {
    //  console.log(res.data)
   

    for(let i = 0; i < res.data.results[0].residents.length; i++) {
        // console.log(res.data.results[0].residents[i])
        axios.get(res.data.results[0].residents[i]).then((res) => {
            let h2 = document.createElement('h2')
            h2.textContent = res.data.name
            body.appendChild(h2)
        })
    }
})
}

btn.addEventListener('click',btnClicked)

