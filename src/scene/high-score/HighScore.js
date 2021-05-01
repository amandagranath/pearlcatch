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
 pearlcatch.scene.HighScore = function() {

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

pearlcatch.scene.HighScore.prototype = Object.create(rune.scene.Scene.prototype);
pearlcatch.scene.HighScore.prototype.constructor = pearlcatch.scene.HighScore;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

pearlcatch.scene.HighScore.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);
    this.cameras.getCamera(0).fillColor = "#90e0ef";

    var text = new rune.text.BitmapField("High Score");
    text.autoSize = true;
    text.center = this.application.screen.center;

    this.stage.addChild(text);
};