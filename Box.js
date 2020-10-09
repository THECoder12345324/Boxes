class Box{
    constructor(x, y, w, h) {
        var box_options = {
            restitution: 0.8
        }
        
        this.body = Bodies.rectangle(x, y, w, h, box_options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }
    play(color) {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(color);
        rect(0, 0, this.width, this.height);
        pop();
    }
}