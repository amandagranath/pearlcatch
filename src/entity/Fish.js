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
pearlcatch.entity.Fish = function(player) {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.display.Sprite.call(this, 650, 360, 100, 48, "", "purplefish_sprite_6");
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.Fish.prototype = Object.create(rune.display.Sprite.prototype);
pearlcatch.entity.Fish.prototype.constructor = pearlcatch.entity.Fish;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.entity.Fish.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);


    this.animations.add("swim", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 15, true);


    //  this.m_obj = new rune.display.Sprite(650, 650, 64, 30, "#ffffff");
    //this.stage.addChild(this.m_obj);


};



/**
 * @inheritDoc
 */


pearlcatch.entity.Fish.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    //this.m_player2.y = Math.floor(Math.random() * 200) + 1;

    if (this.keyboard.pressed("RIGHT")) {

        this.x += 2;
        this.flippedY = false;
        this.animations.gotoAndPlay("swim");
    }
    if (this.keyboard.pressed("LEFT")) {

        this.x -= 2;
        this.flippedX = false;
        this.animations.gotoAndPlay("swim");
    }
    if (this.keyboard.pressed("DOWN")) {
        if (this.y != 687.5) {
            this.y += 2;
            this.flippedY = false;
            this.animations.gotoAndPlay("idle");

        } else {
            this.y = 687.5;
        }



    } else if (this.keyboard.pressed("UP")) {
        if (this.y != 0.5) {
            this.y -= 2;

        } else {
            this.y = 0.5

        }

        this.animations.gotoAndPlay("idle");

    } else {
        this.animations.gotoAndPlay("idle");
    }

};

/**
 * @inheritDoc
 */
pearlcatch.entity.Fish.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};