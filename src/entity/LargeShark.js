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
pearlcatch.entity.LargeShark = function(speed, player) {
    //this.totalScore = totalScore;
    this.speed = speed;
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 0, 0, 352, 233, "", "big_shark_sprite_8");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.LargeShark.prototype = Object.create(rune.display.Sprite.prototype);
pearlcatch.entity.LargeShark.prototype.constructor = pearlcatch.entity.LargeShark;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.entity.LargeShark.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.hitbox.set(15, 50, 300, 130);

    this.animations.add("swim", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);

};



/**
 * @inheritDoc
 */


pearlcatch.entity.LargeShark.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    this.x -= this.speed;
};

/**
 * @inheritDoc
 */
pearlcatch.entity.LargeShark.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};