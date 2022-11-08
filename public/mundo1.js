
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
loadSprite("playerL", "/sprites/playerL.png");
loadSprite("playerU", "/sprites/playerU.png");

loadSprite("redSlimeD", "/sprites/redSlimeD.png");
loadSprite("greenSlimeD", "/sprites/greenSlimeD.png");
loadSprite("blueSlimeD", "/sprites/blueSlimeD.png");

loadSprite("closedPortal", "/sprites/closedPortal.png");
loadSprite("openPortal", "/sprites/openPortal.png");

loadSprite("redCrystal", "/sprites/redCrystal.png");
loadSprite("greenCrystal", "/sprites/greenCrystal.png");
loadSprite("blueCrystal", "/sprites/blueCrystal.png");

loadSprite("queenSlime1", "/sprites/queenSlime.png");
loadSprite("queenSlime2", "/sprites/queenSlime2.png");
loadSprite("spike", "/sprites/spike.png");
loadSprite("halfSpike", "/sprites/halfSpike.png");

loadSprite("slimeBravo", "/sprites/slimeBravo.png");

loadSound("musica1", "/audio/audio1.mp3");
loadSound("musica2", "/audio/audio2.mp3");

let scoreSeg = 0;
let scoreMin = 0;
let timer1 = false;
let timer2 = false;
let timer3 = false;


async function backgroundFase() {
    let bgImage = await loadSprite("background", "https://st3.depositphotos.com/5479200/13537/i/600/depositphotos_135371314-stock-photo-cartoon-winter-landscape-with-ice.jpg");

    let background = add([
        sprite("background"),
        pos(width() / 2, height() / 2),
        origin("center"),
        scale(1),
        fixed(),
        layer("1")

    ]);

    background.scaleTo(Math.max(
        totalWidth / bgImage.tex.width,
        totalHeight / bgImage.tex.height
    ));
}

async function backgroundBoss() {
    let bgImageBoss = await loadSprite("backgroundBoss", "https://media.istockphoto.com/vectors/cartoon-winter-landscape-with-ice-snow-and-cloudy-sky-vector-vector-id613905532?k=20&m=613905532&s=170667a&w=0&h=6aCruDX9brh5WNFHt_mbMTt-SvBXjYeRjni3gQ6vtk8=");

    let background = add([
        sprite("backgroundBoss"),
        pos(width() / 2, height() / 2),
        origin("center"),
        scale(1),
        fixed(),
        layer("1")
    ]);

    background.scaleTo(Math.max(
        totalWidth / bgImageBoss.tex.width,
        totalHeight / bgImageBoss.tex.height
    ));
}

scene("tutorial", () => {

    let parteTutorial = 1;

    const legenda = add([
        "legenda",
        rect(totalWidth, totalHeight * 0.2),
        pos(0, 0),
        color(0, 0, 255)
    ])

    let textLegenda = add([
        pos(totalWidth * 0.1, totalHeight * 0.05),
        text("Bem Vindo(a) a FreezeDay"),
        scale(2)
    ])

    let botao = add([
        "botao",
        pos(totalWidth * 0.875, totalHeight * 0.125),
        rect(totalWidth * 0.1, totalHeight * 0.05),
        color(0,0,0,0),
        area()
    ])

    let textoBotao = add([
        pos(totalWidth * 0.885, totalHeight * 0.145),
        text("Continuar"),
        scale(1.5),
    ])

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
        if(!inimigo) {
            player.move(-speed, 0);
            player.use(sprite("playerL"));
        }
    })
    onKeyDown("a", () => {
        if(!inimigo) {
            player.move(-speed, 0);
            player.use(sprite("playerL"));
        }
    })

    onKeyDown("right", () => {
        if(!inimigo) {
            player.move(speed, 0);
            player.use(sprite("playerR"));
        }
    })
    onKeyDown("d", () => {
        if(!inimigo) {
            player.move(speed, 0);
            player.use(sprite("playerR"));
        }
    })

    onKeyDown("up", () => {
        if(!inimigo) {
            player.move(0, -speed);
            player.use(sprite("playerU"));
        }
    })
    onKeyDown("w", () => {
        if(!inimigo) {
            player.move(0, -speed);
            player.use(sprite("playerU"));
        }
    })

    onKeyDown("down", () => {
        if(!inimigo) {
            player.move(0, speed);
            player.use(sprite("playerD"));
        }
    })
    onKeyDown("s", () => {
        if(!inimigo) {
            player.move(0, speed);
            player.use(sprite("playerD"));
        }
    })

    let crystal = false;
    let inimigo = false;

    onClick("botao", () => {
        if(parteTutorial == 1) {
            textLegenda.text = "Use as teclas WASD (Ou as Setas) para mover o jogador";
        }
        if(parteTutorial == 2) {
            textLegenda.text = "Colete todos os cristais para abrir o portal e fugir do gelo\n\nQuanto menor seu tempo, mais pontos!";
            add([
                "crystal",
                sprite("greenCrystal"),
                pos(totalWidth * 0.45, totalHeight * 0.5),
                area(),
            ])
        }
        if(parteTutorial == 3) {
            if(crystal == true) {
                textLegenda.text = "Tenha muito cuidado ao se deparar com os inimigos"
                inimigo = true;
                const slime = add([
                    "slime",
                    sprite("redSlimeD"),
                    pos(totalWidth * 0.8, player.pos.y),
                    area(),
                    solid(),
                    scale(1.5),
                    move(0, -300)
                ])
            } else {
                parteTutorial--;
            }
        }
        if(parteTutorial == 4) {
            inimigo = false;
            destroyAll("slime")
            textLegenda.text = "Salve o mundo do gelo!\n\nE lembre-se: Os slimes devem estar vindo de algum lugar!"
        }
        if(parteTutorial == 5) {
            localStorage.setItem("nivel", "nivel1")
            go("nivel1");
        }
        parteTutorial++;
    })

    player.onCollide("crystal", () => {
        destroyAll("crystal");
        crystal = true;
    })

    player.onCollide("slime", () => {
        destroyAll("player");
        shake(70)
    })
})

scene("nivel1", () => {

    let morto = false;

    let music = play("musica1", {
        volume: 0.2,
        loop: true
    })
    
    music.play()

    layers([
        "1",
        "2",
        "3"
    ], "2")

    backgroundFase();

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

    const portal = add([
        "portal",
        sprite("closedPortal"),
        pos(totalWidth * 0.92, totalHeight * 0.05),
        area(),
        scale(2)
    ])

    const redCrystal = add([
        "redCrystal",
        sprite("redCrystal"),
        pos(totalWidth * 0.95, totalHeight * 0.80),
        area()
    ])

    const blueCrystal = add([
        "blueCrystal",
        sprite("blueCrystal"),
        pos(totalWidth * 0.85, totalHeight * 0.05),
        area()
    ])

    const greenCrystal = add([
        "greenCrystal",
        sprite("greenCrystal"),
        pos(totalWidth * 0.10, totalHeight * 0.05),
        area()
    ])

    let redSlimeH = -400;
    let redSlimeV = 0;

    let redSlime2H = -400;
    let redSlime2V = 0;

    let greenSlimeH = -200;
    let greenSlimeV = 0;

    let greenSlime2H = -200;
    let greenSlime2V = 0;

    let blueSlimeH = -300;
    let blueSlimeV = 0;

    let blueSlime2H = -300;
    let blueSlime2V = 0;

    const redSlime = add([
        "redSlime",
        "wall",
        sprite("redSlimeD"),
        pos(totalWidth * 0.03, totalHeight * 0.05),
        area(),
        solid(),
        scale(1.5)
    ])

    const redSlime2 = add([
        "redSlime",
        "wall",
        sprite("redSlimeD"),
        pos(totalWidth * 0.1, totalHeight * 0.05),
        area(),
        solid(),
        scale(1.5)
    ])

    const greenSlime = add([
        "greenSlime",
        "wall",
        sprite("greenSlimeD"),
        pos(totalWidth * 0.95, totalHeight * 0.05),
        area(),
        solid(),
        scale(1.5)
    ])

    const greenSlime2 = add([
        "greenSlime",
        "wall",
        sprite("greenSlimeD"),
        pos(totalWidth * 0.95, totalHeight * 0.05),
        area(),
        solid(),
        scale(1.5)
    ])

    const blueSlime = add([
        "blueSlime",
        "wall",
        sprite("blueSlimeD"),
        pos(totalWidth * 0.95, totalHeight * 0.90),
        area(),
        solid(),
        scale(1.5)
    ])

    const blueSlime2 = add([
        "blueSlime",
        "wall",
        sprite("blueSlimeD"),
        pos(totalWidth * 0.95, totalHeight * 0.90),
        area(),
        solid(),
        scale(1.5)
    ])

    redSlime.onCollide("wall", () => {
        let numero = randi(0, 4);
        if (numero == 0) {
            if (redSlimeV != 400) {
                redSlimeH = 0;
                redSlimeV = -400;
            }
        }
        if (numero == 1) {
            if (redSlimeH != -400) {
                redSlimeH = 400;
                redSlimeV = 0;
            }
        }
        if (numero == 2) {
            if (redSlimeV != -400) {
                redSlimeH = 0;
                redSlimeV = 400;
            }
        }
        if (numero == 3) {
            if (redSlimeH != 400) {
                redSlimeH = -400;
                redSlimeV = 0;
            }
        }
    })

    redSlime2.onCollide("wall", () => {
        let numero = randi(0, 4);
        if (numero == 0) {
            if (redSlime2V != 400) {
                redSlime2H = 0;
                redSlime2V = -400;
            }
        }
        if (numero == 1) {
            if (redSlime2H != -400) {
                redSlime2H = 400;
                redSlime2V = 0;
            }
        }
        if (numero == 2) {
            if (redSlime2V != -400) {
                redSlime2H = 0;
                redSlime2V = 400;
            }
        }
        if (numero == 3) {
            if (redSlime2H != 400) {
                redSlime2H = -400;
                redSlime2V = 0;
            }
        }
    })

    greenSlime.onCollide("wall", () => {
        let numero = randi(0, 4);
        if (numero == 0) {
            if (greenSlimeV != 200) {
                greenSlimeH = 0;
                greenSlimeV = -200;
            }
        }
        if (numero == 1) {
            if (greenSlimeH != -200) {
                greenSlimeH = 200;
                greenSlimeV = 0;
            }
        }
        if (numero == 2) {
            if (greenSlimeV != -200) {
                greenSlimeH = 0;
                greenSlimeV = 200;
            }
        }
        if (numero == 3) {
            if (greenSlimeH != 200) {
                greenSlimeH = -200;
                greenSlimeV = 0;
            }
        }
    })

    greenSlime2.onCollide("wall", () => {
        let numero = randi(0, 4);
        if (numero == 0) {
            if (greenSlime2V != 200) {
                greenSlime2H = 0;
                greenSlime2V = -200;
            }
        }
        if (numero == 1) {
            if (greenSlime2H != -200) {
                greenSlime2H = 200;
                greenSlime2V = 0;
            }
        }
        if (numero == 2) {
            if (greenSlime2V != -200) {
                greenSlime2H = 0;
                greenSlime2V = 200;
            }
        }
        if (numero == 3) {
            if (greenSlime2H != 200) {
                greenSlime2H = -200;
                greenSlime2V = 0;
            }
        }
    })

    blueSlime.onCollide("wall", () => {
        let numero = randi(0, 4);
        if (numero == 0) {
            if (blueSlimeV != 300) {
                blueSlimeH = 0;
                blueSlimeV = -300;
            }
        }
        if (numero == 1) {
            if (blueSlimeH != -300) {
                blueSlimeH = 300;
                blueSlimeV = 0;
            }
        }
        if (numero == 2) {
            if (blueSlimeV != -300) {
                blueSlimeH = 0;
                blueSlimeV = 300;
            }
        }
        if (numero == 3) {
            if (blueSlimeH != 300) {
                blueSlimeH = -300;
                blueSlimeV = 0;
            }
        }
    })

    blueSlime2.onCollide("wall", () => {
        let numero = randi(0, 4);
        if (numero == 0) {
            if (blueSlime2V != 300) {
                blueSlime2H = 0;
                blueSlime2V = -300;
            }
        }
        if (numero == 1) {
            if (blueSlime2H != -300) {
                blueSlime2H = 300;
                blueSlime2V = 0;
            }
        }
        if (numero == 2) {
            if (blueSlime2V != -300) {
                blueSlime2H = 0;
                blueSlime2V = 300;
            }
        }
        if (numero == 3) {
            if (blueSlime2H != 300) {
                blueSlime2H = -300;
                blueSlime2V = 0;
            }
        }
    })

    //R1
    add([
        "wall",
        rect(totalWidth * 0.1, totalHeight * 0.06),
        pos(totalWidth * 0.165 - (totalWidth * 0.08) + 10, totalHeight * 0.835),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R2
    add([
        "wall",
        rect(totalWidth * 0.185, totalHeight * 0.08),
        pos(10, totalHeight * 0.65),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R3
    add([
        "wall",
        rect(totalWidth * 0.125, totalHeight * 0.11),
        pos((10 + totalWidth * 0.185) * 0.35, totalHeight * 0.445),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R4
    add([
        "wall",
        rect(totalWidth * 0.185, totalHeight * 0.08),
        pos(10, totalHeight * 0.35 - (totalHeight * 0.08)),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R5
    add([
        "wall",
        rect(totalWidth * 0.14, totalHeight * 0.06),
        pos(totalWidth * 0.045 + 10, totalHeight * 0.19 - (totalHeight * 0.08)),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R61
    add([
        "wall",
        rect(totalWidth * 0.1, totalHeight * 0.06),
        pos(totalWidth * 0.25, totalHeight * 0.835),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R62
    add([
        "wall",
        rect(totalWidth * 0.05, totalHeight * 0.45),
        pos(totalWidth * 0.25 + totalWidth * 0.1, totalHeight * 0.445),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R7
    add([
        "wall",
        rect(totalWidth * 0.05, totalHeight * 0.08),
        pos(totalWidth * 0.25, totalHeight * 0.65),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R8
    add([
        "wall",
        rect(totalWidth * 0.05, totalHeight * 0.105),
        pos(totalWidth * 0.25, totalHeight * 0.445),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R9
    add([
        "wall",
        rect(totalWidth * 0.05, totalHeight * 0.35 - (totalHeight * 0.08) + totalHeight * 0.08 - (totalHeight * 0.19 - (totalHeight * 0.08))),
        pos(totalWidth * 0.25, totalHeight * 0.19 - (totalHeight * 0.08)),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R11
    add([
        "wall",
        rect(totalWidth * 0.05, totalHeight * 0.35 - (totalHeight * 0.08) + totalHeight * 0.08 - 10),
        pos(totalWidth * 0.25 + totalWidth * 0.1, 10),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R12
    add([
        "wall",
        rect((totalWidth * 0.25) / 5, totalHeight * 0.345),
        pos(totalWidth * 0.45, totalHeight * 0.1),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R13
    add([
        "wall",
        rect(totalWidth * 0.25, totalHeight * 0.08),
        pos(totalWidth * 0.45, totalHeight * 0.55),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R14
    add([
        "wall",
        rect(totalWidth * 0.1, totalHeight - totalHeight * 0.73 - 10),
        pos(totalWidth * 0.45, totalHeight * 0.73),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R15
    add([
        "wall",
        rect(totalWidth * 0.2, totalHeight * 0.165),
        pos(totalWidth * 0.6, totalHeight * 0.73),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R16
    add([
        "wall",

        rect(totalWidth * 0.05, totalHeight * 0.185),
        pos(totalWidth * 0.75, totalHeight * 0.445),

        rect(totalWidth * 0.05, totalHeight * 0.185),
        pos(totalWidth * 0.75, totalHeight * 0.445),

        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R17
    add([
        "wall",
        rect((totalWidth * 0.25) / 5, totalHeight * 0.345 / 3),
        pos(totalWidth * 0.70 - ((totalWidth * 0.25) / 5), totalHeight * 0.445 - (totalHeight * 0.345 / 3)),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R18
    add([
        "wall",
        rect((totalWidth * 0.25) / 5, totalHeight * 0.43 / 3),
        pos(totalWidth * 0.70 - ((totalWidth * 0.25) / 5), totalHeight * 0.1),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R19
    add([
        "wall",
        rect(totalWidth * 0.05, totalHeight * 0.345 - (totalHeight * 0.345 / 3)),
        pos(totalWidth * 0.75, totalHeight * 0.1),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R20
    add([
        "wall",
        rect((totalWidth * 0.25) / 5, totalHeight * 0.43 / 6 + totalHeight * 0.1),
        pos(totalWidth * 0.70 - ((totalWidth * 0.25) / 5 * 3), 10),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R21
    add([
        "wall",
        rect((totalWidth * 0.25) / 5, totalHeight * 0.345 / 3),
        pos((totalWidth * 0.25) / 5 + totalWidth * 0.45, totalHeight * 0.445 - (totalHeight * 0.345 / 3)),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R22
    add([
        "wall",
        rect((totalWidth * 0.2 / 2) - 10, (totalHeight * 0.345 - (totalHeight * 0.345 / 3)) / 4),
        pos(totalWidth * 0.8 + (totalWidth * 0.2 / 2), ((totalHeight * 0.345 - (totalHeight * 0.345 / 3)) / 4) + totalHeight * 0.1),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R23
    add([
        "wall",
        rect(totalWidth * 0.2 / 4 * 2 - totalWidth * 0.01, totalHeight * 0.2),
        pos(totalWidth * 0.8 + (totalWidth * 0.2 / 4) + totalWidth * 0.01 - 10, ((totalHeight * 0.345 - (totalHeight * 0.345 / 3)) / 4) * 3.5 + totalHeight * 0.1),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R24
    add([
        "wall",
        rect((totalWidth * 0.2 / 4), totalHeight * 0.1),
        pos(totalWidth - ((totalWidth * 0.2 / 4)) - 10, totalHeight * 0.63),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R25
    add([
        "wall",
        rect((totalWidth * 0.2 / 4 * 2 - totalWidth * 0.01) / 3, totalHeight * 0.165),
        pos(totalWidth * 0.8 + (totalWidth * 0.2 / 4), totalHeight * 0.73),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    onKeyDown("left", () => {
        player.move(-speed, 0);
        player.use(sprite("playerL"));
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
        player.use(sprite("playerL"));
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
        player.use(sprite("playerR"));
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
        player.use(sprite("playerR"));
    })

    onKeyDown("up", () => {
        player.move(0, -speed);
        player.use(sprite("playerU"));
    })
    onKeyDown("w", () => {
        player.move(0, -speed);
        player.use(sprite("playerU"));
    })

    onKeyDown("down", () => {
        player.move(0, speed);
        player.use(sprite("playerD"));
    })
    onKeyDown("s", () => {
        player.move(0, speed);
        player.use(sprite("playerD"));
    })

    let botaoRefazer;

    function jogadorMorreu() {
        shake(70);
        music.pause();
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
        go("nivel1");
    })

    player.onCollide("redSlime", () => {
        jogadorMorreu();
        morto = true;
        destroyAll("player");
    })

    player.onCollide("greenSlime", () => {
        jogadorMorreu();
        morto = true;
        destroyAll("player");
    })

    player.onCollide("blueSlime", () => {
        jogadorMorreu();
        morto = true;
        destroyAll("player");
    })

    let gCrystal = false;
    let rCrystal = false;
    let bCrystal = false;

    player.onCollide("greenCrystal", () => {
        destroyAll("greenCrystal");
        gCrystal = true;

        if (gCrystal && rCrystal && bCrystal) {
            portal.use(sprite("openPortal"));
        }
    })

    player.onCollide("redCrystal", () => {
        destroyAll("redCrystal");
        rCrystal = true;

        if (gCrystal && rCrystal && bCrystal) {
            portal.use(sprite("openPortal"));
        }
    })

    player.onCollide("blueCrystal", () => {
        destroyAll("blueCrystal");
        bCrystal = true;

        if (gCrystal && rCrystal && bCrystal) {
            portal.use(sprite("openPortal"));
        }
    })

    player.onCollide("portal", () => {
        if (gCrystal && rCrystal && bCrystal) {
            localStorage.setItem("nivel", "nivel2");
            timer1 = false;
            music.stop();
            go("nivel2");
        }
    })

    onUpdate(() => {
        redSlime.move(redSlimeH, redSlimeV);
        redSlime2.move(redSlime2H, redSlime2V);
        greenSlime.move(greenSlimeH, greenSlimeV);
        greenSlime2.move(greenSlime2H, greenSlime2V);
        blueSlime.move(blueSlimeH, blueSlimeV);
        blueSlime2.move(blueSlime2H, blueSlime2V);
    })

    const scoreMinutos = add([
        text(scoreMin, {
            size: 15
        }),
        pos(13, 24)
    ]);

    const scoreSegundos = add([
        text(scoreSeg, {
            size: 15
        }),
        pos(90, 24)
    ]);

    const textoMin = add([
        text("Min", {
            size: 15
        }),
        pos(40, 24)
    ]);

    const textoSeg = add([
        text("s", {
            size: 15
        }),
        pos(115, 24)
    ]);

    function timerPontuacao() {
        if (morto == false) {
            if (scoreSeg < 60) {
                scoreSeg++;
            } else {
                scoreSeg = 0;
                scoreMin++;
            }
        }

        scoreMinutos.text = scoreMin;
        scoreSegundos.text = scoreSeg;
        if(timer1) {
            setTimeout(() => {
                timerPontuacao();
            }, 1000);
        }
    }

    timer1 = true;
    timerPontuacao();
})

























scene("nivel2", () => {

    let morto = false;

    let music = play("musica1", {
        volume: 0.2,
        loop: true
    })
    
    music.play()

    layers([
        "1",
        "2",
        "3"
    ], "2")

    async function backgroundFase() {
        let bgImage = await loadSprite("background", "./assets/imgFundoGelo.JPG");
    
        let background = add([
            sprite("background"),
            pos(width() / 2, height() / 2),
            origin("center"),
            scale(1),
            fixed(),
            layer("1")
    
        ]);
    
        background.scaleTo(Math.max(
            totalWidth / bgImage.tex.width,
            totalHeight / bgImage.tex.height
        ));
    }
    backgroundFase();

    const scoreMinutos = add([
        text(scoreMin, {
            size: 15
        }),
        pos(13, 24),
        layer("3")
    ]);

    const scoreSegundos = add([
        text(scoreSeg, {
            size: 15
        }),
        pos(90, 24),
        layer("3")
    ]);

    const textoMin = add([
        text("Min", {
            size: 15
        }),
        pos(40, 24),
        layer("3")
    ]);

    const textoSeg = add([
        text("s", {
            size: 15
        }),
        pos(115, 24),
        layer("3")
    ]);

    function timerPontuacao() {
        if (morto == false) {
            if (scoreSeg < 60) {
                scoreSeg++;
            } else {
                scoreSeg = 0;
                scoreMin++;
            }
        }

        scoreMinutos.text = scoreMin;
        scoreSegundos.text = scoreSeg;
        if(timer2) {
            setTimeout(() => {
                timerPontuacao();
            }, 1000);
        }
    }

    timer2 = true;
    timerPontuacao();

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
        player.use(sprite("playerL"));
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
        player.use(sprite("playerL"));
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
        player.use(sprite("playerR"));
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
        player.use(sprite("playerR"));
    })

    onKeyDown("up", () => {
        player.move(0, -speed);
        player.use(sprite("playerU"));
    })
    onKeyDown("w", () => {
        player.move(0, -speed);
        player.use(sprite("playerU"));
    })

    onKeyDown("down", () => {
        player.move(0, speed);
        player.use(sprite("playerD"));
    })
    onKeyDown("s", () => {
        player.move(0, speed);
        player.use(sprite("playerD"));
    })

    //R1
    add([
        "wall",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.075, totalHeight * 0.14),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R2
    add([
        "wall",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.075, totalHeight * 0.42),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R3
    add([
        "wall",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.075, totalHeight * 0.7),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R4
    add([
        "wall",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.225, totalHeight * 0.14),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R5
    add([
        "wall",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.225, totalHeight * 0.42),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R6
    add([
        "wall",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.225, totalHeight * 0.7),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R7
    add([
        "wall",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.375, totalHeight * 0.14),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R8
    add([
        "wall",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.375, totalHeight * 0.42),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R9
    add([
        "wall",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.375, totalHeight * 0.7),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R10
    add([
        "wall",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.525, totalHeight * 0.14),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R11
    add([
        "wall",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.525, totalHeight * 0.42),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R12
    add([
        "wall",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.525, totalHeight * 0.7),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R13
    add([
        "wall",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.675, totalHeight * 0.14),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R14
    add([
        "wall",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.675, totalHeight * 0.42),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R15
    add([
        "wall",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.675, totalHeight * 0.7),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R16
    add([
        "wall",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.825, totalHeight * 0.14),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R17
    add([
        "wall",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.825, totalHeight * 0.42),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R18
    add([
        "wall",
        rect(totalWidth * 0.075, totalHeight * 0.15),
        pos(totalWidth * 0.825, totalHeight * 0.7),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    let slime1V = 0;
    let slime1H = 200;
    let slime2V = 200;
    let slime2H = 0;
    let slime3V = 0;
    let slime3H = -200;

    const slime1 = add([
        "slime1",
        "wall",
        sprite("slimeBravo"),
        pos(totalWidth * 0.03, totalHeight * 0.04),
        area(),
        solid(),
        scale(2)
    ])

    const slime2 = add([
        "slime2",
        "wall",
        sprite("slimeBravo"),
        pos(totalWidth * 0.925, totalHeight * 0.04),
        area(),
        solid(),
        scale(2)
    ])

    const slime3 = add([
        "slime3",
        "wall",
        sprite("slimeBravo"),
        pos(totalWidth * 0.85, totalHeight * 0.875),
        area(),
        solid(),
        scale(2)
    ])

    slime1.onCollide("wall", () => {
        let numero = randi(0, 4);
        if (numero == 0) {
            if (slime1V != 200) {
                slime1H = 0;
                slime1V = -200;
            }
        }
        if (numero == 1) {
            if (slime1H != -200) {
                slime1H = 200;
                slime1V = 0;
            }
        }
        if (numero == 2) {
            if (slime1V != -200) {
                slime1H = 0;
                slime1V = 200;
            }
        }
        if (numero == 3) {
            if (slime1H != 200) {
                slime1H = -200;
                slime1V = 0;
            }
        }
    })

    slime2.onCollide("wall", () => {
        let numero = randi(0, 4);
        if (numero == 0) {
            if (slime2V != 200) {
                slime2H = 0;
                slime2V = -200;
            }
        }
        if (numero == 1) {
            if (slime2H != -200) {
                slime2H = 200;
                slime2V = 0;
            }
        }
        if (numero == 2) {
            if (slime2V != -200) {
                slime2H = 0;
                slime2V = 200;
            }
        }
        if (numero == 3) {
            if (slime2H != 200) {
                slime2H = -200;
                slime2V = 0;
            }
        }
    })

    slime3.onCollide("wall", () => {
        let numero = randi(0, 4);
        if (numero == 0) {
            if (slime3V != 200) {
                slime3H = 0;
                slime3V = -200;
            }
        }
        if (numero == 1) {
            if (slime3H != -200) {
                slime3H = 200;
                slime3V = 0;
            }
        }
        if (numero == 2) {
            if (slime3V != -200) {
                slime3H = 0;
                slime3V = 200;
            }
        }
        if (numero == 3) {
            if (slime3H != 200) {
                slime3H = -200;
                slime3V = 0;
            }
        }
    })


    onUpdate(() => {
        slime1.move(slime1H, slime1V);
        slime2.move(slime2H, slime2V);
        slime3.move(slime3H, slime3V);

        if(slime1.pos.x == player.pos.x || (slime1.pos.x - player.pos.x < 2 && slime1.pos.x - player.pos.x > 0) || (player.pos.x - slime1.pos.x < 2 && player.pos.x - slime1.pos.x > 0)) {
            if(slime1.pos.y < player.pos.y) {
                slime1V = 300;
                slime1H = 0;
            } else {
                slime1V = -300;
                slime1H = 0;
            }
        } else if (slime1.pos.y == player.pos.y || (slime1.pos.y - player.pos.y < 2 && slime1.pos.y - player.pos.y > 0) || (player.pos.y - slime1.pos.y < 2 && player.pos.y - slime1.pos.y > 0)) {
            if(slime1.pos.x < player.pos.x) {
                slime1V = 0;
                slime1H = 300;
            } else {
                slime1V = 0;
                slime1H = -300;
            }
        }

        if(slime2.pos.x == player.pos.x || (slime2.pos.x - player.pos.x < 2 && slime2.pos.x - player.pos.x > 0) || (player.pos.x - slime2.pos.x < 2 && player.pos.x - slime2.pos.x > 0)) {
            if(slime2.pos.y < player.pos.y) {
                slime2V = 300;
                slime2H = 0;
            } else {
                slime2V = -300;
                slime2H = 0;
            }
        } else if (slime2.pos.y == player.pos.y || (slime2.pos.y - player.pos.y < 2 && slime2.pos.y - player.pos.y > 0) || (player.pos.y - slime2.pos.y < 2 && player.pos.y - slime2.pos.y > 0)) {
            if(slime2.pos.x < player.pos.x) {
                slime2V = 0;
                slime2H = 300;
            } else {
                slime2V = 0;
                slime2H = -300;
            }
        }

        if(slime3.pos.x == player.pos.x || (slime3.pos.x - player.pos.x < 2 && slime3.pos.x - player.pos.x > 0) || (player.pos.x - slime3.pos.x < 2 && player.pos.x - slime3.pos.x > 0)) {
            if(slime3.pos.y < player.pos.y) {
                slime3V = 300;
                slime3H = 0;
            } else {
                slime3V = -300;
                slime3H = 0;
            }
        } else if (slime3.pos.y == player.pos.y || (slime3.pos.y - player.pos.y < 2 && slime3.pos.y - player.pos.y > 0) || (player.pos.y - slime3.pos.y < 2 && player.pos.y - slime3.pos.y > 0)) {
            if(slime3.pos.x < player.pos.x) {
                slime3V = 0;
                slime3H = 300;
            } else {
                slime3V = 0;
                slime3H = -300;
            }
        }
    })

    function jogadorMorreu() {
        shake(70);
        music.pause();
        add([
            text("Game Over!"),
            pos(totalWidth * 0.425, totalHeight * 0.36),
            scale(3),
            color(255, 0, 0),
            layer("3")
        ])
        add([
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
        go("nivel2");
    })

    player.onCollide("slime1", () => {
        jogadorMorreu();
        morto = true;
        destroyAll("player");
    })

    player.onCollide("slime2", () => {
        jogadorMorreu();
        morto = true;
        destroyAll("player");
    })

    player.onCollide("slime3", () => {
        jogadorMorreu();
        morto = true;
        destroyAll("player");
    })

    const portal = add([
        "portal",
        sprite("closedPortal"),
        pos(totalWidth * 0.92, totalHeight * 0.05),
        area(),
        scale(2)
    ])

    const redCrystal = add([
        "redCrystal",
        sprite("redCrystal"),
        pos(totalWidth * 0.25, totalHeight * 0.9),
        area()
    ])

    const blueCrystal = add([
        "blueCrystal",
        sprite("blueCrystal"),
        pos(totalWidth * 0.25, totalHeight * 0.05),
        area()
    ])

    const greenCrystal = add([
        "greenCrystal",
        sprite("greenCrystal"),
        pos(totalWidth * 0.325, totalHeight * 0.475),
        area()
    ])

    const redCrystal2 = add([
        "redCrystal",
        sprite("redCrystal"),
        pos(totalWidth * 0.7, totalHeight * 0.9),
        area()
    ])

    const blueCrystal2 = add([
        "blueCrystal",
        sprite("blueCrystal"),
        pos(totalWidth * 0.7, totalHeight * 0.05),
        area()
    ])

    const greenCrystal2 = add([
        "greenCrystal",
        sprite("greenCrystal"),
        pos(totalWidth * 0.625, totalHeight * 0.475),
        area()
    ])

    let gCrystal = 0;
    let rCrystal = 0;
    let bCrystal = 0;

    player.onCollide("greenCrystal", (cristal) => {
        destroy(cristal);
        gCrystal++;

        if (gCrystal == 2 && rCrystal == 2 && bCrystal == 2) {
            portal.use(sprite("openPortal"));
        }
    })

    player.onCollide("redCrystal", (cristal) => {
        destroy(cristal);
        rCrystal++;

        if (gCrystal == 2 && rCrystal == 2 && bCrystal == 2) {
            portal.use(sprite("openPortal"));
        }
    })

    player.onCollide("blueCrystal", (cristal) => {
        destroy(cristal);
        bCrystal++;

        if (gCrystal == 2 && rCrystal == 2 && bCrystal == 2) {
            portal.use(sprite("openPortal"));
        }
    })

    player.onCollide("portal", () => {
        if (gCrystal == 2 && rCrystal == 2 && bCrystal == 2) {
            localStorage.setItem("nivel", "boss1");
            timer2 = false;
            music.stop();
            go("boss1");
        }
    })
})

























scene("boss1", () => {

    let morto = false;

    const music = play("musica2", {
        volume: 0.2,
        loop: true
    })
    
    music.play()

    layers([
        "1",
        "2",
        "3"
    ], "2")

    backgroundBoss();

    let faseBoss = 1;

    const scoreMinutos = add([
        text(scoreMin, {
            size: 15
        }),
        pos(13, 24),
        layer("3")
    ]);

    const scoreSegundos = add([
        text(scoreSeg, {
            size: 15
        }),
        pos(90, 24),
        layer("3")
    ]);

    const textoMin = add([
        text("Min", {
            size: 15
        }),
        pos(40, 24),
        layer("3")
    ]);

    const textoSeg = add([
        text("s", {
            size: 15
        }),
        pos(115, 24),
        layer("3")
    ]);

    function timerPontuacao() {
        if (morto == false) {
            if (scoreSeg < 60) {
                scoreSeg++;
            } else {
                scoreSeg = 0;
                scoreMin++;
            }
        }

        scoreMinutos.text = scoreMin;
        scoreSegundos.text = scoreSeg;
        if(timer3) {
            setTimeout(() => {
                timerPontuacao();
            }, 1000);
        }
    }

    timer3 = true;
    timerPontuacao();

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
        player.use(sprite("playerL"));
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
        player.use(sprite("playerL"));
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
        player.use(sprite("playerR"));
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
        player.use(sprite("playerR"));
    })

    onKeyDown("up", () => {
        player.move(0, -speed);
        player.use(sprite("playerU"));
    })
    onKeyDown("w", () => {
        player.move(0, -speed);
        player.use(sprite("playerU"));
    })

    onKeyDown("down", () => {
        player.move(0, speed);
        player.use(sprite("playerD"));
    })
    onKeyDown("s", () => {
        player.move(0, speed);
        player.use(sprite("playerD"));
    })

    const queenSlime = add([
        "queenSlime",
        sprite("queenSlime1"),
        pos(totalWidth * 0.44, totalHeight * 0.4),
        area(),
        scale(3),
        health(5)
    ])

    function criarEspinhos() {
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.37, totalHeight * 0.4),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.37, totalHeight * 0.35),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.37, totalHeight * 0.45),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.37, totalHeight * 0.5),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.37, totalHeight * 0.55),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.4, totalHeight * 0.35),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.43, totalHeight * 0.35),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.46, totalHeight * 0.35),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.49, totalHeight * 0.35),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.52, totalHeight * 0.35),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.55, totalHeight * 0.35),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.55, totalHeight * 0.4),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.55, totalHeight * 0.45),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.55, totalHeight * 0.5),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.55, totalHeight * 0.55),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.4, totalHeight * 0.55),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.43, totalHeight * 0.55),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.46, totalHeight * 0.55),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.49, totalHeight * 0.55),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.52, totalHeight * 0.55),
            area(),
            solid(),
            scale(2)
        ])
        add([
            "spike",
            sprite("spike"),
            pos(totalWidth * 0.55, totalHeight * 0.55),
            area(),
            solid(),
            scale(2)
        ])
    }

    const barraVida1 = add([
        rect(40, 40),
        pos(totalWidth * 0.8, totalHeight * 0.05),
        layer("3"),
        color(255, 0, 0),
        outline(3)
    ])
    const barraVida2 = add([
        rect(40, 40),
        pos(totalWidth * 0.8 + 40, totalHeight * 0.05),
        layer("3"),
        color(255, 0, 0),
        outline(3)
    ])
    const barraVida3 = add([
        rect(40, 40),
        pos(totalWidth * 0.8 + 80, totalHeight * 0.05),
        layer("3"),
        color(255, 0, 0),
        outline(3)
    ])
    const barraVida4 = add([
        rect(40, 40),
        pos(totalWidth * 0.8 + 120, totalHeight * 0.05),
        layer("3"),
        color(255, 0, 0),
        outline(3)
    ])
    const barraVida5 = add([
        rect(40, 40),
        pos(totalWidth * 0.8 + 160, totalHeight * 0.05),
        layer("3"),
        color(255, 0, 0),
        outline(3)
    ])

    let intervaloEspinhos;

    function criarIntervaloEspinhos(tempo) {
        intervaloEspinhos = setInterval(() => {
            let width = randi(10, totalWidth - 30);
            let height = randi(10, totalHeight - 30);

            add([
                "halfSpike",
                area(),
                sprite("halfSpike"),
                pos(width, height),
                scale(2),
                lifespan(tempo * 2 / 1000)
            ])

            setTimeout(() => {
                add([
                    "randomSpike",
                    area(),
                    solid(),
                    sprite("spike"),
                    pos(width, height),
                    scale(2),
                    lifespan(15)
                ])
            }, tempo * 2);
        }, tempo)
    }
    criarIntervaloEspinhos(1000);

    player.onCollide("spike", () => {
        destroyAll("player");
        jogadorMorreu();
        morto = true;
    })

    player.onCollide("randomSpike", () => {
        destroyAll("player");
        jogadorMorreu();
        morto = true;
    })

    function trocarFase() {

        console.log("trocou")
        if (faseBoss == 2) {
            clearInterval(intervalo);
            criarIntervalo(10000);
            barraVida5.color = rgb(211, 211, 211);
        }
        if (faseBoss == 3) {
            clearInterval(intervaloEspinhos);
            criarIntervaloEspinhos(500);
            barraVida4.color = rgb(211, 211, 211);
        }
        if (faseBoss == 4) {
            clearInterval(intervalo);
            criarIntervalo(5000);
            clearInterval(intervaloEspinhos);
            criarIntervaloEspinhos(400);
            queenSlime.use(sprite("queenSlime2"))
            barraVida3.color = rgb(211, 211, 211);
        }
        if (faseBoss == 5) {
            clearInterval(intervaloEspinhos);
            criarIntervaloEspinhos(250);
            clearInterval(intervalo);
            criarIntervalo(1000);
            barraVida2.color = rgb(211, 211, 211);
        }

        if (faseBoss == 1) {
            tempoAtaque = 15;
        }
        if (faseBoss == 2) {
            tempoAtaque = 10;
        }
        if (faseBoss == 3) {
            tempoEspinhos = 0.5;
        }
        if (faseBoss == 4) {
            tempoAtaque = 5;
            tempoEspinhos = 0.4;
        }
        if (faseBoss == 5) {
            tempoAtaque = 1;
            tempoEspinhos = 0.25;
        }

        if (faseBoss <= 5) {
            setTimeout(() => {
                criarEspinhos();
            }, 3000)
        }
    }

    let invencivel = false;
    player.onCollide("queenSlime", () => {
        if (!invencivel) {
            faseBoss++;
            queenSlime.hurt(1);
            shake(20);
            trocarFase();
            invencivel = true;
            setTimeout(() => {
                invencivel = false;
            }, 3000);
        }
    })

    let botaoRefazer;

    function jogadorMorreu() {
        shake(70);
        music.pause();
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
        clearInterval(intervalo);
        clearInterval(intervaloEspinhos);
        destroyAll("player");
        destroyAll("spike");
        destroyAll("queenSlime");
        go("boss1");
    })

    function vitoria() {
        barraVida1.color = rgb(211, 211, 211);
        timer3 = false;
        music.stop();
        add([
            text("Vitoria!"),
            pos(totalWidth * 0.44, totalHeight * 0.36),
            scale(3),
            color(0, 255, 0)
        ])
        add([
            "botaoContinuar",
            rect(100, 15),
            pos(totalWidth * 0.4, totalHeight * 0.42),
            scale(3),
            color(255, 255, 255),
            outline(1),
            area()
        ])
        add([
            text("Continuar"),
            pos(totalWidth * 0.455, totalHeight * 0.435),
            scale(2),
        ])
    }

    onClick("botaoContinuar", () => {
        localStorage.removeItem("nivel");
        let lista = JSON.parse(localStorage.getItem("lista")) || {lista: []};
        lista.lista.push({nome: localStorage.getItem("jogador"), tempo: (scoreMin * 60 + scoreSeg)});
        localStorage.setItem("lista", JSON.stringify(lista));
        window.location = "http://localhost:3000/";
    })

    queenSlime.on("death", () => {
        vitoria();
        destroyAll("spike");
        clearInterval(intervalo);
        clearInterval(intervaloEspinhos)
    })

    let intervalo;

    function criarIntervalo(tempo) {
        intervalo = setInterval(() => {
            let bombSpike = add([
                "bombSpike",
                sprite("spike"),
                pos(totalWidth * 0.47, totalHeight * 0.45),
                area(),
                solid(),
                scale(2),
                move(player.pos.angle(totalWidth * 0.47, totalHeight * 0.45), 300)
            ])

            bombSpike.onCollide("spike", (spike) => {
                destroy(spike);
            })

            bombSpike.onCollide("randomSpike", (randomSpike) => {
                destroy(randomSpike);
            })

            bombSpike.onCollide("wall", () => {
                destroy(bombSpike);
            })

            bombSpike.onCollide("player", () => {
                destroyAll("player");
                jogadorMorreu();
                morto = true;
            })
        }, tempo)
    }

    criarIntervalo(15000);
    criarEspinhos();
})

if(!localStorage.getItem("nivel")) {
    go('tutorial');
}
if (localStorage.getItem("nivel") == "nivel1") {
    go("nivel1");
}
if (localStorage.getItem("nivel") == "nivel2") {
    go("nivel2");
}
if (localStorage.getItem("nivel") == "boss1") {
    go("boss1");
    console.log(JSON.parse(localStorage.getItem("lista")))
}
if(localStorage.getItem("nivel") == "nivel4") {
    window.location.href = "http://localhost:3000/mundo2";
}
