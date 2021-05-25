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
 * Represent a pearl in large size
 */
pearlcatch.entity.PearlLarge = function() {
    //Public properties
    this.pearlScore = 100;

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 0, 0, 110, 106, "", "pearl_large");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.PearlLarge.prototype = Object.create(rune.display.Sprite.prototype);
pearlcatch.entity.PearlLarge.prototype.constructor = pearlcatch.entity.PearlLarge;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.entity.PearlLarge.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.hitbox.set(0, 0, 110, 106);
};

/**
 * @inheritDoc
 */
pearlcatch.entity.PearlLarge.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    this.x -= 1.5;
    this.rotation += 1;
    this.animations.gotoAndPlay("glow");
};

/**
 * @inheritDoc
 */
pearlcatch.entity.PearlLarge.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};