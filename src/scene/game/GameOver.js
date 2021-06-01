 //------------------------------------------------------------------------------
 // Constructor scope
 //------------------------------------------------------------------------------

 /**
  * Creates a new object.
  *
  * @constructor
  * @extends rune.display.DisplayObjectContainer
  *
  * @class
  * @classdesc
  *
  * Gameover state
  */
 pearlcatch.scene.GameOver = function(totalScore) {
     //Public properties
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
     this.highScoreList.push(this.totalScore);
 };

 /**
  * @inheritDoc
  */
 pearlcatch.scene.GameOver.prototype.update = function(step) {
     rune.display.DisplayObjectContainer.prototype.update.call(this, step);
 };

 /**
  * @inheritDoc
  */
 pearlcatch.scene.GameOver.prototype.dispose = function() {
     rune.display.DisplayObjectContainer.prototype.dispose.call(this);
 };