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
pearlcatch.entity.Levels = function(wave, player) {
    this.wave = wave;
    this.timers = null;
    this.tweens = null;
    //this.player = player;
    //console.log(this.player);

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 0, 0, 374, 126, "", this.wave);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.Levels.prototype = Object.create(rune.display.Sprite.prototype);
pearlcatch.entity.Levels.prototype.constructor = pearlcatch.entity.Levels;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.entity.Levels.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.tweens = new rune.tween.Tweens();
    this.timers = new rune.timer.Timers();
    this.timers.create({
        duration: 1500,
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

    this.rotation = 65;
    this.tweens.add(this, {
        duration: 1000,
        rotation: 0
    })

};



/**
 * @inheritDoc
 */


pearlcatch.entity.Levels.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    this.timers.update(step);
    this.tweens.update(step);
};

/**
 * @inheritDoc
 */
pearlcatch.entity.Levels.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};