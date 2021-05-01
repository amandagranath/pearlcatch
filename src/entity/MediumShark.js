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
pearlcatch.entity.MediumShark = function(player) {


    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 0, 0, 290, 163, "", "medium_shark");
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
    this.hitbox.set(15, 50, 190, 70);


};



/**
 * @inheritDoc
 */


pearlcatch.entity.MediumShark.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);

    this.x -= 1.5;


    if (this.keyboard.justPressed("space")) {
        this.application.scenes.load([new pearlcatch.scene.Game()]);
    }
};

/**
 * @inheritDoc
 */
pearlcatch.entity.MediumShark.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};