const url = 'https://picsum.photos/v2/list?page=2&limit=3';

fetch(url)
.then(res => res.json())
.then(data => {

    // console.log(data.map((e) => e.download_url))

    const slide1 = document.getElementById('slide1')
    const slide2 = document.getElementById('slide2')
    const slide3 = document.getElementById('slide3')

    slide1.innerHTML = `<img class="slide" src="${data[0].download_url}" alt="slide">`
    slide2.innerHTML = `<img class="slide" src="${data[1].download_url}" alt="slide">`
    slide3.innerHTML = `<img class="slide" src="${data[2].download_url}" alt="slide">`
})
.catch(err => console.log(`Error: ${err}`))
