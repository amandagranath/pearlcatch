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
    rune.scene.Scene.prototype.init.call(this);
    this.cameras.getCamera(0).fillColor = "#90e0ef";
    this.one = "1." + " " + this.application.highscores.get(0,0).name.toString() + " " + this.application.highscores.get(0,0).score.toString();
    this.two = "2." + " " + this.application.highscores.get(1,0).name.toString() + " " + this.application.highscores.get(1,0).score.toString();
    this.three = "3." + " " + this.application.highscores.get(2,0).name.toString() + " " + this.application.highscores.get(2,0).score.toString();
    this.four = "4." + " " + this.application.highscores.get(3,0).name.toString() + " " + this.application.highscores.get(3,0).score.toString();
    this.five = "5." + " " + this.application.highscores.get(4,0).name.toString() + " " + this.application.highscores.get(4,0).score.toString();

    this.text = new rune.text.BitmapField("High Score");
    this.one = new rune.text.BitmapField(this.one);
    this.two = new rune.text.BitmapField(this.two);
    this.three = new rune.text.BitmapField(this.three);
    this.four = new rune.text.BitmapField(this.four);
    this.five = new rune.text.BitmapField(this.five);
    
    this.text.autoSize = true;
    this.text.center = this.application.screen.center;

    this.one.autoSize = true;
    this.one.center = this.application.screen.center;
    this.one.y = 400;

    this.two.autoSize = true;
    this.two.center = this.application.screen.center;
    this.two.y = 420;

    this.three.autoSize = true;
    this.three.center = this.application.screen.center;
    this.three.y =440;

    this.four.autoSize = true;
    this.four.center = this.application.screen.center;
    this.four.y = 460;

    this.five.autoSize = true;
    this.five.center = this.application.screen.center;
    this.five.y = 480;

    this.stage.addChild(this.text);
    this.stage.addChild(this.one);
    this.stage.addChild(this.two);
    this.stage.addChild(this.three);
    this.stage.addChild(this.four);
    this.stage.addChild(this.five);
};