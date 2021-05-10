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
    this.hud = null;
    this.gameOver = null;
    this.sharkInterval = 0;
    this.sharks = [];
    this.squids = [];
    this.pearlInterval = 0;
    this.score = [];
    this.totalScore = 0;
    this.squidInterval = 0;
    this.starfishInterval = 0;
    this.stars = [];
    this.power = null;
    this.entity_sizes = ["small", "medium", "big"];
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
    this.m_initBubbles();
    this.m_initHud();
    this.m_initWav();

    this.player = new pearlcatch.entity.Fish(this.enemy);
    this.enemy = new pearlcatch.entity.SmallShark(this.player, 100);
    this.pearl = new pearlcatch.entity.Pearl(this.player, 100);
    this.squid = new pearlcatch.entity.Squid(this.player, 100);
    this.cameras.getCamera(0).fillColor = "#ade8f4";

    this.stage.addChild(this.player);
    this.stage.addChild(this.enemy);
    this.stage.addChild(this.squid);
    //  this.m_obj = new rune.display.Sprite(650, 650, 64, 30, "#ffffff");
    //this.stage.addChild(this.m_obj);
    this.hud = new pearlcatch.scene.HUD();
    this.cameras.getCamera(0).addChild(this.hud);

};
pearlcatch.scene.Game.prototype.m_initCamera = function() {
    this.m_camera = this.cameras.add(this.cameras.create());
    this.cameras.getCamera(0).fade.opacity = 1.0;
    this.cameras.getCamera(0).fade.in(1500);
    this.cameras.getCamera(0).debug = true;
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
pearlcatch.scene.Game.prototype.m_initBubbles = function() {
    this.m_smallBubble = new rune.display.Graphic(
        100,
        100,
        30,
        30,
        "",
        "smallbubble"
    );
    this.stage.addChild(this.m_smallBubble);
    this.m_smallBubble2 = new rune.display.Graphic(
        1180,
        100,
        30,
        30,
        "",
        "smallbubble"
    );
    this.stage.addChild(this.m_smallBubble2);
    this.m_miniBubble = new rune.display.Graphic(
        150,
        150,
        20,
        20,
        "",
        "bubblemini"
    );
    this.stage.addChild(this.m_miniBubble);
    this.m_miniBubble2 = new rune.display.Graphic(
        1130,
        150,
        20,
        20,
        "",
        "bubblemini"
    );
    this.stage.addChild(this.m_miniBubble2);
};



pearlcatch.scene.Game.prototype.m_initHud = function() {

};


pearlcatch.scene.Game.prototype.m_initWav = function() {
    /**this.application.sounds.music.volume = 0.5;
      var music = this.application.sounds.music.get("themesong")
      var music2 = this.application.sounds.music.get("backgroundwater")
      music.play();
      music.resume();
      music2.play(); */
};
pearlcatch.scene.Game.prototype.m_initPearlSound = function() {
    this.application.sounds.music.volume = 0.2;
    var music = this.application.sounds.music.get("catch_pearl")
    music.play();
};
pearlcatch.scene.Game.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    this.m_initBubbleMoving();
    this.sharkInterval -= step;
    if (this.keyboard.justPressed("ENTER")) {
        this.sharkInterval = -1;
    }
    if (this.sharkInterval < 0) {
        this.sharkInterval = 5000;
        this.shark_size = this.entity_sizes[Math.floor(Math.random() * this.entity_sizes.length)];
        this.createSharks(this.shark_size);
    }
    for (var i = 0; i < this.sharks.length; i++) {
        if (this.power == null) {
            if (this.player.hitTestObject(this.sharks[i])) {
                this.gameOver = new pearlcatch.scene.GameOver(this.totalScore);
                this.stage.addChild(this.gameOver);

            }
        }
    }

    this.pearlInterval -= step;
    if (this.pearlInterval < 0) {
        this.pearlInterval = 5000;
        this.pearl_size = this.entity_sizes[Math.floor(Math.random() * this.entity_sizes.length)];
        this.createPearl(this.pearl_size);
    }
    for (var i = 0; i < this.score.length; i++) {
        if (this.player.hitTestObject(this.score[i])) {
            this.m_initPearlSound();
            var pearlPoints = this.score[i].pearlScore;
            this.stage.removeChild(this.score[i]);
            this.totalScore = this.totalScore + this.score[i].pearlScore;
            this.hud.score.text = this.totalScore.toString();
            this.score.splice(i, 1);
            var displayPoints = new pearlcatch.entity.Points(this, pearlPoints);
            displayPoints.x = this.player.x + 100;
            displayPoints.y = this.player.y - 30;
            this.stage.addChild(displayPoints);
        }
    }

    this.squidInterval -= step;
    if (this.squidInterval < 0) {
        this.squidInterval = 6000;
        this.createSquid();
    }
    for (var i = 0; i < this.squids.length; i++) {
        if (this.power == null) {
            if (this.player.hitTestObject(this.squids[i])) {
                var splat = new pearlcatch.entity.Splatter();
                splat.y = rune.util.Math.random(0, 570);
                splat.x = rune.util.Math.random(0, 1000);
                this.squids.splice(i, 1);
                this.stage.addChild(splat);
            }
        }
    }

    this.starfishInterval -= step;
    if (this.starfishInterval < 0) {
        this.starfishInterval = 30000;
        this.createStarfish();
    }

    for (var i = 0; i < this.stars.length; i++) {
        if (this.player.hitTestObject(this.stars[i])) {
            this.power = new pearlcatch.entity.Power(this);
            this.stage.removeChild(this.stars[i], true);
            this.stars.splice(i, 1);
            this.stage.addChildAt(this.power, 1);
        }

    }

    if (this.power !== null) {
        this.power.center = this.player.center;
    }

};

/**
 * @inheritDoc
 */
pearlcatch.scene.Game.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};


pearlcatch.scene.Game.prototype.createSharks = function(shark_size) {
    this.getSharkSize(shark_size);
    var shark = this.shark;
    shark.y = rune.util.Math.random(0, 570);
    shark.centerY = this.player.centerY;
    shark.x = 1280;
    this.sharks.push(shark);
    this.stage.addChild(shark);

};


pearlcatch.scene.Game.prototype.getSharkSize = function(shark_size) {
    if (shark_size == "small") {
        return this.shark = new pearlcatch.entity.SmallShark(this.totalScore);

    }

    if (shark_size == "medium") {
        return this.shark = new pearlcatch.entity.MediumShark(this.totalScore);
    }

    if (shark_size == "big") {
        return this.shark = new pearlcatch.entity.LargeShark(this.totalScore);
    }
};

pearlcatch.scene.Game.prototype.createPearl = function(pearl_size) {
    this.getPearlSize(pearl_size);
    var pearl = this.pearl;
    pearl.y = rune.util.Math.random(0, 570);
    pearl.x = 1280;
    this.score.push(pearl);
    this.stage.addChild(pearl);
};

pearlcatch.scene.Game.prototype.getPearlSize = function(pearl_size) {
    if (pearl_size == "small") {
        return this.pearl = new pearlcatch.entity.Pearl();

    }

    if (pearl_size == "medium") {
        return this.pearl = new pearlcatch.entity.PearlMedium();
    }

    if (pearl_size == "big") {
        return this.pearl = new pearlcatch.entity.PearlLarge();
    }
};


pearlcatch.scene.Game.prototype.createSquid = function() {

    var squid = new pearlcatch.entity.Squid();
    squid.y = rune.util.Math.random(0, 570);
    squid.x = 1280;
    this.squids.push(squid);
    this.stage.addChild(squid);
};

pearlcatch.scene.Game.prototype.createStarfish = function() {
    var starfish = new pearlcatch.entity.Starfish(this);
    starfish.y = rune.util.Math.random(0, 570);
    starfish.x = 1280;
    this.stars.push(starfish);
    this.stage.addChild(starfish);
}
pearlcatch.scene.Game.prototype.m_initBubbleMoving = function() {
    this.m_smallBubble.y -= 0.1;
    this.m_miniBubble.y -= 0.1;
    this.m_smallBubble2.y -= 0.1;
    this.m_miniBubble2.y -= 0.1;
    if (this.m_smallBubble.y <= 80) {
        this.m_smallBubble.y = 100;
    }
    if (this.m_miniBubble.y <= 130) {
        this.m_miniBubble.y = 150;
    }
    if (this.m_smallBubble2.y <= 80) {
        this.m_smallBubble2.y = 100;
    }
    if (this.m_miniBubble2.y <= 130) {
        this.m_miniBubble2.y = 150;
    }


};