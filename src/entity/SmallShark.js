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
pearlcatch.entity.SmallShark = function(speed) {
    this.speed = speed;
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    //rune.display.Sprite.call(this, 0, 0, 225, 150, "", "small_shark");
    rune.display.Sprite.call(this, 0, 0, 352, 233, "", "big_shark_sprite_8");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.SmallShark.prototype = Object.create(rune.display.Sprite.prototype);
pearlcatch.entity.SmallShark.prototype.constructor = pearlcatch.entity.SmallShark;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.entity.SmallShark.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.hitbox.set(15, 50, 300, 150);
    this.animations.add("swim", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);

    this.scaleX = 0.5;
    this.scaleY = 0.5;

};



/**
 * @inheritDoc
 */


pearlcatch.entity.SmallShark.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);

    this.x -= this.speed;

};

/**
 * @inheritDoc
 */
pearlcatch.entity.SmallShark.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
    console.log("liten haj");
};