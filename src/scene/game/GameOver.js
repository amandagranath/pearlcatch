 //------------------------------------------------------------------------------
 // Constructor scope
 //------------------------------------------------------------------------------

 //const { TouchBarSlider } = require("electron");

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
 pearlcatch.scene.GameOver = function(totalScore) {
     this.highScoreList = [];
     this.totalScore = totalScore;
     //--------------------------------------------------------------------------
     //  Constructor call
     //--------------------------------------------------------------------------
     /**
      *  Call super constructor scope.
      */
     rune.display.DisplayObjectContainer.call(this, 0, 0, 1280, 720, "");
 };
 //------------------------------------------------------------------------------
 //  Inheritance
 //------------------------------------------------------------------------------
 pearlcatch.scene.GameOver.prototype = Object.create(rune.display.DisplayObjectContainer.prototype);
 pearlcatch.scene.GameOver.prototype.constructor = pearlcatch.scene.GameOver;
 //------------------------------------------------------------------------------
 // Override public prototype methods (ENGINE)
 //------------------------------------------------------------------------------

 /**
  * @inheritDoc
  */
 pearlcatch.scene.GameOver.prototype.init = function() {
     rune.display.DisplayObjectContainer.prototype.init.call(this);
     //@TODO: Write app code.
     this.m_gameOver = new rune.display.Graphic(
         0,
         0,
         1025,
         565,
         "",
         "gameover"
     );
     this.m_gameOver.center = this.application.screen.center;
     this.addChild(this.m_gameOver);
     // console.log(this.totalScore);
     this.highScoreList.push(this.totalScore);
     //console.log(this.highScoreList);

 };

 /**
  * @inheritDoc
  */
 pearlcatch.scene.GameOver.prototype.update = function(step) {
     rune.display.DisplayObjectContainer.prototype.update.call(this, step);
     //@TODO: Write app code.
 };

 /**
  * @inheritDoc
  */
 pearlcatch.scene.GameOver.prototype.dispose = function() {
     rune.display.DisplayObjectContainer.prototype.dispose.call(this);
     //@TODO: Write app code.
 };