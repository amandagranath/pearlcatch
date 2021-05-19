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
pearlcatch.entity.FireWork = function() {



    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 0, 0, 300, 296, "", "firework");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.FireWork.prototype = Object.create(rune.display.Sprite.prototype);
pearlcatch.entity.FireWork.prototype.constructor = pearlcatch.entity.FireWork;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.entity.FireWork.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);

    this.animations.add("swim", [0, 1, 2], 3, true);

};



/**
 * @inheritDoc
 */


pearlcatch.entity.FireWork.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);

};

/**
 * @inheritDoc
 */
pearlcatch.entity.FireWork.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};