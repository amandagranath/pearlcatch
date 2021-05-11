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
 pearlcatch.scene.NewHighscore = function(score) {
    this.highscore = score;
    //this.row1 = []; 
    //this.row2 = []; 
    //this.row3 = []; 
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

pearlcatch.scene.NewHighscore.prototype = Object.create(rune.scene.Scene.prototype);
pearlcatch.scene.NewHighscore.prototype.constructor = pearlcatch.scene.NewHighscore;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

pearlcatch.scene.NewHighscore.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);
    this.m_initBackground();
    this.m_sendNewHighScore();
    this.m_initKeyboard();
    //this.m_createName();
};


pearlcatch.scene.NewHighscore.prototype.m_initBackground = function () {
    this.m_background = new rune.display.Graphic(
        0,
        0,
        1280,
        720,
        "",
        "newHighscore_background"
    );
    this.stage.addChild(this.m_background);
};

/*pearlcatch.scene.NewHighscore.prototype.m_createName = function (){
    this.text = new rune.text.BitmapField("HÄR SKA NAMN SKRIVAS UT");
    this.stage.addChild(this.text);
    this.text.y = 200;
    this.text.x = 420;
}*/


pearlcatch.scene.NewHighscore.prototype.m_sendNewHighScore = function (){
    this.name = "name";

    //if (this.highScore > this.application.highscores.get(5,0).score) {
        console.log("nytt score");
        this.application.highscores.send(this.highscore, this.name, 0);
    //}
}



//--------------------------------------------------------------------------------
//     Code for keyboard graphic
//--------------------------------------------------------------------------------

pearlcatch.scene.NewHighscore.prototype.m_initKeyboard = function () {
    //rad 1
    this.m_Q = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "q"
    );

    this.stage.addChild(this.m_Q);
    this.m_Q.y = 400;
    this.m_Q.x = 270;

    this.m_W = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "w"
    );

    this.stage.addChild(this.m_W);
    this.m_W.y = 400;
    this.m_W.x = 340;

    this.m_E = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "e"
    );

    this.stage.addChild(this.m_E);
    this.m_E.y = 400;
    this.m_E.x = 410;


    this.m_R = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "r"
    );

    this.stage.addChild(this.m_R);
    this.m_R.y = 400;
    this.m_R.x = 480;

    this.m_T = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "t"
    );

    this.stage.addChild(this.m_T);
    this.m_T.y = 400;
    this.m_T.x = 550;

    this.m_Y = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "y"
    );

    this.stage.addChild(this.m_Y);
    this.m_Y.y = 400;
    this.m_Y.x = 620;


    this.m_U = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "u"
    );

    this.stage.addChild(this.m_U);
    this.m_U.y = 400;
    this.m_U.x = 690;


    this.m_I = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "i"
    );

    this.stage.addChild(this.m_I);
    this.m_I.y = 400;
    this.m_I.x = 760;

    this.m_O = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "o"
    );

    this.stage.addChild(this.m_O);
    this.m_O.y = 400;
    this.m_O.x = 830;

    this.m_P = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "p"
    );

    this.stage.addChild(this.m_P);
    this.m_P.y = 400;
    this.m_P.x = 900;

    this.m_aa = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "aa"
    );

    this.stage.addChild(this.m_aa);
    this.m_aa.y = 400;
    this.m_aa.x = 970;

    //rad 2

    this.m_A = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "a"
    );

    this.stage.addChild(this.m_A);
    this.m_A.y = 460;
    this.m_A.x = 280;

    this.m_S = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "s"
    );

    this.stage.addChild(this.m_S);
    this.m_S.y = 460;
    this.m_S.x = 350;

    this.m_D = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "d"
    );

    this.stage.addChild(this.m_D);
    this.m_D.y = 460;
    this.m_D.x = 420;

    this.m_F = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "f"
    );

    this.stage.addChild(this.m_F);
    this.m_F.y = 460;
    this.m_F.x = 490;

    this.m_G = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "g"
    );

    this.stage.addChild(this.m_G);
    this.m_G.y = 460;
    this.m_G.x = 560;

    this.m_H = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "h"
    );

    this.stage.addChild(this.m_H);
    this.m_H.y = 460;
    this.m_H.x = 630;

    this.m_J = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "j"
    );

    this.stage.addChild(this.m_J);
    this.m_J.y = 460;
    this.m_J.x = 700;

    this.m_K = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "k"
    );

    this.stage.addChild(this.m_K);
    this.m_K.y = 460;
    this.m_K.x = 770;

    this.m_L = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "l"
    );

    this.stage.addChild(this.m_L);
    this.m_L.y = 460;
    this.m_L.x = 840;
    
    this.m_OO = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "oo"
    );

    this.stage.addChild(this.m_OO);
    this.m_OO.y = 460;
    this.m_OO.x = 910;

    this.m_aaa = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "aaa"
    );

    this.stage.addChild(this.m_aaa);
    this.m_aaa.y = 460;
    this.m_aaa.x = 980;

    //Rad tre

    this.m_Z = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "z"
    );

    this.stage.addChild(this.m_Z);
    this.m_Z.y = 520;
    this.m_Z.x = 290;

    this.m_X = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "x"
    );

    this.stage.addChild(this.m_X);
    this.m_X.y = 520;
    this.m_X.x = 360;

    this.m_C = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "oo"
    );

    this.stage.addChild(this.m_C);
    this.m_C.y = 520;
    this.m_C.x = 430;

    this.m_V = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "v"
    );

    this.stage.addChild(this.m_V);
    this.m_V.y = 520;
    this.m_V.x = 500;

    this.m_B = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "b"
    );

    this.stage.addChild(this.m_B);
    this.m_B.y = 520;
    this.m_B.x = 570;

    this.m_N = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "n"
    );

    this.stage.addChild(this.m_N);
    this.m_N.y = 520;
    this.m_N.x = 640;

    this.m_M = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "m"
    );

    this.stage.addChild(this.m_M);
    this.m_M.y = 520;
    this.m_M.x = 640;

    this.m_erase = new rune.display.Graphic(
        0,
        0,
        80,
        64,
        "",
        "erase"
    );

    this.stage.addChild(this.m_erase);
    this.m_erase.y = 520;
    this.m_erase.x = 710;

    this.m_saveBtn = new rune.display.Graphic(
        0,
        0,
        80,
        64,
        "",
        "saveBtn"
    );

    this.stage.addChild(this.m_saveBtn);
    this.m_saveBtn.y = 520;
    this.m_saveBtn.x = 800;
};