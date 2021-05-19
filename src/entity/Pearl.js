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
pearlcatch.entity.Pearl = function(player) {
    this.pearlScore = 500;
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 0, 0, 58, 57, "", "pearl_small");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.Pearl.prototype = Object.create(rune.display.Sprite.prototype);
pearlcatch.entity.Pearl.prototype.constructor = pearlcatch.entity.Pearl;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.entity.Pearl.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.hitbox.set(0, 0, 58, 57);

    // this.animations.add("glow", [0, 1, 2, 3], 2, true);


};



/**
 * @inheritDoc
 */


pearlcatch.entity.Pearl.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);

    this.x -= 1.5;
    this.animations.gotoAndPlay("glow");
    this.rotation += 1;

};

/**
 * @inheritDoc
 */
pearlcatch.entity.Pearl.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
    console.log("liten pärla");
};