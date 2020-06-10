(function(){
    var afficherOnglet = function (a,animations) {
        if (animations === undefined) {
            animations = true
        }
        var li = a.parentNode
        var div = a.parentNode.parentNode.parentNode.parentNode
        var activeTab = div.querySelector('.tab-content.active')
        var aAfficher = div.querySelector(a.getAttribute('href'))
        
        if (li.classList.contains('active')) {
            return false
        }
        
        div.querySelector('.tabs .active').classList.remove('active')
        li.classList.add('active')

        
        if (animations) {
            activeTab.classList.add('fade')
            activeTab.classList.remove('in')
            var transitionend = function () {
                this.classList.remove('fade')
                this.classList.remove('active')
                aAfficher.classList.add('active')
                aAfficher.classList.add('fade')
                aAfficher.offsetWidth
                aAfficher.classList.add('in')
                activeTab.removeEventListener('transitionend', transitionend)
            }

            activeTab.addEventListener('transitionend', transitionend )
    } else {
            aAfficher.classList.add('active')
            activeTab.classList.remove('active')
        }
        
        if ((a.getAttribute('href') == '#cv')) {
            div.querySelector('#cvtabs').classList.add('active')
            div.querySelector('#lettretabs').classList.remove('active')
        } else {
            div.querySelector('#cvtabs').classList.remove('active')
            div.querySelector('#lettretabs').classList.add('active')
        }
        
    }

    



    var tabs = document.querySelectorAll('.tabs a')
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function(e) {
            afficherOnglet(this)
        })
    }

    var flotant = document.querySelectorAll('.flotant li')
    for (var i = 0; i < flotant.length; i++) {
        flotant[i].addEventListener('click', function(e) {
            curent = this.parentNode.parentNode.parentNode.querySelector('.tabs .active a').getAttribute('href')
            target = this.id
            if (target == 'cvtabs') {
                hashtarget = '#cv'
            } else (hashtarget = '#lettre')
            if (curent !== target ) {
            window.location.hash = hashtarget
            }
        })
    }


    var hashchange = function (e) {
        var hash = window.location.hash
        var a = document.querySelector('a[href="'+hash+ '"]') 
        if (a !== null && !a.classList.contains('active')) {
            afficherOnglet(a, e!== undefined)
        }
    }
    window.addEventListener('hashchange',hashchange)
    hashchange()


    var scrollY= function () {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }

    var element = document.querySelector('.flotant')
    var top = 110
    var onScroll = function() {
        var hasScrollClass = element.classList.contains('fixed')
        if (scrollY() > top && !hasScrollClass) {
        element.classList.add('fixed')
        element.classList.add('active')
        element.classList.add('fade2')
        element.offsetWidth
        element.classList.add('in2')
        } else if (scrollY() < top && hasScrollClass) {
        element.classList.remove('fixed')
        element.classList.remove('active')
        element.classList.remove('fade2')
        element.offsetWidth
        element.classList.remove('in2')
        }
    
    }

    window.addEventListener('scroll', onScroll)

})()
