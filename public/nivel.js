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



let scoreSeg = 0;
let scoreMin = 0;



async function init(){
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

scene("nivel1", () => {

    layers ([
        "1",
        "2"
    ], "2")

    init();

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

    let greenSlimeH = -200;
    let greenSlimeV = 0;

    let greenSlime2H = -200;
    let greenSlime2V = 0;

    let blueSlimeH = -300;
    let blueSlimeV = 0;

    const redSlime = add([
        "redSlime",
        "wall",
        sprite("redSlimeD"),
        pos(totalWidth * 0.03, totalHeight * 0.05),
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
        if(numero == 0) {
            if(greenSlime2V != 200) {
                greenSlime2H = 0;
                greenSlime2V = -200;
            }
        }
        if(numero == 1) {
            if(greenSlime2H != -200) {
                greenSlime2H = 200;
                greenSlime2V = 0;
            }
        }
        if(numero == 2) {
            if(greenSlime2V != -200) {
                greenSlime2H = 0;
                greenSlime2V = 200;
            }
        }
        if(numero == 3) {
            if(greenSlime2H != 200) {
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
        rect(totalWidth * 0.1, totalHeight * 0.165),
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

        rect(totalWidth * 0.05, totalHeight  * 0.185),
        pos(totalWidth * 0.75, totalHeight  * 0.445),

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
        rect((totalWidth * 0.25) / 5, totalHeight  * 0.43 / 6 + totalHeight * 0.1),
        pos(totalWidth * 0.70 - ((totalWidth * 0.25) / 5 * 3),  10),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R21
    add([
        "wall",
        rect((totalWidth * 0.25) / 5, totalHeight  * 0.345 / 3),
        pos((totalWidth * 0.25) / 5 + totalWidth * 0.45,  totalHeight  * 0.445 - (totalHeight  * 0.345 / 3)),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R22
    add([
        "wall",
        rect((totalWidth * 0.2 / 2) - 10, (totalHeight  * 0.345 - (totalHeight  * 0.345 / 3)) / 4),
        pos(totalWidth * 0.8 + (totalWidth * 0.2 / 2), ((totalHeight  * 0.345 - (totalHeight  * 0.345 / 3)) / 4) + totalHeight * 0.1),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R23
    add([
        "wall",
        rect(totalWidth * 0.2 / 4 * 2 - totalWidth * 0.01, totalHeight  * 0.2),
        pos(totalWidth * 0.8 + (totalWidth * 0.2 / 4) + totalWidth * 0.01 - 10,  ((totalHeight  * 0.345 - (totalHeight  * 0.345 / 3)) / 4) * 3.5 + totalHeight * 0.1),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R24
    add([
        "wall",
        rect((totalWidth * 0.2 / 4), totalHeight  * 0.1),
        pos(totalWidth - ((totalWidth * 0.2 / 4)) - 10, totalHeight  * 0.63),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R25
    add([
        "wall",
        rect((totalWidth * 0.2 / 4 * 2 - totalWidth * 0.01) / 3, totalHeight  * 0.165),
        pos(totalWidth * 0.8 + (totalWidth * 0.2 / 4), totalHeight  * 0.73),
        outline(2),
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

    let botaoRefazer;

    function jogadorMorreu() {
        shake(70);
        add([
            text("Game Over!"),
            pos(totalWidth * 0.425, totalHeight * 0.36),
            scale(3),
            color(255, 0, 0)
        ])
        botaoRefazer = add([
            "botaoRefazer",
            rect(100, 15),
            pos(totalWidth * 0.4, totalHeight * 0.42),
            scale(3),
            color(255, 255, 255),
            outline(1),
            area()
        ])
        add([
            text("Jogar Novamente"),
            pos(totalWidth * 0.425, totalHeight * 0.435),
            scale(2),
        ])
    }

    onClick("botaoRefazer", () => {
        go("nivel1");
    })

    player.onCollide("redSlime", () => {
        jogadorMorreu();
        destroyAll("player");
    })

    player.onCollide("greenSlime", () => {
        jogadorMorreu();
        destroyAll("player");
    })

    player.onCollide("greenSlime2", () => {
        jogadorMorreu();
        destroyAll("player");
    })

    player.onCollide("blueSlime", () => {
        jogadorMorreu();
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
            go("boss1");
        }
    })

    onUpdate(() => {
        redSlime.move(redSlimeH, redSlimeV);
        greenSlime.move(greenSlimeH, greenSlimeV);
        greenSlime2.move(greenSlime2H, greenSlime2V);
        blueSlime.move(blueSlimeH, blueSlimeV);
    })

    const scoreMinutos = add([
        text(scoreMin),
        pos(13, 24)
    ]);

    const scoreSegundos = add([
        text(scoreSeg),
        pos(55, 24)
    ]);

    const doisPontos = add([
        text(" : "),
        pos(17, 24)
    ]);

    const textoMin = add([
        text("Min"),
        pos(24, 24)
    ]);

    const textoSeg = add([
        text("s"),
        pos(75, 24)
    ]);

    loop(1, () => {

        if (scoreSeg < 60) {
            scoreSeg++;
        } else {
            scoreSeg = 0;
            scoreMin++;
        }

        scoreMinutos.text = scoreMin;
        scoreSegundos.text = scoreSeg;
    });

})

scene("boss1", () => {

    let faseBoss = 1;
    let vidaBoss = 5;

    const scoreMinutos = add([
        text(scoreMin),
        pos(13, 24)
    ]);

    const scoreSegundos = add([
        text(scoreSeg),
        pos(55, 24)
    ]);

    const doisPontos = add([
        text(" : "),
        pos(17, 24)
    ]);

    const textoMin = add([
        text("Min"),
        pos(24, 24)
    ]);

    const textoSeg = add([
        text("s"),
        pos(75, 24)
    ]);

    loop(1, () => {
        
        if (scoreSeg < 60) {
            scoreSeg++;
        } else {
            scoreSeg = 0;
            scoreMin++;
        }

        scoreMinutos.text = scoreMin;
        scoreSegundos.text = scoreSeg;
    });

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

    const queenSlime = add([
        "queenSlime",
        sprite("queenSlime1"),
        pos(totalWidth * 0.44, totalHeight * 0.4),
        area(),
        scale(3)
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

    // criarEspinhos();

    let tempoEspinhos = 1;
    let spike1;
    let spike2;
    let spike3;
    let spike4;
    let spike5;
    let spike6;
    let spike7;
    let spike8;
    let spike9;
    let spike10;

    let espinhoAtual;

    loop(tempoEspinhos, () => {
        let width = randi(10, totalWidth - 30);
        let height = randi(10, totalHeight - 30);

        if (!spike1) {
            spike1 = add([
                "randomSpike",
                area(),
                solid(),
                sprite("spike"),
                pos(width, height),
                scale(2)
            ])
            espinhoAtual = 1;
        } else if (!spike2) {
            spike2 = add([
                "randomSpike",
                area(),
                solid(),
                sprite("spike"),
                pos(width, height),
                scale(2)
            ])
            espinhoAtual = 2;
        } else if (!spike3) {
            spike3 = add([
                "randomSpike",
                area(),
                solid(),
                sprite("spike"),
                pos(width, height),
                scale(2)
            ])
            espinhoAtual = 3;
        } else if (!spike4) {
            spike4 = add([
                "randomSpike",
                area(),
                solid(),
                sprite("spike"),
                pos(width, height),
                scale(2)
            ])
            espinhoAtual = 4;
        } else if (!spike5) {
            spike5 = add([
                "randomSpike",
                area(),
                solid(),
                sprite("spike"),
                pos(width, height),
                scale(2)
            ])
            espinhoAtual = 5;
        } else if (!spike6) {
            spike6 = add([
                "randomSpike",
                area(),
                solid(),
                sprite("spike"),
                pos(width, height),
                scale(2)
            ])
            espinhoAtual = 5;
        } else if (!spike7) {
            spike7 = add([
                "randomSpike",
                area(),
                solid(),
                sprite("spike"),
                pos(width, height),
                scale(2)
            ])
            espinhoAtual = 5;
        } else if (!spike8) {
            spike8 = add([
                "randomSpike",
                area(),
                solid(),
                sprite("spike"),
                pos(width, height),
                scale(2)
            ])
            espinhoAtual = 5;
        } else if (!spike9) {
            spike9 = add([
                "randomSpike",
                area(),
                solid(),
                sprite("spike"),
                pos(width, height),
                scale(2)
            ])
            espinhoAtual = 5;
        } else if (!spike10) {
            spike10 = add([
                "randomSpike",
                area(),
                solid(),
                sprite("spike"),
                pos(width, height),
                scale(2)
            ])
            espinhoAtual = 5;
        }
    })

    setTimeout(() => {
        loop(tempoEspinhos, () => {

            let espinho = randi(0, 5);

            if (faseBoss > 2) {
                espinho = randi(0, 10);
            }
            if (espinho == 0 && espinhoAtual != 1) {
                destroy(spike1);
                spike1 = undefined;
            } else if (espinho == 1 && espinhoAtual != 2) {
                destroy(spike2);
                spike2 = undefined;
            } else if (espinho == 2 && espinhoAtual != 3) {
                destroy(spike3);
                spike3 = undefined;
            } else if (espinho == 3 && espinhoAtual != 4) {
                destroy(spike4);
                spike4 = undefined;
            } else if (espinho == 4 && espinhoAtual != 5) {
                destroy(spike5);
                spike5 = undefined;
            } else if (espinho == 5 && espinhoAtual != 6) {
                destroy(spike6);
                spike5 = undefined;
            } else if (espinho == 6 && espinhoAtual != 7) {
                destroy(spike7);
                spike5 = undefined;
            } else if (espinho == 7 && espinhoAtual != 8) {
                destroy(spike8);
                spike5 = undefined;
            } else if (espinho == 8 && espinhoAtual != 9) {
                destroy(spike9);
                spike5 = undefined;
            } else if (espinho == 9 && espinhoAtual != 10) {
                destroy(spike10);
                spike5 = undefined;
            }
        })
    }, 3000);

    player.onCollide("spike", () => {
        destroyAll("player");
        jogadorMorreu();
    })

    player.onCollide("randomSpike", () => {
        destroyAll("player");
        jogadorMorreu();
    })

    function trocarFase() {

        console.log("trocou")
        if (faseBoss == 2) {
            clearInterval(intervalo);
            criarIntervalo(10000);
        }
        if(faseBoss == 3) {

        }
        if(faseBoss == 4) {
            clearInterval(intervalo);
            criarIntervalo(5000);
            queenSlime.use(sprite("queenSlime2"))
        }
        if(faseBoss == 5) {
            clearInterval(intervalo);
            criarIntervalo(1000);
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

        setTimeout(() => {
            criarEspinhos();
        }, 3000)
    }

    player.onCollide("queenSlime", () => {
        faseBoss++;
        vidaBoss--;
        trocarFase();
    })

    let botaoRefazer;

    function jogadorMorreu() {
        shake(70);
        add([
            text("Game Over!"),
            pos(totalWidth * 0.425, totalHeight * 0.36),
            scale(3),
            color(255, 0, 0)
        ])
        botaoRefazer = add([
            "botaoRefazer",
            rect(100, 15),
            pos(totalWidth * 0.4, totalHeight * 0.42),
            scale(3),
            color(255, 255, 255),
            outline(1),
            area()
        ])
        add([
            text("Jogar Novamente"),
            pos(totalWidth * 0.425, totalHeight * 0.435),
            scale(2),
        ])
    }

    onClick("botaoRefazer", () => {
        clearInterval(intervalo);
        destroyAll("player");
        destroyAll("spike");
        destroyAll("queenSlime");
        go("boss1");
    })

    let botaoVoltar;

    function vitoria() {
        add([
            text("Vitoria!"),
            pos(totalWidth * 0.425, totalHeight * 0.36),
            scale(3),
            color(255, 0, 0)
        ])
        botaoVoltar = add([
            "botaoRefazer",
            rect(100, 15),
            pos(totalWidth * 0.4, totalHeight * 0.42),
            scale(3),
            color(255, 255, 255),
            outline(1),
            area()
        ])
        add([
            text("Voltar ao Inicio"),
            pos(totalWidth * 0.425, totalHeight * 0.435),
            scale(2),
        ])
    }

    onUpdate(() => {
        if (vidaBoss <= 0) {
            vitoria();
            destroyAll("spike");
            clearInterval(intervalo)
            vidaBoss = 1;
        }
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
                move(player.pos.angle(totalWidth * 0.47, totalHeight * 0.45), 200)
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
            })
        }, tempo)
    }

    criarIntervalo(15000);
    criarEspinhos();
})

go("nivel1");