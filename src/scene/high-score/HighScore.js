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
 * Menu state.
 */
pearlcatch.scene.HighScore = function() {

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

pearlcatch.scene.HighScore.prototype = Object.create(rune.scene.Scene.prototype);
pearlcatch.scene.HighScore.prototype.constructor = pearlcatch.scene.HighScore;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

pearlcatch.scene.HighScore.prototype.init = function() {
    this.m_initBackground();
    this.m_initMenuButton();
    this.m_initHighscoreSound();
    rune.scene.Scene.prototype.init.call(this);

    var rocket = new pearlcatch.entity.Rocket();
    this.stage.addChild(rocket);
    this.one = "1." + " " + this.application.highscores.get(0, 0).name.toString() + " " + this.application.highscores.get(0, 0).score.toString();
    this.two = "2." + " " + this.application.highscores.get(1, 0).name.toString() + " " + this.application.highscores.get(1, 0).score.toString();
    this.three = "3." + " " + this.application.highscores.get(2, 0).name.toString() + " " + this.application.highscores.get(2, 0).score.toString();
    this.four = "4." + " " + this.application.highscores.get(3, 0).name.toString() + " " + this.application.highscores.get(3, 0).score.toString();
    this.five = "5." + " " + this.application.highscores.get(4, 0).name.toString() + " " + this.application.highscores.get(4, 0).score.toString();

    this.one = new pearlcatch.entity.OrangeFont(this.one);
    this.two = new pearlcatch.entity.OrangeFont(this.two);
    this.three = new pearlcatch.entity.OrangeFont(this.three);
    this.four = new pearlcatch.entity.OrangeFont(this.four);
    this.five = new pearlcatch.entity.OrangeFont(this.five);

    this.one.scaleY = 0.3;
    this.one.scaleX = 0.3;
    this.one.y = 180;
    this.one.x = 470;


    this.two.scaleY = 0.3;
    this.two.scaleX = 0.3;
    this.two.y = 260;
    this.two.x = 470;


    this.three.y = 340;
    this.three.scaleY = 0.3;
    this.three.scaleX = 0.3;
    this.three.x = 470;



    this.four.y = 420;
    this.four.scaleY = 0.3;
    this.four.scaleX = 0.3;
    this.four.x = 470;


    this.five.y = 500;
    this.five.scaleY = 0.3;
    this.five.scaleX = 0.3;
    this.five.x = 470;

    this.stage.addChild(this.one);
    this.stage.addChild(this.two);
    this.stage.addChild(this.three);
    this.stage.addChild(this.four);
    this.stage.addChild(this.five);
};

pearlcatch.scene.HighScore.prototype.update = function(step) {
    if (this.keyboard.justPressed("ENTER")) {
        this.application.sounds.music.volume = 0.3;
        var clickSound = this.application.sounds.music.get("buttonclick");
        clickSound.play();
        this.application.scenes.load([new pearlcatch.scene.Menu()]);
    }
};


pearlcatch.scene.HighScore.prototype.m_initBackground = function() {
    this.m_highBackground = new rune.display.Graphic(
        0,
        0,
        1280,
        720,
        "",
        "highscore-background3"
    );
    this.stage.addChild(this.m_highBackground);
};

pearlcatch.scene.HighScore.prototype.m_initMenuButton = function() {
    this.m_menuButton = new rune.display.Graphic(
        40,
        600,
        170,
        81,
        "",
        "menu_button"
    );
    this.stage.addChild(this.m_menuButton);
};
pearlcatch.scene.HighScore.prototype.m_initHighscoreSound = function() {
    this.application.sounds.music.volume = 0.4;
    this.highscoreSound = this.application.sounds.music.get("highscoresuccess")
    this.highscoreSound.play();
};