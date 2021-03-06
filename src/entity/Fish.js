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
 * Represent the maincharacter
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
};



/**
 * @inheritDoc
 */


pearlcatch.entity.Fish.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    this.rotation = 0;
    if (this.keyboard.pressed("RIGHT")) {
        if (this.x != 1180) {
            this.rotation = 0;
            this.x += 2;
            this.flippedX = false;
            this.animations.gotoAndPlay("swim");
        } else {
            this.x = 1180;
        }
    }
    if (this.keyboard.pressed("LEFT")) {
        if (this.x != 10) {
            this.rotation = 0;
            this.x -= 2;
            this.flippedX = true;
            this.animations.gotoAndPlay("swim");
        } else {
            this.x = 10;
        }
    }
    if (this.keyboard.pressed("DOWN")) {
        if (this.y != 672) {
            this.y += 2;
            this.flippedY = false;
            this.rotation = 35;
            this.animations.gotoAndPlay("idle");
        } else {
            this.y = 672;
        }

    } else if (this.keyboard.pressed("UP")) {
        if (this.y != 10) {
            this.y -= 2;
            this.rotation = -35;
            this.animations.gotoAndPlay("idle");

        } else {
            this.y = 10;
        }
    }
};

/**
 * @inheritDoc
 */
pearlcatch.entity.Fish.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};