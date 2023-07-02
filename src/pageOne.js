function pageOne() {
    const review = {
        blurb:
            `"Hot Dog Heaven is the best in hot dog flavor! 
            I come by at least three times a week and I would actually come more, 
            but I must exhbit some kind of self-control! HOT DOG HEAVEN NUMBER ONE!"`,
        author: `-Spot`,
        pic: '/src/dog_quote.jpg'
    }

    const content = document.querySelector('.content');
    const container = document.createElement('div');
    container.classList.add('container')
    container.textContent = 'Hot Dog Heaven';
    content.appendChild(container)

    const description = document.createElement('div');
    description.classList.add('description')
    description.textContent = review.blurb
    content.appendChild(description)

    console.log(review.blurb)
    // const quoteContainer = document.createElement('div');
    // quoteContainer.classList.add('quoteContainer')
    // description.appendChild(quoteContainer)
    // const spot = document.createElement('div');
    // spot.classList.add('spot');
    // spot.textContent = `-Spot`
    // content.appendChild(description)
    // quoteContainer.appendChild(spot)

    // const img = document.createElement('img');
    // img.classList.add('spot-pic')
    // img.src = '/src/dog_quote.jpg'
    // img.height = 100;
    // img.width = 100;
    // quoteContainer.appendChild(img)

    


}

export default pageOne;