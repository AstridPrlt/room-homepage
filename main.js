class Main {

    constructor() {
        this.slider = [
            {
                "image": "images/desktop-image-hero-1.jpg",
                "title": "Discover innovative ways to decorate",
                "text": "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
                "link": 'Shop now<img src="images/icon-arrow.svg" alt="">'
            },
            {
                "image": "images/desktop-image-hero-2.jpg",
                "title": "We are available all across the globe",
                "text": "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
                "link": 'Shop now<img src="images/icon-arrow.svg" alt="">'
            },
            {
                "image": "images/desktop-image-hero-3.jpg",
                "title": "Manufactured with the best materials",
                "text": "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
                "link": 'Shop now<img src="images/icon-arrow.svg" alt="">'
            }
        ];

        this.currentSlide = 0;
        
        this.title = document.getElementById("title");
        this.text = document.getElementById("paragraph");
        this.link = document.getElementById("link");
        this.img = document.getElementById("heroImg");
        
        this.setSlider();
        
        document.getElementById("btnRight").addEventListener('click', () => {this.forward()});
        document.getElementById("btnLeft").addEventListener("click", () => {this.backward()});

        window.addEventListener("keydown", event => {
            switch(event.key) {
                case "ArrowLeft": this.backward(); break;
                case "ArrowRight": this.forward(); break;
           }
        }); //to go backward and forward on slider with keyboard
  

        this.isMenuOpened = false;

        document.getElementById('burgerButton').addEventListener("click", () => {
            this.isMenuOpened == false ? this.showMenu() : this.hideMenu()});
    }
    
        setSlider() {
            this.img.setAttribute("src", this.slider[this.currentSlide].image);
            this.title.innerHTML = this.slider[this.currentSlide].title;
            this.text.innerHTML = this.slider[this.currentSlide].text;
            this.link.innerHTML = this.slider[this.currentSlide].link;
        }
        
        forward() {
            this.currentSlide==2 ? (this.currentSlide = 0) : this.currentSlide++;
            this.setSlider();
        }
        backward() {
            this.currentSlide==0 ? (this.currentSlide = 2) : this.currentSlide--;
            this.setSlider();
        }

        showMenu() {
            this.isMenuOpened = true;
            document.getElementById('logo').style.display = 'none';
            document.getElementById('menuItems').style.display = 'flex';
            document.getElementById('menuItems').style.fontWeight = 'bold';
            document.getElementById('menu').style.backgroundColor = 'white';
            document.getElementById('layerForSmallScreen').style.display = 'initial';
            document.querySelectorAll('#menuItems li a').forEach(e => e.style.color = 'black');
            document.getElementById('burger').classList.add('open');
        }
        hideMenu() {
            this.isMenuOpened = false;
            document.getElementById('logo').style.display = 'initial';
            document.getElementById('menuItems').style.display = 'none';
            document.getElementById('menuItems').style.fontWeight = 'initial';
            document.getElementById('menu').style.backgroundColor = 'transparent';
            document.getElementById('layerForSmallScreen').style.display = 'none';
            document.querySelectorAll('#menuItems li a').forEach(e => e.style.color = 'white');
            document.getElementById('burger').classList.remove('open');
        }
        
    }

    let newMain = new Main();