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
 * Respresent seperate points
 */
pearlcatch.entity.Points = function(gameScope, points) {
    //Public properties
    this.gameScope = gameScope;
    this.points = points;


    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    if (this.points == 500) {
        rune.display.Sprite.call(this, 0, 0, 75, 20, "", "500_points");
    }

    if (this.points == 300) {
        rune.display.Sprite.call(this, 0, 0, 75, 19, "", "300_points");
    }

    if (this.points == 100) {
        rune.display.Sprite.call(this, 0, 0, 71, 19, "", "100_points");
    }

    if (this.points == 1000) {
        rune.display.Sprite.call(this, 0, 0, 75, 19, "", "200_minus");
    }
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.Points.prototype = Object.create(rune.display.Sprite.prototype);
pearlcatch.entity.Points.prototype.constructor = pearlcatch.entity.Points;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */

/**
 * Timer for the points that is visible for a second
 */
pearlcatch.entity.Points.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.tweens = new rune.tween.Tweens();
    this.timers = new rune.timer.Timers();
    this.timers.create({
        duration: 500,
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
};

/**
 * @inheritDoc
 */
pearlcatch.entity.Points.prototype.update = function(step) {
    this.timers.update(step);
    this.tweens.update(step);
};

/**
 * @inheritDoc
 */
pearlcatch.entity.Points.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};