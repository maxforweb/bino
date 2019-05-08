 
function customize ( element ) {
    
    this.source = element;
    this.options = {};

    this.createOption = function( index ) {
        var ui = document.createElement( 'p' );
        ui.textContent = this.options[ index ].label;
        ui.value = index;
        ui.className = 'option';
        return ui;
    }

    this.createField = function() {
        var ui = document.createElement( 'button' );
        ui.className = 'select';
        ui.textContent = this.options[0].label;
        ui.addEventListener('click', this.activate);
        return ui;
    }

    this.activate = e => {
        
        for ( let i in this.options ) {
            var list = this.target.children[ 1 ].children[ i ];
            list.classList.toggle('active');
            list.addEventListener('click', this.copy);
        }
        
    }

    this.copy = e => {
        
        for ( let i in this.options ) {
            var list = this.target.children[1].children[ i ];
            list.classList.remove('active');
        }
        
        this.button.textContent = '';
        this.button.textContent = e.target.textContent;

    }

    this.build = function () {

        var ui,
            existed = this.source.previousElementSibling;
        
        if ( existed && existed.classList.contains( 'custom' ) ) {
            
            ui = existed;

        }
        else {
            ui=document.createElement( 'div' );
            ui.className = 'custom';
            ui.appendChild( this.createField() );
            ui.appendChild( document.createElement( 'div' ) );

            let container = ui.children[ 1 ];
            container.className = 'container'; 

            for ( let i in this.options )
                container.appendChild( this.createOption( i ) );
            
            this.target = this.source.parentNode.insertBefore( ui, this.source );
            
        }   
        this.button = this.target.firstElementChild;
    }

    for ( let i = 0; i < element.children.length; i++ ) {
        
        this.options[ i ] = {
            index: i,
            key: element.children[ i ].value,
            label: element.children[ i ].textContent
        }

    }

    this.build();
    this.source.classList.add( 'off' );
}


function sel() {
    var select = document.querySelectorAll("select");
    for ( let i = 0; i < select.length; i++ ) 
        new customize( select [ i ] );
        
}

sel();

// CUSTOM SELECT//
// BURGER MENU //

function burgerMenu (nav, burger) {

    this.nav = nav;
    this.burger = burger;
    
    this.event = function() { 
        
        this.burger.addEventListener( "click", this.open);
       
    }
    
    this.open = e => {
       this.burger.classList.toggle("rotate");
       this.nav.classList.toggle("menu_active");
    }

    this.event();
}


function getMenu() {
    var nav = document.getElementById("menu");
    var burger = document.getElementById("burger");

    burgerMenu (nav, burger);
}

getMenu();

// BURGER MENU //
// SLIDER //

var sliderBlock = document.getElementById( 'sliderContent' );
var slides = document.querySelectorAll( '#sliderButton > p' );

for ( var i = 0; i < slides.length; i++ ) {
    slides[ i ].addEventListener( 'click', function () {
        document.getElementsByClassName( 'activeSlide' )[ 0 ].classList.remove( 'activeSlide' );
        this.classList.add( 'activeSlide' );
        nowId = this.id.split( '-' )[ 1 ] - 1;
        nowPosition =  -100 * nowId;
        sliderBlock.style.left = nowPosition + '%';
    } );
}
