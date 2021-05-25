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
 * Represents text for the score in the HUD
 */
pearlcatch.entity.WhiteFont = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.text.BitmapField.call(this, "0", "fontpoints2");

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

pearlcatch.entity.WhiteFont.prototype = Object.create(rune.text.BitmapField.prototype);
pearlcatch.entity.WhiteFont.prototype.constructor = pearlcatch.entity.WhiteFont;