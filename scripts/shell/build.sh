#!/bin/bash

npx google-closure-compiler \
--language_in ECMASCRIPT5_STRICT \
--language_out ECMASCRIPT5_STRICT \
--warning_level DEFAULT \
--compilation_level WHITESPACE_ONLY \
--isolation_mode IIFE \
--js "./../../lib/rune.js" \
--js "./../../src/scope/Manifest.js" \
--js "./../../src/data/manifest/Resources.js" \
-js "./../../src/entity/Fish.js" \
-js "./../../src/entity/SmallShark.js" \
-js "./../../src/entity/MediumShark.js" \
-js "./../../src/entity/LargeShark.js" \
-js "./../../src/entity/Pearl.js" \
-js "./../../src/entity/PearlMedium.js" \
-js "./../../src/entity/PearlLarge.js" \
-js "./../../src/entity/Splatter.js" \
-js "./../../src/entity/Squid.js" \
--js "./../../src/scene/instructions/Instructions.js" \
--js "./../../src/scene/game/HUD.js" \
--js "./../../src/scene/game/GameOver.js" \
--js "./../../src/scene/game/Game.js" \
--js "./../../src/system/Main.js" \
--js "./../../src/scope/Alias.js" \
--js_output_file "./../../dist/pearlcatch.js";