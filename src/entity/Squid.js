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
pearlcatch.entity.Squid = function(player) {


    //this.player = player;
    //console.log(this.player);

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 0, 0, 100, 174, "", "squid");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.Squid.prototype = Object.create(rune.display.Sprite.prototype);
pearlcatch.entity.Squid.prototype.constructor = pearlcatch.entity.Squid;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.entity.Squid.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.hitbox.set(0, 0, 100, 174);



    //  this.m_obj = new rune.display.Sprite(650, 650, 64, 30, "#ffffff");
    //this.stage.addChild(this.m_obj);


};



/**
 * @inheritDoc
 */


pearlcatch.entity.Squid.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    //this.m_player2.y = Math.floor(Math.random() * 200) + 1;

    this.x -= 1.5;

};

/**
 * @inheritDoc
 */
pearlcatch.entity.Squid.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};