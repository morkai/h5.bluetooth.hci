// Part of <http://miracle.systems/p/h5.bluetooth.hci> licensed under <MIT>

/* eslint-disable no-unused-vars */

'use strict';

const enums = require('./enums');
const PacketType = enums.PacketType;
const CommandOgf = enums.CommandOgf;
const LinkControlCommandOcf = enums.LinkControlCommandOcf;
const LinkPolicyCommandOcf = enums.LinkPolicyCommandOcf;
const ControllerBasebandCommandOcf = enums.ControllerBasebandCommandOcf;
const InformationalParametersCommandOcf = enums.InformationalParametersCommandOcf;
const StatusParametersCommandOcf = enums.StatusParametersCommandOcf;
const TestingCommandOcf = enums.TestingCommandOcf;
const EventCode = enums.EventCode;
const LeSubeventCode = enums.LeSubeventCode;
const LeControllerCommandOcf = enums.LeControllerCommandOcf;
const AdvertisingReportEventType = enums.AdvertisingReportEventType;
const AdvertisingReportAddressType = enums.AdvertisingReportAddressType;
const EirDataType = enums.EirDataType;
const BLUETOOTH_BASE_UUID = '00000000-0000-1000-8000-00805F9B34FB';

/**
 * @type {Object<PacketType, function(Buffer, HciPacket)>}
 */
const packetTypeDecoders = {
  [PacketType.Command]: decodeCommandPacket,
  [PacketType.AclData]: noop,
  [PacketType.ScoData]: noop,
  [PacketType.Event]: decodeEventPacket
};

/**
 * @type {Object<LinkControlCommandOcf, function(Buffer, HciPacket)>}
 */
const linkControlCommandOcfDecoders = {
  [LinkControlCommandOcf.Inquiry]: noop
};

/**
 * @type {Object<LinkPolicyCommandOcf, function(Buffer, HciPacket)>}
 */
const linkPolicyCommandOcfDecoders = {

};

/**
 * @type {Object<ControllerBasebandCommandOcf, function(Buffer, HciPacket)>}
 */
const controllerBasebandCommandOcfDecoders = {

};

/**
 * @type {Object<InformationalParametersCommandOcf, function(Buffer, HciPacket)>}
 */
const informationalParametersCommandOcfDecoders = {

};

/**
 * @type {Object<StatusParametersCommandOcf, function(Buffer, HciPacket)>}
 */
const statusParametersCommandOcfDecoders = {

};

/**
 * @type {Object<TestingCommandOcf, function(Buffer, HciPacket)>}
 */
const testingCommandOcfDecoders = {

};

/**
 * @type {Object<LeControllerCommandOcf, function(Buffer, HciPacket)>}
 */
const leControllerCommandOcfDecoders = {

};

/**
 * @type {Object<EventCode, function(Buffer, HciPacket)>}
 */
const eventCodeDecoders = {
  [EventCode.LeMeta]: decodeLeMetaEvent
};

/**
 * @type {Object<LeSubeventCode, function(Buffer, HciPacket)>}
 */
const leSubeventCodeDecoders = {
  [LeSubeventCode.AdvertisingReport]: decodeAdvertisingReport
};

/**
 * @type {Object<EirDataType, function(Buffer, EirDataStructure)>}
 */
const eirDataTypeDecoders = {
  [EirDataType.Flags]: decodeEirFlags,
  [EirDataType.LocalNameShort]: decodeEirLocalName,
  [EirDataType.LocalNameComplete]: decodeEirLocalName,
  [EirDataType.TxPowerLevel]: decodeEirTxPowerLevel,
  [EirDataType.ManufacturerSpecificData]: decodeEirManufacturerSpecificData
};

/**
 * @type {Object<EirDataType, function(Buffer, EirDataStructure)>}
 */
const manufacturerSpecificDataDecoders = {

};

/**
 * @type {Object<CommandOgf, function(Buffer, HciPacket)>}
 */
const commandOgfDecoders = {
  [CommandOgf.LinkControl]: decodeByOcf.bind(null, LinkControlCommandOcf, linkControlCommandOcfDecoders),
  [CommandOgf.LinkPolicy]: decodeByOcf.bind(null, LinkPolicyCommandOcf, linkPolicyCommandOcfDecoders),
  [CommandOgf.ControllerBaseband]: decodeByOcf.bind(null, ControllerBasebandCommandOcf, controllerBasebandCommandOcfDecoders),
  [CommandOgf.InformationalParameters]: decodeByOcf.bind(null, InformationalParametersCommandOcf, informationalParametersCommandOcfDecoders),
  [CommandOgf.StatusParameters]: decodeByOcf.bind(null, StatusParametersCommandOcf, statusParametersCommandOcfDecoders),
  [CommandOgf.Testing]: decodeByOcf.bind(null, TestingCommandOcf, testingCommandOcfDecoders)
};

const decoders = {
  commandOgf: commandOgfDecoders,
  linkControlCommandOcf: linkControlCommandOcfDecoders,
  linkPolicyCommandOcf: linkPolicyCommandOcfDecoders,
  controllerBasebandCommandOcf: controllerBasebandCommandOcfDecoders,
  informationalParametersCommandOcf: informationalParametersCommandOcfDecoders,
  statusParametersCommandOcf: statusParametersCommandOcfDecoders,
  testingCommandOcf: testingCommandOcfDecoders,
  leControllerCommandOcf: leControllerCommandOcfDecoders,
  eventCode: eventCodeDecoders,
  leSubeventCode: leSubeventCodeDecoders,
  eirDataType: eirDataTypeDecoders,
  manufacturerSpecificData: manufacturerSpecificDataDecoders
};

/**
 * @param {Buffer} buffer
 * @returns {HciPacket}
 */
function decode(buffer)
{
  const packetType = buffer[0];
  const packet = {
    endIndex: PacketType[packetType] ? 0 : -1,
    type: packetType,
    typeLabel: PacketType[packetType] || 'UNKNOWN',
    parameters: {}
  };

  decodeIfAvailable(packetTypeDecoders, packetType, buffer, packet);

  return packet;
}

function noop()
{
  if (process.env.NODE_ENV === 'development') // eslint-disable-line no-process-env
  {
    throw new Error('TODO');
  }
}

function decodeCommandPacket(buffer, packet)
{
  const ogf = decodeOgf(buffer[2]);

  packet.endIndex += 2;
  packet.ogf = ogf;
  packet.ogfLabel = CommandOgf[ogf] || 'UNKNOWN';

  decodeIfAvailable(commandOgfDecoders, ogf, buffer, packet);
}

function decodeByOcf(ocfEnum, ocfDecoders, buffer, packet)
{
  const ocf = decodeOcf(buffer[2], buffer[1]);

  packet.ocf = ocf;
  packet.ocfLabel = ocfEnum[ocf] || 'UNKNOWN';

  decodeIfAvailable(ocfDecoders, ocf, buffer, packet);
}

function decodeEventPacket(buffer, packet)
{
  packet.endIndex += 1;

  const eventCode = buffer[packet.endIndex];

  packet.eventCode = eventCode;
  packet.eventCodeLabel = EventCode[eventCode] || 'UNKNOWN';
  packet.endIndex += 1;
  packet.parameterTotalLength = buffer[packet.endIndex];

  if (typeof packet.parameterTotalLength !== 'number')
  {
    return;
  }

  const packetTotalLength = packet.endIndex + packet.parameterTotalLength;

  if (buffer.length >= packetTotalLength)
  {
    decodeIfAvailable(eventCodeDecoders, eventCode, buffer, packet);
  }
}

function decodeLeMetaEvent(buffer, packet)
{
  packet.endIndex += 1;

  const leSubeventCode = buffer[packet.endIndex];

  packet.parameters.leSubeventCode = leSubeventCode;
  packet.parameters.leSubeventCodeLabel = LeSubeventCode[leSubeventCode] || 'UNKNOWN';

  decodeIfAvailable(leSubeventCodeDecoders, leSubeventCode, buffer, packet);
}

function decodeAdvertisingReport(buffer, packet)
{
  packet.endIndex += 1;
  packet.parameters.reportCount = buffer[packet.endIndex];
  packet.parameters.reports = [];

  let dataLengths;
  const reportCount = packet.parameters.reportCount;
  const reportParameters = {
    eventType: decodeFixedSizeByteGroups(buffer, packet, reportCount, 1, b => b[0]),
    addressType: decodeFixedSizeByteGroups(buffer, packet, reportCount, 1, b => b[0]),
    address: decodeFixedSizeByteGroups(buffer, packet, reportCount, 6, b => b.toString('hex').toUpperCase().match(/(.{2})/g).reverse().join(':')),
    length: dataLengths = decodeFixedSizeByteGroups(buffer, packet, reportCount, 1, b => b[0]),
    data: decodeVariableSizeByteGroups(buffer, packet, reportCount, dataLengths),
    rssi: decodeFixedSizeByteGroups(buffer, packet, reportCount, 1, b => b.readInt8(0))
  };

  for (let i = 0; i < reportCount; ++i)
  {
    const eventType = reportParameters.eventType[i];
    const addressType = reportParameters.addressType[i];
    const report = {
      eventType: eventType,
      eventTypeLabel: AdvertisingReportEventType[eventType] || 'UNKNOWN',
      addressType: addressType,
      addressTypeLabel: AdvertisingReportAddressType[addressType] || 'UNKNOWN',
      address: reportParameters.address[i],
      length: reportParameters.length[i],
      data: decodeExtendedInquiryResponseData(reportParameters.data[i]),
      rssi: reportParameters.rssi[i]
    };

    packet.parameters.reports.push(report);
  }
}

function decodeFixedSizeByteGroups(buffer, packet, groupCount, bytesInGroup, valueConverter)
{
  const groups = new Array(groupCount);

  for (let i = 0; i < groupCount; ++i)
  {
    groups[i] = valueConverter(buffer.slice(packet.endIndex + 1, packet.endIndex + bytesInGroup + 1));

    packet.endIndex += bytesInGroup;
  }

  return groups;
}

function decodeVariableSizeByteGroups(buffer, packet, groupCount, bytesInGroups)
{
  const groups = new Array(groupCount);

  for (let i = 0; i < groupCount; ++i)
  {
    const bytesInGroup = bytesInGroups[i];

    groups[i] = buffer.slice(packet.endIndex + 1, packet.endIndex + bytesInGroup + 1);

    packet.endIndex += bytesInGroup;
  }

  return groups;
}

function decodeExtendedInquiryResponseData(buffer)
{
  const eirDataStructures = [];

  for (let i = 0; i < buffer.length;)
  {
    const length = buffer[i];

    if (length === 0)
    {
      break;
    }

    // Skip length
    i += 1;

    const eirDataType = buffer[i];

    // Skip EIR Data Type
    i += 1;

    const eirData = buffer.slice(i, i + length - 1);

    // Skip EIR Data
    i += length - 1;

    const eirDataStructure = {
      type: eirDataType,
      typeLabel: EirDataType[eirDataType] || 'UNKNOWN'
    };
    const eirDataDecoder = eirDataTypeDecoders[eirDataType];

    if (typeof eirDataDecoder === 'function')
    {
      eirDataDecoder(eirData, eirDataStructure);
    }
    else
    {
      eirDataStructure.data = eirData;
    }

    eirDataStructures.push(eirDataStructure);
  }

  return eirDataStructures;
}

function decodeEirFlags(buffer, eirDataStructure)
{
  eirDataStructure.value = buffer[0];
  eirDataStructure.limitedMode = !!(eirDataStructure.value & 0x01);
  eirDataStructure.generalMode = !!(eirDataStructure.value & 0x02);
  eirDataStructure.noBrEdr = !!(eirDataStructure.value & 0x04);
  eirDataStructure.leAndBrEdrController = !!(eirDataStructure.value & 0x08);
  eirDataStructure.leAndBrEdrHost = !!(eirDataStructure.value & 0x10);
}

function decodeEirLocalName(buffer, eirDataStructure)
{
  let endIndex = buffer.indexOf(0) + 1;

  if (endIndex === 0)
  {
    endIndex = buffer.length;
  }

  eirDataStructure.value = buffer.toString('utf8', 0, endIndex);
}

function decodeEirTxPowerLevel(buffer, eirDataStructure)
{
  eirDataStructure.value = buffer.length === 0 ? NaN : buffer.readInt8(0);
}

function decodeEirManufacturerSpecificData(buffer, eirDataStructure)
{
  eirDataStructure.companyIdentifier = buffer.readUInt16LE(0);

  const decoder = manufacturerSpecificDataDecoders[eirDataStructure.companyIdentifier];

  if (typeof decoder === 'function')
  {
    decoder(buffer.slice(2), eirDataStructure);
  }
  else
  {
    eirDataStructure.data = buffer.slice(2);
  }
}

function decodeIfAvailable(decoders, decoderKey, buffer, packet) // eslint-disable-line no-shadow
{
  const decoder = decoders[decoderKey];

  if (typeof decoder === 'function')
  {
    decoder(buffer, packet);
  }
}

function decodeOgf(data)
{
  return data >> 2;
}

function decodeOcf(msb, lsb)
{
  return (msb * 0x03) + lsb;
}

module.exports = decode;
module.exports.decoders = decoders;

/**
 * @typedef {Object} EirDataStructure
 * @property {EirDataType} type
 * @property {string} typeLabel
 * @property {Buffer} [data]
 */

/**
 * @typedef {Object} HciPacket
 * @property {number} endIndex
 * @property {PacketType} type
 * @property {string} typeLabel
 * @property {Object} parameters
 */
