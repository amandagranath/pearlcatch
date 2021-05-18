//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------
/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.display.DisplayObjectContainer
 *
 * @param {number} [x=0] ...
 * @param {number} [y=0] ...
 * @param {number} [width=0] ...
 * @param {number} [height=0] ...
 * @param {number} [fillColor=""] ...
 *
 * @class
 * @classdesc
 *
 * ...
 */
pearlcatch.scene.HUD = function (gamescope) {
    this.score = null;
    this.gamescope = gamescope;
    //--------------------------------------------------------------------------
    //  Constructor call
    //--------------------------------------------------------------------------
    /**
     *  Call super constructor scope.
     */
    rune.display.DisplayObjectContainer.call(this, 0, 0, 1280, 100, "");
};
//------------------------------------------------------------------------------
//  Inheritance
//------------------------------------------------------------------------------
pearlcatch.scene.HUD.prototype = Object.create(rune.display.DisplayObjectContainer.prototype);
pearlcatch.scene.HUD.prototype.constructor = pearlcatch.scene.HUD;
//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
pearlcatch.scene.HUD.prototype.init = function () {
    rune.display.DisplayObjectContainer.prototype.init.call(this);
    //@TODO: Write app code.
    this.m_hud = new rune.display.Graphic(
        500,
        0,
        250,
        46,
        "",
        "score_board_3"
    );

    this.addChild(this.m_hud);
    /*this.m_soundButton = new rune.display.Graphic(
        1170,
        10,
        40,
        39,
        "",
        "sound_icon_2"
    );
    this.addChild(this.m_soundButton);*/
    /*this.m_pausButton = new rune.display.Graphic(
        1225,
        10,
        40,
        39,
        "",
        "paus_button_2"
    );
    this.addChild(this.m_pausButton);*/
    this.m_initScore();


};

/**
 * @inheritDoc
 */
pearlcatch.scene.HUD.prototype.update = function (step) {
    rune.display.DisplayObjectContainer.prototype.update.call(this, step);
    //@TODO: Write app code.

    if (this.gamescope.pauseGameSound == true) {
        this.m_soundButton = new rune.display.Graphic(
            1170,
            10,
            40,
            39,
            "",
            "sound_icon_off_3"
        );

        this.addChild(this.m_soundButton);

    } else if (this.gamescope.pauseGameSound == false) {
        this.m_soundButton = new rune.display.Graphic(
            1170,
            10,
            40,
            39,
            "",
            "sound_icon_3"
        );

        this.addChild(this.m_soundButton);
    } 

    if (this.gamescope.pauseGame == true) {
        console.log("pausat");
        this.m_pausButton = new rune.display.Graphic(
            1225,
            10,
            40,
            38,
            "",
            "play_icon_2"
        );
        this.addChild(this.m_pausButton);

    } else if (this.gamescope.pauseGame == false) {
        console.log("igång");
        this.m_pausButton = new rune.display.Graphic(
            1225,
            10,
            40,
            39,
            "",
            "paus_button_2"
        );
        this.addChild(this.m_pausButton);
    } 
};

/**
 * @inheritDoc
 */
pearlcatch.scene.HUD.prototype.dispose = function () {
    rune.display.DisplayObjectContainer.prototype.dispose.call(this);
    //@TODO: Write app code.
};
pearlcatch.scene.HUD.prototype.m_initScore = function () {
    this.score = new rune.text.BitmapField("0");
    this.score.y = 10;
    this.score.x = 630;
    this.score.scaleY = 3;
    this.score.scaleX = 3;
    this.addChild(this.score);
};