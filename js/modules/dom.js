class Helpers extends Array{
    constructor(el) {
        super();
        if (el == document || el instanceof HTMLElement) {
            this.push(el);
        } else {
            let elements=document.querySelectorAll(el);
            for(let i=0;i<elements.length;i++){
                this.push(elements[i]);
            }
        }
    }

    ready(callback){
        this[0].addEventListener('readystatechange', e => {
            if(this[0].readyState === "complete"){
                callback();
                return true;
            }
          });
    }

    each(callback) {
        if (callback && typeof(callback) == 'function') {
            for (let i = 0; i < this.length; i++) {
                callback(this[i], i);
            }
            return this;
        } 
    }

    addClass(className) {
        this.each(function(el) {
            el.classList.add(className);
        })
        return this;
    }

    removeClass(className) {
        this.each(function(el) {
            el.classList.remove(className);
        })
        return this;
    }

    hasClass(className) {
        return this[0].classList.contains(className);
    }

    toggleClass(className) {
        this[0].classList.contains(className) ? this[0].classList.remove(className) : this[0].classList.add(className);
    }

    css(propertyObject) {
        this.each(function(el) {
            Object.assign(el.style,propertyObject);
        })
        return this;
    }

    html(data) {
        if (data) {
            this.each(function(el) {
                el.innerHTML = data;
            })
        } else {
            return this[0].innerHTML;
        }
        return this;
    }

    value(data) {
        if (data) {
            this.each(function(el) {
                el.value = data;
            })
        } else {
            return this[0].value;
        }
        return this;
    }
    
    append(data){
        this.each(function(el) {
            el.append(data);
        });
        return this;
    }

    prepend(data){
        let br = document.createElement('br');
        this.each(function(el) {
            el.prepend(br);
            el.prepend(data);
        });
        return this;
    }

    hide() {
        this.each(function(el) {
            el.style.display = "none";
        });
        return this;
    }

    show() {
        this.each(function(el) {
            el.style.display = "block";
        });
        return this;
    }

    on(event, child, callback = null, state = null) {
        if (callback != null) {
            let selector = child;
            this.each(function(element) {
                element.addEventListener(event, function(event) {
                    if (event.target.matches(selector + ', ' + selector + ' *')) {
                        callback.apply(event.target.closest(selector), arguments);
                    }
                }, false)
            })
        } else {
            callback = child;
            this.each(function(element) {
                if (state) {
                    element.addEventListener(event, callback, state);
                } else {
                    element.addEventListener(event, callback, false);
                }
            })
        }

        return this;
    }
}

function $(selector) {
    return new Helpers(selector);
}

export default $;