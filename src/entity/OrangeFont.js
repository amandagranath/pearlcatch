//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.text.BitmapField
 *
 * @class
 * @classdesc
 * 
 * Represents a texture used in the creating a new highscore
 */
pearlcatch.entity.OrangeFont = function(score) {
    //Public properties
    this.score = score;

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.text.BitmapField.call(this, " ", "highscore-font2");
    this.text = this.score;
    //--------------------------------------------------------------------------
    // Override public properties
    //--------------------------------------------------------------------------

    /**
     * @inheritDoc
     */
    this.autoSize = true;
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.entity.OrangeFont.prototype = Object.create(rune.text.BitmapField.prototype);
pearlcatch.entity.OrangeFont.prototype.constructor = pearlcatch.entity.OrangeFont;