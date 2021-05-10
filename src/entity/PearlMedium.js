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
pearlcatch.entity.PearlMedium = function(player) {

    this.pearlScore = 300;
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 0, 0, 83, 82, "", "pearl_medium");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.PearlMedium.prototype = Object.create(rune.display.Sprite.prototype);
pearlcatch.entity.PearlMedium.prototype.constructor = pearlcatch.entity.PearlMedium;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.entity.PearlMedium.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.hitbox.set(0, 0, 83, 82);


};



/**
 * @inheritDoc
 */


pearlcatch.entity.PearlMedium.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    this.x -= 1.5;
    this.rotation += 1;
};

/**
 * @inheritDoc
 */
pearlcatch.entity.PearlMedium.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};