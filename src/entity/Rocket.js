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
pearlcatch.entity.Rocket = function(player) {

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
    rune.display.Sprite.call(this, 300, 500, 143, 459, "", "rocket");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.Rocket.prototype = Object.create(rune.display.Sprite.prototype);
pearlcatch.entity.Rocket.prototype.constructor = pearlcatch.entity.Rocket;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.entity.Rocket.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.rotation = -35;
    this.scaleY = 0.5;
    this.scaleX = 0.5;

    /* this.tweens = new rune.tween.Tweens();
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
     })*/

};



/**
 * @inheritDoc
 */


pearlcatch.entity.Rocket.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    this.y -= 2.5;
    // this.timers.update(step);
    //this.tweens.update(step);
};

/**
 * @inheritDoc
 */
pearlcatch.entity.Rocket.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};