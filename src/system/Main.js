//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

pearlcatch.system.Main = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.system.Main.call(this, {
        id: "com.vectorpanic.template",
        name: "pearlcatch",
        scene: pearlcatch.scene.Game,
        resources: pearlcatch.data.Resources,
        useKeyboard: true,
        debug: true,
        screenResolutionX: 1280,
        screenResolutionY: 720
    });
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

pearlcatch.system.Main.prototype = Object.create(rune.system.Main.prototype);
pearlcatch.system.Main.prototype.constructor = pearlcatch.system.Main;