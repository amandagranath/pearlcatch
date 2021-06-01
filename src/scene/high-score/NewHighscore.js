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
 * Represent the keyboard for highscore
 */
pearlcatch.scene.NewHighscore = function(score) {
    //Public properties
    this.highscore = score; //The total score sent from game
    this.row1 = []; //First row on the keyboard
    this.row2 = []; //Second row on the keyboard
    this.row3 = []; //Third row on the keyboard
    this.alphabet1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "1"]; //Keys in the first row
    this.alphabet2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "2", "3"]; //Keys in the seconds row
    this.alphabet3 = ["Z", "X", "C", "V", "B", "N", "M", "-", "_", "erase", "save"]; //Keys in the third row
    this.user = []; //The name that will be sent to the highscorelist
    this.markedRow = 1; //The active row on the keyboard
    this.marked = 0; //The active key on the keyboard
    this.username; //The name that's written in on the keyboard
    this.enterClick = 0; //Number of enterclicks
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
    this.currentHighscore = this.highscore.toString();
    this.finalHighscore = "Score " + this.currentHighscore;
    this.finalHighscore = new pearlcatch.entity.OrangeFont(this.finalHighscore);
    this.stage.addChild(this.finalHighscore);
    this.finalHighscore.x = 460;
    this.finalHighscore.y = 110;
    this.finalHighscore.scaleY = 0.5;
    this.finalHighscore.scaleX = 0.5;
    this.username = new pearlcatch.entity.OrangeFont(" ");
    this.stage.addChild(this.username);
    this.username.y = 190;
    this.username.x = 460;
    this.username.scaleY = 0.5;
    this.username.scaleX = 0.5;
    this.m_initKeyboard();
    this.loopButtons(this.marked, this.markedRow);
};

pearlcatch.scene.NewHighscore.prototype.update = function(step) {
    if (this.keyboard.justPressed("RIGHT")) {
        if (this.marked !== 10) {
            this.m_initWav();
            this.marked += 1;
            this.loopButtons(this.marked, this.markedRow);
        } else {
            return;
        }
    }

    if (this.keyboard.justPressed("LEFT")) {
        if (this.marked !== 0) {
            this.m_initWav();
            this.marked += -1;
            this.loopButtons(this.marked, this.markedRow);
        } else {
            return;
        }
    }

    if (this.keyboard.justPressed("DOWN")) {
        if (this.markedRow !== 3) {
            this.m_initWav();
            this.markedRow += 1;
            this.loopButtons(this.marked, this.markedRow);
        } else {
            return;
        }
    }

    if (this.keyboard.justPressed("UP")) {
        if (this.markedRow !== 1) {
            this.m_initWav();
            this.markedRow += -1;
            this.loopButtons(this.marked, this.markedRow);
        } else {
            return;
        }
    }

    if (this.keyboard.justPressed("ENTER")) {
        if (this.enterClick == 8 && this.markedRow !== 3 && this.marked !== 10 && this.markedRow !== 3 && this.marked !== 9) {
            this.warning = new pearlcatch.entity.OrangeFont("Please note that you can only have 8 characters in your username");
            this.stage.addChild(this.warning);
            this.warning.y = 300;
            this.warning.x = 300;
            this.warning.scaleY = 0.15;
            this.warning.scaleX = 0.15;
            return
        }
        if (this.markedRow == 3 && this.marked == 10) {
            this.m_sendNewHighScore(this.user);
            return;
        }

        if (this.markedRow == 3 && this.marked == 9) {
            this.enterClick += -1;
            this.stage.removeChild(this.warning);
            this.user.pop();
            var temp_username = this.username.text.slice(0, -1);
            this.username.text = temp_username;
        } else {
            this.enterClick += 1;
            this.m_writeText(this.markedRow, this.marked);
        }
    }
};

/**
 * Loops through the keys and change opacity.
 */
pearlcatch.scene.NewHighscore.prototype.loopButtons = function(letter, row) {
    var row = row;
    var letter = letter;
    if (row == 1) {
        for (var j = 0; j < this.row1.length; j++) {
            if (this.row1.indexOf(this.row1[j]) !== letter) {
                this.row1[j].alpha = 0.7;
            } else if (this.row1.indexOf(this.row1[j]) == letter) {
                this.row1[j].alpha = 1;
            }
        }

        for (var k = 0; k < this.row2.length; k++) {
            this.row2[k].alpha = 0.7;
        }

        for (var l = 0; l < this.row3.length; l++) {
            this.row3[l].alpha = 0.7;
        }
    }

    if (row == 2) {
        for (var m = 0; m < this.row2.length; m++) {
            if (this.row2.indexOf(this.row2[m]) !== letter) {
                this.row2[m].alpha = 0.7;
            } else if (this.row2.indexOf(this.row2[m]) == letter) {
                this.row2[m].alpha = 1;
            }
        }

        for (var n = 0; n < this.row1.length; n++) {
            this.row1[n].alpha = 0.7;
        }

        for (var o = 0; o < this.row3.length; o++) {
            this.row3[o].alpha = 0.7;
        }
    }

    if (row == 3) {
        for (var p = 0; p < this.row3.length; p++) {
            if (this.row3.indexOf(this.row3[p]) !== letter) {
                this.row3[p].alpha = 0.7;
            } else if (this.row3.indexOf(this.row3[p]) == letter) {
                this.row3[p].alpha = 1;
            }
        }

        for (var q = 0; q < this.row2.length; q++) {
            this.row2[q].alpha = 0.7;
        }

        for (var r = 0; r < this.row1.length; r++) {
            this.row1[r].alpha = 0.7;
        }
    }
}

/**
 * Sends in the letters to create name
 */
pearlcatch.scene.NewHighscore.prototype.m_writeText = function(row, letter) {
    this.row = row;
    this.letter = letter;
    if (this.row == 1) {
        this.user.push(this.alphabet1[letter]);
        this.m_createName(this.alphabet1[letter]);
    }

    if (this.row == 2) {
        this.user.push(this.alphabet2[letter]);
        this.m_createName(this.alphabet2[letter]);
    }

    if (this.row == 3) {
        this.user.push(this.alphabet3[letter]);
        this.m_createName(this.alphabet3[letter]);
    }

}

/**
 * Creates the background
 */
pearlcatch.scene.NewHighscore.prototype.m_initBackground = function() {
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

pearlcatch.scene.NewHighscore.prototype.dispose = function() {
    rune.scene.Scene.prototype.dispose.call(this);
};

/**
 * Display the letters
 */
pearlcatch.scene.NewHighscore.prototype.m_createName = function(letter) {
    this.letters = letter;
    this.username.text += this.letters;
}

/**
 * Init sound for the buttons
 */
pearlcatch.scene.NewHighscore.prototype.m_initWav = function() {
    this.application.sounds.music.volume = 0.3;
    var clickSound = this.application.sounds.music.get("buttonclick");
    clickSound.play();
};

/**
 * Sends highscore to the highscorelist
 */
pearlcatch.scene.NewHighscore.prototype.m_sendNewHighScore = function(name) {
    this.name = "";
    for (var i = 0; i < name.length; i++) {
        this.name += name[i];
    }

    this.application.highscores.send(this.highscore, this.name, 0);
    this.application.scenes.load([new pearlcatch.scene.HighScore()]);
}



//--------------------------------------------------------------------------------
//     Code for keyboard graphic
//--------------------------------------------------------------------------------
pearlcatch.scene.NewHighscore.prototype.m_initKeyboard = function() {
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
    this.row1.push(this.m_Q);

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
    this.row1.push(this.m_W);

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
    this.row1.push(this.m_E);

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
    this.row1.push(this.m_R);

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
    this.row1.push(this.m_T);

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
    this.row1.push(this.m_Y);

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
    this.row1.push(this.m_U);

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
    this.row1.push(this.m_I);

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
    this.row1.push(this.m_O);

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
    this.row1.push(this.m_P);

    this.m_1 = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "1"
    );

    this.stage.addChild(this.m_1);
    this.m_1.y = 400;
    this.m_1.x = 970;
    this.row1.push(this.m_1);

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
    this.row2.push(this.m_A);

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
    this.row2.push(this.m_S);

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
    this.row2.push(this.m_D);

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
    this.row2.push(this.m_F);

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
    this.row2.push(this.m_G);

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
    this.row2.push(this.m_H);

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
    this.row2.push(this.m_J);

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
    this.row2.push(this.m_K);

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
    this.row2.push(this.m_L);

    this.m_2 = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "2"
    );

    this.stage.addChild(this.m_2);
    this.m_2.y = 460;
    this.m_2.x = 910;
    this.row2.push(this.m_2);

    this.m_3 = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "3"
    );

    this.stage.addChild(this.m_3);
    this.m_3.y = 460;
    this.m_3.x = 980;
    this.row2.push(this.m_3);

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
    this.row3.push(this.m_Z);

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
    this.row3.push(this.m_X);

    this.m_C = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "c"
    );

    this.stage.addChild(this.m_C);
    this.m_C.y = 520;
    this.m_C.x = 430;
    this.row3.push(this.m_C);

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
    this.row3.push(this.m_V);

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
    this.row3.push(this.m_B);

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
    this.row3.push(this.m_N);

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
    this.m_M.x = 710;
    this.row3.push(this.m_M);

    this.m_line = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "streck"
    );

    this.stage.addChild(this.m_line);
    this.m_line.y = 520;
    this.m_line.x = 780;
    this.row3.push(this.m_line);

    this.m_underline = new rune.display.Graphic(
        0,
        0,
        60,
        48,
        "",
        "understreck"
    );

    this.stage.addChild(this.m_underline);
    this.m_underline.y = 520;
    this.m_underline.x = 850;
    this.row3.push(this.m_underline);


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
    this.m_erase.x = 930;
    this.row3.push(this.m_erase);

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
    this.m_saveBtn.x = 1020;
    this.row3.push(this.m_saveBtn);
};