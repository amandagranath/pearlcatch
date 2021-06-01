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
 * Represent the powerup for the main character
 */
pearlcatch.entity.Power = function(gameScope) {
    //Public properties
    this.gameScope = gameScope;

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 0, 0, 224, 154, "", "blur");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.Power.prototype = Object.create(rune.display.Sprite.prototype);
pearlcatch.entity.Power.prototype.constructor = pearlcatch.entity.Power;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */

/**
 * Timer for how long the power-up is active
 */
pearlcatch.entity.Power.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.tweens = new rune.tween.Tweens();
    this.timers = new rune.timer.Timers();
    this.timers.create({
        duration: 500,
        scope: this,
        onComplete: function() {
            this.tweens.add(this, {
                duration: 15000,
                alpha: 0,
                scope: this,
                oncomplete: function(obj) {
                    obj.parent.removeChild(obj);
                    this.gameScope.power = null;
                }
            })
        }
    });
};

/**
 * @inheritDoc
 */
pearlcatch.entity.Power.prototype.update = function(step) {
    this.timers.update(step);
    this.tweens.update(step);
};

/**
 * @inheritDoc
 */
pearlcatch.entity.Power.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};