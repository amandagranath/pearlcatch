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
 * Menu state.
 */
pearlcatch.scene.Menu = function () {
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
pearlcatch.scene.Menu.prototype.init = function () {
    this.m_initMenuBackground();
    this.m_initBackgroundSound();
    this.m_initPlayButton();
    this.m_initBestScore();
    this.m_initCredits();
    this.m_deactivateBtn();
    this.m_activeBtn = "play";
    rune.scene.Scene.prototype.init.call(this);
    this.cameras.getCamera(0).fillColor = "#90e0ef";
    //this.application.highscores.clear();
};


pearlcatch.scene.Menu.prototype.m_initMenuBackground = function () {
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

pearlcatch.scene.Menu.prototype.m_initBackgroundSound = function () {
    this.application.sounds.music.volume = 1;
    this.background_music = this.application.sounds.music.get("backgroundwater");
    this.background_music.play();
    this.background_music.resume();
};

pearlcatch.scene.Menu.prototype.m_initPlayButton = function () {
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

pearlcatch.scene.Menu.prototype.m_initBestScore = function () {
    this.m_bestScoreButton = new rune.display.Sprite(
        560,
        400,
        170,
        81,
        "",
        "best_score_button"
    );
    this.stage.addChild(this.m_bestScoreButton);
    this.buttons.push(this.m_bestScoreButton);
};

pearlcatch.scene.Menu.prototype.m_initCredits = function () {
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

pearlcatch.scene.Menu.prototype.m_initWav = function () {
    this.application.sounds.music.volume = 0.3;
    var clickSound = this.application.sounds.music.get("buttonclick");
    clickSound.play();
};

pearlcatch.scene.Menu.prototype.m_deactivateBtn = function () {
    /*if (this.m_activeBtn == "play") {
        this.m_playButton.alpha = 1;
        this.m_bestScoreButton.alpha = 0.7;
    } else {
        this.m_bestScoreButton.alpha = 1;
        this.m_playButton.alpha = 0.7;
    }*/

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
pearlcatch.scene.Menu.prototype.update = function (step) {
    rune.scene.Scene.prototype.update.call(this, step);

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

    /*if (this.keyboard.justPressed("DOWN")) {
        this.m_initWav();
        this.m_activeBtn = "score";
        this.m_deactivateBtn();

    }

    if (this.keyboard.justPressed("UP")) {
        this.m_initWav();
        this.m_activeBtn = "play";
        this.m_deactivateBtn();
    }

    if (this.keyboard.justPressed("ENTER") && this.m_activeBtn == "play") {
        this.m_initWav();
        this.application.scenes.load([new pearlcatch.scene.Instructions(this.background_music)]);
    }

    if (this.keyboard.justPressed("ENTER") && this.m_activeBtn == "score") {
        this.m_initWav();
        this.application.scenes.load([new pearlcatch.scene.HighScore()]);
    }*/

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

};



/**
 * @inheritDoc
 */
pearlcatch.scene.Menu.prototype.dispose = function () {
    rune.scene.Scene.prototype.dispose.call(this);
};