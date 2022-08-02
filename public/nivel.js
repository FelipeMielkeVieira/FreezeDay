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
        pos(totalWidth * 0.03, totalHeight * 0.05),
        area(),
        solid()
    ])

    const player = add([
        "player",
        sprite("playerD"),
        pos(totalWidth * 0.03, totalHeight * 0.85),
        area(),
        solid(),
        scale(1.5)
    ])

    //R1
    add([
        rect(totalWidth * 0.08, totalHeight * 0.15),
        pos(totalWidth * 0.11,  totalHeight - 10 - (totalHeight * 0.15)),
        outline(4),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R2
    add([
        rect(totalWidth * 0.185, totalHeight * 0.08),
        pos(0 + 10, totalHeight  * 0.65),
        outline(4),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R3
    add([
        rect(totalWidth * 0.125, totalHeight * 0.13),
        pos((10 + totalWidth * 0.185) * 0.35, totalHeight  * 0.43),
        outline(4),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R4
    add([
        rect(totalWidth * 0.185, totalHeight * 0.08),
        pos(0 + 10, totalHeight  * 0.35 - (totalHeight * 0.08)),
        outline(4),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R5
    add([
        rect(totalWidth * 0.14, totalHeight * 0.06),
        pos(totalWidth * 0.045 + 10, totalHeight  * 0.21 - (totalHeight * 0.08)),
        outline(4),
        area(),
        solid(),
        color(127, 200, 255)
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