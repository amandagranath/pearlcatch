//------------------------------------------------------------------------------
// Namespace
//------------------------------------------------------------------------------

/**
 * The application namespace.
 * 
 * @namespace pearlcatch
 */
var pearlcatch = function() {

    //--------------------------------------------------------------------------
    // Public static scope
    //--------------------------------------------------------------------------

    /**
     * Public scope.
     *
     * @type {Object}
     * @private
     */
    var m_this = {};

    //--------------------------------------------------------------------------
    // Package structure
    //--------------------------------------------------------------------------
    m_this.entity = {};
    /**
     * ...
     *
     * @namespace data
     * @memberof pearlcatch
     * @since 1.0
     */
    m_this.data = {};

    /**
     * ...
     *
     * @namespace scene
     * @memberof pearlcatch
     * @since 1.0
     */
    m_this.scene = {};

    /**
     * ...
     *
     * @namespace system
     * @memberof pearlcatch
     * @since 1.0
     */
    m_this.system = {};

    //--------------------------------------------------------------------------
    // Return public scope object
    //--------------------------------------------------------------------------

    /**
     * Public scope.
     */
    return m_this;

}();