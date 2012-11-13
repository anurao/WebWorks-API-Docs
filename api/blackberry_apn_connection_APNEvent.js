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
 * @toc {APN} APNEvent
 * @featureID blackberry.apn.connection
 * @class The APNEvent object lists the event type that will be sent with the callback
 * when a connect or diconnect is issued
 */
blackberry.apn.connection.APNEvent = {};

/**#@-*/

/**
 * @type String
 * @constant
 * @description Sent on a succesful connect
 * @BB10X
 */
 blackberry.apn.connection.APNEvent.CONNECT_EVENT = 0;

/**
 * @type String
 * @constant
 * @description Sent on a succesful diconnect
 * @BB10X
 */
 blackberry.apn.connection.APNEvent.DISCONNECT_EVENT = 1;

/**
 * @type String
 * @constant
 * @description Sent on error. A more specific error message of type apn.connection.APNConnectMessage will be sent
 * this will allow display of a mroe granular message if needed. 
 * @BB10X
 */
 blackberry.apn.connection.APNEvent.CONNECT_ERROR_EVENT = 2;