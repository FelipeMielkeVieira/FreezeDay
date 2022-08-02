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
loadSprite("redSlimeR", "/sprites/redSlimeR.png");
loadSprite("redSlimeU", "/sprites/redSlimeU.png");
loadSprite("redSlimeL", "/sprites/redSlimeL.png");

scene("nivel1", () => {

    const borderTop = add([
        "wall",
        rect(totalWidth, 10),
        color(0, 0, 0, 0),
        pos(0, 0),
        area(),
        solid(),
    ])

    const borderLeft = add([
        "wall",
        rect(10, totalHeight),
        color(0, 0, 0, 0),
        pos(0, 0),
        area(),
        solid(),
    ])

    const borderBottom = add([
        "wall",
        rect(totalWidth, 10),
        color(0, 0, 0, 0),
        pos(0, totalHeight - 10),
        area(),
        solid(),
    ])

    const borderRight = add([
        "wall",
        rect(10, totalHeight),
        color(0, 0, 0, 0),
        pos(totalWidth - 10, 0),
        area(),
        solid(),
    ])

    const player = add([
        "player",
        sprite("playerD"),
        pos(totalWidth * 0.03, totalHeight * 0.85),
        area(),
        solid(),
        scale(1.5)
    ])

    let redSlimeH = -100;
    let redSlimeV = 0;

    const redSlime = add([
        "redSlime",
        sprite("redSlimeR"),
        pos(totalWidth * 0.03, totalHeight * 0.05),
        area(),
        solid()
    ])

    onUpdate(() => {
        redSlime.move(redSlimeH, redSlimeV);
    })

    redSlime.onCollide("wall", () => {
        let numero = randi(0, 3);
        if(numero == 0) {
            if(redSlimeH == 0) {
                redSlimeH = 100;
                redSlimeV = 0;
            } else {
                redSlimeH = -redSlimeH;
            }
        } else {
            if(redSlimeV == 0) {
                redSlimeV = 100;
                redSlimeH = 0;
            } else {
                redSlimeV = 0;
            }
        }
    })

    //R1
    add([
        "wall",
        rect(totalWidth * 0.08, totalHeight * 0.15),
        pos(totalWidth * 0.11,  totalHeight - 10 - (totalHeight * 0.15)),
        outline(4),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R2
    add([
        "wall",
        rect(totalWidth * 0.185, totalHeight * 0.08),
        pos(0 + 10, totalHeight  * 0.65),
        outline(4),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R3
    add([
        "wall",
        rect(totalWidth * 0.125, totalHeight * 0.13),
        pos((10 + totalWidth * 0.185) * 0.35, totalHeight  * 0.43),
        outline(4),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R4
    add([
        "wall",
        rect(totalWidth * 0.185, totalHeight * 0.08),
        pos(0 + 10, totalHeight  * 0.35 - (totalHeight * 0.08)),
        outline(4),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R5
    add([
        "wall",
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