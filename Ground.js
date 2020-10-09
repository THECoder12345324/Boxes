class Ground{
    constructor(x, y, w, h) {
        var ground_options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, ground_options);
        this.width = w;
        this.height = h;
        World.add(world, this.body)
    }
    display(color) {
        var pos = this.body.position
        rectMode(CENTER);
        fill(color);
        rect(pos.x, pos.y, this.width, this.height);
    }
}