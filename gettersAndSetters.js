class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    //setters (mutator methods)
    set width(newWidth) {
        if (isNaN(newWidth)) {
            console.error("Width must be a number. Setting to 1");
            this._width = 1;
            return;
        }
        if (newWidth > 0) {
            this._width = newWidth;
        } else {
            console.error("Width must be > 0. Setting to 1");
            this._width = 1;
        }
    }
    set height(newHeight) {
        if (isNaN(newHeight)) {
            console.error("Height must be a number. Setting to 1");
            this._height = 1;
            return;
        }
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            console.error("Height must be > 0. Setting to 1");
            this._height = 1;
        }
    }

    //getters (accessor methods)
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    containBryan() {
        console.log(
            `Bryan is being contained in a ${this.width} x ${this.height} space`
        );
    }
}

const rectangle = new Rectangle(12, 14);
rectangle.containBryan();
