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
pearlcatch.entity.MediumShark = function(speed) {
    this.speed = speed;

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    //rune.display.Sprite.call(this, 0, 0, 290, 163, "", "medium_shark");
    rune.display.Sprite.call(this, 0, 0, 352, 233, "", "big_shark_sprite_8");

};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.MediumShark.prototype = Object.create(rune.display.Sprite.prototype);
pearlcatch.entity.MediumShark.prototype.constructor = pearlcatch.entity.MediumShark;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.entity.MediumShark.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.hitbox.set(15, 50, 250, 100);
    this.animations.add("swim", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);
    this.scaleX = 0.7;
    this.scaleY = 0.7;


};



/**
 * @inheritDoc
 */


pearlcatch.entity.MediumShark.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);

    this.x -= this.speed;

};

/**
 * @inheritDoc
 */
pearlcatch.entity.MediumShark.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};