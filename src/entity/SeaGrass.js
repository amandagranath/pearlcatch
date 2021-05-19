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
pearlcatch.entity.SeaGrass = function(player) {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 400, 600, 200, 200, "", "seagrass");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.SeaGrass.prototype = Object.create(rune.display.Sprite.prototype);
pearlcatch.entity.SeaGrass.prototype.constructor = pearlcatch.entity.SeaGrass;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.entity.SeaGrass.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);

    this.scaleX = 0.5;
    this.scaleY = 0.5;
    this.animations.add("swim", [0, 1, 2, 3, 4], 6, true);



};



/**
 * @inheritDoc
 */


pearlcatch.entity.SeaGrass.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);


};

/**
 * @inheritDoc
 */
pearlcatch.entity.SeaGrass.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};