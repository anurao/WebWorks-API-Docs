/*
* Copyright 2010-2011 Research In Motion Limited.
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
* @namespace provides the ability co connect to a specified APN
* @featureID blackberry.apn.connection
* @toc APN
* @permission
*/
blackberry.apn.connection = { 
        
     
/* @name blackberry.apn.connection.bindToInterface
 * @function
 * @description Connects to the specified APN and sets the default interface to route over the specified APN
 * A caller can only connect to one interface at a time. To create a connect to another APN, a disconnect must be * called for the first connection.  
 * @param apn  
 * @example
 * 		function bindToAppsInterface() {
 *			var apnType = apn.connection.APNType.CARRIER_APPS;
 *			alert("Apn is : " + apnType);
 *          var result = apn.connection.bindToInterface(apnType, onConnect, onFailure); 
 *      }
 *      
 *      function onConnect(errorMsg) {
 *				var msg = "error";
 *				switch(errorMsg){
 *					case apn.connection.APNConnectMessage.CONNECTED: 
 *						msg = "CONNECTED";
 *						break;
 *					default:
 *						msg = errorMsg;
 *                      break;
 * 				}
 *               alert(msg);
 *           }
 *       function onFailure(errorMsg) {
 *				var msg = "error";
 *				switch(errorMsg){
 *					case apn.connection.APNConnectMessage.UNKNOWN_CONNECTION_TYPE:
 *						msg = "UNKNOWN_CONNECTION_TYPE";
 *						break;
 *					case apn.connection.APNConnectMessage.CONNECT_FAILURE:
 *						msg = "CONNECT_FAILURE";
 *						break;
 *					case apn.connection.APNConnectMessage.DISCONNECT_FAILURE: 
 *						msg = "DISCONNECT_FAILURE";
 *						break;
 *					case apn.connection.APNConnectMessage.ROUTING_IF_UPDATE_FAILURE: 
 *						msg = "ROUTING_IF_UPDATE_FAILURE";
 *						break;
 *					case apn.connection.APNConnectMessage.CONNECTION_ALREADY_EXISTS:
 *						msg = "CONNECTION_ALREADY_EXISTS";
 *						break;
 *					case apn.connection.APNConnectMessage.NOT_CONNECTED: 
 *						msg = "NOT_CONNECTED";
 *						break;
 *					case apn.connection.APNConnectMessage.PPS_ERROR:
 *						msg = "PPS_ERROR";
 *						break;
 *					default:
 *						msg = "error";
 *				}
 *               alert(msg);
 *           }
 * 
 */ 
bindToInterface = function (apn, successCallback, failureCallback) {},

/* @name blackberry.apn.connection.bindToInterface
 * @function
 * @description Disconnects from the specified APN. Every connect must be followed by a disconnect.
 * Disconnect failure can happen if another application has already connected to the specified APN
 * In case of a routing IF failure, a retry can be issued to disconnect
 * @param apn  
 * @example
 * 		function bindToAppsInterface() {
 *			var apnType = apn.connection.APNType.CARRIER_APPS;
 *			alert("Apn is : " + apnType);
 *          var result = apn.connection.disconnectFromInterface(apnType, onDisconnect, onFailure); 
 *      }
 *      
 *      function onDisconnect(errorMsg) {
 *				var msg = "error";
 *				switch(errorMsg){
 *					case apn.connection.APNConnectMessage.DISCONNECTED:
 * 						msg = "DISCONNECTED";
 *						break;
 *					default:
 *						msg = errorMsg;
 *                      break;
 * 				}
 *               alert(msg);
 *           }
 *       function onFailure(errorMsg) {
 *				var msg = "error";
 *				switch(errorMsg){
 *					case apn.connection.APNConnectMessage.UNKNOWN_CONNECTION_TYPE:
 *						msg = "UNKNOWN_CONNECTION_TYPE";
 *						break;
 *					case apn.connection.APNConnectMessage.CONNECT_FAILURE:
 *						msg = "CONNECT_FAILURE";
 *						break;
 *					case apn.connection.APNConnectMessage.DISCONNECT_FAILURE: 
 *						msg = "DISCONNECT_FAILURE";
 *						break;
 *					case apn.connection.APNConnectMessage.ROUTING_IF_UPDATE_FAILURE: 
 *						msg = "ROUTING_IF_UPDATE_FAILURE";
 *						break;
 *					case apn.connection.APNConnectMessage.CONNECTION_ALREADY_EXISTS:
 *						msg = "CONNECTION_ALREADY_EXISTS";
 *						break;
 *					case apn.connection.APNConnectMessage.NOT_CONNECTED: 
 *						msg = "NOT_CONNECTED";
 *						break;
 *					case apn.connection.APNConnectMessage.PPS_ERROR:
 *						msg = "PPS_ERROR";
 *						break;
 *					default:
 *						msg = "error";
 *				}
 *               alert(msg);
 *           }
 * 
 */ 
disconnectFromInterface = function (apn, successCallback, failureCallback) {} 
}

