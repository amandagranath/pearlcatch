//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------
/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.display.DisplayObjectContainer

 * @class
 * @classdesc
 *
 * Represent the HUD
 */
pearlcatch.scene.HUD = function(gamescope) {
    //Public properties
    this.score = null;
    this.gamescope = gamescope;
    //--------------------------------------------------------------------------
    //  Constructor call
    //--------------------------------------------------------------------------
    /**
     *  Call super constructor scope.
     */
    rune.display.DisplayObjectContainer.call(this, 0, 0, 1280, 100, "");
};
//------------------------------------------------------------------------------
//  Inheritance
//------------------------------------------------------------------------------
pearlcatch.scene.HUD.prototype = Object.create(rune.display.DisplayObjectContainer.prototype);
pearlcatch.scene.HUD.prototype.constructor = pearlcatch.scene.HUD;
//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.scene.HUD.prototype.init = function() {
    rune.display.DisplayObjectContainer.prototype.init.call(this);
    this.m_hud = new rune.display.Graphic(
        500,
        0,
        250,
        46,
        "",
        "score_board_3"
    );

    this.addChild(this.m_hud);
    this.m_initScore();
};

/**
 * @inheritDoc
 */
pearlcatch.scene.HUD.prototype.update = function(step) {
    rune.display.DisplayObjectContainer.prototype.update.call(this, step);
};

/**
 * @inheritDoc
 */
pearlcatch.scene.HUD.prototype.dispose = function() {
    rune.display.DisplayObjectContainer.prototype.dispose.call(this);
};

pearlcatch.scene.HUD.prototype.m_initScore = function() {
    this.score = new pearlcatch.entity.WhiteFont();
    this.score.y = 10;
    this.score.x = 630;
    this.score.scaleY = 0.3;
    this.score.scaleX = 0.3;
    this.addChild(this.score);
};