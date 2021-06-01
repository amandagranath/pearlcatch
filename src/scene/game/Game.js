//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------



/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.scene.Scene
 *
 * @class
 * @classdesc
 * 
 * Game state.
 */
pearlcatch.scene.Game = function() {
    //Public properties
    this.hud = null; //Variable for the hud.
    this.gameOver = null; //Variable for game over
    this.sharkInterval = 0; //Variable to save the number of sharks in an interval
    this.sharks = []; //Array with all the sharks enerting the game
    this.squids = []; //Array with all the squids entering the game
    this.pearlInterval = 0; //Variable to save the number of pearls in an interval
    this.score = []; //Array to save all the points of the pearls
    this.totalScore = 0; //Sums up all the points
    this.squidInterval = 0; //Variable to save the number of squids in an interval
    this.starfishInterval = 0; //Variable to save the number of starfish in an interval
    this.stars = []; //Array with all the stars entering the game
    this.power = null; //Flag to check if the main characther get affected by enemies
    this.entity_sizes = ["small", "medium", "big"]; //Sizes of objects
    this.finalScore = 0; //The final sum of the score
    this.gameOverFlag = false; //Flag to check if the game is in a game over state
    this.gameOverStop = false; //Flag to decides if to continue creating objects for the game.
    this.pauseGameSound = false; //Flag to pause the sound
    this.clicked = 0; //To control the buttons in game over state
    this.pauseGame = false; //Flag to be able to pause the game
    this.level = 0; //Variable to all the levels
    this.speed = 0; //Variable to the speed of the main character

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.scene.Scene.call(this);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.scene.Game.prototype = Object.create(rune.scene.Scene.prototype);
pearlcatch.scene.Game.prototype.constructor = pearlcatch.scene.Game;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
/**
 * Inits methods for graphics, creating player, HUD, sounds and cameras.
 */
pearlcatch.scene.Game.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);
    this.m_initBackground();
    this.m_initBubbles();
    this.m_initSeagrass();
    this.m_initSecondSeagrass();
    this.m_initWav();
    this.player = new pearlcatch.entity.Fish(this.enemy);
    this.cameras.getCamera(0).fillColor = "#ade8f4";
    this.stage.addChild(this.player);
    this.hud = new pearlcatch.scene.HUD(this);
    this.cameras.getCamera(0).addChild(this.hud);
};
/**
 * Inits the camera of the game
 */
pearlcatch.scene.Game.prototype.m_initCamera = function() {
    this.m_camera = this.cameras.add(this.cameras.create());
    this.cameras.getCamera(0).fade.opacity = 1.0;
    this.cameras.getCamera(0).fade.in(1500);
    this.cameras.getCamera(0).debug = true;
};

/**
 * @inheritDoc
 */
/**
 * Creates the background for the game
 */
pearlcatch.scene.Game.prototype.m_initBackground = function() {
    this.m_background = new rune.display.Graphic(
        0,
        0,
        1280,
        720,
        "",
        "background"
    );
    this.stage.addChild(this.m_background);
};

/**
 * Creates seagrass
 */
pearlcatch.scene.Game.prototype.m_initSeagrass = function() {
    this.m_seagrass = new pearlcatch.entity.SeaGrass();
    this.stage.addChild(this.m_seagrass);
};

/**
 * Creates another seagrass
 */
pearlcatch.scene.Game.prototype.m_initSecondSeagrass = function() {
    this.m_SecondSeagrass = new pearlcatch.entity.SecondSeaGrass();
    this.stage.addChild(this.m_SecondSeagrass);
};

/**
 * Creates moving bubbles on top of the background
 */
pearlcatch.scene.Game.prototype.m_initBubbles = function() {
    this.m_smallBubble = new rune.display.Graphic(
        100,
        100,
        30,
        30,
        "",
        "smallbubble"
    );
    this.stage.addChild(this.m_smallBubble);
    this.m_smallBubble2 = new rune.display.Graphic(
        1180,
        100,
        30,
        30,
        "",
        "smallbubble"
    );
    this.stage.addChild(this.m_smallBubble2);
    this.m_miniBubble = new rune.display.Graphic(
        150,
        150,
        20,
        20,
        "",
        "bubblemini"
    );
    this.stage.addChild(this.m_miniBubble);
    this.m_miniBubble2 = new rune.display.Graphic(
        1130,
        150,
        20,
        20,
        "",
        "bubblemini"
    );
    this.stage.addChild(this.m_miniBubble2);
};

/**
 * 
 * Creates backgroundmusic and the themesong
 */
pearlcatch.scene.Game.prototype.m_initWav = function() {
    this.application.sounds.music.volume = 0.4;
    this.themeSong = this.application.sounds.music.get("themesong")
    this.backgroundSound = this.application.sounds.music.get("backgroundwater")
    if (this.pauseGameSound == true) {
        return;
    } else {
        this.themeSong.play();
        this.backgroundSound.play();
    }
};

/**
 * 
 * Creates the sound of catching a pearl
 */
pearlcatch.scene.Game.prototype.m_initPearlSound = function() {
    if (this.pearlSound == null) {
        this.pearlSound = this.application.sounds.sound.get("catch_pearl")
        this.pearlSound.volume = 0.2;
    }
    if (this.pauseGameSound == true) {
        return;
    } else {
        this.pearlSound.play();
    }
};

/**
 * 
 * Creates the sound when the player collides with a shark
 */
pearlcatch.scene.Game.prototype.m_initSharkSound = function() {
    if (this.sharkSound == null) {
        this.sharkSound = this.application.sounds.sound.get("sharksound2");
        this.sharkSound.volume = 0.5;
    }
    if (this.pauseGameSound == true) {
        return;
    } else {
        this.sharkSound.play();
    }
};

/**
 * 
 * Creates the sound when the player hits a squid
 */
pearlcatch.scene.Game.prototype.m_initSquidSound = function() {
    if (this.splatterSound == null) {
        this.splatterSound = this.application.sounds.sound.get("splatsound");
        this.splatterSound.volume = 0.2;
    }
    if (this.pauseGameSound == true) {
        return;
    } else {
        this.splatterSound.play();
    }
};

/**
 * 
 * Creates sound for power-up
 */
pearlcatch.scene.Game.prototype.m_initStarSound = function() {
    if (this.powerUpSound == null) {
        this.powerUpSound = this.application.sounds.sound.get("powerupsound");
        this.powerUpSound.volume = 0.1;
    }
    if (this.pauseGameSound == true) {
        return;
    } else {
        this.powerUpSound.play();
    }
};

/**
 * 
 * Creates sound for each level
 */
pearlcatch.scene.Game.prototype.m_initWaveSound = function() {
    if (this.waveSound == null) {
        this.waveSound = this.application.sounds.sound.get("wavesound");
        this.waveSound.volume = 8.0;
    }
    if (this.pauseGameSound == true) {
        return;
    } else {
        this.waveSound.play();
    }
};

/**
 * 
 * Contains all the logic in the game. 
 * Creating all the objects enetering the game.
 * Controls the sound and points.
 * Checks if the player hits other objects.
 * Checks game over.
 */
pearlcatch.scene.Game.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    if (this.pauseGameSound == false) {
        this.themeSong.play(false);
        this.backgroundSound.play(false);
    }
    if (this.gameOverStop == false) {
        this.level += 1;
    }

    if (this.level == 1) {
        this.speed = 1.5;
        this.m_initWaveSound();
        this.wave = new pearlcatch.entity.Levels("wave1", this);
        this.wave.center = this.application.screen.center;
        this.stage.addChild(this.wave);
    }
    if (this.level == 1800) {
        //här ska sjöstjärnan börja komma
        this.speed = 3.5;
        this.m_initWaveSound();
        this.wave = new pearlcatch.entity.Levels("wave2", this);
        this.wave.center = this.application.screen.center;
        this.stage.addChild(this.wave);

    }
    if (this.level == 3600) {
        this.speed = 4.5;
        this.m_initWaveSound();
        this.wave = new pearlcatch.entity.Levels("wave3", this);
        this.wave.center = this.application.screen.center;
        this.stage.addChild(this.wave);
    }
    if (this.level == 5400) {
        this.speed = 5.5;
        this.m_initWaveSound();
        this.wave = new pearlcatch.entity.Levels("wave4", this);
        this.wave.center = this.application.screen.center;
        this.stage.addChild(this.wave);
    }
    if (this.level == 7200) {
        this.speed = 6.5;
        this.m_initWaveSound();
        this.wave = new pearlcatch.entity.Levels("wave5", this);
        this.wave.center = this.application.screen.center;
        this.stage.addChild(this.wave);
    }
    if (this.level == 9000) {
        //hajen börjar lägga sig i höjd med spelaren
        this.speed = 7.5;
        this.m_initWaveSound();
        this.wave = new pearlcatch.entity.Levels("wave6", this);
        this.wave.center = this.application.screen.center;
        this.stage.addChild(this.wave);
    }
    if (this.level == 10800) {
        //stjöstjärnan kommer oftare
        this.speed = 8.5;
        this.m_initWaveSound();
        this.wave = new pearlcatch.entity.Levels("wave7", this);
        this.wave.center = this.application.screen.center;
        this.stage.addChild(this.wave);
    }
    if (this.level == 12600) {
        this.speed = 9.5;
        this.m_initWaveSound();
        this.wave = new pearlcatch.entity.Levels("wave8", this);
        this.wave.center = this.application.screen.center;
        this.stage.addChild(this.wave);
    }
    if (this.level == 14400) {
        this.speed = 10.5;
        this.m_initWaveSound();
        this.wave = new pearlcatch.entity.Levels("wave9", this);
        this.wave.center = this.application.screen.center;
        this.stage.addChild(this.wave);
    }
    if (this.level == 16200) {
        this.speed = 11.5;
        this.m_initWaveSound();
        this.wave = new pearlcatch.entity.Levels("wave10", this);
        this.wave.center = this.application.screen.center;
        this.stage.addChild(this.wave);
    }

    this.m_initBubbleMoving();
    if (this.keyboard.justPressed("SPACE")) {
        this.m_initClickSound();
        this.pauseGame = true;
        if (this.player.active) {
            for (var i = 0; i < this.sharks.length; i++) {
                this.sharks[i].active = false;
                if (this.gameOverFlag == false) {
                    this.gameOverStop = true;
                    this.gameOverFlag = true;
                }
            }
            for (var i = 0; i < this.score.length; i++) {
                this.score[i].active = false;
            }
            for (var i = 0; i < this.squids.length; i++) {
                this.squids[i].active = false;
            }
            for (var i = 0; i < this.stars.length; i++) {
                this.stars[i].active = false;
            }
            this.player.active = false;
        } else {
            this.player.active = true;
            this.pauseGame = false;
            for (var i = 0; i < this.sharks.length; i++) {
                this.sharks[i].active = true;
                if (this.gameOverFlag == true) {
                    this.gameOverStop = false;
                    this.gameOverFlag = false;
                }
            }
            for (var i = 0; i < this.score.length; i++) {
                this.score[i].active = true;
            }
            for (var i = 0; i < this.squids.length; i++) {
                this.squids[i].active = true;
            }
            for (var i = 0; i < this.stars.length; i++) {
                this.stars[i].active = true;
            }
        }
    }

    if (this.keyboard.justPressed("P")) {
        this.m_initClickSound();
        if (this.pauseGameSound == false) {
            this.pauseGameSound = true;
            this.themeSong.stop();
            this.backgroundSound.stop();
        } else if (this.pauseGameSound == true) {
            this.pauseGameSound = false;
            this.themeSong.play();
            this.backgroundSound.play();
        }
    }

    if (this.gameOverStop == false) {
        this.sharkInterval -= step;
        if (this.keyboard.justPressed("ENTER")) {
            this.sharkInterval = -1;
        }

        if (this.sharkInterval < 0) {
            this.sharkInterval = 5000;
            this.shark_size = this.entity_sizes[Math.floor(Math.random() * this.entity_sizes.length)];
            this.createSharks(this.shark_size);
        }

        for (var i = 0; i < this.sharks.length; i++) {
            if (this.power == null) {
                if (this.player.hitTestObject(this.sharks[i])) {
                    this.m_initSharkSound();
                    for (var i = 0; i < this.sharks.length; i++) {
                        this.sharks[i].active = false;
                    }
                    for (var i = 0; i < this.score.length; i++) {
                        this.score[i].active = false;
                    }
                    for (var i = 0; i < this.squids.length; i++) {
                        this.squids[i].active = false;
                    }
                    for (var i = 0; i < this.stars.length; i++) {
                        this.stars[i].active = false;
                    }
                    this.m_seagrass.active = false;
                    this.m_SecondSeagrass.active = false;
                    this.m_miniBubble.active = false;
                    this.m_miniBubble2.active = false;
                    this.player.active = false;
                    this.pauseGameSound = true;
                    this.themeSong.stop();
                    this.backgroundSound.stop();
                    this.gameOver = new pearlcatch.entity.GameOver();
                    this.gameOver.scaleX = 0.8;
                    this.gameOver.scaleY = 0.8;
                    this.gameOver.center = this.application.screen.center;
                    this.stage.addChild(this.gameOver);
                    this.m_gameOver();
                    this.sharks.splice(i, 1);
                    this.stage.removeChild(this.sharks[i]);
                    if (this.gameOverFlag == false) {
                        this.gameOverStop = true;
                        this.gameOverFlag = true;
                        this.checkHighScore();
                    }
                }
            }
        }

        this.pearlInterval -= step;
        if (this.pearlInterval < 0) {
            this.pearlInterval = 5000;
            this.pearl_size = this.entity_sizes[Math.floor(Math.random() * this.entity_sizes.length)];
            this.createPearl(this.pearl_size);
        }

        for (var i = 0; i < this.score.length; i++) {
            if (this.player.hitTestObject(this.score[i])) {
                this.m_initPearlSound();
                var pearlPoints = this.score[i].pearlScore;
                this.stage.removeChild(this.score[i]);
                this.totalScore = this.totalScore + this.score[i].pearlScore;
                this.hud.score.text = this.totalScore.toString();
                this.score.splice(i, 1);
                this.finalScore = parseInt(this.totalScore);
                var displayPoints = new pearlcatch.entity.Points(this, pearlPoints);
                displayPoints.x = this.player.x + 100;
                displayPoints.y = this.player.y - 30;
                this.stage.addChild(displayPoints);
            }
        }

        this.squidInterval -= step;
        if (this.squidInterval < 0) {
            this.squidInterval = 6000;
            this.createSquid();
        }

        for (var i = 0; i < this.squids.length; i++) {
            if (this.power == null) {
                if (this.player.hitTestObject(this.squids[i])) {
                    this.m_initSquidSound();
                    var splat = new pearlcatch.entity.Splatter();
                    splat.y = rune.util.Math.random(0, 570);
                    splat.x = rune.util.Math.random(0, 1000);
                    this.squids.splice(i, 1);
                    this.stage.addChild(splat);
                }
            }
        }

        this.starfishInterval -= step;
        if (this.level >= 1800) {
            if (this.starfishInterval < 0) {
                this.starfishInterval = 30000;
                this.createStarfish();
            }
        }
        // ---------------------------------- Ta bort objekt utanför rutan i x-led ---------------------------------------- //
        for (var s = 0; s < this.sharks.length; s++) {
            if (this.sharks[s].x < -352) {
                this.stage.removeChild(this.sharks[s], true);
                this.sharks.splice(s, 1);
            }
        }

        for (var b = 0; b < this.squids.length; b++) {
            if (this.squids[b].x < -174) {
                this.stage.removeChild(this.squids[b], true);
                this.squids.splice(b, 1);
            }
        }

        for (var p = 0; p < this.score.length; p++) {
            if (this.score[p].x < -110) {
                this.stage.removeChild(this.score[p], true);
                this.score.splice(p, 1);
            }
        }

        for (var i = 0; i < this.stars.length; i++) {
            if (this.player.hitTestObject(this.stars[i])) {
                this.m_initStarSound();
                this.power = new pearlcatch.entity.Power(this);
                this.stage.removeChild(this.stars[i], true);
                this.stars.splice(i, 1);
                this.stage.addChildAt(this.power, 1);
            }
        }

        if (this.power !== null) {
            this.power.center = this.player.center;
        }
    }

    if (this.keyboard.justPressed("RIGHT") && this.gameOverStop == true) {
        this.m_initClickSound();
        if (this.clicked == 1) {
            return;
        } else {
            this.clicked += 1;
            this.m_playButton.alpha = 0.8;
            this.m_menuButton.alpha = 1;
        }
    }

    if (this.keyboard.justPressed("LEFT") && this.gameOverStop == true) {
        this.m_initClickSound();
        if (this.clicked == 0) {
            return;
        } else {
            this.clicked += -1;
            this.m_playButton.alpha = 1;
            this.m_menuButton.alpha = 0.8;
        }
    }

    if (this.clicked == 0 && this.keyboard.justPressed("ENTER")) {
        this.application.scenes.load([new pearlcatch.scene.Game()]);
    }

    if (this.clicked == 1 && this.keyboard.justPressed("ENTER")) {
        this.application.scenes.load([new pearlcatch.scene.Menu()]);
    }
};

/**
 * @inheritDoc
 */
pearlcatch.scene.Game.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};

/**
 * Creates sound for the buttons in game over state
 */
pearlcatch.scene.Game.prototype.m_initClickSound = function() {
    this.application.sounds.music.volume = 0.3;
    var clickSound = this.application.sounds.music.get("buttonclick");
    clickSound.play();
    this.application.sounds.music.volume = 1.0;
};

/**
 * 
 * To create a shark on random y-position.
 */
pearlcatch.scene.Game.prototype.createSharks = function(shark_size) {
    this.getSharkSize(shark_size);
    var shark = this.shark;
    shark.y = rune.util.Math.random(0, 570);
    shark.centerY = this.player.centerY;
    shark.x = 1280;
    this.sharks.push(shark);
    this.stage.addChild(shark);
};

/**
 * 
 * Creates a shark in a specific size
 */
pearlcatch.scene.Game.prototype.getSharkSize = function(shark_size) {
    if (shark_size == "small") {
        return this.shark = new pearlcatch.entity.SmallShark(this.speed);
    }

    if (shark_size == "medium") {
        return this.shark = new pearlcatch.entity.MediumShark(this.speed);
    }

    if (shark_size == "big") {
        return this.shark = new pearlcatch.entity.LargeShark(this.speed);
    }
};

/**
 * Creates a pearl on random y-position.
 */
pearlcatch.scene.Game.prototype.createPearl = function(pearl_size) {
    this.getPearlSize(pearl_size);
    var pearl = this.pearl;
    pearl.y = rune.util.Math.random(0, 570);
    pearl.x = 1280;
    this.score.push(pearl);
    this.stage.addChild(pearl);
};

/**
 * Creates a pearl in a specific size
 */
pearlcatch.scene.Game.prototype.getPearlSize = function(pearl_size) {
    if (pearl_size == "small") {
        return this.pearl = new pearlcatch.entity.Pearl();
    }

    if (pearl_size == "medium") {
        return this.pearl = new pearlcatch.entity.PearlMedium();
    }

    if (pearl_size == "big") {
        return this.pearl = new pearlcatch.entity.PearlLarge();
    }
};

/**
 * Creates a squid on random y-position.
 */
pearlcatch.scene.Game.prototype.createSquid = function() {
    var squid = new pearlcatch.entity.Squid();
    squid.y = rune.util.Math.random(0, 570);
    squid.x = 1280;
    this.squids.push(squid);
    this.stage.addChild(squid);
};

/**
 * Creates a starfish on random y-position
 */
pearlcatch.scene.Game.prototype.createStarfish = function() {
    var starfish = new pearlcatch.entity.Starfish(this);
    starfish.y = rune.util.Math.random(0, 570);
    starfish.x = 1280;
    this.stars.push(starfish);
    this.stage.addChild(starfish);
}

/**
 * Creates the movement of the bubbles
 */
pearlcatch.scene.Game.prototype.m_initBubbleMoving = function() {
    this.m_smallBubble.y -= 0.1;
    this.m_miniBubble.y -= 0.1;
    this.m_smallBubble2.y -= 0.1;
    this.m_miniBubble2.y -= 0.1;
    if (this.m_smallBubble.y <= 80) {
        this.m_smallBubble.y = 100;
    }
    if (this.m_miniBubble.y <= 130) {
        this.m_miniBubble.y = 150;
    }
    if (this.m_smallBubble2.y <= 80) {
        this.m_smallBubble2.y = 100;
    }
    if (this.m_miniBubble2.y <= 130) {
        this.m_miniBubble2.y = 150;
    }
};

/**
 * Method to check if the score is a highscore
 */
pearlcatch.scene.Game.prototype.checkHighScore = function() {
    if (this.application.highscores.test(this.finalScore, 0) == -1) {} else {
        this.sendHighscore();
    }
}

/**
 * Method to send the highscore to the highscorelist
 */
pearlcatch.scene.Game.prototype.sendHighscore = function() {
    this.themeSong.stop();
    this.application.scenes.load([new pearlcatch.scene.NewHighscore(this.finalScore)]);
};

/**
 * Graphic for the gameover sign
 */
pearlcatch.scene.Game.prototype.m_gameOver = function() {
    this.m_playButton = new rune.display.Sprite(
        460,
        600,
        170,
        80,
        "",
        "play_button"
    );

    this.stage.addChild(this.m_playButton);

    this.m_menuButton = new rune.display.Graphic(
        650,
        600,
        170,
        81,
        "",
        "menu_button"
    );
    this.stage.addChild(this.m_menuButton);
    this.m_playButton.alpha = 1;
    this.m_menuButton.alpha = 0.8;
};