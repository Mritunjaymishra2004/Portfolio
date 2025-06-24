

const menuToggler = document.querySelector('.menu-toggler');
const sideBar = document.querySelector('.side-bar');

const navItemLinks = document.querySelectorAll('.nav li a');
const pages = document.querySelectorAll('.page');

const filterBtn = document.querySelectorAll('.filter-item');
const itemCategory = document.querySelectorAll('.item-category');

/*Slidebar Toggle*/ 

menuToggler.addEventListener('click', function(){
    sideBar.classList.toggle('active');
})

/* Page Navigation Functionality */

for(let i = 0; i < navItemLinks.length; i++){
    navItemLinks[i].addEventListener('click', function(){

        const itemLinkText = this.textContent.toLowerCase();

        for(let i = 0; i < pages.length; i++){
            if(pages[i].classList.contains(itemLinkText)){
                pages[i].classList.add('active');
                navItemLinks[i].classList.add('active');
            }else{
                pages[i].classList.remove('active');
                navItemLinks[i].classList.remove('active');
            }
        }
    });
}

/* Adding eventlistener in filter buttons */

for(let i = 0; i < filterBtn.length; i++){
    filterBtn[i].addEventListener('click', function(){
        for(let i = 0; i < filterBtn.length; i++){
            filterBtn[i].classList.remove('active');
        }
        this.classList.add('active');

        for(let i = 0; i < itemCategory.length; i++){
            const itemCategoryText = itemCategory[i].textContent;
            switch(this.textContent){
                case itemCategoryText:
                    itemCategory[i].parentElement.classList.add('active');
                    break;
                case 'All':
                    itemCategory[i].parentElement.classList.add('active');
                    break;
                default:
                    itemCategory[i].parentElement.classList.remove('active');
            }
        }
    });
}




    // Project filter
    document.querySelectorAll('.filter-item').forEach(item => {
        item.addEventListener('click', () => {
            const filter = item.getAttribute('data-filter');
            document.querySelectorAll('.filter-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            document.querySelectorAll('.portfolio-item').forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || filter === category) {
                    card.classList.add('active');
                    card.style.display = "block";
                } else {
                    card.classList.remove('active');
                    card.style.display = "none";
                }
            });
        });
    });

    // Certificate Tabs
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => {
                content.style.display = content.getAttribute('data-tab') === tab ? 'block' : 'none';
                content.classList.toggle('active', content.getAttribute('data-tab') === tab);
            });
            button.classList.add('active');
        });
    });

