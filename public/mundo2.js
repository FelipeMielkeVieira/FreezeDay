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
loadSprite("picoleAzul", "/sprites/picoleAzul.png");
loadSprite("picoleVermelho", "/sprites/picoleVermelho.png");
loadSprite("picoleVerde", "/sprites/picoleVerde.png");

scene("nivel4", () => {

    layers([
        "1",
        "2",
        "3"
    ], "2")

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

    //R1
    add([
        "wall",
        rect(totalWidth * 0.375, totalHeight * 0.15),
        pos(totalWidth * 0.075, totalHeight * 0.1),
        solid(),
        area(),
        color(127, 200, 255),
        outline(2)
    ])

    //R2
    add([
        "wall",
        rect(totalWidth * 0.375, totalHeight * 0.15),
        pos(totalWidth * 0.525, totalHeight * 0.1),
        solid(),
        area(),
        color(127, 200, 255),
        outline(2)
    ])

    //R3
    add([
        "wall",
        rect(totalWidth * 0.375, totalHeight * 0.15),
        pos(totalWidth * 0.075, totalHeight * 0.35),
        solid(),
        area(),
        color(127, 200, 255),
        outline(2)
    ])

    //R4
    add([
        "wall",
        rect(totalWidth * 0.375, totalHeight * 0.15),
        pos(totalWidth * 0.525, totalHeight * 0.35),
        solid(),
        area(),
        color(127, 200, 255),
        outline(2)
    ])

    //R5
    add([
        "wall",
        rect(totalWidth * 0.375, totalHeight * 0.15),
        pos(totalWidth * 0.075, totalHeight * 0.6),
        solid(),
        area(),
        color(127, 200, 255),
        outline(2)
    ])

    //R6
    add([
        "wall",
        rect(totalWidth * 0.375, totalHeight * 0.15),
        pos(totalWidth * 0.525, totalHeight * 0.6),
        solid(),
        area(),
        color(127, 200, 255),
        outline(2)
    ])

    loop(2.5, () => {
        add([
            "picole",
            sprite("picoleAzul"),
            area(),
            solid(),
            scale(2),
            pos(totalWidth - 30, totalHeight * 0.04),
        ])
        add([
            "picole2",
            sprite("picoleVermelho"),
            area(),
            solid(),
            scale(2),
            pos(30, totalHeight * 0.28)
        ])
        add([
            "picole",
            sprite("picoleVerde"),
            area(),
            solid(),
            scale(2),
            pos(totalWidth - 30, totalHeight * 0.53)
        ])
    })

    onUpdate("picole", (picole) => {
        picole.move(-100, 0)
    })

    onUpdate("picole2", (picole) => {
        picole.move(100, 0)
    })

    onCollide("picole", "wall", (picole) => {
        destroy(picole)
    })

    onCollide("picole2", "wall", (picole) => {
        destroy(picole)
    })

    let botaoRefazer;

    function jogadorMorreu() {
        shake(70);
        add([
            text("Game Over!"),
            pos(totalWidth * 0.425, totalHeight * 0.36),
            scale(3),
            color(255, 0, 0),
            layer("3")
        ])
        botaoRefazer = add([
            "botaoRefazer",
            rect(100, 15),
            pos(totalWidth * 0.4, totalHeight * 0.42),
            scale(3),
            color(255, 255, 255),
            outline(1),
            area(),
            layer("3")
        ])
        add([
            text("Jogar Novamente"),
            pos(totalWidth * 0.425, totalHeight * 0.435),
            scale(2),
            layer("3")
        ])
    }

    onClick("botaoRefazer", () => {
        go("nivel4");
    })

    player.onCollide("picole", () => {
        destroyAll("player");
        jogadorMorreu();
    })

})

if(localStorage.getItem("nivel") == "nivel4") {
    go("nivel4");
}