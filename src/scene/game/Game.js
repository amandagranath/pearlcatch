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
pearlcatch.scene.Game = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.scene.Scene.call(this);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.scene.Game.prototype = Object.create(rune.scene.Scene.prototype);
pearlcatch.scene.Game.prototype.constructor = pearlcatch.scene.Game;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.scene.Game.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);
    this.m_initBackground();
    this.m_initPlayer();
    this.m_initPearls();
    this.m_initSquid();
    this.m_initWav();

    // this.m_initSort();
    this.cameras.getCamera(0).fillColor = "#ade8f4";


    //  this.m_obj = new rune.display.Sprite(650, 650, 64, 30, "#ffffff");
    //this.stage.addChild(this.m_obj);


};
pearlcatch.scene.Game.prototype.m_initCamera = function() {
    this.m_camera = this.cameras.add(this.cameras.create());
    this.cameras.getCamera(0).fade.opacity = 1.0;
    this.cameras.getCamera(0).fade.in(1500);
};


/**
 * @inheritDoc
 */
pearlcatch.scene.Game.prototype.m_initBackground = function() {
    this.m_background = new rune.display.Graphic(
        0,
        0,
        1280,
        720,
        "",
        "background"
    );
    this.stage.addChild(this.m_background);
};
pearlcatch.scene.Game.prototype.m_initWav = function() {
    /*  this.application.sounds.music.volume = 0.5;
      var music = this.application.sounds.music.get("themesong")
      var music2 = this.application.sounds.music.get("backgroundwater")
      music.play();
      music.resume();
      music2.play(); */
};
pearlcatch.scene.Game.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    //this.m_player2.y = Math.floor(Math.random() * 200) + 1;
    this.pearl.x -= 1.5;
    this.squid.x -= 1.5;
    this.m_player2.x -= 1.5;
    if (this.keyboard.pressed("RIGHT")) {

        this.m_player.x += 1.5;
        this.m_player.flippedY = false;
        this.m_player.animations.gotoAndPlay("idle");
    }
    if (this.keyboard.pressed("LEFT")) {

        this.m_player.x -= 1.5;
        this.m_player.flippedX = false;
        this.m_player.animations.gotoAndPlay("idle");
    }
    if (this.keyboard.pressed("DOWN")) {
        if (this.m_player.y != 687.5) {
            this.m_player.y += 1.5;
            this.m_player.flippedY = false;
            this.m_player.animations.gotoAndPlay("idle");
            console.log(this.m_player.y);
        } else {
            this.m_player.y = 687.5;
        }



    } else if (this.keyboard.pressed("UP")) {
        if (this.m_player.y != 0.5) {
            this.m_player.y -= 1.5;
            console.log(this.application.screen.height);

        } else {
            this.m_player.y = 0.5

        }

        this.m_player.animations.gotoAndPlay("idle");

    } else {
        this.m_player.animations.gotoAndPlay("idle");
    }
    if (this.m_player.hitTestObject(this.m_player2)) {
        this.m_player2.x = this.m_player.x;
        text = new rune.text.BitmapField("GAME OVER " + "Press enter to play again");
        text.autoSize = true;
        text.center = this.application.screen.center;
        this.stage.addChild(text);
    }
    if (this.keyboard.justPressed("space")) {
        this.application.scenes.load([new pearlcatch.scene.Game()]);
    }
    if (this.m_player.hitTestObject(this.pearl)) {
        this.pearl.x = this.m_player.x + 2;
        this.application.sounds.music.volume = 0.2;
        var catchedPearl = this.application.sounds.music.get("catch_pearl")

        catchedPearl.play();
    }

};

/**
 * @inheritDoc
 */
pearlcatch.scene.Game.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};


pearlcatch.scene.Game.prototype.m_initPlayer = function() {

    this.m_player = new rune.display.Sprite(
        650,
        650,
        100,
        48,
        "",
        "purplefish"
    );
    this.m_player2 = new rune.display.Sprite(
        1280,
        250,
        225,
        150,
        "",
        "small_shark"
    );

    this.m_player.animations.add("idle", [0], true);
    this.m_player2.animations.add("idle", [0], true);
    this.stage.addChild(this.m_player);
    this.stage.addChild(this.m_player2);

}
pearlcatch.scene.Game.prototype.m_initPearls = function() {
    this.pearl = new rune.display.Sprite(
        1280,
        100,
        102,
        100,
        "",
        "small_pearl"
    );
    this.stage.addChild(this.pearl);
}

pearlcatch.scene.Game.prototype.m_initSquid = function() {
    this.squid = new rune.display.Sprite(
        1280,
        50,
        300,
        450,
        "",
        "large_squid"
    );
    this.stage.addChild(this.squid);

}