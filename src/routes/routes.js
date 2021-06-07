
const express = require("express");
const routes = express.Router();
const WorldClockApiController = require("../app/controllers/world-clock-api-controller");

// World Time routes

/**
 * @api {get} /now/:timezone Request Now Time for designed Timezone
 * @apiVersion 1.0.0
 * @apiName GetNow
 * @apiGroup Now
 *
 * @apiParam {String} timezone Timezone requested.
 *
 * @apiSuccess {Number} $id ID.
 * @apiSuccess {Date}   currentDateTime Current Date and Time.
 * @apiSuccess {Time} utcOffset: Offset based on utc Timezone.
 * @apiSuccess {boolean} isDayLightSavingsTime: true,
 * @apiSuccess {String} dayOfTheWeek Day of The Week.
 * @apiSuccess {String} timeZoneName Timezone Name.
 * @apiSuccess {Number} currentFileTime Current File Time.
 * @apiSuccess {String} ordinalDate Ordinal Date
 * @apiSuccess {String} serviceResponse Service Response.
 */
routes.get("/now/:timezone", WorldClockApiController.getTime);

/**
 * @api {get} /yesterday/:timezone Request Yesterday Time for designed Timezone
 * @apiVersion 1.0.0
 * @apiName GetYesterday
 * @apiGroup Yesterday
 *
 * @apiParam {String} timezone Timezone requested.
 *
 * @apiSuccess {Number} $id ID.
 * @apiSuccess {Date}   currentDateTime Yesterday Date and Time.
 * @apiSuccess {Time} utcOffset: Offset based on utc Timezone.
 * @apiSuccess {boolean} isDayLightSavingsTime: true,
 * @apiSuccess {String} dayOfTheWeek Day of The Week.
 * @apiSuccess {String} timeZoneName Timezone Name.
 * @apiSuccess {Number} currentFileTime Current File Time.
 * @apiSuccess {String} ordinalDate Ordinal Date
 * @apiSuccess {String} serviceResponse Service Response.
 */
routes.get("/yesterday/:timezone", WorldClockApiController.getTime);

/**
 * @api {get} /tomorrow/:timezone Request Tomorrow Time for designed Timezone
 * @apiVersion 1.0.0
 * @apiName GetTomorrow
 * @apiGroup Tomorrow
 *
 * @apiParam {String} timezone Timezone requested.
 *
 * @apiSuccess {Number} $id ID.
 * @apiSuccess {Date}   currentDateTime Tomorrow Date and Time.
 * @apiSuccess {Time} utcOffset: Offset based on utc Timezone.
 * @apiSuccess {boolean} isDayLightSavingsTime: true,
 * @apiSuccess {String} dayOfTheWeek Day of The Week.
 * @apiSuccess {String} timeZoneName Timezone Name.
 * @apiSuccess {Number} currentFileTime Current File Time.
 * @apiSuccess {String} ordinalDate Ordinal Date
 * @apiSuccess {String} serviceResponse Service Response.
 */
routes.get("/tomorrow/:timezone", WorldClockApiController.getTime);

module.exports = routes;