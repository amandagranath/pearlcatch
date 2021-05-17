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
pearlcatch.scene.Instructions = function() {

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

pearlcatch.scene.Instructions.prototype = Object.create(rune.scene.Scene.prototype);
pearlcatch.scene.Instructions.prototype.constructor = pearlcatch.scene.Instructions;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.scene.Instructions.prototype.init = function() {
    this.m_initMenuBackground();
    //  pearlcatch.scene.Menu.prototype.m_initBackgroundSound();
    this.m_initPlayButton();
    this.m_initMenuButton();
    this.m_initMusic();
    this.m_activeButton = "play";
    this.m_deactivateBtn();
    rune.scene.Scene.prototype.init.call(this);
    this.cameras.getCamera(0).fillColor = "#90e0ef";
};


pearlcatch.scene.Instructions.prototype.m_initMenuBackground = function() {
    this.m_menuBackground = new rune.display.Graphic(
        0,
        0,
        1280,
        720,
        "",
        "how_to_3"
    );
    this.stage.addChild(this.m_menuBackground);
};

pearlcatch.scene.Instructions.prototype.m_initMusic = function() {
    this.application.sounds.music.volume = 1;
    this.backgroundSong = this.application.sounds.music.get("backgroundwater");
    this.backgroundSong.play();
    this.backgroundSong.resume();
}


pearlcatch.scene.Instructions.prototype.m_initPlayButton = function() {
    this.m_playButton = new rune.display.Graphic(
        460,
        600,
        170,
        80,
        "",
        "play_button"
    );
    this.stage.addChild(this.m_playButton);
};

pearlcatch.scene.Instructions.prototype.m_initMenuButton = function() {
    this.m_menuButton = new rune.display.Graphic(
        650,
        600,
        170,
        81,
        "",
        "menu_button"
    );
    this.stage.addChild(this.m_menuButton);
};

pearlcatch.scene.Instructions.prototype.m_initWav = function() {
    this.application.sounds.music.volume = 0.3;
    var clickSound = this.application.sounds.music.get("buttonclick");
    clickSound.play();
};

pearlcatch.scene.Instructions.prototype.m_deactivateBtn = function() {
    if (this.m_activeButton == "play") {
        this.m_playButton.alpha = 1;
        this.m_menuButton.alpha = 0.7;
    } else {
        this.m_menuButton.alpha = 1;
        this.m_playButton.alpha = 0.7;
    }
};

/**
 * @inheritDoc
 */
pearlcatch.scene.Instructions.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);

    if (this.keyboard.justPressed("RIGHT")) {
        this.m_initWav();
        this.m_activeButton = "menu";
        this.m_deactivateBtn();
    }

    if (this.keyboard.justPressed("LEFT")) {
        this.m_initWav();
        this.m_activeButton = "play";
        this.m_deactivateBtn();
    }

    if (this.keyboard.justPressed("ENTER") && this.m_activeButton == "play") {
        this.backgroundSong.stop();
        this.m_initWav();
        this.application.scenes.load([new pearlcatch.scene.Game()]);

    } else if (this.keyboard.justPressed("ENTER") && this.m_activeButton == "menu") {
        this.m_initWav();
        this.application.scenes.load([new pearlcatch.scene.Menu()]);
    }
};

/**
 * @inheritDoc
 */
pearlcatch.scene.Instructions.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};