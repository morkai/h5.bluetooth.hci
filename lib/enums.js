// Part of <http://miracle.systems/p/h5.bluetooth.hci> licensed under <MIT>

'use strict';

/**
 * @enum {number}
 */
exports.PacketType = {
  Command: 0x01,
  AclData: 0x02,
  ScoData: 0x03,
  Event: 0x04
};

/**
 * @enum {number}
 */
exports.CommandOgf = {
  LinkControl: 0x01,
  LinkPolicy: 0x02,
  ControllerBaseband: 0x03,
  InformationalParameters: 0x04,
  StatusParameters: 0x05,
  Testing: 0x06
};

/**
 * @enum {number}
 */
exports.LinkControlCommandOcf = {
  Inquiry: 0x0001,
  InquiryCancel: 0x0002,
  PeriodicInquiryMode: 0x0003,
  ExitPeriodicInquiryMode: 0x0004,
  CreateConnection: 0x0005,
  Disconnect: 0x0006,
  CreateConnectionCancel: 0x0008,
  AcceptConnectionRequest: 0x0009,
  RejectConnectionRequest: 0x000A,
  LinkKeyRequestReply: 0x000B,
  LinkKeyRequestNegativeReply: 0x000C,
  PinCodeRequestReply: 0x000D,
  PinCodeRequestNegativeReply: 0x000E,
  ChangeConnectionPacketType: 0x000F,
  AuthenticationRequested: 0x0011,
  SetConnectionEncryption: 0x0013,
  ChangeConnectionLinkKey: 0x0015,
  MasterLinkKey: 0x0017,
  RemoteNameRequest: 0x0019,
  RemoteNameRequestCancel: 0x001A,
  ReadRemoteSupportedFeatures: 0x001B,
  ReadRemoteExtendedFeatures: 0x001C,
  ReadRemoteVersionInformation: 0x001D,
  ReadClockOffset: 0x001F,
  ReadLmpHandle: 0x0020,
  SetupSynchronousConnection: 0x0028,
  AcceptSynchronousConnectionRequest: 0x0029,
  RejectSynchronousConnectionRequest: 0x002A,
  IoCapabilityRequestReply: 0x002B,
  UserConfirmationRequestReply: 0x002C,
  UserConfirmationRequestNegativeReply: 0x002D,
  UserPasskeyRequestReply: 0x002E,
  UserPasskeyRequestNegativeReply: 0x002F,
  RemoteOobDataRequestReply: 0x0030,
  RemoteOobDataRequestNegativeReply: 0x0033,
  IoCapabilityRequestNegativeReply: 0x0034,
  CreatePhysicalLink: 0x0035,
  AcceptPhysicalLink: 0x0036,
  DisconnectPhysicalLink: 0x0037,
  CreateLogicalLink: 0x0038,
  AcceptLogicalLink: 0x0039,
  DisconnectLogicalLink: 0x003A,
  LogicalLinkCancel: 0x003B,
  FlowSpecModify: 0x0003C
};

/**
 * @enum {number}
 */
exports.LinkPolicyCommandOcf = {
  HoldMode: 0x0001,
  SniffMode: 0x0003,
  ExitSniffMode: 0x0004,
  ParkState: 0x0005,
  ExitParkState: 0x0006,
  QosSetup: 0x0007,
  RoleDiscovery: 0x0009,
  SwitchRole: 0x000B,
  ReadLinkPolicySettings: 0x000C,
  WriteLinkPolicySettings: 0x000D,
  ReadDefaultLinkPolicySettings: 0x000E,
  WriteDefaultLinkPolicySettings: 0x000F,
  FlowSpecification: 0x0010,
  SniffSubrating: 0x0011
};

/**
 * @enum {number}
 */
exports.ControllerBasebandCommandOcf = {
  SetEventMask: 0x0001,
  Reset: 0x0003,
  SetEventFilter: 0x0005,
  Flush: 0x0008,
  ReadPinType: 0x0009,
  WritePinType: 0x000A,
  CreateNewUnitKey: 0x000B,
  ReadStoredLinkKey: 0x000D,
  WriteStoredLinkKey: 0x0011,
  DeleteStoredLinkKey: 0x0012,
  WriteLocalName: 0x0013,
  ReadLocalName: 0x0014,
  ReadConnectionAcceptTimeout: 0x0015,
  WriteConnectionAcceptTimeout: 0x0016,
  ReadPageTimeout: 0x0017,
  WritePageTimeout: 0x0018,
  ReadScanEnable: 0x0019,
  WriteScanEnable: 0x001A,
  ReadPageScanActivity: 0x001B,
  WritePageScanActivity: 0x001C,
  ReadInquiryScanActivity: 0x001D,
  WriteInquiryScanActivity: 0x001E,
  ReadAuthenticationEnable: 0x001F,
  WriteAuthenticationEnable: 0x0020,
  ReadClassOfDevice: 0x0023,
  WriteClassOfDevice: 0x0024,
  ReadVoiceSetting: 0x0025,
  WriteVoiceSetting: 0x0026,
  ReadAutomaticFlushTimeout: 0x0027,
  WriteAutomaticFlushTimeout: 0x0028,
  ReadNumBroadcastRetransmissions: 0x0029,
  WriteNumBroadcastRetransmissions: 0x002A,
  ReadHoldModeActivity: 0x002B,
  WriteHoldModeActivity: 0x002C,
  ReadTransmitPowerLevel: 0x002D,
  ReadSynchronousFlowControlEnable: 0x002E,
  WriteSynchronousFlowControlEnable: 0x002F,
  SetControllerToHostFlowControl: 0x0031,
  HostBufferSize: 0x0033,
  HostNumberOfCompletedPackets: 0x0035,
  ReadLinkSupervisionTimeout: 0x0036,
  WriteLinkSupervisionTimeout: 0x0037,
  ReadNumberOfSupportedIac: 0x0038,
  ReadCurrentIacLap: 0x0039,
  WriteCurrentIacLap: 0x003A,
  SetAfhHostChannelClassification: 0x003F,
  ReadInquiryScanType: 0x0042,
  WriteInquiryScanType: 0x0043,
  ReadInquiryMode: 0x0044,
  WriteInquiryMode: 0x0045,
  ReadPageScanType: 0x0046,
  WritePageScanType: 0x0047,
  ReadAfhChannelAssessmentMode: 0x0048,
  WriteAfhChannelAssessmentMode: 0x0049,
  ReadExtendedInquiryResponse: 0x0051,
  WriteExtendedInquiryResponse: 0x0052,
  RefreshEncryptionKey: 0x0053,
  ReadSimplePairingMode: 0x0055,
  WriteSimplePairingMode: 0x0056,
  ReadLocalOobData: 0x0057,
  ReadInquiryResponseTransmitPowerLevel: 0x0058,
  WriteInquiryTransmitPowerLevel: 0x0059,
  SendKeypressNotification: 0x0060,
  ReadDefaultErroneousDataReporting: 0x005A,
  WriteDefaultErroneousDataReporting: 0x005B,
  EnhancedFlush: 0x005F,
  ReadLogicalLinkAcceptTimeout: 0x0061,
  WriteLogicalLinkAcceptTimeout: 0x0062,
  SetEventMaskPage2: 0x0063,
  ReadLocationData: 0x0064,
  WriteLocationData: 0x0065,
  ReadFlowControlMode: 0x0066,
  WriteFlowControlMode: 0x0067,
  ReadEnhancedTransmitPowerLevel: 0x0068,
  ReadBestEffortFlushTimeout: 0x0069,
  WriteBestEffortFlushTimeout: 0x006A,
  ShortRangeMode: 0x006B,
  ReadLeHostSupported: 0x006C,
  WriteLeHostSupported: 0x0006D
};

/**
 * @enum {number}
 */
exports.InformationalParametersCommandOcf = {
  ReadLocalVersionInformation: 0x0001,
  ReadLocalSupportedCommands: 0x0002,
  ReadLocalSupportedFeatures: 0x0003,
  ReadLocalExtendedFeatures: 0x0004,
  ReadBufferSize: 0x0005,
  ReadBdAddr: 0x0009,
  ReadDataBlockSize: 0x000A
};

/**
 * @enum {number}
 */
exports.StatusParametersCommandOcf = {
  ReadFailedContactCounter: 0x0001,
  ResetFailedContactCounter: 0x0002,
  ReadLinkQuality: 0x0003,
  ReadRssi: 0x0005,
  ReadAfhChannelMap: 0x0006,
  ReadClock: 0x0007,
  ReadEncryptionKeySize: 0x0008,
  ReadLocalAmpInfo: 0x0009,
  ReadLocalAmpAssoc: 0x000A,
  WriteRemoteAmpAssoc: 0x000B
};

/**
 * @enum {number}
 */
exports.TestingCommandOcf = {
  ReadLoopbackMode: 0x0001,
  WriteLoopbackMode: 0x0002,
  EnableDeviceUnderTestMode: 0x0003,
  WriteSimplePairingDebugMode: 0x0004,
  EnableAmpReceiverReports: 0x0007,
  AmpTestEnd: 0x0008,
  AmpTest: 0x0009
};

/**
 * @enum {number}
 */
exports.EventCode = {
  InquiryComplete: 0x01,
  InquiryResult: 0x02,
  ConnectionComplete: 0x03,
  ConnectionRequest: 0x04,
  DisconnectionComplete: 0x05,
  AuthenticationComplete: 0x06,
  RemoteNameRequestComplete: 0x07,
  EncryptionChange: 0x08,
  ChangeConnectionLinkKey: 0x09,
  MasterLinkKeyComplete: 0x0A,
  ReadRemoteSupportedFeaturesComplete: 0x0B,
  ReadRemoteVersionInformationComplete: 0x0C,
  QosSetupComplete: 0x0D,
  CommandComplete: 0x0E,
  CommandStatus: 0x0F,
  HardwareError: 0x10,
  FlushOccurred: 0x11,
  RoleChange: 0x12,
  NumberOfCompletedPackets: 0x13,
  ModeChange: 0x14,
  ReturnLinkKeys: 0x15,
  PinCodeRequest: 0x16,
  LinkKeyRequest: 0x17,
  LinkKeyNotification: 0x18,
  LoopbackCommand: 0x19,
  DataBufferOverflow: 0x1A,
  MaxSlotsChange: 0x1B,
  ReadClockOffsetComplete: 0x1C,
  ConnectionPacketTypeChanged: 0x1D,
  QosViolation: 0x1E,
  PageScanRepetitionModeChange: 0x20,
  FlowSpecificationComplete: 0x21,
  InquiryResultWithRssi: 0x22,
  ReadRemoteExtendedFeaturesComplete: 0x23,
  SynchronousConnectionComplete: 0x2C,
  SynchronousConnectionChanged: 0x2D,
  SniffSubrating: 0x2E,
  ExtendedInquiryResult: 0x2F,
  EncryptionKeyRefreshComplete: 0x30,
  IoCapabilityRequest: 0x31,
  IoCapabilityResponse: 0x32,
  UserConfirmationRequest: 0x33,
  UserPasskeyRequest: 0x34,
  RemoteOobDataRequest: 0x35,
  SimplePairingComplete: 0x36,
  LinkSupervisionTimeoutChanged: 0x38,
  EnhancedFlushComplete: 0x39,
  UserPasskeyNotification: 0x3B,
  KeypressNotification: 0x3C,
  RemoteHostSupportedFeaturesNotification: 0x3D,
  PhysicalLinkComplete: 0x40,
  ChannelSelected: 0x41,
  DisconnectionPhysicalLinkComplete: 0x42,
  PhysicalLinkLossEarlyWarning: 0x43,
  PhysicalLinkRecovery: 0x44,
  LogicalLinkComplete: 0x45,
  DisconnectionLogicalLinkComplete: 0x46,
  FlowSpecModifyComplete: 0x47,
  NumberOfCompletedDataBlocks: 0x48,
  ShortRangeModeChangeComplete: 0x4C,
  AmpStatusChange: 0x4D,
  AmpStartTest: 0x49,
  AmpTestEnd: 0x5A,
  AmpReceiverReport: 0x4B,
  LeMeta: 0x3E
};

/**
 * @enum {number}
 */
exports.LeSubeventCode = {
  ConnectionComplete: 0x01,
  AdvertisingReport: 0x02,
  ConnectionUpdateComplete: 0x03,
  ReadRemoteUsedFeaturesComplete: 0x04,
  LongTermKeyRequest: 0x05,
  RemoteConnectionParameterRequest: 0x06,
  DataLengthChange: 0x07,
  ReadLocalP256PublicKeyComplete: 0x08,
  GenerateDhkeyComplete: 0x09,
  EnhancedConnectionComplete: 0x0A,
  DirectAdvertisingReport: 0x0B
};

/**
 * @enum {number}
 */
exports.LeControllerCommandOcf = {
  SetEventMask: 0x0001,
  ReadBufferSize: 0x0002,
  ReadLocalSupportedFeatures: 0x0003,
  SetRandomAddress: 0x0005,
  SetAdvertisingParameters: 0x0006,
  ReadAdvertisingChannelTxPower: 0x0007,
  SetAdvertisingData: 0x0008,
  SetScanResponseData: 0x0009,
  SetAdvertiseEnable: 0x000A,
  SetScanParameters: 0x000B,
  SetScanEnable: 0x000C,
  CreateConnection: 0x000D,
  CreateConnectionCancel: 0x000E,
  ReadWhiteListSize: 0x000F,
  ClearWhiteList: 0x0010,
  AddDeviceToWhiteList: 0x0011,
  RemoveDeviceFromWhiteList: 0x0012,
  ConnectionUpdate: 0x0013,
  SetHostChannelClassification: 0x0014,
  ReadChannelMap: 0x0015,
  ReadRemoteUsedFeatures: 0x0016,
  Encrypt: 0x0017,
  Rand: 0x0018,
  StartEncryption: 0x0019,
  LongTermKeyRequestReply: 0x001A,
  LongTermKeyRequestNegativeReply: 0x001B,
  ReadSupportedStates: 0x001C,
  ReceiverTest: 0x001D,
  TransmitterTest: 0x001E,
  TestEnd: 0x001F
};

/**
 * @enum {number}
 */
exports.AdvertisingReportEventType = {
  AdvInd: 0x00,
  AdvDirectInd: 0x01,
  AdvScanInd: 0x02,
  AdvNonconnInd: 0x03,
  ScanRsp: 0x04
};

/**
 * @enum {number}
 */
exports.AdvertisingReportAddressType = {
  Public: 0x00,
  Random: 0x01
};

/**
 * @enum {number}
 */
exports.EirDataType = {
  Flags: 0x01,
  ServiceMore16: 0x02,
  ServiceComplete16: 0x03,
  ServiceMore32: 0x04,
  ServiceComplete32: 0x05,
  ServiceMore128: 0x06,
  ServiceComplete128: 0x07,
  LocalNameShort: 0x08,
  LocalNameComplete: 0x09,
  TxPowerLevel: 0x0A,
  ClassOfDevice: 0x0D,
  SimplePairingHashC: 0x0E,
  SimplePairingRandomizerR: 0x0F,
  SecurityManagerTkValue: 0x10,
  SecurityManagerFlags: 0x11,
  SlaveConnectionIntervalRange: 0x12,
  ServiceList16: 0x14,
  ServiceList128: 0x15,
  ServiceData: 0x16,
  ManufacturerSpecificData: 0xFF
};

Object.keys(exports).forEach(function(enumName)
{
  Object.keys(exports[enumName]).forEach(function(optionName)
  {
    exports[enumName][exports[enumName][optionName]] = optionName;
  });
});
