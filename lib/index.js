// Part of <http://miracle.systems/p/h5.bluetooth.hci> licensed under <MIT>

'use strict';

exports.decode = require('./decode');

exports.decoders = exports.decode.decoders;

exports.enums = require('./enums');

/**
 * @type {typeof PacketType}
 */
exports.PacketType = exports.enums.PacketType;

/**
 * @type {typeof CommandOgf}
 */
exports.CommandOgf = exports.enums.CommandOgf;

/**
 * @type {typeof LinkControlCommandOcf}
 */
exports.LinkControlCommandOcf = exports.enums.LinkControlCommandOcf;

/**
 * @type {typeof LinkPolicyCommandOcf}
 */
exports.LinkPolicyCommandOcf = exports.enums.LinkPolicyCommandOcf;

/**
 * @type {typeof ControllerBasebandCommandOcf}
 */
exports.ControllerBasebandCommandOcf = exports.enums.ControllerBasebandCommandOcf;

/**
 * @type {typeof InformationalParametersCommandOcf}
 */
exports.InformationalParametersCommandOcf = exports.enums.InformationalParametersCommandOcf;

/**
 * @type {typeof StatusParametersCommandOcf}
 */
exports.StatusParametersCommandOcf = exports.enums.StatusParametersCommandOcf;

/**
 * @type {typeof TestingCommandOcf}
 */
exports.TestingCommandOcf = exports.enums.TestingCommandOcf;

/**
 * @type {typeof EventCode}
 */
exports.EventCode = exports.enums.EventCode;

/**
 * @type {typeof LeSubeventCode}
 */
exports.LeSubeventCode = exports.enums.LeSubeventCode;

/**
 * @type {typeof LeControllerCommandOcf}
 */
exports.LeControllerCommandOcf = exports.enums.LeControllerCommandOcf;

/**
 * @type {typeof AdvertisingReportEventType}
 */
exports.AdvertisingReportEventType = exports.enums.AdvertisingReportEventType;

/**
 * @type {typeof AdvertisingReportAddressType}
 */
exports.AdvertisingReportAddressType = exports.enums.AdvertisingReportAddressType;

/**
 * @type {typeof EirDataType}
 */
exports.EirDataType = exports.enums.EirDataType;
