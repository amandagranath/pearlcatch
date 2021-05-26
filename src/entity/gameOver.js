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
 * Represent gameover graphic
 */
pearlcatch.entity.GameOver = function() {
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 0, 0, 1025, 565, "", "gameover");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.GameOver.prototype = Object.create(rune.display.Sprite.prototype);
pearlcatch.entity.GameOver.prototype.constructor = pearlcatch.entity.GameOver;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.entity.GameOver.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.tweens = new rune.tween.Tweens();
    this.timers = new rune.timer.Timers();
    this.timers.create({
        duration: Infinity,
        scope: this,
        onComplete: function() {
            this.tweens.add(this, {

                alpha: 0,
                scope: this,
                oncomplete: function(obj) {
                    obj.parent.addChild(obj);
                }
            })
        }
    });
    this.rotation = 105;
    this.tweens.add(this, {
        duration: 2000,
        rotation: 0
    })
};



/**
 * @inheritDoc
 */


pearlcatch.entity.GameOver.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);

    this.timers.update(step);
    this.tweens.update(step);
};

/**
 * @inheritDoc
 */
pearlcatch.entity.GameOver.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};