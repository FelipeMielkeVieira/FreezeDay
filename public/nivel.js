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
        if(numero == 0) {
            if(redSlimeV != 400) {
                redSlimeH = 0;
                redSlimeV = -400;
            }
        }
        if(numero == 1) {
            if(redSlimeH != -400) {
                redSlimeH = 400;
                redSlimeV = 0;
            }
        }
        if(numero == 2) {
            if(redSlimeV != -400) {
                redSlimeH = 0;
                redSlimeV = 400;
            }
        }
        if(numero == 3) {
            if(redSlimeH != 400) {
                redSlimeH = -400;
                redSlimeV = 0;
            }
        }
    })

    greenSlime.onCollide("wall", () => {
        let numero = randi(0, 4);
        if(numero == 0) {
            if(greenSlimeV != 200) {
                greenSlimeH = 0;
                greenSlimeV = -200;
            }
        }
        if(numero == 1) {
            if(greenSlimeH != -200) {
                greenSlimeH = 200;
                greenSlimeV = 0;
            }
        }
        if(numero == 2) {
            if(greenSlimeV != -200) {
                greenSlimeH = 0;
                greenSlimeV = 200;
            }
        }
        if(numero == 3) {
            if(greenSlimeH != 200) {
                greenSlimeH = -200;
                greenSlimeV = 0;
            }
        }
    })

    blueSlime.onCollide("wall", () => {
        let numero = randi(0, 4);
        if(numero == 0) {
            if(blueSlimeV != 300) {
                blueSlimeH = 0;
                blueSlimeV = -300;
            }
        }
        if(numero == 1) {
            if(blueSlimeH != -300) {
                blueSlimeH = 300;
                blueSlimeV = 0;
            }
        }
        if(numero == 2) {
            if(blueSlimeV != -300) {
                blueSlimeH = 0;
                blueSlimeV = 300;
            }
        }
        if(numero == 3) {
            if(blueSlimeH != 300) {
                blueSlimeH = -300;
                blueSlimeV = 0;
            }
        }
    })

    //R1
    add([
        "wall",
        rect(totalWidth * 0.1, totalHeight * 0.06),
        pos(totalWidth * 0.165 - (totalWidth * 0.08) + 10,  totalHeight  * 0.835),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R2
    add([
        "wall",
        rect(totalWidth * 0.185, totalHeight * 0.08),
        pos(10, totalHeight  * 0.65),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R3
    add([
        "wall",
        rect(totalWidth * 0.125, totalHeight * 0.11),
        pos((10 + totalWidth * 0.185) * 0.35, totalHeight  * 0.445),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R4
    add([
        "wall",
        rect(totalWidth * 0.185, totalHeight * 0.08),
        pos(10, totalHeight  * 0.35 - (totalHeight * 0.08)),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R5
    add([
        "wall",
        rect(totalWidth * 0.14, totalHeight * 0.06),
        pos(totalWidth * 0.045 + 10, totalHeight  * 0.19 - (totalHeight * 0.08)),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R61
    add([
        "wall",
        rect(totalWidth * 0.1, totalHeight * 0.06),
        pos(totalWidth * 0.25,  totalHeight  * 0.835),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R62
    add([
        "wall",
        rect(totalWidth * 0.05, totalHeight * 0.45),
        pos(totalWidth * 0.25 + totalWidth * 0.1,  totalHeight  * 0.445),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R7
    add([
        "wall",
        rect(totalWidth * 0.05, totalHeight * 0.08),
        pos(totalWidth * 0.25,  totalHeight  * 0.65),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R8
    add([
        "wall",
        rect(totalWidth * 0.05, totalHeight * 0.105),
        pos(totalWidth * 0.25,  totalHeight  * 0.445),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R9
    add([
        "wall",
        rect(totalWidth * 0.05, totalHeight  * 0.35 - (totalHeight * 0.08) + totalHeight * 0.08 - (totalHeight  * 0.19 - (totalHeight * 0.08))),
        pos(totalWidth * 0.25,  totalHeight  * 0.19 - (totalHeight * 0.08)),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R11
    add([
        "wall",
        rect(totalWidth * 0.05, totalHeight  * 0.35 - (totalHeight * 0.08) + totalHeight * 0.08 - 10),
        pos(totalWidth * 0.25 + totalWidth * 0.1,  10),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R12
    add([
        "wall",
        rect((totalWidth * 0.25) / 5, totalHeight  * 0.345),
        pos(totalWidth * 0.45,  totalHeight * 0.1),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])
    
    //R13
    add([
        "wall",
        rect(totalWidth * 0.25, totalHeight  * 0.08),
        pos(totalWidth * 0.45,  totalHeight * 0.55),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ]) 

    //R14
    add([
        "wall",
        rect(totalWidth * 0.1, totalHeight  * 0.165),
        pos(totalWidth * 0.45,  totalHeight * 0.73),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R15
    add([
        "wall",
        rect(totalWidth * 0.2, totalHeight  * 0.165),
        pos(totalWidth * 0.6,  totalHeight * 0.73),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R16
    add([
        "wall",
        rect(totalWidth * 0.05, totalHeight  * 0.185),
        pos(totalWidth * 0.75,  totalHeight  * 0.445),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R17
    add([
        "wall",
        rect((totalWidth * 0.25) / 5, totalHeight  * 0.345 / 3),
        pos(totalWidth * 0.70 - ((totalWidth * 0.25) / 5),  totalHeight  * 0.445 - (totalHeight  * 0.345 / 3)),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R18
    add([
        "wall",
        rect((totalWidth * 0.25) / 5, totalHeight  * 0.43 / 3),
        pos(totalWidth * 0.70 - ((totalWidth * 0.25) / 5),  totalHeight * 0.1),
        outline(2),
        area(),
        solid(),
        color(127, 200, 255)
    ])

    //R19
    add([
        "wall",
        rect(totalWidth * 0.05, totalHeight  * 0.345 - (totalHeight  * 0.345 / 3)),
        pos(totalWidth * 0.75,  totalHeight * 0.1),
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
            pos(totalWidth*0.425, totalHeight*0.36),
            scale(3),
            color(255, 0, 0)
        ])
        botaoRefazer = add([
            "botaoRefazer",
            rect(100, 15),
            pos(totalWidth*0.4, totalHeight*0.42),
            scale(3),
            color(255, 255, 255),
            outline(1),
            area()
        ])
        add([
            text("Jogar Novamente"),
            pos(totalWidth*0.425, totalHeight*0.435),
            scale(2),
        ])
    }

    onClick("botaoRefazer", () => {
        window.location.reload();
    })

    player.onCollide("redSlime", () => {
        jogadorMorreu();
        destroyAll("player");
    })

    player.onCollide("greenSlime", () => {
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
        
        if(gCrystal && rCrystal && bCrystal) {
            portal.use(sprite("openPortal"));
        }
    })

    player.onCollide("redCrystal", () => {
        destroyAll("redCrystal");
        rCrystal = true;
        
        if(gCrystal && rCrystal && bCrystal) {
            portal.use(sprite("openPortal"));
        }
    })

    player.onCollide("blueCrystal", () => {
        destroyAll("blueCrystal");
        bCrystal = true;
        
        if(gCrystal && rCrystal && bCrystal) {
            portal.use(sprite("openPortal"));
        }
    })

    player.onCollide("portal", () => {
        if(gCrystal && rCrystal && bCrystal) {
            go("boss1");
        }
    })

    onUpdate(() => {
        redSlime.move(redSlimeH, redSlimeV);
        greenSlime.move(greenSlimeH, greenSlimeV);
        blueSlime.move(blueSlimeH, blueSlimeV);
    })

})

scene("boss1", () => {

    let faseBoss = 1;

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
        solid(),
        scale(3)
    ])

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

    let tempoEspinhos = 1;
    let spike1;
    let spike2;
    let spike3;
    let spike4;
    let spike5;

    let espinhoAtual;

    loop(tempoEspinhos, () => {
        let width = randi(10, totalWidth - 30);
        let height = randi(10, totalHeight - 30);
        
        if(!spike1) {
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
        }
    })

    setTimeout(() => {
        loop(tempoEspinhos, () => {
            let espinho = randi(0, 5);

            if(espinho == 0 && espinhoAtual != 1) {
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
            } else if(espinhoAtual != 5) {
                destroy(spike5);
                spike5 = undefined;
            }
        })
    }, 3000);
})

go("nivel1");