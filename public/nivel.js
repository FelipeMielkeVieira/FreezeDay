let totalWidth = window.innerWidth * 0.98;
let totalHeight = window.innerHeight * 0.96;

let speed = 200;

kaboom({
    debug: true,
    font: "sinko",
    width: totalWidth,
    height: totalHeight,
    background: [255, 255, 255]
});

loadSprite("playerD", "/sprites/playerD.png");
loadSprite("redSlimeD", "/sprites/redSlimeD.png");

scene("nivel1", () => {
    
    const borderTop = add([
        "borderTop",
        rect(totalWidth, 10),
        color(0, 0, 0, 0),
        pos(0, 0),
        area(),
        solid(),
    ])

    const borderLeft = add([
        "borderLeft",
        rect(10, totalHeight),
        color(0, 0, 0, 0),
        pos(0, 0),
        area(),
        solid(),
    ])

    const borderBottom = add([
        "borderBottom",
        rect(totalWidth, 10),
        color(0, 0, 0, 0),
        pos(0, totalHeight - 10),
        area(),
        solid(),
    ])

    const borderRight = add([
        "borderRight",
        rect(10, totalHeight),
        color(0, 0, 0, 0),
        pos(totalWidth - 10, 0),
        area(),
        solid(),
    ])


    const redSlime = add([
        "redSlime",
        sprite("redSlimeD"),
        pos(totalWidth * 0.05, totalHeight * 0.05),
        area(),
        solid()
    ])

    const player = add([
        "player",
        sprite("playerD"),
        pos(totalWidth * 0.05, totalHeight * 0.85),
        area(),
        solid(),
        scale(1.5)
    ])

    onKeyDown("left", () => {
        player.move(-speed, 0);
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
    })

    onKeyDown("up", () => {
        player.move(0, -speed);
    })
    onKeyDown("w", () => {
        player.move(0, -speed);
    })

    onKeyDown("down", () => {
        player.move(0, speed);
    })
    onKeyDown("s", () => {
        player.move(0, speed);
    })

    player.onCollide("redSlime", () => {
        destroyAll("player");
    })

    player.onCollide("greenSlime", () => {
        destroyAll("player");
    })

    player.onCollide("blueSlime", () => {
        destroyAll("player");
    })

})

go("nivel1");