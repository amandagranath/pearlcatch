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
pearlcatch.entity.LargeShark = function(player) {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 0, 0, 330, 185, "", "large_shark");
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
    this.hitbox.set(15, 50, 190, 70);


};



/**
 * @inheritDoc
 */


pearlcatch.entity.LargeShark.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);

    this.x -= 1.5;


    if (this.keyboard.justPressed("space")) {
        this.application.scenes.load([new pearlcatch.scene.Game()]);
    }
};

/**
 * @inheritDoc
 */
pearlcatch.entity.LargeShark.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};