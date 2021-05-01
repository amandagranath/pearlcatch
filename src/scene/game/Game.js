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
pearlcatch.scene.Game = function () {
    this.sharkInterval = 0;
    this.sharks = [];
    this.pearlInterval = 0;
    this.score = [];
    this.squidInterval = 0;
    this.squids = [];
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
pearlcatch.scene.Game.prototype.init = function () {
    rune.scene.Scene.prototype.init.call(this);
    this.m_initBackground();
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


};
pearlcatch.scene.Game.prototype.m_initCamera = function () {
    this.m_camera = this.cameras.add(this.cameras.create());
    this.cameras.getCamera(0).fade.opacity = 1.0;
    this.cameras.getCamera(0).fade.in(1500);
    this.cameras.getCamera(0).debug = true;
};


/**
 * @inheritDoc
 */
pearlcatch.scene.Game.prototype.m_initBackground = function () {
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
pearlcatch.scene.Game.prototype.m_initWav = function () {
    /*  this.application.sounds.music.volume = 0.5;
      var music = this.application.sounds.music.get("themesong")
      var music2 = this.application.sounds.music.get("backgroundwater")
      music.play();
      music.resume();
      music2.play(); */
};
pearlcatch.scene.Game.prototype.update = function (step) {
    rune.scene.Scene.prototype.update.call(this, step);
    this.sharkInterval -= step;
    if (this.keyboard.justPressed("ENTER")) {
        this.sharkInterval = -1;
    }
    if (this.sharkInterval < 0) {
        this.sharkInterval = 5000;
        /*this.createShark();*/
        this.shark_size = this.entity_sizes[Math.floor(Math.random() * this.entity_sizes.length)];
        this.createSharks(this.shark_size);
    }
    for (var i = 0; i < this.sharks.length; i++) {
        if (this.player.hitTestObject(this.sharks[i])) {
            console.log("game over");
        }
    }
    this.pearlInterval -= step;
    if (this.pearlInterval < 0) {
        this.pearlInterval = 5000;
        /*this.createPearl();*/
        this.pearl_size = this.entity_sizes[Math.floor(Math.random() * this.entity_sizes.length)];
        this.createPearl(this.pearl_size);
    }

    this.squidInterval -= step;
    if (this.squidInterval < 0) {
        this.squidInterval = 6000;
        this.createSquid();
    }
};

/**
 * @inheritDoc
 */
pearlcatch.scene.Game.prototype.dispose = function () {
    rune.scene.Scene.prototype.dispose.call(this);
};
/*pearlcatch.scene.Game.prototype.createShark = function() {

    var shark = new pearlcatch.entity.SmallShark();
    shark.y = rune.util.Math.random(0, 570);
    shark.centerY = this.player.centerY;
    shark.x = 1280;
    this.sharks.push(shark);
    this.stage.addChild(shark);
};*/

pearlcatch.scene.Game.prototype.createSharks= function (shark_size) {
    this.getSharkSize(shark_size);
    var shark = this.shark;
    shark.y = rune.util.Math.random(0, 570);
    shark.centerY = this.player.centerY;
    shark.x = 1280;
    this.sharks.push(shark);
    this.stage.addChild(shark);

};


pearlcatch.scene.Game.prototype.getSharkSize= function (shark_size) {
    if (shark_size == "small") {
        return this.shark = new pearlcatch.entity.SmallShark();
    
    }

    if (shark_size == "medium") {
        return this.shark = new pearlcatch.entity.MediumShark();
    }

    if (shark_size == "big") {
        return this.shark = new pearlcatch.entity.LargeShark();
    }
};

pearlcatch.scene.Game.prototype.createPearl = function (pearl_size) {
    this.getPearlSize(pearl_size);
    var pearl = this.pearl;
    pearl.y = rune.util.Math.random(0, 570);
    pearl.x = 1280;
    this.stage.addChild(pearl);
};

pearlcatch.scene.Game.prototype.getPearlSize= function (pearl_size) {
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


pearlcatch.scene.Game.prototype.createSquid = function () {

    var squid = new pearlcatch.entity.Squid();
    squid.y = rune.util.Math.random(0, 570);
    squid.x = 1280;
    this.stage.addChild(squid);
};