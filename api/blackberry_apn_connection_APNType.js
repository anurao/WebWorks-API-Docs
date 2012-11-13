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
 * @toc {APN} APNType
 * @featureID blackberry.apn.connection
 * @class The APNConnectError object list the valid connection logical names
 *		which should be specified when making a connect request
 */
blackberry.apn.connection.APNType = {};

/**
 * @type String
 * @readOnly
 * @description A string specifying the logical connection.
 * @BB10
 */
blackberry.apn.connection.APNType.prototype.type = "";

/**#@-*/

/**
 * @type String
 * @constant
 * @description Represents an administrative connection. If available is typically a secured zero-cost connection 
 * available to specific applications and services such as OMADM.
 * @BB10X
 */
 blackberry.apn.connection.APNType.CARRRIER_ADMIN = "carrier_admin";

/**
 * @type String
 * @constant
 * @description Represents a zero rated connection that authorized carrier applications use
 * @BB10X
 */
 blackberry.apn.connection.APNType.CARRIER_APPS = "carrier_apn";

/**
 * @type String
 * @constant
 * @description Represents a connection used for administration of pre-paid and other related plan services.  
 * For Verizon this is aliased to carrier_apps.
 * @BB10X
 */
 blackberry.apn.connection.APNType.PLAN_ADMIN = "plan_admin";

 /**
 * @type String
 * @constant
 * @description Connection where the carrier charges the destination for usage
 * @BB10X
 */
 blackberry.apn.connection.APNType.CARRIER_800 = "carrier_800";