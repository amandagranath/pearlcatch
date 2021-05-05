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
pearlcatch.entity.Splatter = function(player) {


    //this.player = player;
    //console.log(this.player);

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 0, 0, 500, 303, "", "splatter");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.Splatter.prototype = Object.create(rune.display.Sprite.prototype);
pearlcatch.entity.Splatter.prototype.constructor = pearlcatch.entity.Splatter;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.entity.Splatter.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);

};



/**
 * @inheritDoc
 */


pearlcatch.entity.Splatter.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);

};

/**
 * @inheritDoc
 */
pearlcatch.entity.Splatter.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};