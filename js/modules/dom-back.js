class DOM {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
    }

    each(callback) {
        this.elements.forEach((el, index) => {
            callback(el, index);
        });
        return this;
    }

    addClass(className) {
        this.each(el => el.classList.add(className));
        return this;
    }

    removeClass(className) {
        this.each(el => el.classList.remove(className));
        return this;
    }

    css(property, value) {
        this.each(el => el.style[property] = value);
        return this;
    }

    on(event, handler) {
        this.each(
            function (el) {
                el.addEventListener(event, handler);
                return this;
            });        
    }

    append(content) {
        if (content === undefined) {
            return this.elements[0].innerHTML;
        } else {
            this.each(el => el.innerHTML = el.innerHTML + content);
            return this;
        }
    }

    html(content) {
        if (content === undefined) {
            return this.elements[0].innerHTML;
        } else {
            this.each(el => el.innerHTML = content);
            return this;
        }
    }

    prepend(content) {
        if (content === undefined) {
            return this.elements[0].innerHTML;
        } else {
            this.each(el => el.innerHTML = content + el.innerHTML);
            return this;
        }
    }

    text(content) {
        if (content === undefined) {
            return this.elements[0].textContent;
        } else {
            this.each(el => el.textContent = content);
            return this;
        }
    }
}

function $(selector) {
    return new DOM(selector);
}

export default $;