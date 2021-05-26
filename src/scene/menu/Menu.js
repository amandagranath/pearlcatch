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
 * Menu state
 */
pearlcatch.scene.Menu = function() {
    //Public properties
    this.activated = 0;
    this.buttons = [];

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

pearlcatch.scene.Menu.prototype = Object.create(rune.scene.Scene.prototype);
pearlcatch.scene.Menu.prototype.constructor = pearlcatch.scene.Menu;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.scene.Menu.prototype.init = function() {
    this.m_initMenuBackground();
    this.m_initBubbles();
    this.m_initBackgroundSound();
    this.m_initPlayButton();
    this.m_initHighScore();
    this.m_initCredits();
    this.m_deactivateBtn();
    this.m_activeBtn = "play";
    rune.scene.Scene.prototype.init.call(this);
    this.cameras.getCamera(0).fillColor = "#90e0ef";
};


pearlcatch.scene.Menu.prototype.m_initMenuBackground = function() {
    this.m_menuBackground = new rune.display.Graphic(
        0,
        0,
        1280,
        720,
        "",
        "background_menu"
    );
    this.stage.addChild(this.m_menuBackground);
};

pearlcatch.scene.Menu.prototype.m_initBubbles = function() {
    this.m_largeBubble = new rune.display.Graphic(
        100,
        200,
        50,
        50,
        "",
        "bubblelarge"
    );
    this.stage.addChild(this.m_largeBubble);
    this.m_smallMenuBubble = new rune.display.Graphic(
        110,
        280,
        30,
        30,
        "",
        "smallbubble"
    );
    this.stage.addChild(this.m_smallMenuBubble);
    this.m_smallMenuBubble2 = new rune.display.Graphic(
        940,
        280,
        30,
        30,
        "",
        "smallbubble"
    );
    this.stage.addChild(this.m_smallMenuBubble2);
    this.m_mediumBubble = new rune.display.Graphic(
        1000,
        200,
        40,
        40,
        "",
        "mediumbubble"
    );
    this.stage.addChild(this.m_mediumBubble);
};

pearlcatch.scene.Menu.prototype.m_initMovingBubblesMenu = function() {
    this.m_largeBubble.y -= 0.3;
    this.m_smallMenuBubble.y -= 0.3;
    this.m_smallMenuBubble2.y -= 0.3;
    this.m_mediumBubble.y -= 0.3;
    if (this.m_largeBubble.y <= 150) {
        this.m_largeBubble.y = 200;
    }
    if (this.m_smallMenuBubble.y <= 200) {
        this.m_smallMenuBubble.y = 280;
    }
    if (this.m_mediumBubble.y <= 150) {
        this.m_mediumBubble.y = 200;
    }
    if (this.m_smallMenuBubble2.y <= 200) {
        this.m_smallMenuBubble2.y = 280;
    }
};

pearlcatch.scene.Menu.prototype.m_initBackgroundSound = function() {
    this.application.sounds.music.volume = 1;
    this.background_music = this.application.sounds.music.get("backgroundwater");
    this.background_music.play();
    this.background_music.resume();
};

pearlcatch.scene.Menu.prototype.m_initPlayButton = function() {
    this.m_playButton = new rune.display.Sprite(
        560,
        300,
        170,
        80,
        "",
        "play_button"
    );
    this.stage.addChild(this.m_playButton);
    this.buttons.push(this.m_playButton);
};

pearlcatch.scene.Menu.prototype.m_initHighScore = function() {
    this.m_highScoreButton = new rune.display.Sprite(
        560,
        400,
        170,
        81,
        "",
        "high_score_button"
    );
    this.stage.addChild(this.m_highScoreButton);
    this.buttons.push(this.m_highScoreButton);
};

pearlcatch.scene.Menu.prototype.m_initCredits = function() {
    this.m_creditsBtn = new rune.display.Sprite(
        570,
        600,
        150,
        100,
        "",
        "creditsBtn"
    );
    this.stage.addChild(this.m_creditsBtn);
    this.buttons.push(this.m_creditsBtn);
};

pearlcatch.scene.Menu.prototype.m_initWav = function() {
    this.application.sounds.music.volume = 0.3;
    var clickSound = this.application.sounds.music.get("buttonclick");
    clickSound.play();
};

pearlcatch.scene.Menu.prototype.m_deactivateBtn = function() {
    for (var i = 0; i < this.buttons.length; i++) {
        if (this.buttons.indexOf(this.buttons[i]) !== this.activated) {
            this.buttons[i].alpha = 0.7;
        }
        if (this.buttons.indexOf(this.buttons[i]) == this.activated) {
            this.buttons[i].alpha = 1;
        }
    }
};

/**
 * @inheritDoc
 */
pearlcatch.scene.Menu.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    this.m_initMovingBubblesMenu();
    if (this.keyboard.justPressed("DOWN")) {
        if (this.activated == 2) {
            return;
        } else {
            this.activated += 1;
            this.m_initWav();
            this.m_deactivateBtn();
        }
    }

    if (this.keyboard.justPressed("UP")) {
        if (this.activated == 0) {
            return;
        } else {
            this.activated += -1;
            this.m_initWav();
            this.m_deactivateBtn();
        }
    }

    if (this.keyboard.justPressed("ENTER")) {
        this.m_initWav();

        if (this.activated == 0) {
            this.background_music.stop();
            this.application.scenes.load([new pearlcatch.scene.Instructions(this.background_music)]);
        }

        if (this.activated == 1) {
            this.application.scenes.load([new pearlcatch.scene.HighScore()]);
        }

        if (this.activated == 2) {
            this.application.scenes.load([new pearlcatch.scene.Credits()]);
        }
    }

    if (this.keyboard.pressed("E") && this.keyboard.pressed("R")) {
        this.application.highscores.clear();
    }

};

/**
 * @inheritDoc
 */
pearlcatch.scene.Menu.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};