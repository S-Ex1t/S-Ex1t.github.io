//this file should be concatenated at the top of the legacy js files

import Chart from "chart.js";
import chartTrendline from "chartjs-plugin-trendline";
import chartAnnotation from "chartjs-plugin-annotation";

Chart.plugins.register(chartTrendline);
Chart.plugins.register(chartAnnotation);

import * as DB from "./db";
import * as Misc from "./misc";
import * as ResultFilters from "./result-filters";
import Config from "./config";
import * as SimplePopups from "./simple-popups";
import * as AccountController from "./account-controller";
import {toggleGlarses} from "./test-logic";
import "./caps-warning";
import "./support-popup";
import "./version-popup";
import "./custom-theme-popup";
import "./import-settings-popup";
import "./input-controller";
import "./ready";
import "./about-page";

//this file should be concatenated with the legacy js files

//try to keep this list short because we need to eliminate it eventually
global.simplePopups = SimplePopups.simplePopups;
global.sendVerificationEmail = Misc.sendVerificationEmail;
global.getuid = Misc.getuid;

//these exports are just for debugging in the browser
global.snapshot = DB.getSnapshot;
global.config = Config;
// global.addnotif = Notifications.add;
global.link = AccountController.linkWithGoogle;

global.filters = ResultFilters.getFilters();

global.glarsesMode = toggleGlarses;

global.crownTest = async () => {
  console.log('local pb', await DB.getLocalPB(
    "time",
    60,
    false,
    "english",
    "normal"
  ))
  console.log('local highest wpm', await DB.getUserHighestWpm(
    "time",
    60,
    false,
    "english",
    "normal"
  ))
}