/*
* Copyright 2010-2012 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * @toc {APN} APNConnectMessage
 * @featureID blackberry.apn.connection
 * @class The APNConnectMessage object contains error codes and is returned in the callback.
 */
blackberry.apn.connection.APNConnectMessage = {};

/**
 * @type Number
 * @readOnly
 * @description A code specifying the type of error that occurred.
 * @BB10X
 * @example
 *
 *
 *	function onFailure(errorMsg) {
 *			var msg = "error";
 * 			switch(errorMsg){
 *				case apn.connection.APNConnectMessage.UNKNOWN_CONNECTION_TYPE:
 *					msg = "UNKNOWN_CONNECTION_TYPE";
 *					break;
 *				case apn.connection.APNConnectMessage.CONNECT_FAILURE:
 * 					msg = "CONNECT_FAILURE";
 *					break;
 *				case apn.connection.APNConnectMessage.DISCONNECT_FAILURE: 
 *					msg = "DISCONNECT_FAILURE";
 *					break;
 *				case apn.connection.APNConnectMessage.ROUTING_IF_UPDATE_FAILURE: 
 *					msg = "ROUTING_IF_UPDATE_FAILURE";
 *					break;
 *				case apn.connection.APNConnectMessage.CONNECTION_ALREADY_EXISTS:
 *					msg = "CONNECTION_ALREADY_EXISTS";
 *					break;
 *				case apn.connection.APNConnectMessage.NOT_CONNECTED: 
 *					msg = "NOT_CONNECTED";
 *					break;
 *				case apn.connection.APNConnectMessage.PPS_ERROR:
 * 					msg = "PPS_ERROR";
 *					break;
 *				case apn.connection.APNConnectMessage.CONNECTED: 
 *					msg = "CONNECTED";
 *					break;
 *				case apn.connection.APNConnectMessage.DISCONNECTED:
 *					msg = "DISCONNECTED";
 *					break;
 *				default:
 *					msg = "error";
 *			}
 *			alert(msg);
 *		}
 */

/**
 * @type Number
 * @constant
 * @default 0
 * @description An unknown apn type was sent
 * @BB10X
 */
 blackberry.apn.connection.APNConnectMessage.UNKNOWN_CONNECTION_TYPE = 0;

/**
 * @type Number
 * @constant
 * @default 1
 * @description Failure to connect to the specified APN. The client can issue a reconnect on this error. 
 * @BB10X
 */
 blackberry.apn.connection.APNConnectMessage.CONNECT_FAILURE = 1;

 /**
 * @type Number
 * @constant
 * @default 2
 * @description This is likely to happen if another client has requested a connection ons the same APN and not  * * issued a corresponding disconnect. 
 * @BB10X
 */
 blackberry.apn.connection.APNConnectMessage.DISCONNECT_FAILURE = 2;
 
/**
 * @type Number
 * @constant
 * @default 3
 * @description The connect to APN is succesful but the routing interface could not be set on the device
 * If this is recieved during a connect or a disconnect the caller can reissue the call to connect/disconnect
 * @BB10X
 */
 blackberry.apn.connection.APNConnectMessage.ROUTING_IF_UPDATE_FAILURE = 3;

 /**
 * @type Number
 * @constant
 * @default 4
 * @description The API will allow only one connection at a time. Every connection must be followed by a
 * disconnect. Disconnect form the previously connected APN and reissue the connect request 
 * @BB10X
 */
 blackberry.apn.connection.APNConnectMessage.CONNECTION_ALREADY_EXISTS_ERROR = 4;

 /**
 * @type Number
 * @constant
 * @default 4
 * @description There is no current connection. 
 * @BB10X
 */
 blackberry.apn.connection.APNConnectMessage.NOT_DISCONNECTED = 4;
 
   /**
 * @type Number
 * @constant
 * @default 6
 * @description This is related to not having the correct permissions. Check the blackberry tablet.xml files to 
 * ensure the right permissions are set. 
 * @BB10X
 */
 blackberry.apn.connection.PPSError =  6;
 
  /**
 * @type Number
 * @constant
 * @default 7
 * @description Succesfully connected
 * @BB10X
 */
 blackberry.apn.connection.APNConnectMessage =  7;
 
   /**
 * @type Number
 * @constant
 * @default 8
 * @description Succesfully disconnected
 * @BB10X
 */
 blackberry.apn.connection.APNConnectMessage = 8;