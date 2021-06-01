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
pearlcatch.entity.Splatter = function() {
    //Public properties
    this.timers = null;
    this.tweens = null;


    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 0, 0, 500, 303, "", "splatter");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.Splatter.prototype = Object.create(rune.display.Sprite.prototype);
pearlcatch.entity.Splatter.prototype.constructor = pearlcatch.entity.Splatter;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
/**
 * Timer to make the splatter visible for 5 seconds and then fade outs
 */
pearlcatch.entity.Splatter.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.tweens = new rune.tween.Tweens();
    this.timers = new rune.timer.Timers();
    this.timers.create({
        duration: 5000,
        scope: this,
        onComplete: function() {
            this.tweens.add(this, {
                duration: 1000,
                alpha: 0,
                scope: this,
                oncomplete: function(obj) {
                    obj.parent.removeChild(obj);
                }
            })
        }
    });
    this.rotation = 45;
    this.tweens.add(this, {
        duration: 1000,
        rotation: 0
    })
};

/**
 * @inheritDoc
 */
pearlcatch.entity.Splatter.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    this.timers.update(step);
    this.tweens.update(step);
};

/**
 * @inheritDoc
 */
pearlcatch.entity.Splatter.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};