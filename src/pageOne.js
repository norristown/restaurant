class PageOne {
    constructor(className, divContent) {
        this.className = className;
        this.div = divContent;

        this.element = document.createElement('div');
        this.element.className = className;
        this.element.innerHTML = divContent;
    } 
}

const testClass = 'container'
const testContent = 'Hot Dog Heaven'
const blurbClass = 'description'
const blurbContent = `"Hot Dog Heaven is the best in hot dog flavor! 
    I come by at least three times a week and I would actually come more, 
    but I must exhbit some kind of self-control! HOT DOG HEAVEN NUMBER ONE!"`
const cuteHotDogSrc = `<img src="/src/cute_hotdog.jpg" class="hot-dog" alt="cute hot dog" width="200" height="200">`;
const cuteHotDogClassName = 'hot-dog'

const spotClass = 'spot'
const spotSrc = `-Spot<img src ="/src/dog_quote.jpg" alt="handsome dog" class="spot-pic">`

const title = new PageOne(testClass, testContent)
const blurb = new PageOne(blurbClass, blurbContent)
const img = new PageOne(cuteHotDogClassName, cuteHotDogSrc)
const dogImg = new PageOne(spotClass, spotSrc)

const content = document.querySelector('.content');

content.appendChild(img.element)
content.appendChild(title.element)
content.appendChild(blurb.element)
content.appendChild(dogImg.element)

export default PageOne;