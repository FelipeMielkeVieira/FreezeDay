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
loadSprite("playerR", "/sprites/playerR.png");
loadSprite("picoleAzul", "/sprites/picoleAzul.png");
loadSprite("picoleVermelho", "/sprites/picoleVermelho.png");
loadSprite("picoleVerde", "/sprites/picoleVerde.png");

loadSprite("agua", "/sprites/agua.png");

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

    let ultimoMov = "S"

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
        ultimoMov = "A"
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
        ultimoMov = "A"
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
        ultimoMov = "D"
        // player.use(sprite("playerR"))
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
        ultimoMov = "D"
    })

    onKeyDown("up", () => {
        player.move(0, -speed);
        ultimoMov = "W"
    })
    onKeyDown("w", () => {
        player.move(0, -speed);
        ultimoMov = "W"
    })

    onKeyDown("down", () => {
        player.move(0, speed);
        ultimoMov = "S"
    })
    onKeyDown("s", () => {
        player.move(0, speed);
        ultimoMov = "S"
    })

    let cooldownDash = false;
    
    onKeyPress("shift", () => {
        if (!cooldownDash) {
            if (ultimoMov == "S") {
                player.moveTo(player.pos.x, player.pos.y + (totalHeight * 0.225))
            }
            if (ultimoMov == "W") {
                player.moveTo(player.pos.x, player.pos.y - (totalHeight * 0.225));
            }
            if (ultimoMov == "D") {
                player.moveTo(player.pos.x + (totalWidth * 0.1), player.pos.y)
            }
            if (ultimoMov == "A") {
                player.moveTo(player.pos.x - (totalWidth * 0.1), player.pos.y)
            }
            cooldownDash = true;
            setTimeout(() => {
                cooldownDash = false;
            }, 3000);
        }
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

    //A1
    add([
        "agua",
        rect(totalWidth * 0.075 - 11, totalHeight * 0.15),
        pos(10, totalHeight * 0.1),
        color(0, 0, 255),
        solid(),
        area()
    ])

    //A2
    add([
        "agua",
        rect(totalWidth * 0.075 - 11, totalHeight * 0.15),
        pos(10, totalHeight * 0.35),
        color(0, 0, 255),
        solid(),
        area()
    ])

    //A3
    add([
        "agua",
        rect(totalWidth * 0.075 - 11, totalHeight * 0.15),
        pos(10, totalHeight * 0.6),
        color(0, 0, 255),
        solid(),
        area()
    ])

    //A4
    add([
        "agua",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.45, totalHeight * 0.1),
        color(0, 0, 255),
        solid(),
        area()
    ])

    //A5
    add([
        "agua",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.45, totalHeight * 0.35),
        color(0, 0, 255),
        solid(),
        area()
    ])

    //A6
    add([
        "agua",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.45, totalHeight * 0.6),
        color(0, 0, 255),
        solid(),
        area()
    ])

    //A7
    add([
        "agua",
        rect(totalWidth * 0.093, totalHeight * 0.15),
        pos(totalWidth * 0.9, totalHeight * 0.1),
        color(0, 0, 255),
        solid(),
        area()
    ])

    //A8
    add([
        "agua",
        rect(totalWidth * 0.093, totalHeight * 0.15),
        pos(totalWidth * 0.9, totalHeight * 0.35),
        color(0, 0, 255),
        solid(),
        area()
    ])

    //A9
    add([
        "agua",
        rect(totalWidth * 0.093, totalHeight * 0.15),
        pos(totalWidth * 0.9, totalHeight * 0.6),
        color(0, 0, 255),
        solid(),
        area()
    ])

    //A10
    add([
        "agua",
        rect(totalWidth * 0.375, totalHeight * 0.235),
        pos(totalWidth * 0.075, totalHeight * 0.75),
        color(0, 0, 255),
        solid(),
        area()
    ])

    //A11
    add([
        "agua",
        rect(totalWidth * 0.375, totalHeight * 0.235),
        pos(totalWidth * 0.525, totalHeight * 0.75),
        color(0, 0, 255),
        solid(),
        area()
    ])

    loop(4, () => {
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

    let picole1H = -100;
    loop(1, () => {
        if (picole1H == -100) {
            picole1H = 0;
        } else {
            picole1H = -100;
        }
    })

    let picole2H = 100;
    loop(1, () => {
        if (picole2H == 100) {
            picole2H = 0;
        } else {
            picole2H = 100;
        }
    })

    onUpdate("picole", (picole) => {
        picole.move(picole1H, 0)
    })

    onUpdate("picole2", (picole) => {
        picole.move(picole2H, 0)
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

    player.onCollide("picole2", () => {
        destroyAll("player");
        jogadorMorreu();
    })

})

if (localStorage.getItem("nivel") == "nivel4") {
    go("nivel4");
}