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
pearlcatch.entity.SmallShark = function(player) {


    //this.player = player;
    //console.log(this.player);

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 0, 0, 225, 150, "", "small_shark");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.SmallShark.prototype = Object.create(rune.display.Sprite.prototype);
pearlcatch.entity.SmallShark.prototype.constructor = pearlcatch.entity.SmallShark;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.entity.SmallShark.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.hitbox.set(15, 50, 190, 70);



    //  this.m_obj = new rune.display.Sprite(650, 650, 64, 30, "#ffffff");
    //this.stage.addChild(this.m_obj);


};



/**
 * @inheritDoc
 */


pearlcatch.entity.SmallShark.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    //this.m_player2.y = Math.floor(Math.random() * 200) + 1;

    this.x -= 1.5;


    if (this.keyboard.justPressed("space")) {
        this.application.scenes.load([new pearlcatch.scene.Game()]);
    }
};

/**
 * @inheritDoc
 */
pearlcatch.entity.SmallShark.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};