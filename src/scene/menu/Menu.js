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
pearlcatch.scene.Menu = function() {

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
    rune.scene.Scene.prototype.init.call(this);
    this.cameras.getCamera(0).fillColor = "#90e0ef";


    var text = new rune.text.BitmapField("Welcome to Pearl Catch");
    text.autoSize = true;
    text.center = this.application.screen.center;

    this.stage.addChild(text);
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
/**
 * @inheritDoc
 */
pearlcatch.scene.Menu.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    if (this.keyboard.justPressed("space")) {
        this.application.scenes.load([new pearlcatch.scene.Game()]);
    }
};

/**
 * @inheritDoc
 */
pearlcatch.scene.Menu.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};