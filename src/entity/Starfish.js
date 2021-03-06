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
 * Represent graphic for starfish
 */
pearlcatch.entity.Starfish = function(gameScope) {
    //Public properties
    this.gameScope = gameScope;

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 0, 0, 50, 48, "", "sjostjarna2");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.Starfish.prototype = Object.create(rune.display.Sprite.prototype);
pearlcatch.entity.Starfish.prototype.constructor = pearlcatch.entity.Starfish;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */

/**
 * Creates a timer and tween for how long the starfish should appear
 */
pearlcatch.entity.Starfish.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.hitbox.set(0, 0, 50, 48);
    this.tweens = new rune.tween.Tweens();
    this.timers = new rune.timer.Timers();
    this.timers.create({
        duration: 500,
        scope: this,
        onComplete: function() {
            this.tweens.add(this, {
                duration: 5000,
                alpha: 0,
                scope: this,
                oncomplete: function(obj) {
                    obj.parent.removeChild(obj);
                    this.gameScope.totalScore = this.gameScope.totalScore += -200;
                    this.gameScope.hud.score.text = this.gameScope.totalScore.toString();
                    var displayPoints = new pearlcatch.entity.Points(this, 1000);
                    this.gameScope.stage.addChild(displayPoints);
                    displayPoints.x = 800;
                    displayPoints.y = 50;
                    this.gameScope.stage.removeChild(obj, true);
                    this.gameScope.stars.splice(obj, 1);
                }
            })
        }
    });
};

/**
 * @inheritDoc
 */
pearlcatch.entity.Starfish.prototype.update = function(step) {
    this.x -= 1.5;
    this.timers.update(step);
    this.tweens.update(step);
};

/**
 * @inheritDoc
 */
pearlcatch.entity.Starfish.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};