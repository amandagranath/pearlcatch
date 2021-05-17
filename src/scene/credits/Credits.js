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
 pearlcatch.scene.Credits = function() {

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

pearlcatch.scene.Credits.prototype = Object.create(rune.scene.Scene.prototype);
pearlcatch.scene.Credits.prototype.constructor = pearlcatch.scene.Credits;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

pearlcatch.scene.Credits.prototype.init = function() {
    this.m_initBackground();
    this.m_initMenuButton();


    rune.scene.Scene.prototype.init.call(this);
    this.cameras.getCamera(0).fillColor = "#90e0ef";
};

pearlcatch.scene.Credits.prototype.update = function(step) {
    if (this.keyboard.justPressed("ENTER")) {
        this.application.sounds.music.volume = 0.3;
        var clickSound = this.application.sounds.music.get("buttonclick");
        clickSound.play();
        this.application.scenes.load([new pearlcatch.scene.Menu()]);
    }
};


pearlcatch.scene.Credits.prototype.m_initBackground = function() {
    this.m_creditsBackground = new rune.display.Graphic(
        0,
        0,
        1280,
        720,
        "",
        "credits"
    );
    this.stage.addChild(this.m_creditsBackground);
};

pearlcatch.scene.Credits.prototype.m_initMenuButton = function() {
    this.m_menuButton = new rune.display.Graphic(
        40,
        600,
        170,
        81,
        "",
        "menu_button"
    );
    this.stage.addChild(this.m_menuButton);
};



/**
 * @inheritDoc
 */
 pearlcatch.scene.Menu.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};