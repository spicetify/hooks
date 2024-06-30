/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/*
visited.clear()
Platform.getClipboardAPI().copy(type(Platform, "PlatformAutoGen"))
*/

export type PlatformAutoGen = {
	"container": string;
	"enableCastConnect": boolean;
	"getActionStoreAPI": () => {} & {
		"cleanActions": () => undefined;
		"storeAction": () => undefined;
		"triggerActions": () => undefined;
	};
	"getAdManagers": () => {
		"adStateReporter": {
			"focusState":
				& { "listeners": Array<ReturnType<PlatformAutoGen["getAdManagers"]>["adStateReporter"]> }
				& {
					"addFocusListener": (a: any) => any;
					"hasFocus": () => boolean;
					"removeAllFocusListeners": () => any;
					"removeFocusListener": (a: any) => any;
				};
			"history": {
				"action": string;
				"block": () => () => undefined;
				"canGo": (a: any) => any;
				"createHref": (a: any) => any;
				"entries": Array<
					{
						"hash": string;
						"key": string;
						"pathname": string;
						"search": string;
						"state": { "navigationalRoot": string };
					}
				>;
				"go": (a: any) => any;
				"goBack": () => undefined;
				"goForward": () => undefined;
				"index": number;
				"length": number;
				"listen": (a: any) => any;
				"location": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["adStateReporter"]["history"]["entries"][0];
				"push": (a: any, b: any) => any;
				"replace": (a: any, b: any) => any;
			};
			"setAdStateKey": (a: any, b: any) => any;
		} & { "onFocusChanged": (a: any) => any };
		"audio": {
			"audioApi": {
				"cosmosConnector": {
					"addNewSlot": (a: any, b: any) => any;
					"configureSlot": (a: any, b: any, c: any) => any;
					"enableSlot": (a: any) => any;
					"fetchAdForSlot": (a: any, b: any) => any;
					"getAdForSlot": (a: any, b: any, c: any) => any;
					"getAdSlotConfig": (a: any) => any;
					"getAdState": () => Promise<any>;
					"getEpisodeSponsors": () => Promise<any>;
					"getFeatureFlags": (a: any) => any;
					"getShowSponsors": () => Promise<any>;
					"getSlotConfiguration": (a: any, b: any) => any;
					"getSlotConfigurations": (a: any) => any;
					"getSponsorshipAd": (a: any) => any;
					"getState": () => Promise<any>;
					"increaseStreamTime": (a: any) => any;
					"loadAdPod": (a: any) => any;
					"logAudioVolume": (a: any) => any;
					"overrideCountry": (a: any) => any;
					"overridePodcastMetadata": (a: any) => any;
					"patchTargeting": (a: any, b: any) => any;
					"postEvent": (a: any, b: any, c: any) => any;
					"postToSlot": (a: any, b: any, c: any) => any;
					"removeRequestHeader": (a: any, b: any) => any;
					"requestPreviewAd": (a: any) => any;
					"setAdSlotEndpoint": (a: any) => any;
					"setAdState": (a: any) => any;
					"setAdStateKey": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["adStateReporter"]["setAdStateKey"];
					"setAdStatePusherEndpoint": (a: any) => any;
					"setRequestHeader": (a: any, b: any, c: any) => any;
					"setSponsoredUri": (a: any) => any;
					"subToAdState": (a: any) => any;
					"subToState": (a: any) => any;
					"subscribeToAdsProductState": (a: any) => any;
					"subscribeToAllFormats": (a: any) => any;
					"subscribeToEvent": (a: any, b: any, c: any, d: any) => any;
					"subscribeToFormat": (a: any, b: any) => any;
					"subscribeToProductState": (a: any, b: any) => any;
					"subscribeToSlot": (a: any, b: any) => any;
					"subscribeToSlotType": (a: any, b: any) => any;
					"triggerSlotClear": (a: any) => any;
					"triggerSlotClearAll": (a: any) => any;
					"triggerSlotFetch": (a: any) => any;
					"triggerSlotPlay": (a: any) => any;
				};
			} & { "postEvent": (a: any, b: any, c: any) => any; "subscribeToSlotType": (a: any, b: any) => any };
			"enabled": boolean;
			"getContextAdInfo": () => Promise<any>;
			"inStreamApi": {
				"adsCoreConnector": {} & {
					"addNewSlot": (a: any, b: any) => any;
					"clearSlot": (a: any) => any;
					"enableSlot": (a: any) => any;
					"fetchAdForSlot": (a: any) => any;
					"fetchSlot": (a: any, b: any) => any;
					"getSlotSettings": (a: any) => any;
					"increaseStreamTime": (a: any) => any;
					"overrideCountry": (a: any) => any;
					"putTargeting": (a: any) => any;
					"subscribeToInStreamAds": (a: any) => any;
					"subscribeToSlot": (a: any, b: any) => any;
					"triggerSlot": (a: any) => any;
				};
				"enabled": boolean;
				"inStreamAd": null;
				"inStreamAdsSubscription": null;
			} & {
				"disable": () => any;
				"enable": () => any;
				"getInStreamAd": () => any;
				"onInStreamAdMessage": (a: any) => any;
				"subscribeToInStreamAds": () => any;
			};
			"isNewAdsNpvEnabled": boolean;
			"onAdMessage": (a: any) => any;
			"subscriptions": Array<>;
		} & {
			"disable": () => Promise<any>;
			"enable": (a: any) => any;
			"getEnabled": () => any;
			"logClick": (a: any, b: any) => any;
			"resetSubscriptions": () => any;
		};
		"billboard": {
			"activating": boolean;
			"billboardApi": {
				"cosmosConnector": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["audio"]["audioApi"]["cosmosConnector"];
			} & {
				"addNewSlot": (a: any, b: any) => any;
				"getSlotConfiguration": (a: any, b: any) => any;
				"patchTargeting": (a: any, b: any) => any;
				"postEvent": (a: any, b: any, c: any) => any;
				"postToSlot": (a: any, b: any) => any;
				"subscribeToSlotType": (a: any, b: any) => any;
				"triggerSlotClearAll": (a: any) => any;
			};
			"displayBillboard": () => Promise<any>;
			"enabled": boolean;
			"finish": () => undefined;
			"focusMinimize": () => undefined;
			"focusState": { "listeners": Array<> } & {
				"addFocusListener": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["adStateReporter"]["focusState"]["addFocusListener"];
				"hasFocus": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["adStateReporter"]["focusState"]["hasFocus"];
				"removeAllFocusListeners": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["adStateReporter"]["focusState"]["removeAllFocusListeners"];
				"removeFocusListener": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["adStateReporter"]["focusState"]["removeFocusListener"];
			};
			"onActivity": (a: any) => any;
			"onAdMessage": (a: any) => any;
			"triggerAutoMinimizeIfPossible": () => undefined;
			"viewedTimestamp": number;
		} & {
			"adClick": () => any;
			"clearSlot": () => any;
			"disable": () => Promise<any>;
			"enable": (a: any) => any;
			"getFocusTimeoutMs": () => Promise<any>;
			"handleApplicationGainedFocus": () => Promise<any>;
			"handleApplicationLostFocus": () => Promise<any>;
			"handleDiscard": () => any;
			"handlePreview": (a: any) => any;
			"isPreviewServiceAd": (a: any) => any;
			"logEvent": (a: any) => any;
			"mapBillboardData": (a: any) => any;
			"minimize": () => any;
			"onError": () => any;
			"onFinish": () => any;
			"onFocusChanged": (a: any) => any;
			"onRender": () => any;
			"resetState": () => any;
		};
		"config": { "getAdsSlotConfig": () => Promise<any> };
		"home": {
			"enableLegacyHptoContainerLoader": boolean;
			"fetchHomeAd": () => Promise<any>;
			"logger": {
				"appStartupId": string;
				"eventSender": {
					"_listeners": {};
					"_metaListeners": { "add": {}; "remove": {} };
					"droppedEventsTracker": {
						"storageManager": {
							"configureMaxStorageCapacity": (a: any) => any;
							"currentTotalSizeForDroppedCounters": number;
							"currentTotalSizeForEvents": number;
							"maxStorageCapacityForDroppedCountersInBytes": number;
							"maxStorageCapacityForEventsInBytes": number;
							"setTotalDroppedCountersStorageSizeAtStartup": () => undefined;
							"setTotalEventStorageSizeAtStartup": () => undefined;
							"storage": {
								"adapter": {} & {
									"clear": () => undefined;
									"getItem": (a: any) => any;
									"getKeys": () => Array<>;
									"removeItem": (a: any) => any;
									"setItem": (a: any, b: any) => any;
								};
								"flushStrategy": { "interval": number; "kind": string };
								"maxCapacityForDroppedInPercentage": number;
								"maxCapacityInBytes": number;
							};
							"storageKeyPrefix": string;
						} & {
							"addItemInDroppedCountersStorage": (a: any, b: any) => any;
							"addItemInEventsStorage": (a: any, b: any) => any;
							"canMakeDroppedCountersStorageFull": (a: any) => any;
							"canMakeEventsStorageFull": (a: any) => any;
							"clear": () => any;
							"configureMaxStorageCapacity": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["droppedEventsTracker"]["storageManager"][
								"configureMaxStorageCapacity"
							];
							"createStorage": (a: any) => any;
							"flushStrategy": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["droppedEventsTracker"]["storageManager"]["storage"][
								"flushStrategy"
							];
							"getItem": (a: any) => any;
							"getItemSizeInBytes": (a: any, b: any) => any;
							"getKeys": () => any;
							"getOrCreateId": (a: any, b: any) => any;
							"removeItemInDroppedCountersStorage": (a: any) => any;
							"removeItemInEventsStorage": (a: any) => any;
							"setCounterItem": (a: any, b: any) => any;
							"setItem": (a: any, b: any) => any;
							"setTotalDroppedCountersStorageSizeAtStartup": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["droppedEventsTracker"]["storageManager"][
								"setTotalDroppedCountersStorageSizeAtStartup"
							];
							"setTotalEventStorageSizeAtStartup": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["droppedEventsTracker"]["storageManager"][
								"setTotalEventStorageSizeAtStartup"
							];
							"storageAdapter": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["droppedEventsTracker"]["storageManager"]["storage"][
								"adapter"
							];
							"storageType": string;
							"updateItemInDroppedCountersStorage": (a: any, b: any) => any;
							"updateItemInEventsStorage": (a: any, b: any) => any;
						};
					} & {
						"getDroppedEventCounters": (a: any) => any;
						"getDroppedEventsCountersPerSequenceId": (a: any) => any;
						"updateDroppedEventCount": (a: any, b: any) => any;
						"updateReportedEventCounters": (a: any) => any;
					};
					"essLastSent": {} & {
						"getDate": () => any;
						"getDay": () => any;
						"getFullYear": () => any;
						"getHours": () => any;
						"getMilliseconds": () => any;
						"getMinutes": () => any;
						"getMonth": () => any;
						"getSeconds": () => any;
						"getTime": () => any;
						"getTimezoneOffset": () => any;
						"getUTCDate": () => any;
						"getUTCDay": () => any;
						"getUTCFullYear": () => any;
						"getUTCHours": () => any;
						"getUTCMilliseconds": () => any;
						"getUTCMinutes": () => any;
						"getUTCMonth": () => any;
						"getUTCSeconds": () => any;
						"getYear": () => any;
						"setDate": (a: any) => any;
						"setFullYear": (a: any, b: any, c: any) => any;
						"setHours": (a: any, b: any, c: any, d: any) => any;
						"setMilliseconds": (a: any) => any;
						"setMinutes": (a: any, b: any, c: any) => any;
						"setMonth": (a: any, b: any) => any;
						"setSeconds": (a: any, b: any) => any;
						"setTime": (a: any) => any;
						"setUTCDate": (a: any) => any;
						"setUTCFullYear": (a: any, b: any, c: any) => any;
						"setUTCHours": (a: any, b: any, c: any, d: any) => any;
						"setUTCMilliseconds": (a: any) => any;
						"setUTCMinutes": (a: any, b: any, c: any) => any;
						"setUTCMonth": (a: any, b: any) => any;
						"setUTCSeconds": (a: any, b: any) => any;
						"setYear": (a: any) => any;
						"toDateString": () => any;
						"toGMTString": () => any;
						"toISOString": () => any;
						"toJSON": (a: any) => any;
						"toLocaleDateString": () => any;
						"toLocaleString": () => any;
						"toLocaleTimeString": () => any;
						"toString": () => any;
						"toTimeString": () => any;
						"toUTCString": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["toGMTString"];
						"valueOf": () => any;
					};
					"eventsManager": {
						"storageManager": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["droppedEventsTracker"]["storageManager"];
					} & {
						"addEvent": (a: any, b: any) => any;
						"getEvent": (a: any) => any;
						"getEventKey": (a: any, b: any) => any;
						"getEvents": (a: any) => any;
						"getEventsKeys": (a: any) => any;
						"getEventsKeysPerSequenceId": (a: any) => any;
						"getGlobalSequenceNumberFromEventKey": (a: any) => any;
						"removeEvents": (a: any) => any;
					};
					"flush": () => Promise<any>;
					"fullESS2NALastSent": {} & {
						"getDate": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["getDate"];
						"getDay": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["getDay"];
						"getFullYear": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["getFullYear"];
						"getHours": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["getHours"];
						"getMilliseconds": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["getMilliseconds"];
						"getMinutes": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["getMinutes"];
						"getMonth": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["getMonth"];
						"getSeconds": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["getSeconds"];
						"getTime": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["getTime"];
						"getTimezoneOffset": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["getTimezoneOffset"];
						"getUTCDate": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["getUTCDate"];
						"getUTCDay": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["getUTCDay"];
						"getUTCFullYear": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["getUTCFullYear"];
						"getUTCHours": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["getUTCHours"];
						"getUTCMilliseconds": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["getUTCMilliseconds"];
						"getUTCMinutes": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["getUTCMinutes"];
						"getUTCMonth": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["getUTCMonth"];
						"getUTCSeconds": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["getUTCSeconds"];
						"getYear": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["getYear"];
						"setDate": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["setDate"];
						"setFullYear": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["setFullYear"];
						"setHours": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["setHours"];
						"setMilliseconds": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["setMilliseconds"];
						"setMinutes": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["setMinutes"];
						"setMonth": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["setMonth"];
						"setSeconds": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["setSeconds"];
						"setTime": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["setTime"];
						"setUTCDate": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["setUTCDate"];
						"setUTCFullYear": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["setUTCFullYear"];
						"setUTCHours": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["setUTCHours"];
						"setUTCMilliseconds": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["setUTCMilliseconds"];
						"setUTCMinutes": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["setUTCMinutes"];
						"setUTCMonth": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["setUTCMonth"];
						"setUTCSeconds": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["setUTCSeconds"];
						"setYear": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["setYear"];
						"toDateString": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["toDateString"];
						"toGMTString": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["toGMTString"];
						"toISOString": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["toISOString"];
						"toJSON": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["toJSON"];
						"toLocaleDateString": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["toLocaleDateString"];
						"toLocaleString": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["toLocaleString"];
						"toLocaleTimeString": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["toLocaleTimeString"];
						"toString": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["toString"];
						"toTimeString": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["toTimeString"];
						"toUTCString": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["toGMTString"];
						"valueOf": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["essLastSent"]["valueOf"];
					};
					"installationId": string;
					"instanceContexts": {
						"context_application_desktop": { "version_code": number; "version_string": string };
						"context_client_id": { "value": string };
						"context_device_desktop": {
							"device_id": string;
							"device_manufacturer": string;
							"device_model": string;
							"os_version": string;
							"platform_type": string;
						};
						"context_installation_id": { "value": string };
					};
					"ownerProvider": () => string;
					"previousESS2NA": undefined;
					"sendESStats": () => Promise<any>;
					"sendEventsInterval": number;
					"sequenceIdProvider": { "installationId": string } & {
						"getId": (a: any, b: any) => any;
						"getIdHash": (a: any) => any;
					};
					"sequenceNumberProvider": {
						"storageManager": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["droppedEventsTracker"]["storageManager"];
					} & {
						"commitSequenceNumber": (a: any, b: any) => any;
						"generateNextEventSequenceNumber": (a: any, b: any) => any;
						"generateNextGlobalSequenceNumber": () => any;
						"generateNextSequenceNumber": (a: any) => any;
						"getEventsSequenceNumbers": (a: any) => any;
						"getNextSequenceNumber": (a: any) => any;
						"getSequenceNumbersPerSequenceId": (a: any) => any;
					};
					"statsProvider": {} & {
						"addDroppedEventsCounters": (a: any, b: any, c: any) => any;
						"addDroppedEventsCountersData": (a: any, b: any) => any;
						"addEventsToESSData": (a: any, b: any) => any;
						"addLossStatsData": (a: any) => any;
						"getInitialESSData": (a: any) => any;
						"provideEventSenderStats": (a: any, b: any, c: any) => any;
					};
					"storageManager": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["droppedEventsTracker"]["storageManager"];
					"transport": {
						"_Fetch": { "__esModule": boolean; "isSupported": () => boolean; "request": (a: any) => any };
						"_XHR": { "__esModule": boolean; "request": (a: any) => any };
						"_authenticateCalled": boolean;
						"_authenticateWithToken": (a: any) => any;
						"_authenticationPromise": null;
						"_connectCalled": boolean;
						"_connectToEndpoints": (a: any) => any;
						"_connectionObserver":
							& {
								"_listeners": {
									"beforeunload": Array<{ "listener": () => Promise<any>; "options": {} }>;
									"offline": Array<{ "listener": () => undefined; "options": {} }>;
									"online": Array<{ "listener": () => undefined; "options": {} }>;
								};
								"_metaListeners": { "add": {}; "remove": {} };
								"_navigator": { "requestMediaKeySystemAccess": (a: any, b: any) => any } & {
									"appCodeName": string;
									"appName": string;
									"appVersion": string;
									"bluetooth": {} & {
										"getAvailability": () => Promise<any>;
										"requestDevice": () => Promise<any>;
									} & {
										"addEventListener": (a: any, b: any) => any;
										"dispatchEvent": (a: any) => any;
										"removeEventListener": (a: any, b: any) => any;
									};
									"canShare": () => any;
									"clearAppBadge": () => Promise<any>;
									"clipboard": {} & {
										"read": () => Promise<any>;
										"readText": () => Promise<any>;
										"write": (a: any) => any;
										"writeText": (a: any) => any;
									} & {
										"addEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["addEventListener"];
										"dispatchEvent": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["dispatchEvent"];
										"removeEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["removeEventListener"];
									};
									"connection": {} & {
										"downlink": number;
										"effectiveType": string;
										"onchange": null;
										"rtt": number;
										"saveData": boolean;
									} & {
										"addEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["addEventListener"];
										"dispatchEvent": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["dispatchEvent"];
										"removeEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["removeEventListener"];
									};
									"cookieEnabled": boolean;
									"credentials": {} & {
										"create": () => Promise<any>;
										"get": () => Promise<any>;
										"preventSilentAccess": () => Promise<any>;
										"store": (a: any) => any;
									};
									"deviceMemory": number;
									"doNotTrack": null;
									"geolocation": {} & {
										"clearWatch": (a: any) => any;
										"getCurrentPosition": (a: any) => any;
										"watchPosition": (a: any) => any;
									};
									"getBattery": () => Promise<any>;
									"getGamepads": () => any;
									"getInstalledRelatedApps": () => Promise<any>;
									"getUserMedia": (a: any, b: any, c: any) => any;
									"gpu": {} & {
										"getPreferredCanvasFormat": () => any;
										"requestAdapter": () => Promise<any>;
										"wgslLanguageFeatures": {} & {
											"entries": () => any;
											"forEach": (a: any) => any;
											"has": (a: any) => any;
											"keys": () => any;
											"size": number;
											"values": () => any;
										};
									};
									"hardwareConcurrency": number;
									"hid": {} & {
										"getDevices": () => Promise<any>;
										"onconnect": null;
										"ondisconnect": null;
										"requestDevice": (a: any) => any;
									} & {
										"addEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["addEventListener"];
										"dispatchEvent": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["dispatchEvent"];
										"removeEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["removeEventListener"];
									};
									"ink": {} & { "requestPresenter": () => Promise<any> };
									"javaEnabled": () => any;
									"keyboard": {} & {
										"getLayoutMap": () => Promise<any>;
										"lock": () => Promise<any>;
										"unlock": () => any;
									};
									"language": string;
									"languages": Array<string>;
									"locks": {} & { "query": () => Promise<any>; "request": (a: any, b: any) => any };
									"login": {} & { "setStatus": (a: any) => any };
									"managed": {} & {
										"getManagedConfiguration": (a: any) => any;
										"onmanagedconfigurationchange": null;
									} & {
										"addEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["addEventListener"];
										"dispatchEvent": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["dispatchEvent"];
										"removeEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["removeEventListener"];
									};
									"maxTouchPoints": number;
									"mediaCapabilities": { "decodingInfo": (a: any) => any } & {
										"decodingInfo": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["mediaCapabilities"]["decodingInfo"];
										"encodingInfo": (a: any) => any;
									};
									"mediaDevices": {} & {
										"enumerateDevices": () => Promise<any>;
										"getDisplayMedia": () => Promise<any>;
										"getSupportedConstraints": () => any;
										"getUserMedia": () => Promise<any>;
										"ondevicechange": null;
										"setCaptureHandleConfig": () => any;
									} & {
										"addEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["addEventListener"];
										"dispatchEvent": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["dispatchEvent"];
										"removeEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["removeEventListener"];
									};
									"mediaSession": {} & {
										"metadata": null;
										"playbackState": string;
										"setActionHandler": (a: any, b: any) => any;
										"setCameraActive": (a: any) => any;
										"setMicrophoneActive": (a: any) => any;
										"setPositionState": () => any;
									};
									"mimeTypes": {
										"0": {} & {
											"description": string;
											"enabledPlugin": {
												"0": {} & {
													"description": string;
													"enabledPlugin": ReturnType<
														PlatformAutoGen["getAdManagers"]
													>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
														"_navigator"
													]["mimeTypes"]["0"]["enabledPlugin"];
													"suffixes": string;
													"type": string;
												};
												"1": {} & {
													"description": string;
													"enabledPlugin": ReturnType<
														PlatformAutoGen["getAdManagers"]
													>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
														"_navigator"
													]["mimeTypes"]["0"]["enabledPlugin"];
													"suffixes": string;
													"type": string;
												};
												"application/pdf": {} & {
													"description": string;
													"enabledPlugin": ReturnType<
														PlatformAutoGen["getAdManagers"]
													>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
														"_navigator"
													]["mimeTypes"]["0"]["enabledPlugin"];
													"suffixes": string;
													"type": string;
												};
												"text/pdf": {} & {
													"description": string;
													"enabledPlugin": ReturnType<
														PlatformAutoGen["getAdManagers"]
													>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
														"_navigator"
													]["mimeTypes"]["0"]["enabledPlugin"];
													"suffixes": string;
													"type": string;
												};
											} & {
												"description": string;
												"filename": string;
												"item": (a: any) => any;
												"length": number;
												"name": string;
												"namedItem": (a: any) => any;
											};
											"suffixes": string;
											"type": string;
										};
										"1": {} & {
											"description": string;
											"enabledPlugin": ReturnType<
												PlatformAutoGen["getAdManagers"]
											>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
												"_navigator"
											]["mimeTypes"]["0"]["enabledPlugin"];
											"suffixes": string;
											"type": string;
										};
										"application/pdf": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["mimeTypes"]["0"];
										"text/pdf": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["mimeTypes"]["1"];
									} & { "item": (a: any) => any; "length": number; "namedItem": (a: any) => any };
									"onLine": boolean;
									"pdfViewerEnabled": boolean;
									"permissions": {} & { "query": (a: any) => any };
									"platform": string;
									"plugins": {
										"0": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["mimeTypes"]["0"]["enabledPlugin"];
										"1": {
											"0": {} & {
												"description": string;
												"enabledPlugin": ReturnType<
													PlatformAutoGen["getAdManagers"]
												>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
													"_navigator"
												]["plugins"]["1"];
												"suffixes": string;
												"type": string;
											};
											"1": {} & {
												"description": string;
												"enabledPlugin": ReturnType<
													PlatformAutoGen["getAdManagers"]
												>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
													"_navigator"
												]["plugins"]["1"];
												"suffixes": string;
												"type": string;
											};
											"application/pdf": {} & {
												"description": string;
												"enabledPlugin": ReturnType<
													PlatformAutoGen["getAdManagers"]
												>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
													"_navigator"
												]["plugins"]["1"];
												"suffixes": string;
												"type": string;
											};
											"text/pdf": {} & {
												"description": string;
												"enabledPlugin": ReturnType<
													PlatformAutoGen["getAdManagers"]
												>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
													"_navigator"
												]["plugins"]["1"];
												"suffixes": string;
												"type": string;
											};
										} & {
											"description": string;
											"filename": string;
											"item": ReturnType<
												PlatformAutoGen["getAdManagers"]
											>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
												"_navigator"
											]["mimeTypes"]["0"]["enabledPlugin"]["item"];
											"length": number;
											"name": string;
											"namedItem": ReturnType<
												PlatformAutoGen["getAdManagers"]
											>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
												"_navigator"
											]["mimeTypes"]["0"]["enabledPlugin"]["namedItem"];
										};
										"2": {
											"0": {} & {
												"description": string;
												"enabledPlugin": ReturnType<
													PlatformAutoGen["getAdManagers"]
												>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
													"_navigator"
												]["plugins"]["2"];
												"suffixes": string;
												"type": string;
											};
											"1": {} & {
												"description": string;
												"enabledPlugin": ReturnType<
													PlatformAutoGen["getAdManagers"]
												>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
													"_navigator"
												]["plugins"]["2"];
												"suffixes": string;
												"type": string;
											};
											"application/pdf": {} & {
												"description": string;
												"enabledPlugin": ReturnType<
													PlatformAutoGen["getAdManagers"]
												>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
													"_navigator"
												]["plugins"]["2"];
												"suffixes": string;
												"type": string;
											};
											"text/pdf": {} & {
												"description": string;
												"enabledPlugin": ReturnType<
													PlatformAutoGen["getAdManagers"]
												>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
													"_navigator"
												]["plugins"]["2"];
												"suffixes": string;
												"type": string;
											};
										} & {
											"description": string;
											"filename": string;
											"item": ReturnType<
												PlatformAutoGen["getAdManagers"]
											>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
												"_navigator"
											]["mimeTypes"]["0"]["enabledPlugin"]["item"];
											"length": number;
											"name": string;
											"namedItem": ReturnType<
												PlatformAutoGen["getAdManagers"]
											>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
												"_navigator"
											]["mimeTypes"]["0"]["enabledPlugin"]["namedItem"];
										};
										"3": {
											"0": {} & {
												"description": string;
												"enabledPlugin": ReturnType<
													PlatformAutoGen["getAdManagers"]
												>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
													"_navigator"
												]["plugins"]["3"];
												"suffixes": string;
												"type": string;
											};
											"1": {} & {
												"description": string;
												"enabledPlugin": ReturnType<
													PlatformAutoGen["getAdManagers"]
												>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
													"_navigator"
												]["plugins"]["3"];
												"suffixes": string;
												"type": string;
											};
											"application/pdf": {} & {
												"description": string;
												"enabledPlugin": ReturnType<
													PlatformAutoGen["getAdManagers"]
												>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
													"_navigator"
												]["plugins"]["3"];
												"suffixes": string;
												"type": string;
											};
											"text/pdf": {} & {
												"description": string;
												"enabledPlugin": ReturnType<
													PlatformAutoGen["getAdManagers"]
												>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
													"_navigator"
												]["plugins"]["3"];
												"suffixes": string;
												"type": string;
											};
										} & {
											"description": string;
											"filename": string;
											"item": ReturnType<
												PlatformAutoGen["getAdManagers"]
											>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
												"_navigator"
											]["mimeTypes"]["0"]["enabledPlugin"]["item"];
											"length": number;
											"name": string;
											"namedItem": ReturnType<
												PlatformAutoGen["getAdManagers"]
											>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
												"_navigator"
											]["mimeTypes"]["0"]["enabledPlugin"]["namedItem"];
										};
										"4": {
											"0": {} & {
												"description": string;
												"enabledPlugin": ReturnType<
													PlatformAutoGen["getAdManagers"]
												>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
													"_navigator"
												]["plugins"]["4"];
												"suffixes": string;
												"type": string;
											};
											"1": {} & {
												"description": string;
												"enabledPlugin": ReturnType<
													PlatformAutoGen["getAdManagers"]
												>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
													"_navigator"
												]["plugins"]["4"];
												"suffixes": string;
												"type": string;
											};
											"application/pdf": {} & {
												"description": string;
												"enabledPlugin": ReturnType<
													PlatformAutoGen["getAdManagers"]
												>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
													"_navigator"
												]["plugins"]["4"];
												"suffixes": string;
												"type": string;
											};
											"text/pdf": {} & {
												"description": string;
												"enabledPlugin": ReturnType<
													PlatformAutoGen["getAdManagers"]
												>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
													"_navigator"
												]["plugins"]["4"];
												"suffixes": string;
												"type": string;
											};
										} & {
											"description": string;
											"filename": string;
											"item": ReturnType<
												PlatformAutoGen["getAdManagers"]
											>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
												"_navigator"
											]["mimeTypes"]["0"]["enabledPlugin"]["item"];
											"length": number;
											"name": string;
											"namedItem": ReturnType<
												PlatformAutoGen["getAdManagers"]
											>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
												"_navigator"
											]["mimeTypes"]["0"]["enabledPlugin"]["namedItem"];
										};
										"Chrome PDF Viewer": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["plugins"]["1"];
										"Chromium PDF Viewer": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["plugins"]["2"];
										"Microsoft Edge PDF Viewer": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["plugins"]["3"];
										"PDF Viewer": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["mimeTypes"]["0"]["enabledPlugin"];
										"WebKit built-in PDF": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["plugins"]["4"];
									} & {
										"item": (a: any) => any;
										"length": number;
										"namedItem": (a: any) => any;
										"refresh": () => any;
									};
									"presentation": {} & { "defaultRequest": null; "receiver": null };
									"product": string;
									"productSub": string;
									"registerProtocolHandler": (a: any, b: any) => any;
									"requestMIDIAccess": () => Promise<any>;
									"requestMediaKeySystemAccess": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"][
										"requestMediaKeySystemAccess"
									];
									"scheduling": {} & { "isInputPending": () => any };
									"sendBeacon": (a: any) => any;
									"serial": {} & {
										"getPorts": () => Promise<any>;
										"onconnect": null;
										"ondisconnect": null;
										"requestPort": () => Promise<any>;
									} & {
										"addEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["addEventListener"];
										"dispatchEvent": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["dispatchEvent"];
										"removeEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["removeEventListener"];
									};
									"serviceWorker": {} & {
										"controller": null;
										"getRegistration": () => Promise<any>;
										"getRegistrations": () => Promise<any>;
										"oncontrollerchange": null;
										"onmessage": null;
										"onmessageerror": null;
										"ready": Promise<any>;
										"register": (a: any) => any;
										"startMessages": () => any;
									} & {
										"addEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["addEventListener"];
										"dispatchEvent": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["dispatchEvent"];
										"removeEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["removeEventListener"];
									};
									"setAppBadge": () => Promise<any>;
									"share": () => Promise<any>;
									"storage": {} & {
										"estimate": () => Promise<any>;
										"getDirectory": () => Promise<any>;
										"persist": () => Promise<any>;
										"persisted": () => Promise<any>;
									} & {
										"addEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["addEventListener"];
										"dispatchEvent": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["dispatchEvent"];
										"removeEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["removeEventListener"];
									};
									"storageBuckets": {} & {
										"delete": (a: any) => any;
										"keys": () => Promise<any>;
										"open": (a: any) => any;
									};
									"unregisterProtocolHandler": (a: any, b: any) => any;
									"usb": {} & {
										"getDevices": () => Promise<any>;
										"onconnect": null;
										"ondisconnect": null;
										"requestDevice": (a: any) => any;
									} & {
										"addEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["addEventListener"];
										"dispatchEvent": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["dispatchEvent"];
										"removeEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["removeEventListener"];
									};
									"userActivation": {} & { "hasBeenActive": boolean; "isActive": boolean };
									"userAgent": string;
									"userAgentData": {} & {
										"brands": Array<{ "brand": string; "version": string }>;
										"getHighEntropyValues": (a: any) => any;
										"mobile": boolean;
										"platform": string;
										"toJSON": () => any;
									};
									"vendor": string;
									"vendorSub": string;
									"vibrate": (a: any) => any;
									"virtualKeyboard": {} & {
										"boundingRect": {} & {
											"height": number;
											"width": number;
											"x": number;
											"y": number;
										} & {
											"bottom": number;
											"height": number;
											"left": number;
											"right": number;
											"toJSON": () => any;
											"top": number;
											"width": number;
											"x": number;
											"y": number;
										};
										"hide": () => any;
										"ongeometrychange": null;
										"overlaysContent": boolean;
										"show": () => any;
									} & {
										"addEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["addEventListener"];
										"dispatchEvent": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["dispatchEvent"];
										"removeEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["removeEventListener"];
									};
									"wakeLock": {} & { "request": () => Promise<any> };
									"webdriver": boolean;
									"webkitGetUserMedia": (a: any, b: any, c: any) => any;
									"webkitPersistentStorage": {} & {
										"queryUsageAndQuota": (a: any) => any;
										"requestQuota": (a: any) => any;
									};
									"webkitTemporaryStorage": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"][
										"webkitPersistentStorage"
									];
									"windowControlsOverlay": {} & {
										"getTitlebarAreaRect": () => any;
										"ongeometrychange": null;
										"visible": boolean;
									} & {
										"addEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["addEventListener"];
										"dispatchEvent": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["dispatchEvent"];
										"removeEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["removeEventListener"];
									};
									"xr": {} & {
										"isSessionSupported": (a: any) => any;
										"ondevicechange": null;
										"requestSession": (a: any) => any;
										"supportsSession": (a: any) => any;
									} & {
										"addEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["addEventListener"];
										"dispatchEvent": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["dispatchEvent"];
										"removeEventListener": ReturnType<
											PlatformAutoGen["getAdManagers"]
										>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
											"_navigator"
										]["bluetooth"]["removeEventListener"];
									};
								};
							}
							& { "isOnline": () => any }
							& {}
							& {
								"_dispatchFromStore": (a: any, b: any) => any;
								"addListener": (a: any, b: any) => any;
								"addListeners": (a: any) => any;
								"createEvent": (a: any, b: any) => any;
								"emit": (a: any, b: any) => any;
								"emitAndWait": (a: any, b: any, c: any) => any;
								"emitEvent": (a: any) => any;
								"emitEventAndWait": (a: any, b: any) => any;
								"emitEventSync": (a: any) => any;
								"emitSync": (a: any, b: any) => any;
								"on": (a: any, b: any) => any;
								"onAddListener": (a: any, b: any) => any;
								"onRemoveListener": (a: any, b: any) => any;
								"once": (a: any, b: any) => any;
								"proxyEmit": (a: any, b: any, c: any) => any;
								"proxyEmitAll": (a: any, b: any) => any;
								"proxyEmitAllSync": (a: any, b: any) => any;
								"proxyEmitSync": (a: any, b: any, c: any) => any;
								"removeAllListeners": (a: any) => any;
								"removeListener": (a: any, b: any) => any;
								"removeListeners": (a: any) => any;
							};
						"_counter":
							& { "_baseTime": number; "_ceiling": number; "_curve": string; "_jitter": boolean }
							& { "getTime": (a: any) => any };
						"_disableAutoLogout": boolean;
						"_disconnectBeforeUnload": boolean;
						"_endpoints": { "dealer": string; "webapi": string; "webgate": string };
						"_endpointsProvider": (a: any) => any;
						"_forcePolyfillTypes": {};
						"_initTime": number;
						"_isReconnecting": boolean;
						"_lastDisconnect": number;
						"_lastToken": string;
						"_lastTokenExpiry": number;
						"_listeners": {
							"access_token": Array<
								{ "listener": (a: any) => any; "options": {} } | {
									"listener": () => Promise<any>;
									"options": {};
								}
							>;
							"authenticated": Array<{ "listener": () => undefined; "options": {} }>;
							"authentication_failed": Array<
								{ "listener": () => undefined; "options": {} } | {
									"listener": () => Promise<any>;
									"options": {};
								}
							>;
							"connected": Array<
								{ "listener": () => undefined; "options": {} } | {
									"listener": () => Promise<any>;
									"options": {};
								}
							>;
							"disconnected": Array<{ "listener": () => undefined; "options": {} }>;
							"endpoints_resolved": Array<{ "listener": (a: any) => any; "options": {} }>;
							"logged_out": Array<{ "listener": () => undefined; "options": {} }>;
							"offline": Array<{ "listener": (a: any) => any; "options": {} }>;
							"online": Array<{ "listener": (a: any) => any; "options": {} }>;
							"reconnected": Array<
								{
									"listener": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_listeners"]["connected"][1][
										"listener"
									];
									"options": {};
								} | { "listener": () => undefined; "options": {} }
							>;
							"reconnecting": Array<{ "listener": () => undefined; "options": {} }>;
						};
						"_metaListeners": {
							"add": {
								"authenticated": Array<{ "listener": (a: any) => any; "options": {} }>;
								"connected": Array<{ "listener": (a: any) => any; "options": {} }>;
								"connection_id": Array<{ "listener": (a: any) => any; "options": {} }>;
							};
							"remove": {
								"authenticated": Array<{ "listener": (a: any) => any; "options": {} }>;
								"connected": Array<{ "listener": (a: any) => any; "options": {} }>;
								"connection_id": Array<{ "listener": (a: any) => any; "options": {} }>;
							};
						};
						"_onAuthenticated": (a: any) => any;
						"_onAuthenticationFailed": (a: any, b: any) => any;
						"_onConnected": () => Promise<any>;
						"_ownerRef": {};
						"_parseProvidedToken": (a: any) => any;
						"_pluginMediator": {
							"_listeners": {
								"plugin_connection_info": Array<{ "listener": (a: any) => any; "options": {} }>;
								"plugin_disconnected": Array<{ "listener": (a: any) => any; "options": {} }>;
								"plugin_message": Array<{ "listener": (a: any) => any; "options": {} }>;
								"transport_authenticate": Array<{ "listener": (a: any) => any; "options": {} }>;
								"transport_before_process_request": Array<
									{ "listener": (a: any) => any; "options": {} }
								>;
								"transport_before_send_request": Array<{ "listener": (a: any) => any; "options": {} }>;
								"transport_connect": Array<{ "listener": (a: any) => any; "options": {} }>;
								"transport_disconnect": Array<{ "listener": () => undefined; "options": {} }>;
							};
							"_metaListeners": {
								"add": {
									"transport_authenticate": Array<{ "listener": (a: any) => any; "options": {} }>;
									"transport_connect": Array<{ "listener": (a: any) => any; "options": {} }>;
								};
								"remove": {
									"transport_authenticate": Array<{ "listener": (a: any) => any; "options": {} }>;
									"transport_connect": Array<{ "listener": (a: any) => any; "options": {} }>;
								};
							};
						} & {
							"_dispatchFromStore": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
								"_dispatchFromStore"
							];
							"addListener": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
							"addListeners": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
							"createEvent": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
							"emit": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
							"emitAndWait": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
							"emitEvent": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
							"emitEventAndWait": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
							"emitEventSync": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
							"emitSync": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
							"on": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
							"onAddListener": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
							"onRemoveListener": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
							"once": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
							"proxyEmit": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
							"proxyEmitAll": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
							"proxyEmitAllSync": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
							"proxyEmitSync": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
							"removeAllListeners": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
								"removeAllListeners"
							];
							"removeListener": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
							"removeListeners": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
						};
						"_plugins": {
							"dealer": {
								"_dealer": {
									"_WebSocket": (a: any) => any;
									"_closeBeforeEventsRejector": () => undefined;
									"_connected": boolean;
									"_connectionId": string;
									"_connectionURI": string;
									"_endpoint": string;
									"_heartbeatTimeout": number;
									"_heartbeatTimeoutToken": number;
									"_heartbeatToken": number;
									"_lastPingDeferred": null;
									"_listeners": {
										"connection_id": Array<{ "listener": (a: any) => any; "options": {} }>;
										"disconnected": Array<{ "listener": (a: any) => any; "options": {} }>;
										"error": Array<{ "listener": (a: any) => any; "options": {} }>;
										"message": Array<{ "listener": (a: any) => any; "options": {} }>;
										"request": Array<{ "listener": (a: any) => any; "options": {} }>;
									};
									"_metaListeners": { "add": {}; "remove": {} };
									"_socket": null;
									"_waitingForConnectionId": boolean;
								} & {
									"_handleClose": (a: any) => any;
									"_handleDisconnectBeforeEvents": (a: any) => any;
									"_handleError": (a: any) => any;
									"_handleMessage": (a: any) => any;
									"_handleOpen": (a: any) => any;
									"_onHeartbeatError": () => any;
									"_onHeartbeatSuccess": () => any;
									"_parseMessage": (a: any) => any;
									"_prepareConnectionId": (a: any) => any;
									"_reply": (a: any, b: any) => any;
									"_startHeartbeat": (a: any) => any;
									"_stopHeartbeat": () => any;
									"authenticate": (a: any) => any;
									"connect": (a: any) => any;
									"disconnect": () => any;
									"getConnectionId": () => any;
									"getConnectionInfo": () => any;
									"hasConnectionId": () => any;
									"ping": () => any;
								} & {
									"_dispatchFromStore": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
										"_dispatchFromStore"
									];
									"addListener": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
										"addListener"
									];
									"addListeners": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
										"addListeners"
									];
									"createEvent": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
										"createEvent"
									];
									"emit": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
									"emitAndWait": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
										"emitAndWait"
									];
									"emitEvent": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
									"emitEventAndWait": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
										"emitEventAndWait"
									];
									"emitEventSync": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
										"emitEventSync"
									];
									"emitSync": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
									"on": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
									"onAddListener": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
										"onAddListener"
									];
									"onRemoveListener": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
										"onRemoveListener"
									];
									"once": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
									"proxyEmit": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
									"proxyEmitAll": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
										"proxyEmitAll"
									];
									"proxyEmitAllSync": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
										"proxyEmitAllSync"
									];
									"proxyEmitSync": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
										"proxyEmitSync"
									];
									"removeAllListeners": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
										"removeAllListeners"
									];
									"removeListener": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
										"removeListener"
									];
									"removeListeners": ReturnType<
										PlatformAutoGen["getAdManagers"]
									>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
										"removeListeners"
									];
								};
								"_mediator": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_pluginMediator"];
								"_onDealerConnectionId": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_plugins"]["dealer"]["_dealer"][
									"_listeners"
								]["connection_id"][0]["listener"];
								"_onDealerDisconnected": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_plugins"]["dealer"]["_dealer"][
									"_listeners"
								]["disconnected"][0]["listener"];
								"_onDealerMessage": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_plugins"]["dealer"]["_dealer"][
									"_listeners"
								]["message"][0]["listener"];
								"_onDealerRequest": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_plugins"]["dealer"]["_dealer"][
									"_listeners"
								]["request"][0]["listener"];
								"_onTransportAuthenticate": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"][
									"transport_authenticate"
								][0]["listener"];
								"_onTransportConnect": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"][
									"transport_connect"
								][0]["listener"];
								"_onTransportDisconnect": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"][
									"transport_disconnect"
								][0]["listener"];
								"api": { "getConnectionInfo": () => Promise<any>; "hasConnectionInfo": () => boolean };
								"name": string;
							} & {
								"_onDealerConnectionId": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_plugins"]["dealer"]["_dealer"][
									"_listeners"
								]["connection_id"][0]["listener"];
								"_onDealerDisconnected": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_plugins"]["dealer"]["_dealer"][
									"_listeners"
								]["disconnected"][0]["listener"];
								"_onDealerError": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_plugins"]["dealer"]["_dealer"][
									"_listeners"
								]["error"][0]["listener"];
								"_onDealerMessage": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_plugins"]["dealer"]["_dealer"][
									"_listeners"
								]["message"][0]["listener"];
								"_onDealerRequest": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_plugins"]["dealer"]["_dealer"][
									"_listeners"
								]["request"][0]["listener"];
								"_onTransportAuthenticate": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"][
									"transport_authenticate"
								][0]["listener"];
								"_onTransportConnect": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"][
									"transport_connect"
								][0]["listener"];
								"_onTransportDisconnect": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"][
									"transport_disconnect"
								][0]["listener"];
								"attach": (a: any, b: any) => any;
								"detach": (a: any, b: any) => any;
							};
							"desktop-lifecycle-plugin": {
								"_authAttempts": number;
								"_authCounter": {
									"_baseTime": number;
									"_ceiling": number;
									"_curve": string;
									"_jitter": boolean;
								} & { "getTime": (a: any) => any };
								"_authTimeoutId": number;
								"_onAuthenticationFailed": Array<(a: any, b: any) => any>;
								"_transport": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"];
								"name": string;
								"onAuthenticated": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_listeners"]["authenticated"][0][
									"listener"
								];
								"onAuthenticationFailed": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_listeners"]["authentication_failed"][
									0
								]["listener"];
								"onBeforeProcessRequest": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"][
									"transport_before_process_request"
								][0]["listener"];
								"onBeforeSendRequest": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"][
									"transport_before_send_request"
								][0]["listener"];
								"onConnected": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_listeners"]["connected"][0][
									"listener"
								];
								"onDisconnected": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_listeners"]["disconnected"][0][
									"listener"
								];
							} & {
								"addOnAuthenticationFailed": (a: any) => any;
								"attach": (a: any, b: any) => any;
								"detach": (a: any, b: any) => any;
								"onAuthenticated": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_listeners"]["authenticated"][0][
									"listener"
								];
								"onAuthenticationFailed": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_listeners"]["authentication_failed"][
									0
								]["listener"];
								"onBeforeProcessRequest": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"][
									"transport_before_process_request"
								][0]["listener"];
								"onBeforeSendRequest": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_pluginMediator"]["_listeners"][
									"transport_before_send_request"
								][0]["listener"];
								"onConnected": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_listeners"]["connected"][0][
									"listener"
								];
								"onDisconnected": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_listeners"]["disconnected"][0][
									"listener"
								];
								"tryAuthenticate": () => any;
							};
						};
						"_quickDisconnectCount": number;
						"_reconnectTimeout": number;
						"_reconnectionRetries": number;
						"_refreshTokenPromise": null;
						"_requestMode": string;
						"_stateAwareListeners": {
							"authenticated": Array<>;
							"connected": Array<>;
							"connection_id": Array<>;
							"transport_authenticate": Array<>;
							"transport_connect": Array<>;
						};
						"_stateAwareOperationMetrics": {
							"authenticated": { "end_time": number; "start_time": number };
						};
						"_stateAwareRunners": {
							"authenticated": null;
							"connected": null;
							"connection_id": null;
							"transport_authenticate": null;
							"transport_connect": null;
						};
						"_stateMask": number;
						"_tokenProvider": () => Promise<any>;
						"authenticate": () => Promise<any>;
					} & {
						"_authenticate": (a: any) => any;
						"_authenticateWithToken": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_authenticateWithToken"];
						"_connect": () => any;
						"_connectToEndpoints": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectToEndpoints"];
						"_createReconnector": () => () => any;
						"_disconnect": (a: any) => any;
						"_getQuickDisconnectTimeout": () => any;
						"_handleRetriedRequestError": (a: any) => any;
						"_init": () => any;
						"_onAddListener": (a: any, b: any) => any;
						"_onAuthenticated": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_onAuthenticated"];
						"_onAuthenticationFailed": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_onAuthenticationFailed"];
						"_onConnected": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_onConnected"];
						"_onLogout": () => any;
						"_onOffline": () => any;
						"_onOnline": () => any;
						"_onPluginDisconnected": (a: any) => any;
						"_onRemoveListener": (a: any, b: any) => any;
						"_parseProvidedToken": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_parseProvidedToken"];
						"_performConnect": () => any;
						"_performDisconnect": (a: any) => any;
						"_processRequestArgs": (a: any) => any;
						"_refreshToken": () => any;
						"_runStateAwareQueues": (a: any, b: any) => any;
						"_sendFireAndForgetRequest": (a: any) => any;
						"_sendRequest": (a: any) => any;
						"_sendRetriedRequest": (a: any, b: any) => any;
						"_setAuthHeader": (a: any, b: any) => any;
						"_tryExpandSpecialURL": (a: any) => any;
						"_tryToReconnect": () => any;
						"addPlugin": (a: any, b: any) => any;
						"appendLastTokenQuery": (a: any) => any;
						"appendTokenQuery": (a: any) => any;
						"authenticate": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["authenticate"];
						"connect": () => any;
						"disconnect": () => any;
						"forceDisconnect": () => any;
						"forceTokenRefresh": () => any;
						"getConnectionId": () => any;
						"getEndpoints": () => any;
						"getInitTime": () => any;
						"getLastToken": () => any;
						"getPluginAPI": (a: any) => any;
						"handlePushRequests": (a: any, b: any, c: any) => any;
						"hasOwnerRef": (a: any) => any;
						"hasPlugin": (a: any) => any;
						"isAuthenticated": () => any;
						"isConnected": () => any;
						"isOnline": () => any;
						"isReconnecting": () => any;
						"matchMessages": (a: any, b: any, c: any) => any;
						"removeAllListeners": () => undefined;
						"removePlugin": (a: any) => any;
						"request": (a: any, b: any) => any;
						"toPublic": (a: any) => any;
						"unhandlePushRequests": (a: any, b: any, c: any) => any;
						"unmatchMessages": (a: any, b: any, c: any) => any;
					} & {
						"_dispatchFromStore": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
						"addListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
						"addListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
						"createEvent": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
						"emit": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
						"emitAndWait": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
						"emitEvent": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
						"emitEventAndWait": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
						"emitEventSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
						"emitSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
						"on": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
						"onAddListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
						"onRemoveListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
						"once": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
						"proxyEmit": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
						"proxyEmitAll": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
						"proxyEmitAllSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
						"proxyEmitSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
						"removeAllListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["removeAllListeners"];
						"removeListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
						"removeListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
					};
					"uploaders": {
						"authorized": {
							"_authorize": boolean;
							"_backoff": boolean;
							"_endpoint": string;
							"_listeners": {
								"upload_failed": Array<{ "listener": (a: any) => any; "options": {} }>;
								"upload_request_failed": Array<{ "listener": (a: any) => any; "options": {} }>;
								"upload_succeeded": Array<{ "listener": (a: any) => any; "options": {} }>;
							};
							"_metaListeners": { "add": {}; "remove": {} };
							"_suppressPersist": boolean;
							"_transport": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"];
						} & {
							"_parseUploadResponse": (a: any, b: any, c: any) => any;
							"_uploadBatch": (a: any) => any;
							"lastUpload": (a: any) => any;
							"shouldBackoff": () => any;
							"upload": (a: any) => any;
						} & {
							"_dispatchFromStore": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
								"_dispatchFromStore"
							];
							"addListener": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
							"addListeners": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
							"createEvent": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
							"emit": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
							"emitAndWait": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
							"emitEvent": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
							"emitEventAndWait": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
							"emitEventSync": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
							"emitSync": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
							"on": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
							"onAddListener": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
							"onRemoveListener": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
							"once": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
							"proxyEmit": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
							"proxyEmitAll": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
							"proxyEmitAllSync": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
							"proxyEmitSync": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
							"removeAllListeners": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
								"removeAllListeners"
							];
							"removeListener": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
							"removeListeners": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
						};
						"unauthorized": {
							"_authorize": boolean;
							"_backoff": boolean;
							"_endpoint": string;
							"_listeners": {
								"upload_failed": Array<{ "listener": (a: any) => any; "options": {} }>;
								"upload_request_failed": Array<{ "listener": (a: any) => any; "options": {} }>;
								"upload_succeeded": Array<{ "listener": (a: any) => any; "options": {} }>;
							};
							"_metaListeners": { "add": {}; "remove": {} };
							"_suppressPersist": boolean;
							"_transport": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"];
						} & {
							"_parseUploadResponse": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["uploaders"]["authorized"]["_parseUploadResponse"];
							"_uploadBatch": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["uploaders"]["authorized"]["_uploadBatch"];
							"lastUpload": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["uploaders"]["authorized"]["lastUpload"];
							"shouldBackoff": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["uploaders"]["authorized"]["shouldBackoff"];
							"upload": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["uploaders"]["authorized"]["upload"];
						} & {
							"_dispatchFromStore": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
								"_dispatchFromStore"
							];
							"addListener": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
							"addListeners": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
							"createEvent": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
							"emit": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
							"emitAndWait": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
							"emitEvent": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
							"emitEventAndWait": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
							"emitEventSync": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
							"emitSync": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
							"on": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
							"onAddListener": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
							"onRemoveListener": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
							"once": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
							"proxyEmit": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
							"proxyEmitAll": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
							"proxyEmitAllSync": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
							"proxyEmitSync": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
							"removeAllListeners": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
								"removeAllListeners"
							];
							"removeListener": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
							"removeListeners": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
						};
					};
					"uploadingInProgress": boolean;
					"useOptimizedESS2NA": boolean;
				} & {
					"buildEvent": (a: any, b: any) => any;
					"commitAndUploadESStats": (a: any, b: any, c: any) => any;
					"destroy": () => any;
					"finalFlush": () => any;
					"flush": ReturnType<PlatformAutoGen["getAdManagers"]>["home"]["logger"]["eventSender"]["flush"];
					"getEvents": (a: any) => any;
					"getSpecificContext": (a: any) => any;
					"getStorageId": () => any;
					"getStorageType": () => any;
					"getVersion": () => any;
					"hasContext": () => boolean;
					"initSendingEvents": () => any;
					"initializeContexts": (a: any) => any;
					"isUsingESS2NAOptimization": () => any;
					"lastFlush": () => Promise<any>;
					"onBeforeDisconnect": () => any;
					"onSuccessfullySentESStats": (a: any) => any;
					"send": (a: any) => any;
					"sendESS2NAWithOptimization": (a: any, b: any, c: any, d: any) => any;
					"sendESStats": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["sendESStats"];
					"sendEvents": (a: any) => any;
					"sendToGabito": (a: any, b: any) => any;
					"setupInstallationId": () => any;
					"storeEvent": (a: any, b: any) => any;
					"validateEventData": (a: any, b: any, c: any) => any;
				} & {
					"_dispatchFromStore": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
					"addListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
					"addListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
					"createEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
					"emit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
					"emitAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
					"emitEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
					"emitEventAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
					"emitEventSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
					"emitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
					"on": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
					"once": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
					"proxyEmit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
					"proxyEmitAll": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
					"proxyEmitAllSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
					"proxyEmitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
					"removeAllListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
					"removeListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
				};
				"fireTrackingEvent": (a: any) => any;
			} & { "log": (a: any, b: any) => any };
		};
		"hpto": {
			"appStartupId": string;
			"createTrackingPixelImage": (a: any, b: any) => any;
			"focusState": { "listeners": Array<> } & {
				"addFocusListener": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["adStateReporter"]["focusState"]["addFocusListener"];
				"hasFocus": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["adStateReporter"]["focusState"]["hasFocus"];
				"removeAllFocusListeners": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["adStateReporter"]["focusState"]["removeAllFocusListeners"];
				"removeFocusListener": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["adStateReporter"]["focusState"]["removeFocusListener"];
			};
			"handleTrackingUrl": (a: any) => any;
			"hptoApi": {
				"cosmosConnector": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["audio"]["audioApi"]["cosmosConnector"];
				"eventSender": ReturnType<PlatformAutoGen["getAdManagers"]>["home"]["logger"]["eventSender"];
				"nativeHptoApi": {
					"endpoints": {
						"Album": { "__esModule": boolean; "getAlbum": (a: any, b: any) => any };
						"Artist": {
							"__esModule": boolean;
							"getArtist": (a: any, b: any) => any;
							"getArtistAlbums": (a: any, b: any) => any;
						};
						"Playlist": {
							"__esModule": boolean;
							"getOnDemandPlaylists": (a: any) => any;
							"getPlaylist": (a: any, b: any) => any;
							"getPlaylistPermissionForUser": (a: any, b: any) => any;
						};
						"Show": {
							"__esModule": boolean;
							"createCheckoutSession": (a: any, b: any) => any;
							"getEpisode": (a: any, b: any, c: any) => any;
							"getShow": (a: any, b: any, c: any) => any;
						};
						"Track": { "__esModule": boolean; "getTrack": (a: any, b: any) => any };
					};
					"imageSelection": () => undefined;
					"mapDefaultData": (a: any) => any;
					"mapEpisode": (a: any) => any;
					"mapTrack": (a: any) => any;
					"spotifyTransport":
						& {
							"_RequestImplementation": (a: any, b: any, c: any) => any;
							"_accessToken": string;
							"_globalRequestHeaders": Array<Array<string>>;
							"_locale": string;
							"_market": string;
							"pendingRequests": Set<any>;
						}
						& { "build": () => any; "resetPendingRequests": () => any }
						& {
							"accessToken": string;
							"build": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"]["build"];
							"globalRequestHeaders": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"]["_globalRequestHeaders"];
							"locale": string;
							"market": string;
							"resetPendingRequests": ReturnType<
								PlatformAutoGen["getAdManagers"]
							>["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"]["resetPendingRequests"];
						};
				} & {
					"getAlbum": (a: any) => any;
					"getArtist": (a: any) => any;
					"getEpisode": (a: any) => any;
					"getPlaylist": (a: any) => any;
					"getShow": (a: any) => any;
					"getTrack": (a: any) => any;
				};
				"previewParser": {} & {
					"createInteractiveIframe": (a: any) => any;
					"getKeyByValue": (a: any, b: any) => any;
					"handleNativeEl": (a: any) => any;
					"isPreviewServiceAd": (a: any) => any;
					"parsePreview": (a: any) => any;
					"renameImageBannerField": (a: any) => any;
				};
			} & {
				"getAlbum": (a: any) => any;
				"getAlgoPlaylistInfo": (a: any) => any;
				"getArtist": (a: any) => any;
				"getEpisode": (a: any) => any;
				"getPlaylist": (a: any) => any;
				"getShow": (a: any) => any;
				"getSlot": (a: any) => any;
				"getTrack": (a: any) => any;
				"logEvent": (a: any) => any;
				"subscribeToPreview": (a: any) => any;
			};
			"log": (a: any) => any;
			"logAdEventError": (a: any) => any;
			"mapData": (a: any) => any;
			"offlineObserver": { "isOnline": boolean } & { "getOnlineStatus": () => any };
			"onVisibilityChanged": (a: any) => any;
			"refreshCallback": () => Promise<any>;
			"timeOfLastViewUpdate": number;
			"trackingPixelDiv": Element;
			"visibilityObserver": {
				"currentState": string;
				"intersectionObserver": {} & {
					"delay": number;
					"disconnect": () => any;
					"observe": (a: any) => any;
					"root": null;
					"rootMargin": string;
					"scrollMargin": string;
					"takeRecords": () => any;
					"thresholds": Array<number>;
					"trackVisibility": boolean;
					"unobserve": (a: any) => any;
				};
				"onObservation": (a: any) => any;
			} & { "disconnect": () => any; "observe": (a: any, b: any) => any };
			"visibilityState": string;
		} & {
			"createTrackingList": (a: any) => any;
			"fetchCreative": (a: any) => any;
			"fetchTemplate": () => any;
			"getNativeData": (a: any, b: any) => any;
			"logErrorEvent": (a: any) => any;
			"logEvent": (a: any) => any;
			"logViewed": () => any;
			"maybeModifyUrl": (a: any, b: any) => any;
			"maybeTriggerRefresh": () => any;
			"onFocusChanged": (a: any) => any;
			"onRefresh": (a: any) => any;
			"subscribeToPreview": (a: any) => any;
			"trackPixelClicked": () => any;
			"trackPixelViewed": () => any;
			"viewDestroyed": () => any;
			"viewRendered": (a: any) => any;
		};
		"inStreamApi": ReturnType<PlatformAutoGen["getAdManagers"]>["audio"]["inStreamApi"];
		"leaderboard": {
			"appStartupId": string;
			"currentAd": { "creativeId": null; "lineitemId": null };
			"enabled": boolean;
			"eventSender": ReturnType<PlatformAutoGen["getAdManagers"]>["home"]["logger"]["eventSender"];
			"fetching": boolean;
			"focusState": { "listeners": Array<> } & {
				"addFocusListener": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["adStateReporter"]["focusState"]["addFocusListener"];
				"hasFocus": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["adStateReporter"]["focusState"]["hasFocus"];
				"removeAllFocusListeners": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["adStateReporter"]["focusState"]["removeAllFocusListeners"];
				"removeFocusListener": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["adStateReporter"]["focusState"]["removeFocusListener"];
			};
			"frameSrc": string;
			"handleLeaderboardMessage": (a: any) => any;
			"history": ReturnType<PlatformAutoGen["getAdManagers"]>["adStateReporter"]["history"];
			"leaderboardApi": {
				"cosmosConnector": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["audio"]["audioApi"]["cosmosConnector"];
			} & {
				"addSlot": (a: any) => any;
				"getConfig": () => Promise<any>;
				"getSlot": (a: any) => any;
				"normalizeConfig": (a: any) => any;
				"subscribeToSlotType": (a: any, b: any) => any;
			};
			"leaderboardWrapper": null;
			"offlineObserver": { "isOnline": boolean } & {
				"getOnlineStatus": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["hpto"]["offlineObserver"]["getOnlineStatus"];
			};
			"onAdMessage": (a: any) => any;
			"refreshDecisioner": {
				"delegate": ReturnType<PlatformAutoGen["getAdManagers"]>["leaderboard"];
				"focusState": ReturnType<PlatformAutoGen["getAdManagers"]>["leaderboard"]["focusState"];
				"lastOnlineStatus": boolean;
				"viewTimer": number;
			} & {
				"isPastViewThreshold": () => any;
				"notifyRefreshIfPossible": () => Promise<any>;
				"onFocusChanged": (a: any) => any;
				"onLeaderboardDisabled": () => any;
				"onLeaderboardEnabled": () => any;
				"onNavigationChanged": () => any;
				"onViewLoaded": () => Promise<any>;
				"onViewUnloaded": () => any;
				"onlineStateChanged": (a: any) => any;
				"setRefreshDelegate": (a: any) => any;
				"startRefreshTimer": () => any;
				"triggerRefresh": () => undefined;
				"updateViewTimer": () => Promise<any>;
			};
		} & {
			"adFrameLoaded": (a: any, b: any) => any;
			"disableLeaderboard": () => any;
			"disableLeaderboardMessageHandler": () => any;
			"enableLeaderboard": () => any;
			"enableLeaderboardMessageHandler": () => any;
			"fetchAndDisplayLeaderboard": () => Promise<any>;
			"handleBadLeaderboard": () => any;
			"isPreviewServiceAd": (a: any) => any;
			"logLeaderboardEvent": (a: any) => any;
			"onFocusChanged": (a: any) => any;
			"onNavigationChanged": () => any;
			"refreshLeaderboard": () => any;
			"renderLeaderboard": (a: any, b: any, c: any) => any;
			"requestConfig": () => Promise<any>;
			"requestSlot": (a: any) => any;
			"setLeaderboardElement": (a: any) => any;
		};
		"sponsoredPlaylist": {
			"enabled": boolean;
			"sponsoredPlaylistApi": {
				"eventSender": ReturnType<PlatformAutoGen["getAdManagers"]>["home"]["logger"]["eventSender"];
			} & {
				"getSponsoredUris": () => Promise<any>;
				"getSponsorshipAd": (a: any) => any;
				"logEvent": (a: any) => any;
				"subscribeToPreview": (a: any) => any;
			};
		} & {
			"disable": () => any;
			"enable": (a: any) => any;
			"logEvent": (a: any) => any;
			"requestSponsoredPlaylistAd": (a: any) => any;
			"requestSponsoredPlaylists": () => Promise<any>;
		};
		"vto": {
			"factories": Array<(a: any) => any>;
			"manager": {
				"active": boolean;
				"enabled": boolean;
				"fireImpressionOnStart": boolean;
				"focusState": { "listeners": Array<> } & {
					"addFocusListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["adStateReporter"]["focusState"]["addFocusListener"];
					"hasFocus": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["adStateReporter"]["focusState"]["hasFocus"];
					"removeAllFocusListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["adStateReporter"]["focusState"]["removeAllFocusListeners"];
					"removeFocusListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["adStateReporter"]["focusState"]["removeFocusListener"];
				};
				"inStreamApi": ReturnType<PlatformAutoGen["getAdManagers"]>["audio"]["inStreamApi"];
				"isNewAdsNpvEnabled": boolean;
				"isPreferred": (a: any) => any;
				"onAdMessage": (a: any) => any;
				"parseInfo": (a: any) => any;
				"subscriptions": Array<>;
				"videoTakeoverApi": {
					"cosmosConnector": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["audio"]["audioApi"]["cosmosConnector"];
				} & {
					"patchTargeting": (a: any, b: any) => any;
					"postEvent": (a: any, b: any, c: any) => any;
					"subscribeToSlotType": (a: any, b: any) => any;
				};
			} & {
				"createEventData": (a: any) => any;
				"disable": () => Promise<any>;
				"enable": (a: any) => any;
				"getEnabled": () => any;
				"getPreferredCompanionAd": (a: any) => any;
				"handleApplicationGainedFocus": () => Promise<any>;
				"handleApplicationLostFocus": () => Promise<any>;
				"log": (a: any) => any;
				"logEvent": (a: any, b: any, c: any) => any;
				"onCreated": (a: any) => any;
				"onEnded": (a: any, b: any) => any;
				"onFocusChanged": (a: any) => any;
				"onReady": () => any;
				"onRender": () => any;
				"onStarted": (a: any) => any;
				"onStateUpdate": (a: any) => any;
				"resetState": () => any;
				"resetSubscriptions": () => any;
			};
		};
	};
	"getAudioOutputDevicesAPI": () => {
		"_audioObserver": {
			"options": {};
			"transport": { "_onCancel": () => any; "_onSend": () => any } & {
				"call": (a: any, b: any, c: any, d: any) => any;
				"callSingle": (a: any) => any;
				"callStream": (a: any, b: any) => any;
			};
		} & { "getAudioOutputDevices": (a: any, b: any) => any };
		"_events":
			& {
				"_emitter": {
					"_listeners": { "deviceConnected": Array<{ "listener": (a: any) => any; "options": {} }> };
					"_metaListeners": { "add": {}; "remove": {} };
				} & {
					"_dispatchFromStore": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
					"addListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
					"addListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
					"createEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
					"emit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
					"emitAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
					"emitEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
					"emitEventAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
					"emitEventSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
					"emitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
					"on": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
					"once": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
					"proxyEmit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
					"proxyEmitAll": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
					"proxyEmitAllSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
					"proxyEmitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
					"removeAllListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
					"removeListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
				};
			}
			& {}
			& {
				"addListener": (a: any, b: any, c: any) => any;
				"emit": (a: any, b: any) => any;
				"emitSync": (a: any, b: any) => any;
				"onAddListener": (a: any, b: any) => any;
				"onRemoveListener": (a: any, b: any) => any;
				"removeListener": (a: any, b: any, c: any) => any;
			};
		"devices": Array<
			{
				"fullName": string;
				"id": string;
				"isDefaultDevice": boolean;
				"name": string;
				"terminalType": string;
				"transportType": string;
			}
		>;
	} & { "getDefaultDevice": () => any; "getDevices": () => any; "getEvents": () => any };
	"getAudiobooksPremiumConsumptionCapObserverAPI": () => {
		"_playerApi": {
			"_collection": {
				"options": {};
				"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
			} & {
				"add": (a: any, b: any) => any;
				"addUnplayed": (a: any, b: any) => any;
				"ban": (a: any, b: any) => any;
				"contains": (a: any, b: any) => any;
				"decorate": (a: any, b: any) => any;
				"getAlbumTrackList": (a: any, b: any) => any;
				"getAlbumView": (a: any, b: any) => any;
				"getArtistTrackList": (a: any, b: any) => any;
				"getArtistView": (a: any, b: any) => any;
				"getBans": (a: any, b: any) => any;
				"getBucketSyncStatus": (a: any, b: any) => any;
				"getEpisodeList": (a: any, b: any) => any;
				"getResumePoints": (a: any, b: any) => any;
				"getTrackList": (a: any, b: any) => any;
				"getTrackListMetadata": (a: any, b: any) => any;
				"getUnplayedEpisodes": (a: any, b: any) => any;
				"offlineAlbum": (a: any, b: any) => any;
				"offlineArtist": (a: any, b: any) => any;
				"offlineTracks": (a: any, b: any) => any;
				"playAlbum": (a: any, b: any) => any;
				"playArtist": (a: any, b: any) => any;
				"playTracks": (a: any, b: any) => any;
				"remove": (a: any, b: any) => any;
				"removeOfflineAlbum": (a: any, b: any) => any;
				"removeOfflineArtist": (a: any, b: any) => any;
				"removeOfflineTracks": (a: any, b: any) => any;
				"removeUnplayed": (a: any, b: any) => any;
				"streamAlbumTrackList": (a: any, b: any) => any;
				"streamAlbumView": (a: any, b: any) => any;
				"streamArtistTrackList": (a: any, b: any) => any;
				"streamArtistView": (a: any, b: any) => any;
				"streamBans": (a: any, b: any) => any;
				"streamChanges": (a: any, b: any) => any;
				"streamContains": (a: any, b: any) => any;
				"streamDecorate": (a: any, b: any) => any;
				"streamEpisodeList": (a: any, b: any) => any;
				"streamTagsInfo": (a: any, b: any) => any;
				"streamTrackList": (a: any, b: any) => any;
				"streamTrackListMetadata": (a: any, b: any) => any;
				"streamUnplayedEpisodes": (a: any, b: any) => any;
				"tracksOfflineStatus": (a: any, b: any) => any;
				"unban": (a: any, b: any) => any;
			};
			"_contextPlayer": {
				"options": {};
				"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
			} & {
				"addToQueue": (a: any, b: any) => any;
				"deleteSession": (a: any, b: any) => any;
				"getError": (a: any, b: any) => any;
				"getPlayHistory": (a: any, b: any) => any;
				"getPositionState": (a: any, b: any) => any;
				"getQueue": (a: any, b: any) => any;
				"getState": (a: any, b: any) => any;
				"pause": (a: any, b: any) => any;
				"play": (a: any, b: any) => any;
				"playAsNextInQueue": (a: any, b: any) => any;
				"playPrepared": (a: any, b: any) => any;
				"preparePlay": (a: any, b: any) => any;
				"resume": (a: any, b: any) => any;
				"seekTo": (a: any, b: any) => any;
				"setOptions": (a: any, b: any) => any;
				"setQueue": (a: any, b: any) => any;
				"setRepeatingContext": (a: any, b: any) => any;
				"setRepeatingTrack": (a: any, b: any) => any;
				"setShufflingContext": (a: any, b: any) => any;
				"signal": (a: any, b: any) => any;
				"skipNext": (a: any, b: any) => any;
				"skipPrev": (a: any, b: any) => any;
				"stop": (a: any, b: any) => any;
				"updateContext": (a: any, b: any) => any;
				"updateContextPage": (a: any, b: any) => any;
				"updateContextTrack": (a: any, b: any) => any;
				"updateViewUri": (a: any, b: any) => any;
			};
			"_contextualShuffle": {
				"_indexedDbAPI": {
					"_channel": {} & {
						"addEventListener": (a: any, b: any, c: any) => any;
						"postMessage": (a: any) => any;
					} & {
						"close": () => any;
						"name": string;
						"onmessage": null;
						"onmessageerror": null;
						"postMessage": ReturnType<
							PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
						>["_playerApi"]["_contextualShuffle"]["_indexedDbAPI"]["_channel"]["postMessage"];
					} & {
						"addEventListener": ReturnType<
							PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
						>["_playerApi"]["_contextualShuffle"]["_indexedDbAPI"]["_channel"]["addEventListener"];
						"dispatchEvent": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"][
							"bluetooth"
						]["dispatchEvent"];
						"removeEventListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_navigator"][
							"bluetooth"
						]["removeEventListener"];
					};
					"_events":
						& {
							"_emitter": {
								"_listeners": {
									"delete": Array<{ "listener": (a: any) => any; "options": {} }>;
									"update": Array<{ "listener": (a: any) => any; "options": {} }>;
								};
								"_metaListeners": { "add": {}; "remove": {} };
							} & {
								"_dispatchFromStore": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
									"_dispatchFromStore"
								];
								"addListener": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
								"addListeners": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
								"createEvent": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
								"emit": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
								"emitAndWait": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
								"emitEvent": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
								"emitEventAndWait": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
									"emitEventAndWait"
								];
								"emitEventSync": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
								"emitSync": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
								"on": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
								"onAddListener": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
								"onRemoveListener": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
									"onRemoveListener"
								];
								"once": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
								"proxyEmit": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
								"proxyEmitAll": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
								"proxyEmitAllSync": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
									"proxyEmitAllSync"
								];
								"proxyEmitSync": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
								"removeAllListeners": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
									"removeAllListeners"
								];
								"removeListener": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
									"removeListener"
								];
								"removeListeners": ReturnType<
									PlatformAutoGen["getAdManagers"]
								>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"][
									"removeListeners"
								];
							};
						}
						& {}
						& {
							"addListener": ReturnType<
								PlatformAutoGen["getAudioOutputDevicesAPI"]
							>["_events"]["addListener"];
							"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
							"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
							"onAddListener": ReturnType<
								PlatformAutoGen["getAudioOutputDevicesAPI"]
							>["_events"]["onAddListener"];
							"onRemoveListener": ReturnType<
								PlatformAutoGen["getAudioOutputDevicesAPI"]
							>["_events"]["onRemoveListener"];
							"removeListener": ReturnType<
								PlatformAutoGen["getAudioOutputDevicesAPI"]
							>["_events"]["removeListener"];
						};
					"name": string;
					"version": number;
				} & {
					"deleteItem": (a: any, b: any) => any;
					"getEvents": () => any;
					"getItem": (a: any, b: any) => any;
					"openDb": () => Promise<any>;
					"setItem": (a: any, b: any, c: any) => any;
				};
			} & {
				"getContextualShuffleMode": (a: any) => any;
				"getEvents": () => any;
				"setContextualShuffleMode": (a: any, b: any) => any;
			};
			"_cosmos": {
				"requestFactory": () => any;
				"resolver": { "cancel": () => any; "send": () => any } & {
					"onFailure": (a: any, b: any, c: any, d: any) => any;
					"onSuccess": (a: any, b: any, c: any, d: any) => any;
					"resolve": (a: any, b: any, c: any) => any;
				};
			} & {
				"del": (a: any, b: any, c: any) => any;
				"get": (a: any, b: any, c: any) => any;
				"head": (a: any, b: any) => any;
				"patch": (a: any, b: any, c: any) => any;
				"post": (a: any) => any;
				"postSub": (a: any) => any;
				"put": (a: any, b: any, c: any) => any;
				"request": (a: any, b: any) => any;
				"resolve": (a: any, b: any) => any;
				"sub": (a: any, b: any) => any;
			};
			"_defaultFeatureVersion": string;
			"_events":
				& {
					"_client": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"];
					"_emitter": {
						"_listeners": {
							"action": Array<{ "listener": (a: any) => any; "options": {} }>;
							"error": Array<
								{ "listener": () => Promise<any>; "options": {} } | {
									"listener": (a: any) => any;
									"options": {};
								}
							>;
							"queue_action_complete": Array<{ "listener": (a: any) => any; "options": {} }>;
							"update": Array<{ "listener": (a: any) => any; "options": {} }>;
						};
						"_metaListeners": { "add": {}; "remove": {} };
					} & {
						"_dispatchFromStore": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
						"addListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
						"addListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
						"createEvent": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
						"emit": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
						"emitAndWait": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
						"emitEvent": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
						"emitEventAndWait": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
						"emitEventSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
						"emitSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
						"on": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
						"onAddListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
						"onRemoveListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
						"once": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
						"proxyEmit": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
						"proxyEmitAll": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
						"proxyEmitAllSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
						"proxyEmitSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
						"removeAllListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
						"removeListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
						"removeListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
					};
				}
				& {}
				& {
					"emitPauseSync": () => any;
					"emitPlaySync": (a: any, b: any, c: any) => any;
					"emitQueueActionComplete": (a: any) => any;
					"emitQueueActionSync": (a: any) => any;
					"emitQueueUpdate": (a: any) => any;
					"emitResumeSync": () => any;
					"emitSkipToNextSync": () => any;
					"emitSkipToPreviousSync": () => any;
				}
				& {
					"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
					"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
					"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["onRemoveListener"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["removeListener"];
				};
			"_isResyncBeforePlayPlaylistEnabled": boolean;
			"_isSmartShuffleEnabled": boolean;
			"_playlistResyncerAPI": {
				"_playlistServiceClient": {
					"options": {};
					"transport": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_audioObserver"]["transport"];
				} & {
					"clearToken": (a: any, b: any) => any;
					"contains": (a: any, b: any) => any;
					"getMembers": (a: any, b: any) => any;
					"modify": (a: any, b: any) => any;
					"requestLenses": (a: any, b: any) => any;
					"resync": (a: any, b: any) => any;
					"setBasePermission": (a: any, b: any) => any;
					"setMemberPermission": (a: any, b: any) => any;
					"setOfflineState": (a: any, b: any) => any;
					"setToken": (a: any, b: any) => any;
					"signal": (a: any, b: any) => any;
					"signalItem": (a: any, b: any) => any;
					"subscribeToMembers": (a: any, b: any) => any;
				};
				"lastSync": Map<any, any>;
			} & { "maybeResync": (a: any) => any; "resync": (a: any) => any };
			"_playlistServiceClient": {
				"options": {};
				"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
			} & {
				"clearToken": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["clearToken"];
				"contains": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["contains"];
				"getMembers": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["getMembers"];
				"modify": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["modify"];
				"requestLenses": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["requestLenses"];
				"resync": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["resync"];
				"setBasePermission": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["setBasePermission"];
				"setMemberPermission": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["setMemberPermission"];
				"setOfflineState": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["setOfflineState"];
				"setToken": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["setToken"];
				"signal": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["signal"];
				"signalItem": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["signalItem"];
				"subscribeToMembers": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["subscribeToMembers"];
			};
			"_queue": {
				"_client": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_contextPlayer"];
				"_events": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_events"];
				"_queue": {
					"nextTracks": Array<>;
					"prevTracks": Array<>;
					"queueRevision": bigint;
					"track": undefined;
				};
				"_queueState": { "current": null; "nextUp": Array<>; "queued": Array<> };
				"_shouldRenderSecondRepeatedContextItemsIteration": boolean;
				"getRepeatMode": () => number;
				"timeoutId": number;
			} & {
				"addToQueue": (a: any) => any;
				"clearQueue": () => Promise<any>;
				"convertQueueState": (a: any, b: any) => any;
				"createQueueItem": (a: any, b: any) => any;
				"getInternalQueue": () => any;
				"getQueue": () => any;
				"insertIntoQueue": (a: any, b: any) => any;
				"isQueued": (a: any) => any;
				"isSameItem": (a: any, b: any) => any;
				"markAsQueued": (a: any) => any;
				"removeFromQueue": (a: any) => any;
				"reorderQueue": (a: any, b: any) => any;
			};
			"_shouldRenderSecondRepeatedContextItemsIteration": boolean;
			"_smartShuffleEligibility": {
				"_metadataServiceClient": {
					"options": {};
					"transport": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_audioObserver"]["transport"];
				} & {
					"expire": (a: any, b: any) => any;
					"fetch": (a: any, b: any) => any;
					"observe": (a: any, b: any) => any;
					"purge": (a: any, b: any) => any;
				};
			} & { "getEligibility": (a: any) => any };
			"_state": {
				"context": { "metadata": { "player.arch": string }; "uri": string; "url": string };
				"duration": null;
				"hasContext": boolean;
				"index": { "itemIndex": null; "pageIndex": null; "pageURI": null };
				"isBuffering": boolean;
				"isPaused": boolean;
				"item": null;
				"nextItems": Array<>;
				"playbackId": null;
				"playbackQuality": {
					"bitrateLevel": number;
					"losslessStatus": number;
					"strategy": number;
					"targetBitrateAvailable": boolean;
					"targetBitrateLevel": number;
				};
				"positionAsOfTimestamp": number;
				"previousItems": Array<>;
				"repeat": number;
				"restrictions": {
					"canPause": boolean;
					"canResume": boolean;
					"canSeek": boolean;
					"canSkipNext": boolean;
					"canSkipPrevious": boolean;
					"canToggleRepeatContext": boolean;
					"canToggleRepeatTrack": boolean;
					"canToggleShuffle": boolean;
					"disallowAddToQueueReasons": Array<>;
					"disallowPausingReasons": Array<string>;
					"disallowResumingReasons": Array<string>;
					"disallowSeekingReasons": Array<string>;
					"disallowSetQueueReasons": Array<string>;
					"disallowSettingPlaybackSpeedReasons": Array<string>;
					"disallowSkippingNextReasons": Array<string>;
					"disallowSkippingPreviousReasons": Array<string>;
					"disallowTogglingRepeatContextReasons": Array<>;
					"disallowTogglingRepeatTrackReasons": Array<>;
					"disallowTogglingShuffleReasons": Array<>;
					"disallowTransferringPlaybackReasons": Array<>;
				};
				"sessionId": string;
				"shuffle": boolean;
				"signals": Array<string>;
				"speed": number;
				"timestamp": number;
			};
			"forcedShuffle": boolean;
			"referrer": string;
		} & {
			"addToQueue": (a: any) => any;
			"canPlayEncryptedContent": () => Promise<any>;
			"canSendSignal": (a: any) => any;
			"clearQueue": () => Promise<any>;
			"getCapabilities": () => {
				"canChangeSpeed": boolean;
				"canChangeVolume": boolean;
				"canPlayMultipleContextPages": boolean;
				"hasDecoratedQueue": boolean;
				"maxNextTracks": number;
			};
			"getEvents": () => any;
			"getForcedShuffle": () => any;
			"getQueue": () => any;
			"getReferrer": () => any;
			"getState": () => any;
			"insertIntoQueue": (a: any, b: any) => any;
			"pause": () => Promise<any>;
			"play": (a: any, b: any) => any;
			"playAsNextInQueue": (a: any) => any;
			"refreshCurrentContext": () => Promise<any>;
			"removeFromQueue": (a: any) => any;
			"reorderQueue": (a: any, b: any) => any;
			"resume": () => Promise<any>;
			"seekBackward": (a: any) => any;
			"seekBy": (a: any) => any;
			"seekForward": (a: any) => any;
			"seekTo": (a: any) => any;
			"sendSignal": (a: any) => any;
			"setDefaultFeatureVersion": (a: any) => any;
			"setForcedShuffle": (a: any) => any;
			"setReferrer": (a: any) => any;
			"setRepeat": (a: any) => any;
			"setShuffle": (a: any) => any;
			"setSpeed": (a: any) => any;
			"skipTo": (a: any) => any;
			"skipToNext": (a: any) => any;
			"skipToPrevious": () => Promise<any>;
			"updateContext": (a: any, b: any, c: any) => any;
		};
		"_pubSubApi": {
			"_connectionId": Promise<any>;
			"_events":
				& {
					"_emitter": { "_listeners": {}; "_metaListeners": { "add": {}; "remove": {} } } & {
						"_dispatchFromStore": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
						"addListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
						"addListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
						"createEvent": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
						"emit": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
						"emitAndWait": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
						"emitEvent": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
						"emitEventAndWait": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
						"emitEventSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
						"emitSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
						"on": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
						"onAddListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
						"onRemoveListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
						"once": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
						"proxyEmit": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
						"proxyEmitAll": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
						"proxyEmitAllSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
						"proxyEmitSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
						"removeAllListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
						"removeListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
						"removeListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
					};
				}
				& {}
				& {
					"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
					"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
					"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["onRemoveListener"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["removeListener"];
				};
			"_isDeveloperMode": boolean;
			"_messages": Array<
				{ "attributes": {}; "ident": string; "payloads": Array<Uint8Array>; "timestamp": number }
			>;
			"_subscribeToConnectionId": (a: any) => any;
			"_subscribeToMessages": (a: any, b: any, c: any) => any;
			"_subscriptions": Map<any, any>;
		} & {
			"cancelSubscription": (a: any) => any;
			"createSubscription": (a: any, b: any, c: any) => any;
			"getConnectionId": () => any;
			"getEvents": () => any;
			"getMessages": () => any;
			"getSubscriptions": () => any;
			"onConnectionId": (a: any) => any;
			"refreshSubscription": (a: any, b: any) => any;
			"subscribe": (a: any) => any;
		};
		"_showApi": {
			"_builder": ReturnType<
				PlatformAutoGen["getAdManagers"]
			>["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
			"_events":
				& {
					"_aggregator":
						& {
							"_additions": {} & {} & {} & {
								"clear": () => any;
								"delete": (a: any) => any;
								"entries": () => any;
								"forEach": (a: any) => any;
								"get": (a: any) => any;
								"has": (a: any) => any;
								"keys": () => any;
								"set": (a: any, b: any) => any;
								"size": number;
								"values": () => any;
							};
							"_batch": {} & {} & {} & {
								"clear": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["clear"];
								"delete": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["delete"];
								"entries": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["entries"];
								"forEach": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["forEach"];
								"get": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["get"];
								"has": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["has"];
								"keys": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["keys"];
								"set": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["set"];
								"size": number;
								"values": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["values"];
							};
							"_deletions": {} & {} & {} & {
								"clear": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["clear"];
								"delete": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["delete"];
								"entries": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["entries"];
								"forEach": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["forEach"];
								"get": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["get"];
								"has": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["has"];
								"keys": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["keys"];
								"set": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["set"];
								"size": number;
								"values": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["values"];
							};
							"_onAdd": (a: any, b: any) => any;
							"_onBatch": (a: any) => any;
							"_onRemove": (a: any, b: any) => any;
							"_onUpdate": (a: any, b: any, c: any) => any;
							"_timeout": number;
							"_timeoutId": null;
						}
						& {}
						& {
							"getBatch": () => any;
							"onUpdate": () => any;
							"scheduleUpdate": () => any;
							"subscribe": (a: any, b: any) => any;
							"unsubscribe": (a: any, b: any) => any;
						};
					"_emitter": {
						"_listeners": { "update_access_info": Array<{ "listener": (a: any) => any; "options": {} }> };
						"_metaListeners": {
							"add": {
								"update_access_info": Array<{ "listener": (a: any) => any; "options": {} }>;
								"update_resume_episode_link": Array<{ "listener": (a: any) => any; "options": {} }>;
							};
							"remove": {
								"update_access_info": Array<{ "listener": (a: any) => any; "options": {} }>;
								"update_resume_episode_link": Array<{ "listener": (a: any) => any; "options": {} }>;
							};
						};
					} & {
						"_dispatchFromStore": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
						"addListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
						"addListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
						"createEvent": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
						"emit": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
						"emitAndWait": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
						"emitEvent": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
						"emitEventAndWait": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
						"emitEventSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
						"emitSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
						"on": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
						"onAddListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
						"onRemoveListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
						"once": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
						"proxyEmit": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
						"proxyEmitAll": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
						"proxyEmitAllSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
						"proxyEmitSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
						"removeAllListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
						"removeListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
						"removeListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
					};
					"_show_client": {
						"options": {};
						"transport": ReturnType<
							PlatformAutoGen["getAudioOutputDevicesAPI"]
						>["_audioObserver"]["transport"];
					} & {
						"getDecorate": (a: any, b: any) => any;
						"getShow": (a: any, b: any) => any;
						"getShowEpisode": (a: any, b: any) => any;
						"getUnfinishedEpisodes": (a: any, b: any) => any;
						"markShowAsPlayed": (a: any, b: any) => any;
						"playShow": (a: any, b: any) => any;
						"subDecorate": (a: any, b: any) => any;
						"subShow": (a: any, b: any) => any;
						"subShowEpisode": (a: any, b: any) => any;
						"subUnfinishedEpisodes": (a: any, b: any) => any;
					};
					"_subscriptions": Map<any, any>;
				}
				& {}
				& {}
				& {
					"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
					"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
					"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["onRemoveListener"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["removeListener"];
				};
			"_metadata_service_client": {
				"options": {};
				"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
			} & {
				"expire": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_smartShuffleEligibility"]["_metadataServiceClient"]["expire"];
				"fetch": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_smartShuffleEligibility"]["_metadataServiceClient"]["fetch"];
				"observe": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_smartShuffleEligibility"]["_metadataServiceClient"]["observe"];
				"purge": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_smartShuffleEligibility"]["_metadataServiceClient"]["purge"];
			};
			"_podcast_paywalls_client": {
				"options": {};
				"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
			} & { "putShowSubscription": (a: any, b: any) => any };
			"_show_service_client": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_showApi"]["_events"]["_show_client"];
			"capabilities": {
				"canFilter": boolean;
				"canGetDefaultSort": boolean;
				"canGetShowPlayedState": boolean;
				"canSort": boolean;
			};
			"remote_configuration": { "accessListeners": Set<any>; "values": Map<any, any> } & {
				"getValue": (a: any) => any;
				"toBuilder": () => any;
				"toJSON": () => any;
			};
		} & {
			"checkoutBook": (a: any) => any;
			"getAccessInfo": (a: any) => any;
			"getBookContents": (a: any, b: any) => any;
			"getContents": (a: any, b: any) => any;
			"getEpisodeOrChapter": (a: any) => any;
			"getEvents": () => any;
			"getMetadata": (a: any) => any;
			"getPlayerFilter": () => string;
			"getPlayerSort": (a: any) => any;
			"getShowPlayedState": (a: any) => any;
			"invalidateShowMetadataCaches": (a: any) => any;
			"updateUserRating": (a: any, b: any) => any;
		};
		"currentPlayerState": ReturnType<
			PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
		>["_playerApi"]["_state"];
		"requestInFlight": boolean;
	} & {};
	"getAuthorizationAPI": () => {
		"_authorizationPlugin": ReturnType<
			PlatformAutoGen["getAdManagers"]
		>["home"]["logger"]["eventSender"]["transport"]["_plugins"]["desktop-lifecycle-plugin"];
		"_cosmos": ReturnType<
			PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
		>["_playerApi"]["_cosmos"];
		"_events":
			& {
				"_emitter": {
					"_listeners": { "update": Array<{ "listener": (a: any) => any; "options": {} }> };
					"_metaListeners": { "add": {}; "remove": {} };
				} & {
					"_dispatchFromStore": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
					"addListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
					"addListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
					"createEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
					"emit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
					"emitAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
					"emitEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
					"emitEventAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
					"emitEventSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
					"emitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
					"on": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
					"once": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
					"proxyEmit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
					"proxyEmitAll": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
					"proxyEmitAllSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
					"proxyEmitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
					"removeAllListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
					"removeListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
				};
			}
			& {}
			& {
				"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
				"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
				"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
				"onAddListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onAddListener"];
				"onRemoveListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onRemoveListener"];
				"removeListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["removeListener"];
			};
		"_state": {
			"isAuthorized": boolean;
			"retryAt": {} & {
				"getDate": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["getDate"];
				"getDay": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["getDay"];
				"getFullYear": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["getFullYear"];
				"getHours": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["getHours"];
				"getMilliseconds": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["getMilliseconds"];
				"getMinutes": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["getMinutes"];
				"getMonth": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["getMonth"];
				"getSeconds": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["getSeconds"];
				"getTime": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["getTime"];
				"getTimezoneOffset": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["getTimezoneOffset"];
				"getUTCDate": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["getUTCDate"];
				"getUTCDay": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["getUTCDay"];
				"getUTCFullYear": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["getUTCFullYear"];
				"getUTCHours": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["getUTCHours"];
				"getUTCMilliseconds": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["getUTCMilliseconds"];
				"getUTCMinutes": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["getUTCMinutes"];
				"getUTCMonth": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["getUTCMonth"];
				"getUTCSeconds": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["getUTCSeconds"];
				"getYear": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["getYear"];
				"setDate": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["setDate"];
				"setFullYear": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["setFullYear"];
				"setHours": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["setHours"];
				"setMilliseconds": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["setMilliseconds"];
				"setMinutes": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["setMinutes"];
				"setMonth": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["setMonth"];
				"setSeconds": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["setSeconds"];
				"setTime": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["setTime"];
				"setUTCDate": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["setUTCDate"];
				"setUTCFullYear": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["setUTCFullYear"];
				"setUTCHours": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["setUTCHours"];
				"setUTCMilliseconds": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["setUTCMilliseconds"];
				"setUTCMinutes": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["setUTCMinutes"];
				"setUTCMonth": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["setUTCMonth"];
				"setUTCSeconds": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["setUTCSeconds"];
				"setYear": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["setYear"];
				"toDateString": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["toDateString"];
				"toGMTString": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["toGMTString"];
				"toISOString": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["toISOString"];
				"toJSON": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["toJSON"];
				"toLocaleDateString": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["toLocaleDateString"];
				"toLocaleString": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["toLocaleString"];
				"toLocaleTimeString": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["toLocaleTimeString"];
				"toString": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["toString"];
				"toTimeString": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["toTimeString"];
				"toUTCString": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["toGMTString"];
				"valueOf": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["essLastSent"]["valueOf"];
			};
			"retryAttempt": number;
			"token": null;
		};
		"_tokenProvider":
			& {
				"_callbacks": Array<(a: any) => any>;
				"_cosmos": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_cosmos"];
				"_promise": Promise<any>;
				"_token": {
					"accessToken": string;
					"accessTokenExpirationTimestampMs": number;
					"isAnonymous": boolean;
				};
			}
			& { "loadToken": () => Promise<any> }
			& { "addOnTokenChanged": (a: any) => any; "getToken": () => Promise<any> };
		"onAuthenticationFailed": ReturnType<
			PlatformAutoGen["getAdManagers"]
		>["home"]["logger"]["eventSender"]["transport"]["_plugins"]["desktop-lifecycle-plugin"][
			"_onAuthenticationFailed"
		][0];
		"onTokenChanged": ReturnType<PlatformAutoGen["getAuthorizationAPI"]>["_tokenProvider"]["_callbacks"][0];
	} & {
		"getCapabilities": () => { "canGetSessionTransferURL": boolean };
		"getEvents": () => any;
		"getSessionTransferURL": (a: any) => any;
		"getState": () => any;
		"onAuthenticationFailed": ReturnType<
			PlatformAutoGen["getAdManagers"]
		>["home"]["logger"]["eventSender"]["transport"]["_plugins"]["desktop-lifecycle-plugin"][
			"_onAuthenticationFailed"
		][0];
		"onTokenChanged": ReturnType<PlatformAutoGen["getAuthorizationAPI"]>["_tokenProvider"]["_callbacks"][0];
		"tryAuthorize": () => any;
	};
	"getBuddyFeedAPI": () => {
		"buddyFetchApi": {
			"_builder": ReturnType<
				PlatformAutoGen["getAdManagers"]
			>["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
			"_pubsub": ReturnType<PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]>["_pubSubApi"];
		} & {
			"getBuddyActivity": (a: any) => any;
			"getBuddyFeed": () => any;
			"getFacebookFriends": () => any;
			"subscribeToBuddyActivity": (a: any, b: any) => any;
		};
		"cosmos": ReturnType<
			PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
		>["_playerApi"]["_cosmos"];
	} & {
		"connectToFacebook": () => any;
		"fetchFacebookFriends": () => Promise<any>;
		"fetchFriendActivity": (a: any) => any;
		"getCapabilities": () => { "isSupported": boolean };
		"subscribeToBuddyActivity": (a: any, b: any) => any;
		"subscribeToFacebookConnectionState": (a: any) => any;
	};
	"getClipboardAPI": () => {
		"_cosmos": ReturnType<
			PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
		>["_playerApi"]["_cosmos"];
	} & { "copy": (a: any) => any; "paste": () => Promise<any> };
	"getCollectionPlatformAPI": () => {
		"_service": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & {
			"add": (a: any, b: any) => any;
			"contains": (a: any, b: any) => any;
			"get": (a: any, b: any) => any;
			"remove": (a: any, b: any) => any;
			"streamContains": (a: any, b: any) => any;
			"streamGet": (a: any, b: any) => any;
		};
		"events":
			& {
				"_emitter": {
					"_listeners": {
						"added": Array<{ "listener": (a: any) => any; "options": {} }>;
						"removed": Array<
							{
								"listener": ReturnType<
									PlatformAutoGen["getCollectionPlatformAPI"]
								>["events"]["_emitter"]["_listeners"]["added"][0]["listener"];
								"options": {};
							} | { "listener": (a: any) => any; "options": {} }
						>;
					};
					"_metaListeners": { "add": {}; "remove": {} };
				} & {
					"_dispatchFromStore": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
					"addListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
					"addListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
					"createEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
					"emit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
					"emitAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
					"emitEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
					"emitEventAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
					"emitEventSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
					"emitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
					"on": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
					"once": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
					"proxyEmit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
					"proxyEmitAll": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
					"proxyEmitAllSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
					"proxyEmitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
					"removeAllListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
					"removeListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
				};
			}
			& {}
			& {
				"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
				"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
				"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
				"onAddListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onAddListener"];
				"onRemoveListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onRemoveListener"];
				"removeListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["removeListener"];
			};
	} & {
		"add": (a: any, b: any) => any;
		"contains": (a: any, b: any) => any;
		"get": (a: any) => any;
		"getEvents": () => any;
		"remove": (a: any, b: any) => any;
		"subscribe": (a: any, b: any) => any;
		"subscribeContains": (a: any, b: any, c: any) => any;
	};
	"getConnectAPI": () => {
		"checkDeviceId": (a: any) => any;
		"connectServiceClient": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & {
			"becomeInactive": (a: any, b: any) => any;
			"cancelTransfer": (a: any, b: any) => any;
			"forceDiscover": (a: any, b: any) => any;
			"getDebugLevel": (a: any, b: any) => any;
			"getDeviceSettings": (a: any, b: any) => any;
			"installSpotify": (a: any, b: any) => any;
			"logout": (a: any, b: any) => any;
			"notifyAudioRouteChanged": (a: any, b: any) => any;
			"performDiscovery": (a: any, b: any) => any;
			"pickerOpened": (a: any, b: any) => any;
			"pull": (a: any, b: any) => any;
			"refreshCluster": (a: any, b: any) => any;
			"rename": (a: any, b: any) => any;
			"sendCommand": (a: any, b: any) => any;
			"setDebugLevel": (a: any, b: any) => any;
			"setDeviceStreamQuality": (a: any, b: any) => any;
			"setPreferredZeroconf": (a: any, b: any) => any;
			"startDiscovery": (a: any, b: any) => any;
			"state": (a: any, b: any) => any;
			"transfer": (a: any, b: any) => any;
			"wakeSleepingClusterDevices": (a: any, b: any) => any;
		};
		"events":
			& {
				"_emitter": {
					"_listeners": { "update": Array<{ "listener": (a: any) => any; "options": {} }> };
					"_metaListeners": { "add": {}; "remove": {} };
				} & {
					"_dispatchFromStore": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
					"addListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
					"addListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
					"createEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
					"emit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
					"emitAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
					"emitEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
					"emitEventAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
					"emitEventSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
					"emitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
					"on": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
					"once": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
					"proxyEmit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
					"proxyEmitAll": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
					"proxyEmitAllSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
					"proxyEmitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
					"removeAllListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
					"removeListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
				};
				"connectServiceClient": ReturnType<PlatformAutoGen["getConnectAPI"]>["connectServiceClient"];
			}
			& {}
			& {}
			& {
				"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
				"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
				"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
				"onAddListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onAddListener"];
				"onRemoveListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onRemoveListener"];
				"removeListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["removeListener"];
			};
		"mapIncarnationToLoginType": (a: any) => any;
		"state": {
			"activeDevice": {
				"brandDisplayName": string;
				"connectStateId": string;
				"currentState": string;
				"disabledReason": undefined;
				"id": string;
				"incarnation": { "available": Array<>; "preferred": undefined };
				"isActive": boolean;
				"isConnecting": boolean;
				"isDisabled": boolean;
				"isGroup": boolean;
				"isLocal": boolean;
				"isLocalNetwork": boolean;
				"isWebApp": boolean;
				"isZeroconf": boolean;
				"license": string;
				"losslessSupport": {
					"deviceSupported": boolean;
					"fullySupported": boolean;
					"userEligible": boolean;
				};
				"modelDisplayName": string;
				"name": string;
				"supportsDJNarration": boolean;
				"supportsLogout": boolean;
				"type": string;
				"volume": number;
			};
			"connectingDevice": null;
			"connectionStatus": string;
			"devices": Array<ReturnType<PlatformAutoGen["getConnectAPI"]>["state"]["activeDevice"]>;
		};
		"useNewEndpoint": boolean;
	} & {
		"createLoggingParams": (a: any) => any;
		"getCapabilities": () => { "supportsLocalDiscovery": boolean };
		"getEvents": () => any;
		"getState": () => any;
		"initiateLocalDiscovery": () => Promise<any>;
		"logout": (a: any) => any;
		"pullToLocal": (a: any) => any;
		"setPreferredIncarnation": (a: any, b: any) => any;
		"transferPlayback": (a: any, b: any) => any;
		"transferToRemote": (a: any, b: any) => any;
		"updateListOfDevices": () => Promise<any>;
	};
	"getControlMessageAPI": () => {
		"_cosmos": ReturnType<
			PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
		>["_playerApi"]["_cosmos"];
	} & {
		"disableMenuItem": (a: any) => any;
		"enableMenuItem": (a: any) => any;
		"getEvents": () => any;
		"notifyReadyStateReached": () => Promise<any>;
		"notifyUsableStateReached": (a: any) => any;
		"notifyViewLoaded": (a: any) => any;
		"setTitlebarHeight": (a: any) => any;
	};
	"getCurationAPI": () => {
		"_libraryAPI": {
			"_builder": ReturnType<
				PlatformAutoGen["getAdManagers"]
			>["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
			"_cache": Map<any, any>;
			"_collection": {
				"options": {};
				"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
			} & {
				"add": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["add"];
				"addUnplayed": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["addUnplayed"];
				"ban": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["ban"];
				"contains": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["contains"];
				"decorate": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["decorate"];
				"getAlbumTrackList": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["getAlbumTrackList"];
				"getAlbumView": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["getAlbumView"];
				"getArtistTrackList": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["getArtistTrackList"];
				"getArtistView": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["getArtistView"];
				"getBans": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["getBans"];
				"getBucketSyncStatus": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["getBucketSyncStatus"];
				"getEpisodeList": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["getEpisodeList"];
				"getResumePoints": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["getResumePoints"];
				"getTrackList": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["getTrackList"];
				"getTrackListMetadata": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["getTrackListMetadata"];
				"getUnplayedEpisodes": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["getUnplayedEpisodes"];
				"offlineAlbum": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["offlineAlbum"];
				"offlineArtist": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["offlineArtist"];
				"offlineTracks": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["offlineTracks"];
				"playAlbum": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["playAlbum"];
				"playArtist": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["playArtist"];
				"playTracks": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["playTracks"];
				"remove": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["remove"];
				"removeOfflineAlbum": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["removeOfflineAlbum"];
				"removeOfflineArtist": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["removeOfflineArtist"];
				"removeOfflineTracks": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["removeOfflineTracks"];
				"removeUnplayed": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["removeUnplayed"];
				"streamAlbumTrackList": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["streamAlbumTrackList"];
				"streamAlbumView": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["streamAlbumView"];
				"streamArtistTrackList": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["streamArtistTrackList"];
				"streamArtistView": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["streamArtistView"];
				"streamBans": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["streamBans"];
				"streamChanges": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["streamChanges"];
				"streamContains": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["streamContains"];
				"streamDecorate": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["streamDecorate"];
				"streamEpisodeList": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["streamEpisodeList"];
				"streamTagsInfo": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["streamTagsInfo"];
				"streamTrackList": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["streamTrackList"];
				"streamTrackListMetadata": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["streamTrackListMetadata"];
				"streamUnplayedEpisodes": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["streamUnplayedEpisodes"];
				"tracksOfflineStatus": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["tracksOfflineStatus"];
				"unban": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_collection"]["unban"];
			};
			"_currentUsername": string;
			"_events":
				& {
					"_aggregator":
						& {
							"_additions": {} & {} & {} & {
								"clear": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["clear"];
								"delete": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["delete"];
								"entries": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["entries"];
								"forEach": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["forEach"];
								"get": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["get"];
								"has": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["has"];
								"keys": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["keys"];
								"set": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["set"];
								"size": number;
								"values": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["values"];
							};
							"_batch": {} & {} & {} & {
								"clear": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["clear"];
								"delete": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["delete"];
								"entries": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["entries"];
								"forEach": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["forEach"];
								"get": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["get"];
								"has": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["has"];
								"keys": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["keys"];
								"set": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["set"];
								"size": number;
								"values": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["values"];
							};
							"_deletions": {} & {} & {} & {
								"clear": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["clear"];
								"delete": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["delete"];
								"entries": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["entries"];
								"forEach": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["forEach"];
								"get": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["get"];
								"has": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["has"];
								"keys": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["keys"];
								"set": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["set"];
								"size": number;
								"values": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["values"];
							};
							"_onAdd": (a: any, b: any) => any;
							"_onBatch": (a: any) => any;
							"_onRemove": (a: any, b: any) => any;
							"_onUpdate": (a: any, b: any, c: any) => any;
							"_timeout": number;
							"_timeoutId": null;
						}
						& {}
						& {
							"getBatch": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["getBatch"];
							"onUpdate": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["onUpdate"];
							"scheduleUpdate": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["scheduleUpdate"];
							"subscribe": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["subscribe"];
							"unsubscribe": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["unsubscribe"];
						};
					"_cache": Map<any, any>;
					"_cancellables": {
						"albums": { "cancel": () => undefined };
						"artists": { "cancel": () => undefined };
						"books": { "cancel": () => undefined };
						"episodes": { "cancel": () => undefined };
						"shows": { "cancel": () => undefined };
						"tracks": { "cancel": () => undefined };
					};
					"_collection": ReturnType<PlatformAutoGen["getCurationAPI"]>["_libraryAPI"]["_collection"];
					"_containsCancellable": null;
					"_emitter": {
						"_listeners": {
							"operation": Array<{ "listener": (a: any) => any; "options": {} }>;
							"operation_complete": Array<{ "listener": (a: any) => any; "options": {} }>;
							"update": Array<{ "listener": (a: any) => any; "options": {} }>;
							"update_pin": Array<{ "listener": (a: any) => any; "options": {} }>;
							"update_pin_error": Array<{ "listener": (a: any) => any; "options": {} }>;
						};
						"_metaListeners": {
							"add": {
								"update": Array<{ "listener": () => undefined; "options": {} }>;
								"update_item": Array<{ "listener": (a: any) => any; "options": {} }>;
							};
							"remove": {
								"update": Array<{ "listener": () => undefined; "options": {} }>;
								"update_item": Array<{ "listener": (a: any) => any; "options": {} }>;
							};
						};
					} & {
						"_dispatchFromStore": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
						"addListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
						"addListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
						"createEvent": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
						"emit": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
						"emitAndWait": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
						"emitEvent": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
						"emitEventAndWait": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
						"emitEventSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
						"emitSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
						"on": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
						"onAddListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
						"onRemoveListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
						"once": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
						"proxyEmit": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
						"proxyEmitAll": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
						"proxyEmitAllSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
						"proxyEmitSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
						"removeAllListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
						"removeListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
						"removeListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
					};
					"_listen_later": {
						"options": {};
						"transport": ReturnType<
							PlatformAutoGen["getAudioOutputDevicesAPI"]
						>["_audioObserver"]["transport"];
					} & {
						"add": (a: any, b: any) => any;
						"episodes": (a: any, b: any) => any;
						"play": (a: any, b: any) => any;
						"remove": (a: any, b: any) => any;
						"streamEpisodes": (a: any, b: any) => any;
					};
					"_numListeners": number;
					"_your_library": {
						"options": {};
						"transport": ReturnType<
							PlatformAutoGen["getAudioOutputDevicesAPI"]
						>["_audioObserver"]["transport"];
					} & {
						"all": (a: any, b: any) => any;
						"contains": (a: any, b: any) => any;
						"decorate": (a: any, b: any) => any;
						"getKeys": (a: any, b: any) => any;
						"isCurated": (a: any, b: any) => any;
						"movePin": (a: any, b: any) => any;
						"pin": (a: any, b: any) => any;
						"streamAll": (a: any, b: any) => any;
						"streamContains": (a: any, b: any) => any;
						"streamDecorate": (a: any, b: any) => any;
						"streamIsCurated": (a: any, b: any) => any;
						"unPin": (a: any, b: any) => any;
					};
				}
				& {
					"onBatchChanged": (a: any) => any;
					"subscribeToUpdates": () => any;
					"unsubscribeFromUpdates": () => any;
				}
				& {
					"emitOperationComplete": (a: any, b: any) => any;
					"emitOperationSync": (a: any, b: any, c: any) => any;
					"emitUpdateItems": (a: any, b: any) => any;
					"emitUpdatePin": (a: any, b: any) => any;
					"emitUpdatePinErrorTooManyPins": (a: any, b: any) => any;
				}
				& {}
				& {
					"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
					"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
					"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["onRemoveListener"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["removeListener"];
				};
			"_listen_later": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_listen_later"];
			"_your_library": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"];
		} & {
			"_isTagsInfoSynced": () => Promise<any>;
			"add": (a: any) => any;
			"contains": () => Promise<any>;
			"containsSync": (a: any) => any;
			"getAlbum": (a: any) => any;
			"getAlbums": () => Promise<any>;
			"getArtists": () => Promise<any>;
			"getBooks": () => Promise<any>;
			"getCapabilities": () => {
				"canFetchAllItems": boolean;
				"canFilter": boolean;
				"canFilterTracksAndEpisodes": boolean;
				"canGetTracksByArtistOrAlbum": boolean;
				"canMarkEpisodesAsDone": boolean;
				"canModifyOffline": boolean;
				"canPin": boolean;
				"canSort": boolean;
				"canSortTracksAndEpisodes": boolean;
				"canTextFilterContentsInRealtime": boolean;
			};
			"getContents": (a: any) => any;
			"getContentsPrimaryFilterId": (a: any) => any;
			"getEpisodes": () => Promise<any>;
			"getEvents": () => any;
			"getFilterLabel": (a: any) => any;
			"getShows": () => Promise<any>;
			"getSortOrderLabel": (a: any) => any;
			"getStaticallyKnownFilters": () => {
				"playlist": { "filterId": string; "sortOrderIds": { "customSort": string } };
			};
			"getTracks": () => Promise<any>;
			"getTracksFilterTags": () => Promise<any>;
			"markAsPlayed": (a: any) => any;
			"markAsUnPlayed": (a: any) => any;
			"pin": (a: any, b: any) => any;
			"remove": (a: any) => any;
			"unpin": (a: any) => any;
		};
		"_playlistAPI": {
			"_builder": ReturnType<
				PlatformAutoGen["getAdManagers"]
			>["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
			"_events":
				& {
					"_aggregator":
						& {
							"_additions": {} & {} & {} & {
								"clear": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["clear"];
								"delete": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["delete"];
								"entries": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["entries"];
								"forEach": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["forEach"];
								"get": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["get"];
								"has": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["has"];
								"keys": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["keys"];
								"set": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["set"];
								"size": number;
								"values": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["values"];
							};
							"_batch": {} & {} & {} & {
								"clear": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["clear"];
								"delete": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["delete"];
								"entries": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["entries"];
								"forEach": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["forEach"];
								"get": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["get"];
								"has": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["has"];
								"keys": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["keys"];
								"set": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["set"];
								"size": number;
								"values": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["values"];
							};
							"_deletions": {} & {} & {} & {
								"clear": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["clear"];
								"delete": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["delete"];
								"entries": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["entries"];
								"forEach": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["forEach"];
								"get": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["get"];
								"has": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["has"];
								"keys": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["keys"];
								"set": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["set"];
								"size": number;
								"values": ReturnType<
									PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
								>["_showApi"]["_events"]["_aggregator"]["_additions"]["values"];
							};
							"_onAdd": (a: any, b: any) => any;
							"_onBatch": (a: any) => any;
							"_onRemove": (a: any, b: any) => any;
							"_onUpdate": (a: any, b: any, c: any) => any;
							"_timeout": number;
							"_timeoutId": null;
						}
						& {}
						& {
							"getBatch": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["getBatch"];
							"onUpdate": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["onUpdate"];
							"scheduleUpdate": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["scheduleUpdate"];
							"subscribe": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["subscribe"];
							"unsubscribe": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["unsubscribe"];
						};
					"_dataClient": {
						"options": {};
						"transport": ReturnType<
							PlatformAutoGen["getAudioOutputDevicesAPI"]
						>["_audioObserver"]["transport"];
					} & {
						"find": (a: any, b: any) => any;
						"get": (a: any, b: any) => any;
						"multiGet": (a: any, b: any) => any;
						"subscribe": (a: any, b: any) => any;
					};
					"_emitter": {
						"_listeners": {
							"operation_complete": Array<{ "listener": (a: any) => any; "options": {} }>;
							"update": Array<{ "listener": (a: any) => any; "options": { "uri": string } }>;
						};
						"_metaListeners": {
							"add": { "update": Array<{ "listener": (a: any) => any; "options": {} }> };
							"remove": { "update": Array<{ "listener": (a: any) => any; "options": {} }> };
						};
					} & {
						"_dispatchFromStore": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
						"addListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
						"addListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
						"createEvent": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
						"emit": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
						"emitAndWait": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
						"emitEvent": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
						"emitEventAndWait": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
						"emitEventSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
						"emitSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
						"on": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
						"onAddListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
						"onRemoveListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
						"once": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
						"proxyEmit": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
						"proxyEmitAll": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
						"proxyEmitAllSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
						"proxyEmitSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
						"removeAllListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
						"removeListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
						"removeListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
					};
					"_subscriptions": Map<any, any>;
				}
				& { "onBatchChanged": (a: any) => any }
				& {
					"emitAddComplete": (a: any) => any;
					"emitAddSync": (a: any, b: any, c: any) => any;
					"emitMoveComplete": (a: any) => any;
					"emitMoveSync": (a: any, b: any) => any;
					"emitRemoveComplete": (a: any) => any;
					"emitRemoveSync": (a: any, b: any, c: any) => any;
					"emitSendSignalComplete": (a: any, b: any, c: any) => any;
					"emitSendSignalSync": (a: any, b: any, c: any) => any;
					"emitUpdateComplete": (a: any) => any;
					"emitUpdateSync": (a: any, b: any) => any;
				}
				& {}
				& {
					"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
					"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
					"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["onRemoveListener"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["removeListener"];
				};
			"_isAudiobookCurationEnabled": boolean;
			"_playlistDataClient": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_playlistAPI"]["_events"]["_dataClient"];
			"_playlistServiceClient": {
				"options": {};
				"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
			} & {
				"clearToken": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["clearToken"];
				"contains": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["contains"];
				"getMembers": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["getMembers"];
				"modify": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["modify"];
				"requestLenses": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["requestLenses"];
				"resync": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["resync"];
				"setBasePermission": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["setBasePermission"];
				"setMemberPermission": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["setMemberPermission"];
				"setOfflineState": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["setOfflineState"];
				"setToken": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["setToken"];
				"signal": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["signal"];
				"signalItem": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["signalItem"];
				"subscribeToMembers": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["subscribeToMembers"];
			};
			"_resyncAPI": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"];
			"_smartShuffleEligibilityAPI": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_smartShuffleEligibility"];
		} & {
			"_getLensedPlaylistUri": (a: any) => any;
			"add": (a: any, b: any, c: any, d: any) => any;
			"clearAttributes": (a: any, b: any) => any;
			"getCapabilities": () => any;
			"getContents": (a: any, b: any) => any;
			"getEvents": () => any;
			"getMetadata": (a: any, b: any) => any;
			"getPlaylist": (a: any, b: any, c: any) => any;
			"getPlaylistQuery": (a: any) => any;
			"getRecommendedBookUris": (a: any, b: any, c: any) => any;
			"getRecommendedTracks": (a: any, b: any, c: any) => any;
			"move": (a: any, b: any, c: any) => any;
			"remove": (a: any, b: any) => any;
			"requestLenses": (a: any, b: any, c: any) => any;
			"resolvePlaylistFormatURI": (a: any) => any;
			"resync": (a: any) => any;
			"sendSignal": (a: any, b: any, c: any) => any;
			"setAttributes": (a: any, b: any) => any;
			"updateDetails": (a: any, b: any) => any;
			"uploadImage": (a: any) => any;
		};
		"_your_library": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & {
			"all": ReturnType<PlatformAutoGen["getCurationAPI"]>["_libraryAPI"]["_events"]["_your_library"]["all"];
			"contains": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["contains"];
			"decorate": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["decorate"];
			"getKeys": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["getKeys"];
			"isCurated": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["isCurated"];
			"movePin": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["movePin"];
			"pin": ReturnType<PlatformAutoGen["getCurationAPI"]>["_libraryAPI"]["_events"]["_your_library"]["pin"];
			"streamAll": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["streamAll"];
			"streamContains": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["streamContains"];
			"streamDecorate": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["streamDecorate"];
			"streamIsCurated": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["streamIsCurated"];
			"unPin": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["unPin"];
		};
		"cache": { "_cache": Map<any, any>; "_ttl": number } & {} & {
			"cleanup": () => any;
			"clear": () => any;
			"create": (a: any, b: any) => any;
			"delete": (a: any) => any;
			"entries": () => any;
			"get": (a: any) => any;
			"getExpiry": () => any;
			"has": (a: any) => any;
			"isExpired": (a: any) => any;
			"peek": (a: any) => any;
			"set": (a: any, b: any) => any;
		};
		"events":
			& {
				"_emitter": {
					"_listeners": {
						"update_curated_item": Array<{ "listener": (a: any) => any; "options": { "uri": string } }>;
					};
					"_metaListeners": {
						"add": { "update_curated_item": Array<{ "listener": (a: any) => any; "options": {} }> };
						"remove": { "update_curated_item": Array<{ "listener": (a: any) => any; "options": {} }> };
					};
				} & {
					"_dispatchFromStore": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
					"addListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
					"addListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
					"createEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
					"emit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
					"emitAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
					"emitEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
					"emitEventAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
					"emitEventSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
					"emitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
					"on": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
					"once": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
					"proxyEmit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
					"proxyEmitAll": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
					"proxyEmitAllSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
					"proxyEmitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
					"removeAllListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
					"removeListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
				};
				"_your_library": ReturnType<PlatformAutoGen["getCurationAPI"]>["_your_library"];
				"aggregator":
					& {
						"_additions": {} & {} & {} & {
							"clear": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["clear"];
							"delete": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["delete"];
							"entries": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["entries"];
							"forEach": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["forEach"];
							"get": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["get"];
							"has": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["has"];
							"keys": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["keys"];
							"set": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["set"];
							"size": number;
							"values": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["values"];
						};
						"_batch": {} & {} & {} & {
							"clear": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["clear"];
							"delete": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["delete"];
							"entries": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["entries"];
							"forEach": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["forEach"];
							"get": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["get"];
							"has": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["has"];
							"keys": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["keys"];
							"set": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["set"];
							"size": number;
							"values": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["values"];
						};
						"_deletions": {} & {} & {} & {
							"clear": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["clear"];
							"delete": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["delete"];
							"entries": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["entries"];
							"forEach": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["forEach"];
							"get": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["get"];
							"has": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["has"];
							"keys": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["keys"];
							"set": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["set"];
							"size": number;
							"values": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["values"];
						};
						"_onAdd": (a: any, b: any) => any;
						"_onBatch": (a: any) => any;
						"_onRemove": (a: any, b: any) => any;
						"_onUpdate": (a: any, b: any, c: any) => any;
						"_timeout": number;
						"_timeoutId": null;
					}
					& {}
					& {
						"getBatch": ReturnType<
							PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
						>["_showApi"]["_events"]["_aggregator"]["getBatch"];
						"onUpdate": ReturnType<
							PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
						>["_showApi"]["_events"]["_aggregator"]["onUpdate"];
						"scheduleUpdate": ReturnType<
							PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
						>["_showApi"]["_events"]["_aggregator"]["scheduleUpdate"];
						"subscribe": ReturnType<
							PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
						>["_showApi"]["_events"]["_aggregator"]["subscribe"];
						"unsubscribe": ReturnType<
							PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
						>["_showApi"]["_events"]["_aggregator"]["unsubscribe"];
					};
				"cache": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"];
				"streamIsCuratedCancellable": { "cancel": () => undefined };
			}
			& { "onCuratedBatchChanged": (a: any) => any }
			& {
				"emitOperationComplete": (a: any, b: any, c: any, d: any) => any;
				"emitOperationSync": (a: any, b: any, c: any, d: any) => any;
				"emitUpdateCuratedItems": (a: any, b: any) => any;
			}
			& {}
			& {
				"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
				"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
				"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
				"onAddListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onAddListener"];
				"onRemoveListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onRemoveListener"];
				"removeListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["removeListener"];
			};
		"getDefaultCurationContextUri": (a: any) => any;
	} & {
		"curateDefault": (a: any) => any;
		"curateItems": (a: any, b: any, c: any) => any;
		"getAvailableSortOrders": () => Array<{ "id": string; "name": string }>;
		"getCapabilities": () => { "canFilterOnCurationState": boolean; "canSort": boolean };
		"getCurationContexts": (a: any) => any;
		"getEvents": () => any;
		"isCurated": () => Promise<any>;
		"isCuratedSync": (a: any) => any;
	};
	"getEqualizerAPI": () => {
		"filters": Array<{ "frequency": number; "gain": number; "key": string; "type": string }>;
		"localStorageAPI": {
			"_events":
				& {
					"_emitter": {
						"_listeners": { "update": Array<{ "listener": (a: any) => any; "options": {} }> };
						"_metaListeners": { "add": {}; "remove": {} };
					} & {
						"_dispatchFromStore": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
						"addListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
						"addListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
						"createEvent": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
						"emit": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
						"emitAndWait": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
						"emitEvent": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
						"emitEventAndWait": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
						"emitEventSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
						"emitSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
						"on": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
						"onAddListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
						"onRemoveListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
						"once": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
						"proxyEmit": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
						"proxyEmitAll": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
						"proxyEmitAllSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
						"proxyEmitSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
						"removeAllListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
						"removeListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
						"removeListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
					};
				}
				& {}
				& {
					"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
					"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
					"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["onRemoveListener"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["removeListener"];
				};
			"auto_cleanup": boolean;
			"items": {
				"yblp9ylse3i4cdx2klsq1xnlx:connect-nudge-triggered-at": string;
				"yblp9ylse3i4cdx2klsq1xnlx:isPlaybackBarRemainingTimeToggled": boolean;
				"yblp9ylse3i4cdx2klsq1xnlx:items-view": number;
				"yblp9ylse3i4cdx2klsq1xnlx:lastVisitedLocation": string;
				"yblp9ylse3i4cdx2klsq1xnlx:library-row-mode": number;
				"yblp9ylse3i4cdx2klsq1xnlx:lintHtmlWithCss": boolean;
				"yblp9ylse3i4cdx2klsq1xnlx:mlt-height": number;
				"yblp9ylse3i4cdx2klsq1xnlx:npv-onboarding-dismissed": boolean;
				"yblp9ylse3i4cdx2klsq1xnlx:npv-onboarding-dismissed-time": number;
				"yblp9ylse3i4cdx2klsq1xnlx:npv-onboarding-never-show-again": boolean;
				"yblp9ylse3i4cdx2klsq1xnlx:onboarding-dismissed-amount:ylx-playlist-ordering": number;
				"yblp9ylse3i4cdx2klsq1xnlx:onboarding-dismissed:ylx-playlist-ordering": boolean;
				"yblp9ylse3i4cdx2klsq1xnlx:opened-folder-uri": string;
				"yblp9ylse3i4cdx2klsq1xnlx:panel-width": number;
				"yblp9ylse3i4cdx2klsq1xnlx:queue-view": string;
				"yblp9ylse3i4cdx2klsq1xnlx:remote-config-overrides": {};
				"yblp9ylse3i4cdx2klsq1xnlx:smart-shuffle-menu": number;
				"yblp9ylse3i4cdx2klsq1xnlx:smart-shuffle-seen": boolean;
				"yblp9ylse3i4cdx2klsq1xnlx:sort-view-picker-onboarding-seen": boolean;
				"yblp9ylse3i4cdx2klsq1xnlx:sortedState": {};
				"yblp9ylse3i4cdx2klsq1xnlx:toggleNowPlayingView": boolean;
				"yblp9ylse3i4cdx2klsq1xnlx:ui.right_sidebar_content": string;
				"yblp9ylse3i4cdx2klsq1xnlx:view-mode": string;
				"yblp9ylse3i4cdx2klsq1xnlx:ylx-active-filter-ids": { "": Array<string> };
				"yblp9ylse3i4cdx2klsq1xnlx:ylx-active-sort-order-by-filter-id": {};
				"yblp9ylse3i4cdx2klsq1xnlx:ylx-default-state-nav-bar-width": number;
				"yblp9ylse3i4cdx2klsq1xnlx:ylx-expanded-folders": Array<string>;
				"yblp9ylse3i4cdx2klsq1xnlx:ylx-expanded-state-nav-bar-width": number;
				"yblp9ylse3i4cdx2klsq1xnlx:ylx-sidebar-state": number;
			};
			"max_retries": number;
			"namespace": string;
		} & {
			"clearItem": (a: any) => any;
			"createNamespacedKey": (a: any) => any;
			"getEvents": () => any;
			"getItem": (a: any) => any;
			"listenToStorageEvents": () => undefined;
			"parseLocalStorageValue": (a: any, b: any) => any;
			"setItem": (a: any, b: any) => any;
			"setItemInternal": (a: any, b: any, c: any) => any;
			"toggleItemsTypeAndCleanup": () => any;
		};
		"prefs": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & {
			"create": (a: any, b: any) => any;
			"get": (a: any, b: any) => any;
			"getAll": (a: any, b: any) => any;
			"set": (a: any, b: any) => any;
			"sub": (a: any, b: any) => any;
			"subAll": (a: any, b: any) => any;
		};
	} & {
		"getFilters": () => Promise<any>;
		"isSupported": () => boolean;
		"setEnabledState": (a: any) => any;
		"setFilterGain": (a: any, b: any) => any;
		"subscribeToEnabledState": (a: any) => any;
	} & {
		"getFilters": ReturnType<PlatformAutoGen["getEqualizerAPI"]>["getFilters"];
		"getPreset": () => any;
		"isSupported": ReturnType<PlatformAutoGen["getEqualizerAPI"]>["isSupported"];
		"setEnabledState": ReturnType<PlatformAutoGen["getEqualizerAPI"]>["setEnabledState"];
		"setFilterGain": ReturnType<PlatformAutoGen["getEqualizerAPI"]>["setFilterGain"];
		"setPreset": (a: any) => any;
		"subscribeToEnabledState": ReturnType<PlatformAutoGen["getEqualizerAPI"]>["subscribeToEnabledState"];
		"subscribeToPresetChange": (a: any) => any;
	};
	"getEventSender": () => ReturnType<PlatformAutoGen["getAdManagers"]>["home"]["logger"]["eventSender"];
	"getExternalAccessoryAPI": () => {
		"_builder": ReturnType<
			PlatformAutoGen["getAdManagers"]
		>["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
		"_cache": { "_cache": Map<any, any>; "_ttl": number } & {
			"cleanup": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["cleanup"];
			"clear": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["clear"];
			"create": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["create"];
			"delete": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["delete"];
			"entries": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["entries"];
			"get": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["get"];
			"getExpiry": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["getExpiry"];
			"has": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["has"];
			"isExpired": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["isExpired"];
			"peek": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["peek"];
			"set": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["set"];
		};
	} & { "lookup": (a: any) => any; "sendLookupRequest": (a: any) => any };
	"getFacebookAPI": () =>
		& {
			"_cosmos": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_cosmos"];
			"_emitter": {
				"_listeners": {};
				"_metaListeners": {
					"add": { "connection_state_change": Array<{ "listener": () => undefined; "options": {} }> };
					"remove": { "connection_state_change": Array<{ "listener": () => undefined; "options": {} }> };
				};
			} & {
				"_dispatchFromStore": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
				"addListener": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
				"addListeners": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
				"createEvent": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
				"emit": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
				"emitAndWait": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
				"emitEvent": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
				"emitEventAndWait": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
				"emitEventSync": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
				"emitSync": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
				"on": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
				"onAddListener": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
				"onRemoveListener": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
				"once": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
				"proxyEmit": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
				"proxyEmitAll": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
				"proxyEmitAllSync": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
				"proxyEmitSync": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
				"removeAllListeners": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
				"removeListener": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
				"removeListeners": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
			};
			"_numListeners": number;
			"_subscription": null;
		}
		& { "connect": (a: any) => any; "disconnect": () => any }
		& {}
		& {
			"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
			"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
			"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
			"onAddListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["onAddListener"];
			"onRemoveListener": ReturnType<
				PlatformAutoGen["getAudioOutputDevicesAPI"]
			>["_events"]["onRemoveListener"];
			"removeListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["removeListener"];
		};
	"getFeatureFlags": () => { "enableShows": boolean };
	"getFollowAPI": () => {
		"_cache": { "_cache": Map<any, any>; "_ttl": null } & {
			"cleanup": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["cleanup"];
			"clear": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["clear"];
			"create": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["create"];
			"delete": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["delete"];
			"entries": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["entries"];
			"get": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["get"];
			"getExpiry": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["getExpiry"];
			"has": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["has"];
			"isExpired": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["isExpired"];
			"peek": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["peek"];
			"set": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["set"];
		};
		"_events":
			& {
				"_emitter": {
					"_listeners": { "operation": Array<{ "listener": (a: any) => any; "options": {} }> };
					"_metaListeners": { "add": {}; "remove": {} };
				} & {
					"_dispatchFromStore": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
					"addListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
					"addListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
					"createEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
					"emit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
					"emitAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
					"emitEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
					"emitEventAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
					"emitEventSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
					"emitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
					"on": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
					"once": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
					"proxyEmit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
					"proxyEmitAll": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
					"proxyEmitAllSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
					"proxyEmitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
					"removeAllListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
					"removeListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
				};
			}
			& { "emitOperationComplete": (a: any, b: any) => any; "emitOperationSync": (a: any, b: any) => any }
			& {
				"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
				"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
				"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
				"onAddListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onAddListener"];
				"onRemoveListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onRemoveListener"];
				"removeListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["removeListener"];
			};
		"_loader": (a: any, b: any) => any;
	} & {
		"_validateURIs": (a: any) => any;
		"executeOperation": (a: any, b: any, c: any) => any;
		"followUsers": (a: any) => any;
		"getEvents": () => any;
		"isFollowing": (a: any) => any;
		"unfollowUsers": (a: any) => any;
	};
	"getGraphQLLoader": () => ReturnType<PlatformAutoGen["getFollowAPI"]>["_loader"];
	"getHistory": () => ReturnType<PlatformAutoGen["getAdManagers"]>["adStateReporter"]["history"];
	"getIndexedDbAPI": () => ReturnType<
		PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
	>["_playerApi"]["_contextualShuffle"]["_indexedDbAPI"];
	"getLibraryAPI": () => ReturnType<PlatformAutoGen["getCurationAPI"]>["_libraryAPI"];
	"getLocalFilesAPI": () => {
		"_client": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & {
			"addFolder": (a: any, b: any) => any;
			"getScannerStatus": (a: any, b: any) => any;
			"getSources": (a: any, b: any) => any;
			"getTracks": (a: any, b: any) => any;
			"mutateDefaultSource": (a: any, b: any) => any;
			"mutateDefaultSources": (a: any, b: any) => any;
			"notifyDefaultSources": (a: any, b: any) => any;
			"removeFolder": (a: any, b: any) => any;
			"subscribeScannerStatus": (a: any, b: any) => any;
			"subscribeSources": (a: any, b: any) => any;
			"subscribeTracks": (a: any, b: any) => any;
		};
		"_cosmos": ReturnType<
			PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
		>["_playerApi"]["_cosmos"];
		"_events":
			& {
				"_emitter": {
					"_listeners": { "update": Array<{ "listener": () => undefined; "options": {} }> };
					"_metaListeners": { "add": {}; "remove": {} };
				} & {
					"_dispatchFromStore": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
					"addListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
					"addListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
					"createEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
					"emit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
					"emitAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
					"emitEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
					"emitEventAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
					"emitEventSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
					"emitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
					"on": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
					"once": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
					"proxyEmit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
					"proxyEmitAll": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
					"proxyEmitAllSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
					"proxyEmitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
					"removeAllListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
					"removeListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
				};
			}
			& {}
			& {
				"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
				"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
				"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
				"onAddListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onAddListener"];
				"onRemoveListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onRemoveListener"];
				"removeListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["removeListener"];
			};
		"_localStorageAPI": ReturnType<PlatformAutoGen["getEqualizerAPI"]>["localStorageAPI"];
		"_totalLength": number;
	} & {
		"_emitUpdate": () => any;
		"_subscribeToTracksUpdates": () => any;
		"addFolder": (a: any) => any;
		"browseForFolder": () => Promise<any>;
		"getCapabilities": () => { "canFetchAllTracks": boolean; "canFilter": boolean; "canSort": boolean };
		"getEvents": () => any;
		"getIsEnabled": () => any;
		"getSources": () => Promise<any>;
		"getTracks": (a: any, b: any) => any;
		"mutateDefaultSource": (a: any) => any;
		"removeFolder": (a: any) => any;
		"setIsEnabled": (a: any) => any;
		"subscribeIsEnabled": (a: any) => any;
	};
	"getLocalStorageAPI": () => ReturnType<PlatformAutoGen["getEqualizerAPI"]>["localStorageAPI"];
	"getOfflineAPI": () => {
		"_cache": Map<any, any>;
		"_canDownload": (a: any) => any;
		"_events":
			& {
				"_cache": Map<any, any>;
				"_cosmos": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_playerApi"]["_cosmos"];
				"_emitter": {
					"_listeners": {
						"error": Array<{ "listener": (a: any) => any; "options": {} }>;
						"update_availability": Array<{ "listener": (a: any) => any; "options": { "uri": string } }>;
						"update_capabilities": Array<{ "listener": (a: any) => any; "options": {} }>;
						"update_context_progress": Array<
							{ "listener": (a: any) => any; "options": { "uri": string } }
						>;
						"update_total_progress": Array<{ "listener": (a: any) => any; "options": {} }>;
					};
					"_metaListeners": {
						"add": {
							"error": Array<{ "listener": () => undefined; "options": {} }>;
							"update_availability": Array<{ "listener": (a: any) => any; "options": {} }>;
							"update_capabilities": Array<{ "listener": () => undefined; "options": {} }>;
							"update_connectivity": Array<{ "listener": () => undefined; "options": {} }>;
							"update_context_progress": Array<{ "listener": (a: any) => any; "options": {} }>;
							"update_total_progress": Array<{ "listener": () => undefined; "options": {} }>;
						};
						"remove": {
							"error": Array<{ "listener": () => undefined; "options": {} }>;
							"update_availability": Array<{ "listener": (a: any) => any; "options": {} }>;
							"update_capabilities": Array<{ "listener": () => undefined; "options": {} }>;
							"update_connectivity": Array<{ "listener": () => undefined; "options": {} }>;
							"update_context_progress": Array<{ "listener": (a: any) => any; "options": {} }>;
							"update_total_progress": Array<{ "listener": () => undefined; "options": {} }>;
						};
					};
				} & {
					"_dispatchFromStore": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
					"addListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
					"addListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
					"createEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
					"emit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
					"emitAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
					"emitEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
					"emitEventAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
					"emitEventSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
					"emitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
					"on": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
					"once": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
					"proxyEmit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
					"proxyEmitAll": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
					"proxyEmitAllSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
					"proxyEmitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
					"removeAllListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
					"removeListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
				};
				"_offline": {
					"options": {};
					"transport": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_audioObserver"]["transport"];
				} & {
					"addDownload": (a: any, b: any) => any;
					"getContextForDevices": (a: any, b: any) => any;
					"getContexts": (a: any, b: any) => any;
					"getContextsProgress": (a: any, b: any) => any;
					"getDevices": (a: any, b: any) => any;
					"getItems": (a: any, b: any) => any;
					"getLocalDevice": (a: any, b: any) => any;
					"getOfflineLicenseInfo": (a: any, b: any) => any;
					"getOfflinePlaybackStatus": (a: any, b: any) => any;
					"getTotalProgress": (a: any, b: any) => any;
					"removeAllDownloads": (a: any, b: any) => any;
					"removeDownload": (a: any, b: any) => any;
					"setOfflinePlaybackAllowed": (a: any, b: any) => any;
					"subscribeContextForDevices": (a: any, b: any) => any;
					"subscribeContexts": (a: any, b: any) => any;
					"subscribeContextsProgress": (a: any, b: any) => any;
					"subscribeDevicesWithContext": (a: any, b: any) => any;
					"subscribeError": (a: any, b: any) => any;
					"subscribeItems": (a: any, b: any) => any;
					"subscribeOfflinePlaybackStatus": (a: any, b: any) => any;
					"subscribeTotalProgress": (a: any, b: any) => any;
				};
				"_productState": {
					"options": {};
					"transport": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_audioObserver"]["transport"];
				} & {
					"delOverridesValues": (a: any, b: any) => any;
					"getValues": (a: any, b: any) => any;
					"putOverridesValues": (a: any, b: any) => any;
					"putValues": (a: any, b: any) => any;
					"subValues": (a: any, b: any) => any;
				};
				"_username": string;
			}
			& {
				"setupCapabilitiesEvents": () => any;
				"setupConnectivityEvents": () => any;
				"setupContextAndItemAvailabilityEvents": () => any;
				"setupContextProgressEvents": () => any;
				"setupErrorEvents": () => any;
				"setupTotalProgressEvents": () => any;
			}
			& {}
			& {
				"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
				"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
				"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
				"onAddListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onAddListener"];
				"onRemoveListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onRemoveListener"];
				"removeListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["removeListener"];
			};
		"_offline": ReturnType<PlatformAutoGen["getOfflineAPI"]>["_events"]["_offline"];
		"_productState": ReturnType<PlatformAutoGen["getOfflineAPI"]>["_events"]["_productState"];
		"_storage": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & {
			"deleteExpiredItems": (a: any, b: any) => any;
			"deleteUnlockedItems": (a: any, b: any) => any;
			"getCacheSizeLimit": (a: any, b: any) => any;
			"getFileRanges": (a: any, b: any) => any;
			"getStats": (a: any, b: any) => any;
			"setCacheSizeLimit": (a: any, b: any) => any;
		};
		"_username": string;
		"_yourLibrary": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & {
			"all": ReturnType<PlatformAutoGen["getCurationAPI"]>["_libraryAPI"]["_events"]["_your_library"]["all"];
			"contains": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["contains"];
			"decorate": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["decorate"];
			"getKeys": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["getKeys"];
			"isCurated": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["isCurated"];
			"movePin": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["movePin"];
			"pin": ReturnType<PlatformAutoGen["getCurationAPI"]>["_libraryAPI"]["_events"]["_your_library"]["pin"];
			"streamAll": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["streamAll"];
			"streamContains": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["streamContains"];
			"streamDecorate": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["streamDecorate"];
			"streamIsCurated": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["streamIsCurated"];
			"unPin": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_libraryAPI"]["_events"]["_your_library"]["unPin"];
		};
	} & {
		"addDownload": (a: any, b: any) => any;
		"getAvailabilitySync": (a: any) => any;
		"getCapabilities": () => { "canDownload": (a: any, b: any) => any; "canRemoteDownload": boolean };
		"getContextForDevices": (a: any) => any;
		"getDownloads": () => Promise<any>;
		"getEvents": () => any;
		"getStatistics": () => Promise<any>;
		"removeAllDownloads": () => Promise<any>;
		"removeCache": () => Promise<any>;
		"removeDownload": (a: any, b: any) => any;
	};
	"getPlatformData": () => {
		"app_platform": string;
		"client_capabilities": {
			"can_autostart": boolean;
			"can_minimize_or_exit_on_close": boolean;
			"can_restart": boolean;
			"can_show_system_media_controls": boolean;
			"can_show_track_notifications": boolean;
		};
		"client_name": string;
		"client_variant": string;
		"client_version_quadruple": string;
		"client_version_quintuple": string;
		"client_version_triple": string;
		"event_sender_context_information": {
			"client_id": string;
			"client_version_int": number;
			"client_version_string": string;
			"device_id": string;
			"device_manufacturer": string;
			"device_model": string;
			"installation_id": string;
			"os_version": string;
			"platform_type": string;
		};
		"is_developer_mode": boolean;
		"os_name": string;
		"os_settings": { "double_click_interval_ms": number; "scroller_style": string };
		"os_version": string;
		"remote_config_client_id": string;
	};
	"getPlayHistoryAPI": () => {
		"_cache": { "_cache": Map<any, any>; "_ttl": number } & {} & {
			"cleanup": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["cleanup"];
			"clear": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["clear"];
			"create": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["create"];
			"delete": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["delete"];
			"entries": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["entries"];
			"get": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["get"];
			"getExpiry": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["getExpiry"];
			"has": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["has"];
			"isExpired": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["isExpired"];
			"peek": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["peek"];
			"set": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["set"];
		};
		"_events":
			& {
				"_cache": ReturnType<PlatformAutoGen["getPlayHistoryAPI"]>["_cache"];
				"_emitter": {
					"_listeners": {};
					"_metaListeners": {
						"add": { "update": Array<{ "listener": () => undefined; "options": {} }> };
						"remove": { "update": Array<{ "listener": () => undefined; "options": {} }> };
					};
				} & {
					"_dispatchFromStore": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
					"addListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
					"addListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
					"createEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
					"emit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
					"emitAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
					"emitEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
					"emitEventAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
					"emitEventSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
					"emitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
					"on": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
					"once": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
					"proxyEmit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
					"proxyEmitAll": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
					"proxyEmitAllSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
					"proxyEmitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
					"removeAllListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
					"removeListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
				};
				"_loader": (a: any, b: any, c: any, d: any) => any;
				"_numListeners": number;
				"_player": {
					"options": {};
					"transport": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_audioObserver"]["transport"];
				} & {
					"addToQueue": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["addToQueue"];
					"deleteSession": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["deleteSession"];
					"getError": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["getError"];
					"getPlayHistory": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["getPlayHistory"];
					"getPositionState": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["getPositionState"];
					"getQueue": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["getQueue"];
					"getState": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["getState"];
					"pause": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["pause"];
					"play": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["play"];
					"playAsNextInQueue": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["playAsNextInQueue"];
					"playPrepared": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["playPrepared"];
					"preparePlay": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["preparePlay"];
					"resume": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["resume"];
					"seekTo": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["seekTo"];
					"setOptions": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["setOptions"];
					"setQueue": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["setQueue"];
					"setRepeatingContext": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["setRepeatingContext"];
					"setRepeatingTrack": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["setRepeatingTrack"];
					"setShufflingContext": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["setShufflingContext"];
					"signal": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["signal"];
					"skipNext": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["skipNext"];
					"skipPrev": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["skipPrev"];
					"stop": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["stop"];
					"updateContext": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["updateContext"];
					"updateContextPage": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["updateContextPage"];
					"updateContextTrack": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["updateContextTrack"];
					"updateViewUri": ReturnType<
						PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
					>["_playerApi"]["_contextPlayer"]["updateViewUri"];
				};
				"_subscriptions": { "update": null };
			}
			& { "startListening": () => any; "stopListening": () => any }
			& { "onListenerAdded": () => any; "onListenerRemoved": () => any }
			& {
				"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
				"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
				"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
				"onAddListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onAddListener"];
				"onRemoveListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onRemoveListener"];
				"removeListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["removeListener"];
			};
		"_loader": ReturnType<PlatformAutoGen["getPlayHistoryAPI"]>["_events"]["_loader"];
		"_player": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & {
			"addToQueue": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["addToQueue"];
			"deleteSession": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["deleteSession"];
			"getError": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["getError"];
			"getPlayHistory": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["getPlayHistory"];
			"getPositionState": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["getPositionState"];
			"getQueue": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["getQueue"];
			"getState": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["getState"];
			"pause": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["pause"];
			"play": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["play"];
			"playAsNextInQueue": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["playAsNextInQueue"];
			"playPrepared": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["playPrepared"];
			"preparePlay": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["preparePlay"];
			"resume": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["resume"];
			"seekTo": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["seekTo"];
			"setOptions": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["setOptions"];
			"setQueue": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["setQueue"];
			"setRepeatingContext": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["setRepeatingContext"];
			"setRepeatingTrack": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["setRepeatingTrack"];
			"setShufflingContext": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["setShufflingContext"];
			"signal": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["signal"];
			"skipNext": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["skipNext"];
			"skipPrev": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["skipPrev"];
			"stop": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["stop"];
			"updateContext": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["updateContext"];
			"updateContextPage": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["updateContextPage"];
			"updateContextTrack": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["updateContextTrack"];
			"updateViewUri": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_contextPlayer"]["updateViewUri"];
		};
	} & {
		"getCapabilities": () => { "isSupported": boolean };
		"getContents": () => Promise<any>;
		"getEvents": () => any;
	};
	"getPlaybackAPI": () => {
		"_connectServiceClient": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & {
			"becomeInactive": ReturnType<
				PlatformAutoGen["getConnectAPI"]
			>["connectServiceClient"]["becomeInactive"];
			"cancelTransfer": ReturnType<
				PlatformAutoGen["getConnectAPI"]
			>["connectServiceClient"]["cancelTransfer"];
			"forceDiscover": ReturnType<PlatformAutoGen["getConnectAPI"]>["connectServiceClient"]["forceDiscover"];
			"getDebugLevel": ReturnType<PlatformAutoGen["getConnectAPI"]>["connectServiceClient"]["getDebugLevel"];
			"getDeviceSettings": ReturnType<
				PlatformAutoGen["getConnectAPI"]
			>["connectServiceClient"]["getDeviceSettings"];
			"installSpotify": ReturnType<
				PlatformAutoGen["getConnectAPI"]
			>["connectServiceClient"]["installSpotify"];
			"logout": ReturnType<PlatformAutoGen["getConnectAPI"]>["connectServiceClient"]["logout"];
			"notifyAudioRouteChanged": ReturnType<
				PlatformAutoGen["getConnectAPI"]
			>["connectServiceClient"]["notifyAudioRouteChanged"];
			"performDiscovery": ReturnType<
				PlatformAutoGen["getConnectAPI"]
			>["connectServiceClient"]["performDiscovery"];
			"pickerOpened": ReturnType<PlatformAutoGen["getConnectAPI"]>["connectServiceClient"]["pickerOpened"];
			"pull": ReturnType<PlatformAutoGen["getConnectAPI"]>["connectServiceClient"]["pull"];
			"refreshCluster": ReturnType<
				PlatformAutoGen["getConnectAPI"]
			>["connectServiceClient"]["refreshCluster"];
			"rename": ReturnType<PlatformAutoGen["getConnectAPI"]>["connectServiceClient"]["rename"];
			"sendCommand": ReturnType<PlatformAutoGen["getConnectAPI"]>["connectServiceClient"]["sendCommand"];
			"setDebugLevel": ReturnType<PlatformAutoGen["getConnectAPI"]>["connectServiceClient"]["setDebugLevel"];
			"setDeviceStreamQuality": ReturnType<
				PlatformAutoGen["getConnectAPI"]
			>["connectServiceClient"]["setDeviceStreamQuality"];
			"setPreferredZeroconf": ReturnType<
				PlatformAutoGen["getConnectAPI"]
			>["connectServiceClient"]["setPreferredZeroconf"];
			"startDiscovery": ReturnType<
				PlatformAutoGen["getConnectAPI"]
			>["connectServiceClient"]["startDiscovery"];
			"state": ReturnType<PlatformAutoGen["getConnectAPI"]>["connectServiceClient"]["state"];
			"transfer": ReturnType<PlatformAutoGen["getConnectAPI"]>["connectServiceClient"]["transfer"];
			"wakeSleepingClusterDevices": ReturnType<
				PlatformAutoGen["getConnectAPI"]
			>["connectServiceClient"]["wakeSleepingClusterDevices"];
		};
		"_events":
			& {
				"_emitter": {
					"_listeners": { "volume": Array<{ "listener": (a: any) => any; "options": {} }> };
					"_metaListeners": { "add": {}; "remove": {} };
				} & {
					"_dispatchFromStore": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
					"addListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
					"addListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
					"createEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
					"emit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
					"emitAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
					"emitEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
					"emitEventAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
					"emitEventSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
					"emitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
					"on": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
					"once": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
					"proxyEmit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
					"proxyEmitAll": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
					"proxyEmitAllSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
					"proxyEmitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
					"removeAllListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
					"removeListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
				};
			}
			& {}
			& {
				"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
				"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
				"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
				"onAddListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onAddListener"];
				"onRemoveListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onRemoveListener"];
				"removeListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["removeListener"];
			};
		"_info": {
			"advisedBitrate": number;
			"audioId": string;
			"buffering": boolean;
			"codecName": string;
			"error": number;
			"fileBitrate": number;
			"fileId": string;
			"fileType": string;
			"gainAdjustment": number;
			"hasLoudness": boolean;
			"lengthMs": bigint;
			"loudness": number;
			"playbackSpeed": number;
			"playing": boolean;
			"positionMs": bigint;
			"resolvedContentUrl": string;
			"status": number;
			"strategy": string;
			"targetBitrate": number;
			"targetFileAvailable": boolean;
		};
		"_isAvailable": boolean;
		"_isLocal": boolean;
		"_playbackService": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & {
			"duck": (a: any, b: any) => any;
			"getFiles": (a: any, b: any) => any;
			"getFormats": (a: any, b: any) => any;
			"getPlaybackInfo": (a: any, b: any) => any;
			"getRawVolume": (a: any, b: any) => any;
			"getVolume": (a: any, b: any) => any;
			"lowerVolume": (a: any, b: any) => any;
			"raiseVolume": (a: any, b: any) => any;
			"setRawVolume": (a: any, b: any) => any;
			"setVolume": (a: any, b: any) => any;
			"subBufferUnderrun": (a: any, b: any) => any;
			"subPlaybackInfo": (a: any, b: any) => any;
			"subPosition": (a: any, b: any) => any;
			"subRawVolume": (a: any, b: any) => any;
			"subVolume": (a: any, b: any) => any;
		};
		"_storageService": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & {
			"deleteExpiredItems": ReturnType<PlatformAutoGen["getOfflineAPI"]>["_storage"]["deleteExpiredItems"];
			"deleteUnlockedItems": ReturnType<PlatformAutoGen["getOfflineAPI"]>["_storage"]["deleteUnlockedItems"];
			"getCacheSizeLimit": ReturnType<PlatformAutoGen["getOfflineAPI"]>["_storage"]["getCacheSizeLimit"];
			"getFileRanges": ReturnType<PlatformAutoGen["getOfflineAPI"]>["_storage"]["getFileRanges"];
			"getStats": ReturnType<PlatformAutoGen["getOfflineAPI"]>["_storage"]["getStats"];
			"setCacheSizeLimit": ReturnType<PlatformAutoGen["getOfflineAPI"]>["_storage"]["setCacheSizeLimit"];
		};
		"_volume": number;
	} & {
		"emitVolume": () => any;
		"getCapabilities": () => {
			"canChangeVolume": boolean;
			"canGetFiles": boolean;
			"canGetPlaybackInfo": boolean;
			"puffinEnabled": boolean;
		};
		"getEvents": () => any;
		"getFiles": (a: any) => any;
		"getPlaybackInfo": () => Promise<any>;
		"getVolume": () => Promise<any>;
		"getVolumeInternal": () => any;
		"lowerVolume": () => Promise<any>;
		"raiseVolume": () => Promise<any>;
		"setVolume": (a: any) => any;
	};
	"getPlaybackFiltersAPI": () => {} & {
		"disableNormalizationOverride": () => undefined;
		"getDevices": () => Promise<any>;
		"getFilterState": () => Promise<any>;
		"getFiltersEvents": () => null;
		"getSavedDevices": () => Array<>;
		"isAvailable": () => boolean;
		"isNormalizationOverriden": () => boolean;
		"removeCurrentDevice": () => undefined;
		"setCurrentDevice": () => Promise<any>;
	};
	"getPlayerAPI": () => ReturnType<
		PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
	>["_playerApi"];
	"getPlaylistAPI": () => ReturnType<PlatformAutoGen["getCurationAPI"]>["_playlistAPI"];
	"getPlaylistPermissionsAPI": () => {
		"_builder": ReturnType<
			PlatformAutoGen["getAdManagers"]
		>["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
		"_client": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & {
			"clearToken": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["clearToken"];
			"contains": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["contains"];
			"getMembers": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["getMembers"];
			"modify": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["modify"];
			"requestLenses": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["requestLenses"];
			"resync": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["resync"];
			"setBasePermission": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["setBasePermission"];
			"setMemberPermission": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["setMemberPermission"];
			"setOfflineState": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["setOfflineState"];
			"setToken": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["setToken"];
			"signal": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["signal"];
			"signalItem": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["signalItem"];
			"subscribeToMembers": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["subscribeToMembers"];
		};
		"_events":
			& {
				"_emitter": {
					"_listeners": { "operation_complete": Array<{ "listener": (a: any) => any; "options": {} }> };
					"_metaListeners": { "add": {}; "remove": {} };
				} & {
					"_dispatchFromStore": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
					"addListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
					"addListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
					"createEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
					"emit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
					"emitAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
					"emitEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
					"emitEventAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
					"emitEventSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
					"emitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
					"on": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
					"once": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
					"proxyEmit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
					"proxyEmitAll": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
					"proxyEmitAllSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
					"proxyEmitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
					"removeAllListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
					"removeListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
				};
			}
			& { "emitOperationComplete": (a: any) => any; "emitOperationSync": (a: any) => any }
			& {
				"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
				"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
				"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
				"onAddListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onAddListener"];
				"onRemoveListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onRemoveListener"];
				"removeListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["removeListener"];
			};
	} & {
		"claimPermissions": (a: any, b: any) => any;
		"getCapabilities": () => {};
		"getEvents": () => any;
		"getMembers": (a: any) => any;
		"getPermissionGrant": (a: any, b: any) => any;
		"removeMember": (a: any, b: any) => any;
		"setBasePermission": (a: any, b: any) => any;
		"setMemberPermission": (a: any, b: any, c: any) => any;
		"subscribeToMembers": (a: any, b: any) => any;
	};
	"getPrivateSessionAPI": () => {
		"_scrobble": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & {
			"getIncognitoMode": (a: any, b: any) => any;
			"putIncognitoMode": (a: any, b: any) => any;
			"subIncognitoMode": (a: any, b: any) => any;
		};
	} & {
		"getCapabilities": () => { "isSupported": boolean };
		"setPrivateSession": (a: any) => any;
		"subscribeToPrivateSession": (a: any) => any;
	};
	"getProductStateAPI": () => {
		"_inFlightCache": { "_cache": Map<any, any>; "_ttl": null } & {
			"create": (a: any, b: any) => any;
			"deleteOnSettle": (a: any, b: any) => any;
			"set": (a: any, b: any) => any;
		} & {
			"cleanup": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["cleanup"];
			"clear": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["clear"];
			"create": ReturnType<PlatformAutoGen["getProductStateAPI"]>["_inFlightCache"]["create"];
			"delete": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["delete"];
			"entries": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["entries"];
			"get": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["get"];
			"getExpiry": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["getExpiry"];
			"has": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["has"];
			"isExpired": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["isExpired"];
			"peek": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["peek"];
			"set": ReturnType<PlatformAutoGen["getProductStateAPI"]>["_inFlightCache"]["set"];
		};
		"_subs": Set<any>;
		"cache": { "_cache": Map<any, any>; "_ttl": number } & {
			"cleanup": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["cleanup"];
			"clear": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["clear"];
			"create": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["create"];
			"delete": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["delete"];
			"entries": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["entries"];
			"get": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["get"];
			"getExpiry": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["getExpiry"];
			"has": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["has"];
			"isExpired": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["isExpired"];
			"peek": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["peek"];
			"set": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["set"];
		};
		"productStateApi": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & {
			"delOverridesValues": ReturnType<
				PlatformAutoGen["getOfflineAPI"]
			>["_events"]["_productState"]["delOverridesValues"];
			"getValues": ReturnType<PlatformAutoGen["getOfflineAPI"]>["_events"]["_productState"]["getValues"];
			"putOverridesValues": ReturnType<
				PlatformAutoGen["getOfflineAPI"]
			>["_events"]["_productState"]["putOverridesValues"];
			"putValues": ReturnType<PlatformAutoGen["getOfflineAPI"]>["_events"]["_productState"]["putValues"];
			"subValues": ReturnType<PlatformAutoGen["getOfflineAPI"]>["_events"]["_productState"]["subValues"];
		};
	} & {
		"getValues": () => Promise<any>;
		"mapKeys": (a: any) => any;
		"setValues": (a: any) => any;
		"subValues": (a: any) => any;
	};
	"getPubSubAPI": () => ReturnType<
		PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
	>["_pubSubApi"];
	"getRecentlyPlayedAPI": () =>
		& {
			"_cancellable": null;
			"_client": {
				"options": {};
				"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
			} & {
				"get": (a: any, b: any) => any;
				"hide": (a: any, b: any) => any;
				"hideTracks": (a: any, b: any) => any;
				"stream": (a: any, b: any) => any;
				"streamTracks": (a: any, b: any) => any;
				"tracks": (a: any, b: any) => any;
			};
			"_contexts": null;
			"_events":
				& {
					"_emitter": { "_listeners": {}; "_metaListeners": { "add": {}; "remove": {} } } & {
						"_dispatchFromStore": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
						"addListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
						"addListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
						"createEvent": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
						"emit": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
						"emitAndWait": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
						"emitEvent": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
						"emitEventAndWait": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
						"emitEventSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
						"emitSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
						"on": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
						"onAddListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
						"onRemoveListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
						"once": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
						"proxyEmit": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
						"proxyEmitAll": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
						"proxyEmitAllSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
						"proxyEmitSync": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
						"removeAllListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
						"removeListener": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
						"removeListeners": ReturnType<
							PlatformAutoGen["getAdManagers"]
						>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
					};
				}
				& {}
				& {
					"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
					"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
					"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["onRemoveListener"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_events"]["removeListener"];
				};
		}
		& { "getContexts": () => any; "getEvents": () => any }
		& {};
	"getRegistry": () => {
		"_map": Map<any, any>;
		"_tree": {} & {
			"addChild": () => undefined;
			"getChildren": () => Array<>;
			"getId": () => string;
			"getLabel": () => string;
			"getParent": () => null;
			"getType": () => number;
			"toDigraph": () => string;
		};
	} & {
		"getDependencyTree": () => any;
		"registerFactory": (a: any, b: any) => any;
		"registerImpl": (a: any, b: any) => any;
		"registerValue": (a: any, b: any) => any;
		"resolve": (a: any) => any;
		"resolveImpl": (a: any, b: any) => any;
	};
	"getRemoteConfiguration": () => { "accessListeners": Set<any>; "values": Map<any, any> } & {
		"getValue": ReturnType<
			PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
		>["_showApi"]["remote_configuration"]["getValue"];
		"toBuilder": ReturnType<
			PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
		>["_showApi"]["remote_configuration"]["toBuilder"];
		"toJSON": ReturnType<
			PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
		>["_showApi"]["remote_configuration"]["toJSON"];
	};
	"getRemoteConfigurationWithLocalOverrides": () => ReturnType<
		PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
	>["_showApi"]["remote_configuration"];
	"getReportAPI": () => {
		"_playlistAPI": ReturnType<PlatformAutoGen["getCurationAPI"]>["_playlistAPI"];
		"_productState": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & {
			"delOverridesValues": ReturnType<
				PlatformAutoGen["getOfflineAPI"]
			>["_events"]["_productState"]["delOverridesValues"];
			"getValues": ReturnType<PlatformAutoGen["getOfflineAPI"]>["_events"]["_productState"]["getValues"];
			"putOverridesValues": ReturnType<
				PlatformAutoGen["getOfflineAPI"]
			>["_events"]["_productState"]["putOverridesValues"];
			"putValues": ReturnType<PlatformAutoGen["getOfflineAPI"]>["_events"]["_productState"]["putValues"];
			"subValues": ReturnType<PlatformAutoGen["getOfflineAPI"]>["_events"]["_productState"]["subValues"];
		};
	} & {
		"canReportPlaylist": (a: any, b: any) => any;
		"getReportURL": (a: any, b: any) => any;
		"isURIReportable": (a: any) => any;
	};
	"getRequestBuilder": () => ReturnType<
		PlatformAutoGen["getAdManagers"]
	>["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
	"getRootlistAPI": () => {
		"_builder": ReturnType<
			PlatformAutoGen["getAdManagers"]
		>["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
		"_cache": Set<any>;
		"_decorationCache": { "_cache": Map<any, any>; "_ttl": number } & {
			"cleanup": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["cleanup"];
			"clear": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["clear"];
			"create": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["create"];
			"delete": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["delete"];
			"entries": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["entries"];
			"get": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["get"];
			"getExpiry": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["getExpiry"];
			"has": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["has"];
			"isExpired": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["isExpired"];
			"peek": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["peek"];
			"set": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["set"];
		};
		"_events":
			& {
				"_aggregator":
					& {
						"_additions": {} & {} & {} & {
							"clear": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["clear"];
							"delete": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["delete"];
							"entries": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["entries"];
							"forEach": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["forEach"];
							"get": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["get"];
							"has": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["has"];
							"keys": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["keys"];
							"set": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["set"];
							"size": number;
							"values": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["values"];
						};
						"_batch": {} & {} & {} & {
							"clear": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["clear"];
							"delete": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["delete"];
							"entries": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["entries"];
							"forEach": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["forEach"];
							"get": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["get"];
							"has": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["has"];
							"keys": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["keys"];
							"set": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["set"];
							"size": number;
							"values": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["values"];
						};
						"_deletions": {} & {} & {} & {
							"clear": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["clear"];
							"delete": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["delete"];
							"entries": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["entries"];
							"forEach": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["forEach"];
							"get": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["get"];
							"has": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["has"];
							"keys": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["keys"];
							"set": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["set"];
							"size": number;
							"values": ReturnType<
								PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
							>["_showApi"]["_events"]["_aggregator"]["_additions"]["values"];
						};
						"_onAdd": (a: any, b: any) => any;
						"_onBatch": (a: any) => any;
						"_onRemove": (a: any, b: any) => any;
						"_onUpdate": (a: any, b: any, c: any) => any;
						"_timeout": number;
						"_timeoutId": null;
					}
					& {}
					& {
						"getBatch": ReturnType<
							PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
						>["_showApi"]["_events"]["_aggregator"]["getBatch"];
						"onUpdate": ReturnType<
							PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
						>["_showApi"]["_events"]["_aggregator"]["onUpdate"];
						"scheduleUpdate": ReturnType<
							PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
						>["_showApi"]["_events"]["_aggregator"]["scheduleUpdate"];
						"subscribe": ReturnType<
							PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
						>["_showApi"]["_events"]["_aggregator"]["subscribe"];
						"unsubscribe": ReturnType<
							PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
						>["_showApi"]["_events"]["_aggregator"]["unsubscribe"];
					};
				"_contains": (a: any) => any;
				"_dataClient": {
					"options": {};
					"transport": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_audioObserver"]["transport"];
				} & {
					"contains": (a: any, b: any) => any;
					"get": (a: any, b: any) => any;
					"getOfflinePlaylistsContainingItem": (a: any, b: any) => any;
					"subscribe": (a: any, b: any) => any;
				};
				"_emitter": {
					"_listeners": {
						"operation": Array<{ "listener": (a: any) => any; "options": {} }>;
						"operation_complete": Array<{ "listener": (a: any) => any; "options": {} }>;
						"update": Array<{ "listener": () => undefined; "options": {} }>;
						"update_item": Array<{ "listener": (a: any) => any; "options": { "uri": string } }>;
					};
					"_metaListeners": {
						"add": {
							"update": Array<{ "listener": () => undefined; "options": {} }>;
							"update_item": Array<{ "listener": (a: any) => any; "options": {} }>;
						};
						"remove": {
							"update": Array<{ "listener": () => undefined; "options": {} }>;
							"update_item": Array<{ "listener": (a: any) => any; "options": {} }>;
						};
					};
				} & {
					"_dispatchFromStore": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
					"addListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
					"addListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
					"createEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
					"emit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
					"emitAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
					"emitEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
					"emitEventAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
					"emitEventSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
					"emitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
					"on": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
					"once": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
					"proxyEmit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
					"proxyEmitAll": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
					"proxyEmitAllSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
					"proxyEmitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
					"removeAllListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
					"removeListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
				};
				"_numListeners": number;
				"_subscription": null;
			}
			& {
				"onContainsItems": (a: any) => any;
				"onUpdate": () => Promise<any>;
				"subscribeToUpdates": () => any;
				"unsubscribeFromUpdates": () => any;
			}
			& {
				"emitAddComplete": (a: any, b: any) => any;
				"emitAddSync": (a: any, b: any, c: any) => any;
				"emitCreatePlaylistComplete": (a: any, b: any) => any;
				"emitCreatePlaylistSync": (a: any, b: any, c: any) => any;
				"emitMoveComplete": (a: any, b: any) => any;
				"emitMoveSync": (a: any, b: any) => any;
				"emitRemoveComplete": (a: any) => any;
				"emitRemoveSync": (a: any) => any;
				"emitUpdateItems": (a: any, b: any) => any;
			}
			& {}
			& {
				"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
				"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
				"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
				"onAddListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onAddListener"];
				"onRemoveListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onRemoveListener"];
				"removeListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["removeListener"];
			};
		"_playlistDataClient": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & {
			"find": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_playlistAPI"]["_events"]["_dataClient"]["find"];
			"get": ReturnType<PlatformAutoGen["getCurationAPI"]>["_playlistAPI"]["_events"]["_dataClient"]["get"];
			"multiGet": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_playlistAPI"]["_events"]["_dataClient"]["multiGet"];
			"subscribe": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_playlistAPI"]["_events"]["_dataClient"]["subscribe"];
		};
		"_rootlistDataClient": ReturnType<PlatformAutoGen["getRootlistAPI"]>["_events"]["_dataClient"];
		"_rootlistModificationClient": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & { "modify": (a: any, b: any) => any };
	} & {
		"add": (a: any, b: any) => any;
		"applyModification": (a: any) => any;
		"contains": (a: any) => any;
		"containsSync": (a: any) => any;
		"createFolder": (a: any, b: any) => any;
		"createPlaylist": (a: any, b: any, c: any) => any;
		"getCapabilities": () => { "canFilter": boolean; "canModifyOffline": boolean; "canSort": boolean };
		"getContents": (a: any) => any;
		"getEvents": () => any;
		"getMetadata": () => Promise<any>;
		"getPublishedState": (a: any) => any;
		"move": (a: any, b: any, c: any) => any;
		"moveFolder": (a: any, b: any) => any;
		"onUpdateItems": (a: any, b: any) => any;
		"remove": (a: any) => any;
		"removeFolder": (a: any) => any;
		"renameFolder": (a: any, b: any) => any;
		"setPublishedState": (a: any, b: any) => any;
	};
	"getSEOExperiments": () => {};
	"getSegmentsAPI": () => {
		"_client": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & { "getDisplaySegments": (a: any, b: any) => any };
	} & {
		"getArtists": () => Promise<any>;
		"getCapabilities": () => { "isSupported": boolean };
		"getSegments": (a: any, b: any, c: any) => any;
	};
	"getServiceWorkerMessenger": () => Promise<any>;
	"getSession": () => {
		"accessToken": string;
		"accessTokenExpirationTimestampMs": number;
		"isAnonymous": boolean;
		"locale": string;
		"market": string;
		"valid": boolean;
	};
	"getSettingsAPI": () => {
		"autoPlay":
			& {
				"autoPlaySupported":
					& {
						"deserializeValue": (a: any) => any;
						"getValue": () => Promise<any>;
						"identifier": string;
						"prefsApi": {
							"options": {};
							"transport": ReturnType<
								PlatformAutoGen["getAudioOutputDevicesAPI"]
							>["_audioObserver"]["transport"];
						} & {
							"create": ReturnType<PlatformAutoGen["getEqualizerAPI"]>["prefs"]["create"];
							"get": ReturnType<PlatformAutoGen["getEqualizerAPI"]>["prefs"]["get"];
							"getAll": ReturnType<PlatformAutoGen["getEqualizerAPI"]>["prefs"]["getAll"];
							"set": ReturnType<PlatformAutoGen["getEqualizerAPI"]>["prefs"]["set"];
							"sub": ReturnType<PlatformAutoGen["getEqualizerAPI"]>["prefs"]["sub"];
							"subAll": ReturnType<PlatformAutoGen["getEqualizerAPI"]>["prefs"]["subAll"];
						};
						"subValue": (a: any) => any;
						"subs": Set<any>;
						"subscription": null;
						"value": null;
					}
					& {}
					& {
						"getValue": ReturnType<
							PlatformAutoGen["getSettingsAPI"]
						>["autoPlay"]["autoPlaySupported"]["getValue"];
						"subValue": ReturnType<
							PlatformAutoGen["getSettingsAPI"]
						>["autoPlay"]["autoPlaySupported"]["subValue"];
					};
				"deserialize": (a: any) => any;
				"getValue": () => Promise<any>;
				"identifier": string;
				"key": string;
				"productStateApi": ReturnType<PlatformAutoGen["getProductStateAPI"]>;
				"serialize": (a: any) => any;
				"setValue": (a: any) => any;
				"subValue": (a: any) => any;
				"subs": Set<any>;
				"subscription": null;
				"value": null;
			}
			& { "getValue": ReturnType<PlatformAutoGen["getSettingsAPI"]>["autoPlay"]["getValue"] }
			& { "setValue": ReturnType<PlatformAutoGen["getSettingsAPI"]>["autoPlay"]["setValue"] }
			& {
				"getValue": ReturnType<PlatformAutoGen["getSettingsAPI"]>["autoPlay"]["getValue"];
				"subValue": ReturnType<PlatformAutoGen["getSettingsAPI"]>["autoPlay"]["subValue"];
			};
		"language":
			& {
				"deserializeValue": (a: any) => any;
				"getValue": () => Promise<any>;
				"identifier": string;
				"key": string;
				"prefsApi": ReturnType<
					PlatformAutoGen["getSettingsAPI"]
				>["autoPlay"]["autoPlaySupported"]["prefsApi"];
				"serializeValue": (a: any) => any;
				"setValue": (a: any) => any;
				"subValue": (a: any) => any;
				"subs": Set<any>;
				"subscription": null;
				"value": null;
			}
			& {}
			& { "setValue": ReturnType<PlatformAutoGen["getSettingsAPI"]>["language"]["setValue"] }
			& {
				"getValue": ReturnType<PlatformAutoGen["getSettingsAPI"]>["language"]["getValue"];
				"subValue": ReturnType<PlatformAutoGen["getSettingsAPI"]>["language"]["subValue"];
			};
		"quality": {
			"autoAdjustQuality":
				& {
					"deserializeValue": (a: any) => any;
					"getValue": () => Promise<any>;
					"identifier": string;
					"key": string;
					"prefsApi": ReturnType<
						PlatformAutoGen["getSettingsAPI"]
					>["autoPlay"]["autoPlaySupported"]["prefsApi"];
					"serializeValue": (a: any) => any;
					"setValue": (a: any) => any;
					"subValue": (a: any) => any;
					"subs": Set<any>;
					"subscription": null;
					"value": null;
				}
				& {}
				& {
					"setValue": ReturnType<
						PlatformAutoGen["getSettingsAPI"]
					>["quality"]["autoAdjustQuality"]["setValue"];
				}
				& {
					"getValue": ReturnType<
						PlatformAutoGen["getSettingsAPI"]
					>["quality"]["autoAdjustQuality"]["getValue"];
					"subValue": ReturnType<
						PlatformAutoGen["getSettingsAPI"]
					>["quality"]["autoAdjustQuality"]["subValue"];
				};
			"downloadAudioQuality": {
				"deserializeValue": (a: any) => any;
				"getValue": () => Promise<any>;
				"identifier": string;
				"key": string;
				"maxSupportedQuality": {
					"clampAudioQuality": (a: any) => any;
					"deserialize": (a: any) => any;
					"getValue": () => Promise<any>;
					"identifier": string;
					"key": string;
					"productStateApi": ReturnType<PlatformAutoGen["getProductStateAPI"]>;
					"subValue": (a: any) => any;
					"subs": Set<any>;
					"subscription": null;
					"value": null;
				} & {
					"clampAudioQuality": ReturnType<
						PlatformAutoGen["getSettingsAPI"]
					>["quality"]["downloadAudioQuality"]["maxSupportedQuality"]["clampAudioQuality"];
				} & {
					"getValue": ReturnType<
						PlatformAutoGen["getSettingsAPI"]
					>["quality"]["downloadAudioQuality"]["maxSupportedQuality"]["getValue"];
					"subValue": ReturnType<
						PlatformAutoGen["getSettingsAPI"]
					>["quality"]["downloadAudioQuality"]["maxSupportedQuality"]["subValue"];
				};
				"prefsApi": ReturnType<
					PlatformAutoGen["getSettingsAPI"]
				>["autoPlay"]["autoPlaySupported"]["prefsApi"];
				"serializeValue": (a: any) => any;
				"setValue": (a: any) => any;
				"subValue": (a: any) => any;
				"subs": Set<any>;
				"subscription": null;
				"value": null;
			} & {
				"setValue": ReturnType<
					PlatformAutoGen["getSettingsAPI"]
				>["quality"]["downloadAudioQuality"]["setValue"];
			} & {
				"setValue": ReturnType<
					PlatformAutoGen["getSettingsAPI"]
				>["quality"]["downloadAudioQuality"]["setValue"];
			} & {
				"getValue": ReturnType<
					PlatformAutoGen["getSettingsAPI"]
				>["quality"]["downloadAudioQuality"]["getValue"];
				"subValue": ReturnType<
					PlatformAutoGen["getSettingsAPI"]
				>["quality"]["downloadAudioQuality"]["subValue"];
			};
			"maxSupportedQuality": ReturnType<
				PlatformAutoGen["getSettingsAPI"]
			>["quality"]["downloadAudioQuality"]["maxSupportedQuality"];
			"normalizeVolume":
				& {
					"deserializeValue": (a: any) => any;
					"getValue": () => Promise<any>;
					"identifier": string;
					"key": string;
					"prefsApi": ReturnType<
						PlatformAutoGen["getSettingsAPI"]
					>["autoPlay"]["autoPlaySupported"]["prefsApi"];
					"serializeValue": (a: any) => any;
					"setValue": (a: any) => any;
					"subValue": (a: any) => any;
					"subs": Set<any>;
					"subscription": null;
					"value": null;
				}
				& {}
				& {
					"setValue": ReturnType<
						PlatformAutoGen["getSettingsAPI"]
					>["quality"]["normalizeVolume"]["setValue"];
				}
				& {
					"getValue": ReturnType<
						PlatformAutoGen["getSettingsAPI"]
					>["quality"]["normalizeVolume"]["getValue"];
					"subValue": ReturnType<
						PlatformAutoGen["getSettingsAPI"]
					>["quality"]["normalizeVolume"]["subValue"];
				};
			"playbackService": {
				"options": {};
				"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
			} & {
				"duck": ReturnType<PlatformAutoGen["getPlaybackAPI"]>["_playbackService"]["duck"];
				"getFiles": ReturnType<PlatformAutoGen["getPlaybackAPI"]>["_playbackService"]["getFiles"];
				"getFormats": ReturnType<PlatformAutoGen["getPlaybackAPI"]>["_playbackService"]["getFormats"];
				"getPlaybackInfo": ReturnType<
					PlatformAutoGen["getPlaybackAPI"]
				>["_playbackService"]["getPlaybackInfo"];
				"getRawVolume": ReturnType<PlatformAutoGen["getPlaybackAPI"]>["_playbackService"]["getRawVolume"];
				"getVolume": ReturnType<PlatformAutoGen["getPlaybackAPI"]>["_playbackService"]["getVolume"];
				"lowerVolume": ReturnType<PlatformAutoGen["getPlaybackAPI"]>["_playbackService"]["lowerVolume"];
				"raiseVolume": ReturnType<PlatformAutoGen["getPlaybackAPI"]>["_playbackService"]["raiseVolume"];
				"setRawVolume": ReturnType<PlatformAutoGen["getPlaybackAPI"]>["_playbackService"]["setRawVolume"];
				"setVolume": ReturnType<PlatformAutoGen["getPlaybackAPI"]>["_playbackService"]["setVolume"];
				"subBufferUnderrun": ReturnType<
					PlatformAutoGen["getPlaybackAPI"]
				>["_playbackService"]["subBufferUnderrun"];
				"subPlaybackInfo": ReturnType<
					PlatformAutoGen["getPlaybackAPI"]
				>["_playbackService"]["subPlaybackInfo"];
				"subPosition": ReturnType<PlatformAutoGen["getPlaybackAPI"]>["_playbackService"]["subPosition"];
				"subRawVolume": ReturnType<PlatformAutoGen["getPlaybackAPI"]>["_playbackService"]["subRawVolume"];
				"subVolume": ReturnType<PlatformAutoGen["getPlaybackAPI"]>["_playbackService"]["subVolume"];
			};
			"remoteQuality": {
				"callbacks": Set<any>;
				"connectService": {
					"options": {};
					"transport": ReturnType<
						PlatformAutoGen["getAudioOutputDevicesAPI"]
					>["_audioObserver"]["transport"];
				} & {
					"becomeInactive": ReturnType<
						PlatformAutoGen["getConnectAPI"]
					>["connectServiceClient"]["becomeInactive"];
					"cancelTransfer": ReturnType<
						PlatformAutoGen["getConnectAPI"]
					>["connectServiceClient"]["cancelTransfer"];
					"forceDiscover": ReturnType<
						PlatformAutoGen["getConnectAPI"]
					>["connectServiceClient"]["forceDiscover"];
					"getDebugLevel": ReturnType<
						PlatformAutoGen["getConnectAPI"]
					>["connectServiceClient"]["getDebugLevel"];
					"getDeviceSettings": ReturnType<
						PlatformAutoGen["getConnectAPI"]
					>["connectServiceClient"]["getDeviceSettings"];
					"installSpotify": ReturnType<
						PlatformAutoGen["getConnectAPI"]
					>["connectServiceClient"]["installSpotify"];
					"logout": ReturnType<PlatformAutoGen["getConnectAPI"]>["connectServiceClient"]["logout"];
					"notifyAudioRouteChanged": ReturnType<
						PlatformAutoGen["getConnectAPI"]
					>["connectServiceClient"]["notifyAudioRouteChanged"];
					"performDiscovery": ReturnType<
						PlatformAutoGen["getConnectAPI"]
					>["connectServiceClient"]["performDiscovery"];
					"pickerOpened": ReturnType<
						PlatformAutoGen["getConnectAPI"]
					>["connectServiceClient"]["pickerOpened"];
					"pull": ReturnType<PlatformAutoGen["getConnectAPI"]>["connectServiceClient"]["pull"];
					"refreshCluster": ReturnType<
						PlatformAutoGen["getConnectAPI"]
					>["connectServiceClient"]["refreshCluster"];
					"rename": ReturnType<PlatformAutoGen["getConnectAPI"]>["connectServiceClient"]["rename"];
					"sendCommand": ReturnType<
						PlatformAutoGen["getConnectAPI"]
					>["connectServiceClient"]["sendCommand"];
					"setDebugLevel": ReturnType<
						PlatformAutoGen["getConnectAPI"]
					>["connectServiceClient"]["setDebugLevel"];
					"setDeviceStreamQuality": ReturnType<
						PlatformAutoGen["getConnectAPI"]
					>["connectServiceClient"]["setDeviceStreamQuality"];
					"setPreferredZeroconf": ReturnType<
						PlatformAutoGen["getConnectAPI"]
					>["connectServiceClient"]["setPreferredZeroconf"];
					"startDiscovery": ReturnType<
						PlatformAutoGen["getConnectAPI"]
					>["connectServiceClient"]["startDiscovery"];
					"state": ReturnType<PlatformAutoGen["getConnectAPI"]>["connectServiceClient"]["state"];
					"transfer": ReturnType<PlatformAutoGen["getConnectAPI"]>["connectServiceClient"]["transfer"];
					"wakeSleepingClusterDevices": ReturnType<
						PlatformAutoGen["getConnectAPI"]
					>["connectServiceClient"]["wakeSleepingClusterDevices"];
				};
				"key": string;
				"stateSubscription": null;
			} & {
				"getActiveDeviceId": () => Promise<any>;
				"getValue": (a: any) => any;
				"setValue": (a: any) => any;
				"subValue": (a: any) => any;
			};
			"streamingQuality": {
				"deserializeValue": (a: any) => any;
				"getValue": () => Promise<any>;
				"identifier": string;
				"key": string;
				"maxSupportedQuality": ReturnType<
					PlatformAutoGen["getSettingsAPI"]
				>["quality"]["downloadAudioQuality"]["maxSupportedQuality"];
				"prefsApi": ReturnType<
					PlatformAutoGen["getSettingsAPI"]
				>["autoPlay"]["autoPlaySupported"]["prefsApi"];
				"serializeValue": (a: any) => any;
				"setValue": (a: any) => any;
				"subValue": (a: any) => any;
				"subs": Set<any>;
				"subscription": null;
				"value": null;
			} & {
				"setValue": ReturnType<
					PlatformAutoGen["getSettingsAPI"]
				>["quality"]["streamingQuality"]["setValue"];
			} & {
				"setValue": ReturnType<
					PlatformAutoGen["getSettingsAPI"]
				>["quality"]["streamingQuality"]["setValue"];
			} & {
				"getValue": ReturnType<
					PlatformAutoGen["getSettingsAPI"]
				>["quality"]["streamingQuality"]["getValue"];
				"subValue": ReturnType<
					PlatformAutoGen["getSettingsAPI"]
				>["quality"]["streamingQuality"]["subValue"];
			};
			"volumeLevel":
				& {
					"deserializeValue": (a: any) => any;
					"getValue": () => Promise<any>;
					"identifier": string;
					"key": string;
					"prefsApi": ReturnType<
						PlatformAutoGen["getSettingsAPI"]
					>["autoPlay"]["autoPlaySupported"]["prefsApi"];
					"serializeValue": (a: any) => any;
					"setValue": (a: any) => any;
					"subValue": (a: any) => any;
					"subs": Set<any>;
					"subscription": null;
					"value": null;
				}
				& {}
				& {
					"setValue": ReturnType<PlatformAutoGen["getSettingsAPI"]>["quality"]["volumeLevel"]["setValue"];
				}
				& {
					"getValue": ReturnType<PlatformAutoGen["getSettingsAPI"]>["quality"]["volumeLevel"]["getValue"];
					"subValue": ReturnType<PlatformAutoGen["getSettingsAPI"]>["quality"]["volumeLevel"]["subValue"];
				};
		} & { "getFormats": () => Promise<any> };
		"viewportZoom":
			& {
				"deserializeValue": (a: any) => any;
				"getValue": () => Promise<any>;
				"identifier": string;
				"key": string;
				"prefsApi": ReturnType<
					PlatformAutoGen["getSettingsAPI"]
				>["autoPlay"]["autoPlaySupported"]["prefsApi"];
				"subValue": (a: any) => any;
				"subs": Set<any>;
				"subscription": null;
				"value": null;
			}
			& {}
			& {
				"getValue": ReturnType<PlatformAutoGen["getSettingsAPI"]>["viewportZoom"]["getValue"];
				"subValue": ReturnType<PlatformAutoGen["getSettingsAPI"]>["viewportZoom"]["subValue"];
			};
	} & {};
	"getShowAPI": () => ReturnType<PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]>["_showApi"];
	"getShuffleAPI": () => {
		"_contextualShuffle": ReturnType<
			PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
		>["_playerApi"]["_contextualShuffle"];
		"_events": {
			"_emitter": {
				"_listeners": {
					"update": Array<{ "listener": (a: any) => any; "options": {} }>;
					"update_complete": Array<{ "listener": (a: any) => any; "options": {} }>;
					"update_error": Array<{ "listener": () => undefined; "options": {} }>;
				};
				"_metaListeners": { "add": {}; "remove": {} };
			} & {
				"_dispatchFromStore": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
				"addListener": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
				"addListeners": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
				"createEvent": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
				"emit": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
				"emitAndWait": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
				"emitEvent": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
				"emitEventAndWait": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
				"emitEventSync": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
				"emitSync": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
				"on": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
				"onAddListener": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
				"onRemoveListener": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
				"once": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
				"proxyEmit": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
				"proxyEmitAll": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
				"proxyEmitAllSync": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
				"proxyEmitSync": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
				"removeAllListeners": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
				"removeListener": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
				"removeListeners": ReturnType<
					PlatformAutoGen["getAdManagers"]
				>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
			};
		} & {
			"emitUpdateShuffleModeCompleteSync": (a: any, b: any) => any;
			"emitUpdateShuffleModeErrorSync": (a: any, b: any) => any;
			"emitUpdateShuffleModeSync": (a: any, b: any) => any;
		} & {
			"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
			"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
			"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
			"onAddListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["onAddListener"];
			"onRemoveListener": ReturnType<
				PlatformAutoGen["getAudioOutputDevicesAPI"]
			>["_events"]["onRemoveListener"];
			"removeListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["removeListener"];
		};
		"_history": ReturnType<PlatformAutoGen["getAdManagers"]>["adStateReporter"]["history"];
		"_isDsaEnabled": boolean;
		"_player": ReturnType<PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]>["_playerApi"];
		"_playlistDataServiceClient": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & {
			"find": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_playlistAPI"]["_events"]["_dataClient"]["find"];
			"get": ReturnType<PlatformAutoGen["getCurationAPI"]>["_playlistAPI"]["_events"]["_dataClient"]["get"];
			"multiGet": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_playlistAPI"]["_events"]["_dataClient"]["multiGet"];
			"subscribe": ReturnType<
				PlatformAutoGen["getCurationAPI"]
			>["_playlistAPI"]["_events"]["_dataClient"]["subscribe"];
		};
		"_playlistServiceClient": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & {
			"clearToken": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["clearToken"];
			"contains": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["contains"];
			"getMembers": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["getMembers"];
			"modify": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["modify"];
			"requestLenses": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["requestLenses"];
			"resync": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["resync"];
			"setBasePermission": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["setBasePermission"];
			"setMemberPermission": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["setMemberPermission"];
			"setOfflineState": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["setOfflineState"];
			"setToken": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["setToken"];
			"signal": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["signal"];
			"signalItem": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["signalItem"];
			"subscribeToMembers": ReturnType<
				PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
			>["_playerApi"]["_playlistResyncerAPI"]["_playlistServiceClient"]["subscribeToMembers"];
		};
		"_productStateApi": ReturnType<PlatformAutoGen["getProductStateAPI"]>;
		"_smartShuffleEligibility": ReturnType<
			PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
		>["_playerApi"]["_smartShuffleEligibility"];
		"isNewShuffleModeOrderEnabled": boolean;
		"isSmartShuffleEnabled": boolean;
	} & {
		"_syncShuffle": (a: any, b: any) => any;
		"getAvailableShuffleModes": (a: any) => any;
		"getEvents": () => any;
		"getShuffle": (a: any) => any;
		"setShuffle": (a: any, b: any) => any;
	};
	"getSingAlongAPI": () => {
		"karaokeServiceClient": {
			"options": {};
			"transport": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_audioObserver"]["transport"];
		} & {
			"getStatus": (a: any, b: any) => any;
			"postStatus": (a: any, b: any) => any;
			"postVocalVolume": (a: any, b: any) => any;
			"subscribeToEvents": (a: any, b: any) => any;
		};
	} & {
		"getCapabilities": () => { "isSupported": boolean };
		"getStatus": () => Promise<any>;
		"setStatus": (a: any) => any;
		"setVocalVolume": (a: any) => any;
	};
	"getSocialConnectAPI": () => {
		"_fetchCurrentSessionInFlightCache": { "_cache": Map<any, any>; "_ttl": null } & {
			"create": ReturnType<PlatformAutoGen["getProductStateAPI"]>["_inFlightCache"]["create"];
			"deleteOnSettle": ReturnType<
				PlatformAutoGen["getProductStateAPI"]
			>["_inFlightCache"]["deleteOnSettle"];
			"set": ReturnType<PlatformAutoGen["getProductStateAPI"]>["_inFlightCache"]["set"];
		} & {
			"cleanup": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["cleanup"];
			"clear": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["clear"];
			"create": ReturnType<PlatformAutoGen["getProductStateAPI"]>["_inFlightCache"]["create"];
			"delete": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["delete"];
			"entries": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["entries"];
			"get": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["get"];
			"getExpiry": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["getExpiry"];
			"has": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["has"];
			"isExpired": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["isExpired"];
			"peek": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["peek"];
			"set": ReturnType<PlatformAutoGen["getProductStateAPI"]>["_inFlightCache"]["set"];
		};
		"currentSession": null;
		"events":
			& {
				"_emitter": {
					"_listeners": {
						"joined": Array<{ "listener": (a: any) => any; "options": {} }>;
						"left": Array<{ "listener": (a: any) => any; "options": {} }>;
						"session_ended": Array<{ "listener": (a: any) => any; "options": {} }>;
						"session_message": Array<{ "listener": (a: any) => any; "options": {} }>;
						"update": Array<{ "listener": (a: any) => any; "options": {} }>;
					};
					"_metaListeners": { "add": {}; "remove": {} };
				} & {
					"_dispatchFromStore": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
					"addListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
					"addListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
					"createEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
					"emit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
					"emitAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
					"emitEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
					"emitEventAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
					"emitEventSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
					"emitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
					"on": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
					"once": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
					"proxyEmit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
					"proxyEmitAll": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
					"proxyEmitAllSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
					"proxyEmitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
					"removeAllListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
					"removeListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
				};
			}
			& {}
			& {
				"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
				"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
				"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
				"onAddListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onAddListener"];
				"onRemoveListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onRemoveListener"];
				"removeListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["removeListener"];
			};
		"serviceEvents":
			& {
				"_emitter": {
					"_listeners": {
						"SESSION_MESSAGE": Array<{ "listener": (a: any) => any; "options": {} }>;
						"SESSION_UPDATE": Array<{ "listener": (a: any) => any; "options": {} }>;
					};
					"_metaListeners": {
						"add": {
							"SESSION_MESSAGE": Array<{ "listener": () => undefined; "options": {} }>;
							"SESSION_UPDATE": Array<{ "listener": () => undefined; "options": {} }>;
						};
						"remove": {
							"SESSION_MESSAGE": Array<{ "listener": () => undefined; "options": {} }>;
							"SESSION_UPDATE": Array<{ "listener": () => undefined; "options": {} }>;
						};
					};
				} & {
					"_dispatchFromStore": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["_dispatchFromStore"];
					"addListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListener"];
					"addListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["addListeners"];
					"createEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["createEvent"];
					"emit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emit"];
					"emitAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitAndWait"];
					"emitEvent": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEvent"];
					"emitEventAndWait": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventAndWait"];
					"emitEventSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitEventSync"];
					"emitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["emitSync"];
					"on": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["on"];
					"onAddListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onAddListener"];
					"onRemoveListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["onRemoveListener"];
					"once": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["once"];
					"proxyEmit": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmit"];
					"proxyEmitAll": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAll"];
					"proxyEmitAllSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitAllSync"];
					"proxyEmitSync": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["proxyEmitSync"];
					"removeAllListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeAllListeners"];
					"removeListener": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListener"];
					"removeListeners": ReturnType<
						PlatformAutoGen["getAdManagers"]
					>["home"]["logger"]["eventSender"]["transport"]["_connectionObserver"]["removeListeners"];
				};
				"_message_subscription": { "cancel": () => undefined };
				"_pubSubAPI": ReturnType<
					PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
				>["_pubSubApi"];
				"_update_subscription": { "cancel": () => undefined };
				"numMessageListeners": number;
				"numUpdateListeners": number;
			}
			& {
				"onSessionMessage": (a: any) => any;
				"onSessionUpdate": (a: any) => any;
				"subscribeToMessages": () => any;
				"subscribeToUpdates": () => any;
				"unsubscribeToMessages": () => any;
				"unsubscribeToUpdates": () => any;
			}
			& {}
			& {
				"addListener": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["addListener"];
				"emit": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emit"];
				"emitSync": ReturnType<PlatformAutoGen["getAudioOutputDevicesAPI"]>["_events"]["emitSync"];
				"onAddListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onAddListener"];
				"onRemoveListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["onRemoveListener"];
				"removeListener": ReturnType<
					PlatformAutoGen["getAudioOutputDevicesAPI"]
				>["_events"]["removeListener"];
			};
		"shortLinkCache": { "_cache": Map<any, any>; "_ttl": null } & {
			"cleanup": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["cleanup"];
			"clear": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["clear"];
			"create": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["create"];
			"delete": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["delete"];
			"entries": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["entries"];
			"get": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["get"];
			"getExpiry": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["getExpiry"];
			"has": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["has"];
			"isExpired": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["isExpired"];
			"peek": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["peek"];
			"set": ReturnType<PlatformAutoGen["getCurationAPI"]>["cache"]["set"];
		};
		"socialConnectConfig": string;
		"socialConnectProductState": {
			"isJamFreeEnabled": boolean;
			"isJamPremiumEnabled": boolean;
			"listeners": Set<any>;
			"productStateApi": ReturnType<PlatformAutoGen["getProductStateAPI"]>;
		} & { "addListener": (a: any) => any; "getJamExperience": () => any };
		"socialConnectServiceClient": {
			"_requestBuilder": ReturnType<
				PlatformAutoGen["getAdManagers"]
			>["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
			"_transport": ReturnType<
				PlatformAutoGen["getAdManagers"]
			>["home"]["logger"]["eventSender"]["transport"];
		} & {
			"createSession": () => Promise<any>;
			"deleteSession": (a: any) => any;
			"fetchCurrentSession": () => Promise<any>;
			"getSessionInfo": (a: any) => any;
			"joinSession": (a: any, b: any, c: any) => any;
			"kickAllParticipants": (a: any) => any;
			"leaveSession": (a: any) => any;
			"onConnected": (a: any) => any;
			"removeSessionMember": (a: any, b: any) => any;
			"setParticipantVolumeControl": (a: any) => any;
			"setQueueOnlyMode": (a: any) => any;
		};
		"urlDispenserServiceClient": {
			"_builder": ReturnType<
				PlatformAutoGen["getAdManagers"]
			>["hpto"]["hptoApi"]["nativeHptoApi"]["spotifyTransport"];
		} & { "getShortUrl": (a: any, b: any) => any };
	} & {
		"addJamExperienceListener": (a: any) => any;
		"cleanupSession": () => any;
		"createSession": () => Promise<any>;
		"deleteSession": () => Promise<any>;
		"emitSessionEnded": (a: any) => any;
		"fetchCurrentSession": () => Promise<any>;
		"getCurrentSession": () => any;
		"getEnabled": () => any;
		"getEvents": () => any;
		"getJamExperience": () => any;
		"getSessionInfo": (a: any) => any;
		"getShortInviteLink": (a: any, b: any) => any;
		"handleSessionMessage": (a: any) => any;
		"handleSessionResponse": (a: any) => any;
		"handleSessionUpdate": (a: any) => any;
		"isSessionNewer": (a: any) => any;
		"joinSession": (a: any, b: any, c: any) => any;
		"kickAllParticipants": (a: any) => any;
		"leaveSession": () => Promise<any>;
		"maybeEmitLeaveOrJoin": (a: any, b: any) => any;
		"removeSessionMember": (a: any) => any;
		"setCurrentSession": (a: any) => any;
		"setParticipantVolumeControl": (a: any) => any;
		"setQueueOnlyMode": (a: any) => any;
	};
	"getTranslations": () => {
		"a11y.externalLink": string;
		"about.copyright": string;
		"about.title_label": string;
		"about.upgrade.downloaded": string;
		"about.upgrade.downloading": string;
		"about.upgrade.pending": string;
		"about.upgrade.pending_link": string;
		"about.upgrade.restart_link": string;
		"acq.artist.about.attribution": string;
		"action-trigger.available-in-app-only": string;
		"action-trigger.button.get-app": string;
		"action-trigger.button.not-now": string;
		"action-trigger.create-playlist": string;
		"action-trigger.listen-mixed-media-episode": string;
		"action-trigger.log-in-follow-profile": string;
		"action-trigger.log-in-like-action": string;
		"action-trigger.log-in-or-sign-up": string;
		"action-trigger.logged-out": string;
		"action-trigger.logged-out-continue": string;
		"action-trigger.logged-out-full-track": string;
		"action-trigger.logged-out-queue": string;
		"action-trigger.logged-out-radio": string;
		"action-trigger.logged-out-synced": string;
		"action-trigger.login-playlist": string;
		"action-trigger.save-album": string;
		"action-trigger.save-library": string;
		"ad-formats.ad-feedback.dislike": string;
		"ad-formats.ad-feedback.dislike.do-not-like": string;
		"ad-formats.ad-feedback.dislike.not-relevant": string;
		"ad-formats.ad-feedback.dislike.offensive-content": string;
		"ad-formats.ad-feedback.dislike.too-often": string;
		"ad-formats.ad-feedback.dislike.unpleasant-content": string;
		"ad-formats.ad-feedback.like": string;
		"ad-formats.ad-feedback.like.discovered-new": string;
		"ad-formats.ad-feedback.like.enjoyable-content": string;
		"ad-formats.ad-feedback.like.interested-in-brand": string;
		"ad-formats.ad-feedback.like.interested-in-product": string;
		"ad-formats.ad-feedback.like.relevant": string;
		"ad-formats.advertisement": string;
		"ad-formats.context-menu.not-interested": string;
		"ad-formats.dismissAd": string;
		"ad-formats.dsa.aboutThisAd": string;
		"ad-formats.dsa.modal.aboutTailoredAds": string;
		"ad-formats.dsa.modal.adBasedInfoExplanation": string;
		"ad-formats.dsa.modal.adRelevancyAction": string;
		"ad-formats.dsa.modal.editProfile": string;
		"ad-formats.dsa.modal.otherInfo": string;
		"ad-formats.dsa.modal.privacySetting": string;
		"ad-formats.dsa.modal.profileInfo": string;
		"ad-formats.dsa.modal.tailoredAds": string;
		"ad-formats.dsa.modal.targeting.age": string;
		"ad-formats.dsa.modal.targeting.gender": string;
		"ad-formats.dsa.modal.targeting.interests": string;
		"ad-formats.dsa.modal.targeting.location": string;
		"ad-formats.dsa.modal.targeting.unknown": string;
		"ad-formats.exclusive": string;
		"ad-formats.hideAnnouncements": string;
		"ad-formats.learnMore": string;
		"ad-formats.npv.header.music-context": string;
		"ad-formats.npv.header.podcast-context": string;
		"ad-formats.playTrack": string;
		"ad-formats.presentedBy": string;
		"ad-formats.remove": string;
		"ad-formats.save": string;
		"ad-formats.skippable_ads.skip_countdown": string;
		"ad-formats.sponsored": string;
		"ad-formats.video-ad-overlay.cta-button": string;
		"addToPlaylist-icon.label": string;
		"age.restriction.confirmAge": string;
		"age.restriction.continue": string;
		"age.restriction.explicitContent": string;
		"age.restriction.nineeteen-badge": string;
		"album": string;
		"album-page.more-by-artist": string;
		"album-page.more-releases": { "one": string; "other": string };
		"album.page-title": string;
		"already_have_account": string;
		"artist": string;
		"artist-page-discography.all": string;
		"artist-page.appearson.seo.title": string;
		"artist-page.artist-playlists": string;
		"artist-page.artist-playlists.seo.title": string;
		"artist-page.artists-pick": string;
		"artist-page.discography": string;
		"artist-page.discography.seo.title": string;
		"artist-page.discovered-on": string;
		"artist-page.fansalsolike": string;
		"artist-page.fansalsolike.seo.title": string;
		"artist-page.featuring": string;
		"artist-page.featuring.seo.title": string;
		"artist-page.how-many-listeners": { "one": string; "other": string };
		"artist-page.liked-songs-by-artist-title": string;
		"artist-page.merch": string;
		"artist-page.popular": string;
		"artist-page.saved-by-artist": string;
		"artist-page.saved-header": string;
		"artist-page.saved-tracks-amount": { "one": string; "other": string };
		"artist-page.show-discography": string;
		"artist-page.tracks.seemore": string;
		"artist-page.tracks.showless": string;
		"artist-page.where-people-listen-from": string;
		"artist-page.world_rank": string;
		"artist.about": string;
		"artist.albums": string;
		"artist.appears-on": string;
		"artist.compilations": string;
		"artist.concerts.artist_tour_dates": string;
		"artist.concerts.error.not_found": string;
		"artist.latest-release": string;
		"artist.monthly-listeners-count": { "one": string; "other": string };
		"artist.popular-tracks": string;
		"artist.singles": string;
		"artist.verified": string;
		"audiobook.freePriceDescription": string;
		"audiobook.freePriceExplanation": string;
		"audiobook.page.sample": string;
		"authorization-status.badge": string;
		"authorization-status.dismiss": string;
		"authorization-status.reconnecting": string;
		"authorization-status.retry": string;
		"authorization-status.retrying": string;
		"authorization-status.title": string;
		"blend.invite.body-with-name": string;
		"blend.invite.body-without-name": string;
		"blend.invite.button-title": string;
		"blend.invite.page-title": string;
		"blend.join.title": string;
		"blend.link-invalid.subtitle": string;
		"blend.link-invialid.header": string;
		"block-user.dialog.block": string;
		"block-user.dialog.cancel": string;
		"block-user.dialog.description": string;
		"block-user.dialog.title": string;
		"browse": string;
		"browser_upgrade_notice": string;
		"buddy-feed.add-friends": string;
		"buddy-feed.button.add-friend": string;
		"buddy-feed.button.back": string;
		"buddy-feed.button.remove-friend": string;
		"buddy-feed.enable-share-listening-activity": string;
		"buddy-feed.facebook.button": string;
		"buddy-feed.facebook.connect-with-friends-default": string;
		"buddy-feed.facebook.disclaimer": string;
		"buddy-feed.find-in-playlists": string;
		"buddy-feed.friend-activity": string;
		"buddy-feed.let-followers-see-your-listening": string;
		"buddy-feed.number-of-friends": { "one": string; "other": string };
		"buddy-feed.see-what-your-friends-are-playing": string;
		"capping.upsell-title": string;
		"card.a11y.explicit": string;
		"card.tag.album": string;
		"card.tag.artist": string;
		"card.tag.audiobook": string;
		"card.tag.episode": string;
		"card.tag.genre": string;
		"card.tag.playlist": string;
		"card.tag.profile": string;
		"card.tag.show": string;
		"card.tag.track": string;
		"card.tag.video": string;
		"carousel.left": string;
		"carousel.right": string;
		"character-counter": string;
		"chart.new-entries": { "one": string; "other": string };
		"choose_photo": string;
		"close": string;
		"close_button_action": string;
		"collection.empty-page.episodes-subtitle": string;
		"collection.empty-page.episodes-title": string;
		"collection.empty-page.shows-cta": string;
		"collection.empty-page.songs-cta": string;
		"collection.empty-page.songs-subtitle": string;
		"collection.empty-page.songs-title": string;
		"collection.sort.alphabetical": string;
		"collection.sort.creator": string;
		"collection.sort.custom-order": string;
		"collection.sort.most-relevant": string;
		"collection.sort.recently-added": string;
		"collection.sort.recently-played": string;
		"compilation": string;
		"concert.door_time": string;
		"concert.entity_metadata.description_1": string;
		"concert.entity_metadata.description_2": string;
		"concert.entity_metadata.description_3": string;
		"concert.entity_metadata.description_4": string;
		"concert.entity_metadata.description_more": string;
		"concert.entity_metadata.title": string;
		"concert.error.concert_not_found_title": string;
		"concert.error.general_error_title": string;
		"concert.error.no_locations_found_subtitle": string;
		"concert.header.entity_title_1": string;
		"concert.header.entity_title_2": string;
		"concert.header.entity_title_3": string;
		"concert.header.entity_title_4": string;
		"concert.header.entity_title_more": string;
		"concert.header.tickets_available_on": string;
		"concert.header.upcoming_concert_title_1": string;
		"concert.header.upcoming_concert_title_2": string;
		"concert.header.upcoming_concert_title_3": string;
		"concert.header.upcoming_concert_title_4": string;
		"concert.header.upcoming_concert_title_more": string;
		"concert.label.headliner": string;
		"concert.lineup": string;
		"concert.location.search.header": string;
		"concert.location.search.placeholder": string;
		"concert.location.search.recent": string;
		"concert.see_more_events_in_location": string;
		"concert.show_time": string;
		"concert.similar_events": string;
		"concert_buy_tickets": string;
		"concert_event_ended": string;
		"concert_find_tickets": string;
		"concert_past_message": string;
		"concerts": string;
		"concerts.browse_all_events": string;
		"concerts.count": { "one": string; "other": string };
		"concerts.count_near_location": string;
		"concerts.default_location": string;
		"concerts.error.no_concerts_found_message": string;
		"concerts.error.no_concerts_found_title": string;
		"concerts.feed_grid_layout": string;
		"concerts.feed_list_layout": string;
		"concerts.find_more": string;
		"concerts.find_nearby": string;
		"concerts.header.other": string;
		"concerts.input.search_placeholder": string;
		"concerts.load_more": string;
		"concerts.location.change": string;
		"concerts.location.change.button": string;
		"concerts.location.change.confirm": string;
		"concerts.location.change.error": string;
		"concerts.location.change.info": string;
		"concerts.location.preferred": string;
		"concerts.location.preferred.info": string;
		"concerts.near_location": string;
		"concerts.next_concert_near_location_colon": string;
		"concerts.no_events_description": string;
		"concerts.no_upcoming_events": string;
		"concerts.on_sale": string;
		"concerts.on_tour_colon": string;
		"concerts.popular_concerts_near": string;
		"concerts.presale": string;
		"concerts.remind_me": string;
		"concerts.soldout": string;
		"concerts.ticket_date_time": string;
		"concerts.ticket_price": string;
		"concerts.tickets_on_sale_soon": string;
		"concerts.view_all_upcoming_concerts_count": string;
		"concerts_added-to-your-saved-events": string;
		"concerts_browse_more": string;
		"concerts_browse_more_events": string;
		"concerts_interested": string;
		"concerts_interested_in_live_events": string;
		"concerts_interested_tooltip": string;
		"concerts_near_you.date": { "one": string; "other": string };
		"concerts_near_you.multiple_locations": string;
		"concerts_near_you.playlist_disclaimer": string;
		"concerts_no_events_description": string;
		"concerts_on_tour": string;
		"concerts_popular": string;
		"concerts_recommended_for_you": string;
		"concerts_removed-from-your-saved-events": string;
		"concerts_see_all_events": string;
		"concerts_share_with_friends": string;
		"concerts_shows_in": string;
		"concerts_upcoming": string;
		"concerts_upcoming_virtual_events": string;
		"context-menu.about-recommendations": string;
		"context-menu.ban-artist": string;
		"context-menu.copy-album-link": string;
		"context-menu.copy-book-link": string;
		"context-menu.copy-concert-link": string;
		"context-menu.copy-episode-link": string;
		"context-menu.copy-generic-link": string;
		"context-menu.copy-show-link": string;
		"context-menu.copy-spotify-uri": string;
		"context-menu.copy-track-link": string;
		"context-menu.episode-page-link": string;
		"context-menu.unban-artist": string;
		"contextmenu.add-playlist-to-folder": string;
		"contextmenu.add-playlist-to-other-playlist": string;
		"contextmenu.add-recommendation-to-this-playlist": string;
		"contextmenu.add-to-another-playlist": string;
		"contextmenu.add-to-library": string;
		"contextmenu.add-to-playlist": string;
		"contextmenu.add-to-queue": string;
		"contextmenu.block": string;
		"contextmenu.create-folder": string;
		"contextmenu.create-playlist": string;
		"contextmenu.delete": string;
		"contextmenu.download": string;
		"contextmenu.edit-details": string;
		"contextmenu.edit-profile": string;
		"contextmenu.exclude-from-recommendations": string;
		"contextmenu.find-folder": string;
		"contextmenu.find-playlist": string;
		"contextmenu.follow": string;
		"contextmenu.go-to-album": string;
		"contextmenu.go-to-artist": string;
		"contextmenu.go-to-artist-radio": string;
		"contextmenu.go-to-audiobook": string;
		"contextmenu.go-to-playlist": string;
		"contextmenu.go-to-radio-dsa": string;
		"contextmenu.go-to-song-radio": string;
		"contextmenu.include-in-recommendations": string;
		"contextmenu.invite-collaborators": string;
		"contextmenu.leave-playlist": string;
		"contextmenu.looping-visuals-hide": string;
		"contextmenu.looping-visuals-hide.feedback": string;
		"contextmenu.looping-visuals-show": string;
		"contextmenu.looping-visuals-show.feedback": string;
		"contextmenu.make-collaborator": string;
		"contextmenu.make-listener": string;
		"contextmenu.make-playlist-private": string;
		"contextmenu.make-playlist-public": string;
		"contextmenu.make-public": string;
		"contextmenu.make-secret": string;
		"contextmenu.mark-as-played": string;
		"contextmenu.mark-as-unplayed": string;
		"contextmenu.move-playlist-to-folder": string;
		"contextmenu.open_desktop_app": string;
		"contextmenu.pin-album": string;
		"contextmenu.pin-artist": string;
		"contextmenu.pin-audiobook": string;
		"contextmenu.pin-dj": string;
		"contextmenu.pin-folder": string;
		"contextmenu.pin-playlist": string;
		"contextmenu.pin-prerelease-album": string;
		"contextmenu.pin-prerelease-audiobook": string;
		"contextmenu.pin-show": string;
		"contextmenu.remove-from-folders": string;
		"contextmenu.remove-from-library": string;
		"contextmenu.remove-from-playlist": string;
		"contextmenu.remove-from-queue": string;
		"contextmenu.remove-from-your-episodes": string;
		"contextmenu.remove-recommendation": string;
		"contextmenu.remove-user-from-playlist": string;
		"contextmenu.rename": string;
		"contextmenu.report": string;
		"contextmenu.save-to-your-episodes": string;
		"contextmenu.share": string;
		"contextmenu.share.copy-artist-link": string;
		"contextmenu.share.copy-playlist-link": string;
		"contextmenu.share.copy-profile-link": string;
		"contextmenu.show-credits": string;
		"contextmenu.unblock": string;
		"contextmenu.unfollow": string;
		"contextmenu.unpin-album": string;
		"contextmenu.unpin-artist": string;
		"contextmenu.unpin-audiobook": string;
		"contextmenu.unpin-dj": string;
		"contextmenu.unpin-folder": string;
		"contextmenu.unpin-playlist": string;
		"contextmenu.unpin-prerelease-album": string;
		"contextmenu.unpin-prerelease-audiobook": string;
		"contextmenu.unpin-show": string;
		"cookies": string;
		"desktop-about.copy-version-info-tooltip": string;
		"desktop-about.platform": string;
		"desktop-about.platform-linux": string;
		"desktop-about.platform-mac-arm-64": string;
		"desktop-about.platform-mac-x86": string;
		"desktop-about.platform-unknown": string;
		"desktop-about.platform-win-arm-64": string;
		"desktop-about.platform-win-x86": string;
		"desktop-about.platform-win-x86-64": string;
		"desktop.login.Back": string;
		"desktop.settings.automatic-downgrade.info": string;
		"desktop.settings.automatic-downgrade.title": string;
		"desktop.settings.automixInfo": string;
		"desktop.settings.autoplay": string;
		"desktop.settings.autoplayInfo": string;
		"desktop.settings.autostart": string;
		"desktop.settings.autostartMinimized": string;
		"desktop.settings.autostartNormal": string;
		"desktop.settings.autostartOff": string;
		"desktop.settings.closeShouldMinimize": string;
		"desktop.settings.compatibility": string;
		"desktop.settings.crossfadeTracks": string;
		"desktop.settings.downloadQuality.info": string;
		"desktop.settings.downloadQuality.title": string;
		"desktop.settings.dynamicNormalizer": string;
		"desktop.settings.enableDeveloperMode": string;
		"desktop.settings.enableHardwareAcceleration": string;
		"desktop.settings.explicitContentFilter": string;
		"desktop.settings.explicitContentFilterSetting": string;
		"desktop.settings.explicitContentFilterSettingLocked": string;
		"desktop.settings.facebook": string;
		"desktop.settings.facebook.connect": string;
		"desktop.settings.facebook.disconnect": string;
		"desktop.settings.language": string;
		"desktop.settings.language-override": string;
		"desktop.settings.loudnessEnvironment_with_limiter_details": string;
		"desktop.settings.loudnessLoud": string;
		"desktop.settings.loudnessNormal": string;
		"desktop.settings.loudnessQuiet": string;
		"desktop.settings.monoDownmixer": string;
		"desktop.settings.musicQuality": string;
		"desktop.settings.newPlaylistsPublic": string;
		"desktop.settings.normalize": string;
		"desktop.settings.offlineStorageChangeLocation": string;
		"desktop.settings.offlineStorageLocation": string;
		"desktop.settings.otfn": string;
		"desktop.settings.playback": string;
		"desktop.settings.privateSession": string;
		"desktop.settings.privateSession.tooltip": string;
		"desktop.settings.proxy.autodetect": string;
		"desktop.settings.proxy.host": string;
		"desktop.settings.proxy.http": string;
		"desktop.settings.proxy.noproxy": string;
		"desktop.settings.proxy.pass": string;
		"desktop.settings.proxy.port": string;
		"desktop.settings.proxy.socks4": string;
		"desktop.settings.proxy.socks5": string;
		"desktop.settings.proxy.title": string;
		"desktop.settings.proxy.type": string;
		"desktop.settings.proxy.user": string;
		"desktop.settings.publishActivity": string;
		"desktop.settings.publishTopArtists": string;
		"desktop.settings.sec": string;
		"desktop.settings.selectLanguage": string;
		"desktop.settings.settings": string;
		"desktop.settings.showChromeToolbar": string;
		"desktop.settings.showFollows": string;
		"desktop.settings.showSystemMediaControls": string;
		"desktop.settings.silenceTrimmer": string;
		"desktop.settings.social": string;
		"desktop.settings.startupAndWindowBehavior": string;
		"desktop.settings.storage": string;
		"desktop.settings.storage.cache.button": string;
		"desktop.settings.storage.cache.dialog.error": string;
		"desktop.settings.storage.cache.dialog.heading": string;
		"desktop.settings.storage.cache.dialog.text": string;
		"desktop.settings.storage.cache.heading": string;
		"desktop.settings.storage.cache.success": string;
		"desktop.settings.storage.cache.text": string;
		"desktop.settings.storage.cancel": string;
		"desktop.settings.storage.close": string;
		"desktop.settings.storage.downloads.button": string;
		"desktop.settings.storage.downloads.dialog.error": string;
		"desktop.settings.storage.downloads.dialog.heading": string;
		"desktop.settings.storage.downloads.dialog.text": string;
		"desktop.settings.storage.downloads.heading": string;
		"desktop.settings.storage.downloads.remove": string;
		"desktop.settings.storage.downloads.success": string;
		"desktop.settings.storage.downloads.text": string;
		"desktop.settings.storage.help": string;
		"desktop.settings.streamingQuality": string;
		"desktop.settings.streamingQualityAutomatic": string;
		"desktop.settings.streamingQualityHigh": string;
		"desktop.settings.streamingQualityLow": string;
		"desktop.settings.streamingQualityNormal": string;
		"desktop.settings.streamingQualityVeryHigh": string;
		"download.available-offline": string;
		"download.cancel": string;
		"download.complete": string;
		"download.download": string;
		"download.downloading": string;
		"download.progress-global": string;
		"download.remove": string;
		"download.upsell": string;
		"drop_down.filter_by": string;
		"drop_down.sort_by": string;
		"duplicate.tracks.addAll": string;
		"duplicate.tracks.addAnyway": string;
		"duplicate.tracks.addNewOnes": string;
		"duplicate.tracks.allAlreadyAdded": string;
		"duplicate.tracks.alreadyAdded": string;
		"duplicate.tracks.dontAdd": string;
		"duplicate.tracks.oneAlreadyAdded": string;
		"duplicate.tracks.someAlreadyAdded": string;
		"duplicate.tracks.someAlreadyAddedDescription": string;
		"edit_photo": string;
		"ep": string;
		"episode.description-title": string;
		"episode.length": string;
		"episode.played": string;
		"episode.see_all_episodes": string;
		"equalizer.equalizer": string;
		"equalizer.filterA11yValueText": string;
		"equalizer.filterLabel": string;
		"equalizer.preset.acoustic": string;
		"equalizer.preset.bassBooster": string;
		"equalizer.preset.bassReducer": string;
		"equalizer.preset.classical": string;
		"equalizer.preset.dance": string;
		"equalizer.preset.deep": string;
		"equalizer.preset.electronic": string;
		"equalizer.preset.flat": string;
		"equalizer.preset.hiphop": string;
		"equalizer.preset.jazz": string;
		"equalizer.preset.latin": string;
		"equalizer.preset.loudness": string;
		"equalizer.preset.lounge": string;
		"equalizer.preset.manual": string;
		"equalizer.preset.piano": string;
		"equalizer.preset.pop": string;
		"equalizer.preset.rnb": string;
		"equalizer.preset.rock": string;
		"equalizer.preset.smallSpeakers": string;
		"equalizer.preset.spokenWord": string;
		"equalizer.preset.trebleBooster": string;
		"equalizer.preset.trebleReducer": string;
		"equalizer.preset.vocalBooster": string;
		"equalizer.presets": string;
		"equalizer.reset": string;
		"error-dialog.generic.body": string;
		"error-dialog.generic.header": string;
		"error-page.cta.cdmerror": string;
		"error-page.header.cdmerror": string;
		"error-page.header.expression_not_supported": string;
		"error-page.header.max_subscriptions_reached": string;
		"error-page.not-available-in-region.title": string;
		"error-page.not-found.home": string;
		"error-page.subtext.cdmerror": string;
		"error-page.subtext.max_subscriptions_reached": string;
		"error.generic": string;
		"error.not_found.body": string;
		"error.not_found.title.album": string;
		"error.not_found.title.page": string;
		"error.not_found.title.playlist": string;
		"error.not_found.title.podcast": string;
		"error.reload": string;
		"error.request-artist-appears-on": string;
		"error.request-artist-discography": string;
		"error.request-artist-failure": string;
		"error.request-artist-featuring": string;
		"error.request-artist-playlists": string;
		"error.request-artist-related-videos": string;
		"error.request-collection-tracks-failure": string;
		"error.request-playlist-failure": string;
		"error.request-related-artists": string;
		"events_page.disclaimer": string;
		"ewg.color": string;
		"ewg.copied": string;
		"ewg.copy": string;
		"ewg.help": string;
		"ewg.help-text": string;
		"ewg.showcode": string;
		"ewg.size": string;
		"ewg.size.compact": string;
		"ewg.size.normal": string;
		"ewg.start-at": string;
		"ewg.terms": string;
		"ewg.title": string;
		"ewg.title.album": string;
		"ewg.title.artist": string;
		"ewg.title.audiobook": string;
		"ewg.title.episode": string;
		"ewg.title.playlist": string;
		"ewg.title.show": string;
		"ewg.title.track": string;
		"fatal-error.button-label": string;
		"fatal-error.header": string;
		"feedback.added-to-playlist-generic": string;
		"feedback.added-to-playlist-specific": string;
		"feedback.artist-banned-by-user": string;
		"feedback.ban-artist": string;
		"feedback.block-user": string;
		"feedback.cant-offline-sync-playlist-in-offline-mode": string;
		"feedback.cant-play-during-ads": string;
		"feedback.cant-play-track": string;
		"feedback.cant-skip-ads": string;
		"feedback.exclude-playlist-from-recommendations": string;
		"feedback.explicit-content-filtered": string;
		"feedback.hide-song": string;
		"feedback.include-playlist-in-recommendations": string;
		"feedback.left-playlist": string;
		"feedback.link-copied": string;
		"feedback.member-made-contributor": string;
		"feedback.member-made-listener": string;
		"feedback.play-after-ad": string;
		"feedback.playlist-made-private": string;
		"feedback.playlist-made-public": string;
		"feedback.playlist-publish": string;
		"feedback.playlist-unpublish": string;
		"feedback.removed-member": string;
		"feedback.skip-ads-after-delay": string;
		"feedback.skip-ads-to-hear-song": string;
		"feedback.track-banned-by-user": string;
		"feedback.track-exclusive-premium": string;
		"feedback.track-not-available": string;
		"feedback.track-not-available-forced-offline": string;
		"feedback.track-not-available-import": string;
		"feedback.track-not-available-in-region": string;
		"feedback.track-not-available-in-region-import": string;
		"feedback.unable-to-play": string;
		"feedback.unblock-user": string;
		"feedback.video-catalogue-restricted": string;
		"feedback.video-country-restricted": string;
		"feedback.video-georestricted": string;
		"feedback.video-playback-error": string;
		"feedback.video-playback-network-error": string;
		"feedback.video-unavailable": string;
		"feedback.video-unsupported-client-version": string;
		"feedback.video-unsupported-key-system": string;
		"feedback.video-unsupported-platform-version": string;
		"filter": string;
		"folder.delete-header": string;
		"follow": string;
		"followers": string;
		"following": string;
		"forbidden-page.description": string;
		"forbidden-page.title": string;
		"fta.bottom-bar.subtitle": string;
		"fta.bottom-bar.subtitle-two": string;
		"fta.sign-up-free": string;
		"fta.wall.start-listening": string;
		"fta.wall.start-watching": string;
		"gallery.next": string;
		"gallery.prev": string;
		"hifi.good": string;
		"hifi.internetBandwidth": string;
		"hifi.networkConnection": string;
		"hifi.no": string;
		"hifi.playingVia": string;
		"hifi.poor": string;
		"hifi.unknown": string;
		"hifi.yes": string;
		"history.empty-description": string;
		"history.empty-title": string;
		"home.afternoon": string;
		"home.dsa-message": string;
		"home.dsa-message-link": string;
		"home.evening": string;
		"home.filters": string;
		"home.morning": string;
		"i18n.language-selection.subtitle": string;
		"i18n.language-selection.title": string;
		"i18n.meta.album.title": string;
		"i18n.meta.home.title": string;
		"i18n.meta.track-lyrics.title": string;
		"i18n.meta.track.title": string;
		"image-upload.legal-disclaimer": string;
		"internal-link-recommender.based-on-this-song": string;
		"internal-link-recommender.load-more-episodes": string;
		"internal-link-recommender.more-episodes-like-this": string;
		"internal-link-recommender.more-podcasts-like-this": string;
		"keyboard.shortcuts.description.charts": string;
		"keyboard.shortcuts.description.createNewFolder": string;
		"keyboard.shortcuts.description.currentlyPlaying": string;
		"keyboard.shortcuts.description.goBackwards": string;
		"keyboard.shortcuts.description.goForwards": string;
		"keyboard.shortcuts.description.goToPreferences": string;
		"keyboard.shortcuts.description.home": string;
		"keyboard.shortcuts.description.likeDislikeSong": string;
		"keyboard.shortcuts.description.likedSongs": string;
		"keyboard.shortcuts.description.lowerVolume": string;
		"keyboard.shortcuts.description.madeForYour": string;
		"keyboard.shortcuts.description.openContextMenu": string;
		"keyboard.shortcuts.description.openSearchModal": string;
		"keyboard.shortcuts.description.raiseVolume": string;
		"keyboard.shortcuts.description.repeat": string;
		"keyboard.shortcuts.description.search": string;
		"keyboard.shortcuts.description.seekBackward": string;
		"keyboard.shortcuts.description.seekForward": string;
		"keyboard.shortcuts.description.selectAll": string;
		"keyboard.shortcuts.description.shuffle": string;
		"keyboard.shortcuts.description.skipNext": string;
		"keyboard.shortcuts.description.skipPrev": string;
		"keyboard.shortcuts.description.togglePlay": string;
		"keyboard.shortcuts.description.yourAlbums": string;
		"keyboard.shortcuts.description.yourArtists": string;
		"keyboard.shortcuts.description.yourAudiobooks": string;
		"keyboard.shortcuts.description.yourPlaylists": string;
		"keyboard.shortcuts.description.yourPodcasts": string;
		"keyboard.shortcuts.help.heading": string;
		"keyboard.shortcuts.help.subheading.press": string;
		"keyboard.shortcuts.help.subheading.toToggle": string;
		"keyboard.shortcuts.layout.navigationBarDecreaseWidth": string;
		"keyboard.shortcuts.layout.navigationBarIncreaseWidth": string;
		"keyboard.shortcuts.layout.rightSidebarDecreaseWidth": string;
		"keyboard.shortcuts.layout.rightSidebarIncreaseWidth": string;
		"keyboard.shortcuts.layout.toggleLeftSidebar": string;
		"keyboard.shortcuts.layout.toggleRightSidebar": string;
		"keyboard.shortcuts.or": string;
		"keyboard.shortcuts.section.basic": string;
		"keyboard.shortcuts.section.layout": string;
		"keyboard.shortcuts.section.navigation": string;
		"keyboard.shortcuts.section.playback": string;
		"leave-playlist.dialog.cancel": string;
		"leave-playlist.dialog.leave": string;
		"leave-playlist.dialog.private-description": string;
		"leave-playlist.dialog.public-contributor-description": string;
		"leave-playlist.dialog.public-listener-description": string;
		"leave-playlist.dialog.title": string;
		"licenses.title": string;
		"likes": { "one": string; "other": string };
		"live_events.all_events_tab": string;
		"live_events.city_info_find_tickets": string;
		"live_events.city_info_view_details": string;
		"live_events.date_picker_button_text": string;
		"live_events.date_picker_dialog_clear": string;
		"live_events.date_picker_dialog_done": string;
		"live_events.date_picker_dialog_title": string;
		"live_events.disclaimer": string;
		"live_events.for_you_anonymous_heading": string;
		"live_events.for_you_anonymous_subheading": string;
		"live_events.for_you_tab": string;
		"live_events.label": string;
		"live_events.location_concert_tickets": string;
		"live_events.next_weekend_preset": string;
		"live_events.sign_up_free": string;
		"live_events.this_weekend_preset": string;
		"local-files": string;
		"local-files.description": string;
		"local-files.empty-button": string;
		"local-files.empty-description": string;
		"local-files.empty-header": string;
		"local-files.source.downloads": string;
		"local-files.source.itunes": string;
		"local-files.source.my_music": string;
		"local-files.source.windows_music_library": string;
		"locale.af": string;
		"locale.am": string;
		"locale.ar": string;
		"locale.ar-EG": string;
		"locale.ar-MA": string;
		"locale.ar-SA": string;
		"locale.az": string;
		"locale.bg": string;
		"locale.bho": string;
		"locale.bn": string;
		"locale.bs": string;
		"locale.ca": string;
		"locale.cs": string;
		"locale.da": string;
		"locale.de": string;
		"locale.el": string;
		"locale.en": string;
		"locale.en-GB": string;
		"locale.es": string;
		"locale.es-419": string;
		"locale.es-AR": string;
		"locale.es-MX": string;
		"locale.et": string;
		"locale.eu": string;
		"locale.fa": string;
		"locale.fi": string;
		"locale.fil": string;
		"locale.fr": string;
		"locale.fr-CA": string;
		"locale.gl": string;
		"locale.gu": string;
		"locale.he": string;
		"locale.hi": string;
		"locale.hr": string;
		"locale.hu": string;
		"locale.id": string;
		"locale.is": string;
		"locale.it": string;
		"locale.ja": string;
		"locale.kn": string;
		"locale.ko": string;
		"locale.lt": string;
		"locale.lv": string;
		"locale.mk": string;
		"locale.ml": string;
		"locale.mr": string;
		"locale.ms": string;
		"locale.nb": string;
		"locale.ne": string;
		"locale.nl": string;
		"locale.or": string;
		"locale.pa-IN": string;
		"locale.pa-PK": string;
		"locale.pl": string;
		"locale.pt-BR": string;
		"locale.pt-PT": string;
		"locale.ro": string;
		"locale.ru": string;
		"locale.sk": string;
		"locale.sl": string;
		"locale.sr": string;
		"locale.sv": string;
		"locale.sw": string;
		"locale.ta": string;
		"locale.te": string;
		"locale.th": string;
		"locale.tr": string;
		"locale.uk": string;
		"locale.ur": string;
		"locale.vi": string;
		"locale.zh-CN": string;
		"locale.zh-HK": string;
		"locale.zh-TW": string;
		"locale.zu": string;
		"login": string;
		"midyear.cta": string;
		"midyear.intro": string;
		"midyear.terms": string;
		"midyear.title": string;
		"miniplayer.close": string;
		"miniplayer.open": string;
		"miniplayer.open-in": string;
		"monthly_listeners": string;
		"more": string;
		"more.label.context": string;
		"more.label.track": string;
		"music_and_talk.album_or_show": string;
		"music_and_talk.in_this_episode": string;
		"music_downloads": string;
		"music_videos": string;
		"mwp.cta.download.app": string;
		"mwp.cta.sign.up.free": string;
		"mwp.d2p.modal.cta": string;
		"mwp.d2p.modal.description": string;
		"mwp.d2p.modal.dismiss": string;
		"mwp.d2p.modal.title": string;
		"mwp.header.content.unavailable": string;
		"mwp.list.item.share": string;
		"mwp.podcast.all.episodes": string;
		"mwp.search.artists.all": string;
		"navbar.go-back": string;
		"navbar.go-forward": string;
		"navbar.install-app": string;
		"navbar.premium": string;
		"navbar.search": string;
		"navbar.search.callout-description": string;
		"navbar.search.callout-title": string;
		"new_releases": string;
		"npb.collapseCoverArt": string;
		"npb.expandCoverArt": string;
		"npv.exit-full-screen": string;
		"npv.full-screen": string;
		"npv.related-videos.next": string;
		"npv.related-videos.prev": string;
		"npv.related-videos.title": string;
		"npv.song-videos.switch-to-audio": string;
		"npv.song-videos.switch-to-video": string;
		"offline-error.device-limit-reached.header": string;
		"offline-error.device-limit-reached.message": string;
		"offline.badge": string;
		"offline.callout-disconnected": string;
		"offline.feedback-text": string;
		"only_visible_to_you": string;
		"page.generic-title": string;
		"page.loading": string;
		"paid": string;
		"pause": string;
		"paywalls.modal-body-p1": string;
		"paywalls.modal-body-p2": string;
		"paywalls.modal-body-p3": string;
		"paywalls.modal-heading": string;
		"permissions.collaborator": string;
		"permissions.creator": string;
		"permissions.current-user-name": string;
		"permissions.invite-collaborators": string;
		"permissions.listener": string;
		"permissions.modal-label": string;
		"permissions.private-playlist": string;
		"permissions.public-playlist": string;
		"permissions.shared-with": string;
		"permissions.songs-added": { "one": string; "other": string };
		"pick-and-shuffle.upsell.dismiss": string;
		"pick-and-shuffle.upsell.explore-premium": string;
		"pick-and-shuffle.upsell.message": string;
		"pick-and-shuffle.upsell.title.queue": string;
		"pick-and-shuffle.upsell.title.shuffle-button": string;
		"play": string;
		"playback-control.a11y.landmark-label": string;
		"playback-control.a11y.lightsaber-hilt-button": string;
		"playback-control.a11y.seek-slider-button": string;
		"playback-control.a11y.volume-high": string;
		"playback-control.a11y.volume-low": string;
		"playback-control.a11y.volume-medium": string;
		"playback-control.a11y.volume-off": string;
		"playback-control.a11y.volume-slider-button": string;
		"playback-control.ban": string;
		"playback-control.change-playback-speed": string;
		"playback-control.connect-picker": string;
		"playback-control.disable-repeat": string;
		"playback-control.disable-shuffle": string;
		"playback-control.enable-repeat": string;
		"playback-control.enable-repeat-one": string;
		"playback-control.enable-shuffle": string;
		"playback-control.mute": string;
		"playback-control.now-playing-label": string;
		"playback-control.pause": string;
		"playback-control.play": string;
		"playback-control.playback-speed": string;
		"playback-control.playback-speed-button-a11y": string;
		"playback-control.queue": string;
		"playback-control.skip-back": string;
		"playback-control.skip-backward-15": string;
		"playback-control.skip-forward": string;
		"playback-control.skip-forward-15": string;
		"playback-control.unmute": string;
		"playback-info.dsa-promotional-content": string;
		"playing": string;
		"playlist": string;
		"playlist.a11y.pause": string;
		"playlist.a11y.play": string;
		"playlist.curation.albums": string;
		"playlist.curation.find_more": string;
		"playlist.curation.popular_songs": string;
		"playlist.curation.search_placeholder": string;
		"playlist.curation.search_placeholder-booklists": string;
		"playlist.curation.see_all_album": string;
		"playlist.curation.see_all_artists": string;
		"playlist.curation.see_all_songs": string;
		"playlist.curation.title": string;
		"playlist.default_folder_name": string;
		"playlist.default_playlist_name": string;
		"playlist.delete": string;
		"playlist.delete-cancel": string;
		"playlist.delete-description": string;
		"playlist.delete-title": string;
		"playlist.edit-details.button": string;
		"playlist.edit-details.change-photo": string;
		"playlist.edit-details.description-label": string;
		"playlist.edit-details.description-placeholder": string;
		"playlist.edit-details.error.description-breaks": string;
		"playlist.edit-details.error.failed-to-save": string;
		"playlist.edit-details.error.file-size-exceeded": string;
		"playlist.edit-details.error.file-upload-failed": string;
		"playlist.edit-details.error.invalid-html": string;
		"playlist.edit-details.error.missing-name": string;
		"playlist.edit-details.error.no-internet": string;
		"playlist.edit-details.error.too-small": string;
		"playlist.edit-details.error.unsaved-changes": string;
		"playlist.edit-details.name-label": string;
		"playlist.edit-details.name-placeholder": string;
		"playlist.edit-details.remove-photo": string;
		"playlist.edit-details.title": string;
		"playlist.extender.button.add": string;
		"playlist.extender.recommended.header": string;
		"playlist.extender.recommended.title": string;
		"playlist.extender.refresh": string;
		"playlist.extender.songs.in.playlist": string;
		"playlist.extender.title.in.playlist": string;
		"playlist.header.creator-and-co-creator": string;
		"playlist.header.creator-and-others": string;
		"playlist.header.made-for": string;
		"playlist.new-default-name": string;
		"playlist.new-header": string;
		"playlist.page-title": string;
		"playlist.presented_by": string;
		"playlist.remove_from_playlist": string;
		"playlist.remove_multiple_description": string;
		"playlist.search_in_playlist": string;
		"playlist.similar-playlist": string;
		"podcast-ads.recent_ads": string;
		"podcast-ads.recent_ads_from": string;
		"podcast-ads.recent_ads_just_two": string;
		"podcast-ads.recent_ads_more_than_two": string;
		"podcast-ads.show_more_indicator": string;
		"podcasts.next-episode.continue-listening": string;
		"podcasts.next-episode.first-published": string;
		"podcasts.next-episode.latest-published": string;
		"podcasts.next-episode.trailer": string;
		"podcasts.next-episode.up-next": string;
		"podcasts.subscriber-indicator.otp": string;
		"podcasts.subscriber-indicator.subscription": string;
		"premium.dialog.description": { "one": string; "other": string };
		"premium.dialog.disclaimer": string;
		"premium.dialog.disclaimer.noprice": string;
		"premium.dialog.subscribe": string;
		"premium.dialog.title": string;
		"private-session.badge": string;
		"private_playlist": string;
		"promotions.context-menu.not-interested": string;
		"promotions.default-section-title": string;
		"pta.bottom-bar.title": string;
		"public_playlist": string;
		"public_playlists": string;
		"pwa.confirm": string;
		"pwa.download-app": string;
		"queue.added-to-queue": string;
		"queue.cancel-button": string;
		"queue.clear-queue": string;
		"queue.confirm-button": string;
		"queue.confirm-message": string;
		"queue.confirm-title": { "one": string; "other": string };
		"queue.empty-description": string;
		"queue.empty-title": string;
		"queue.fine-something": string;
		"queue.next-from": string;
		"queue.next-in-queue": string;
		"queue.next-up": string;
		"queue.now-playing": string;
		"queue.page-title": string;
		"queue.queued-by": string;
		"recently_played_artists": string;
		"release-notifier.update-available": string;
		"release-notifier.update-processing": string;
		"release-notifier.update-ready": string;
		"remove": string;
		"remove_from_your_library": string;
		"remove_from_your_liked_songs": string;
		"resize.sidebar": string;
		"rich-page.fans-also-like": string;
		"rich-page.popular-albums-by-artist": string;
		"rich-page.popular-releases-by-artist": string;
		"rich-page.popular-singles-and-eps-by-artist": string;
		"rich-page.popular-tracks": string;
		"s2l.dismiss": string;
		"s2l.download": string;
		"s2l.download_spotify": string;
		"s2l.play_millions": string;
		"s2l.play_millions_podcasts": string;
		"save": string;
		"save_to_your_library": string;
		"save_to_your_liked_songs": string;
		"search.a11y.clear-input": string;
		"search.a11y.songs-search-results": string;
		"search.clear-recent-searches": string;
		"search.concert.event": string;
		"search.concerts.see-all": string;
		"search.empty-results-text": string;
		"search.empty-results-title": string;
		"search.empty-results-title-for-chip": string;
		"search.lyrics-match": string;
		"search.page-title": string;
		"search.playlist-by": string;
		"search.row.top-results": string;
		"search.search-for-label": string;
		"search.see-all": string;
		"search.showing-category-query-songs": string;
		"search.title.albums": string;
		"search.title.all": string;
		"search.title.artists": string;
		"search.title.audiobooks": string;
		"search.title.concerts": string;
		"search.title.episodes": string;
		"search.title.genres-and-moods": string;
		"search.title.playlists": string;
		"search.title.podcast-and-shows": string;
		"search.title.profiles": string;
		"search.title.recent-searches": string;
		"search.title.shows": string;
		"search.title.top-result": string;
		"search.title.top-results": string;
		"search.title.tracks": string;
		"settings.addASource": string;
		"settings.canvasVideos": string;
		"settings.display": string;
		"settings.employee": string;
		"settings.library": string;
		"settings.library.compactMode": string;
		"settings.localFiles": string;
		"settings.localFilesFolderAdded": string;
		"settings.npv": string;
		"settings.restartApp": string;
		"settings.showLocalFiles": string;
		"settings.showMusicAnnouncements": string;
		"settings.showSongsFrom": string;
		"settings.showTrackNotifications": string;
		"shared.library.entity-row.liked-songs.title": string;
		"shared.library.entity-row.local-files.title": string;
		"shared.library.entity-row.your-episodes.title": string;
		"shared.library.filter.album": string;
		"shared.library.filter.artist": string;
		"shared.library.filter.book": string;
		"shared.library.filter.by-spotify": string;
		"shared.library.filter.by-you": string;
		"shared.library.filter.downloaded": string;
		"shared.library.filter.in-progress": string;
		"shared.library.filter.playlist": string;
		"shared.library.filter.unplayed": string;
		"shared.library.sort-by.author": string;
		"shared.library.sort-by.creator": string;
		"shared.library.sort-by.custom": string;
		"shared.library.sort-by.name": string;
		"shared.library.sort-by.recently-added": string;
		"shared.library.sort-by.recently-played-or-added": string;
		"shared.library.sort-by.recently-updated": string;
		"shared.library.sort-by.relevance": string;
		"shared.wrapped-banner.body": string;
		"shared.wrapped-banner.body-loggedout": string;
		"shared.wrapped-banner.button": string;
		"shared.wrapped-banner.title": string;
		"shared.wrapped-banner.title-loggedout": string;
		"shelf.see-all": string;
		"show_less": string;
		"show_more": string;
		"shows.filter.in-progress": string;
		"shows.filter.unplayed": string;
		"shows.sort.newest-to-oldest": string;
		"shows.sort.oldest-to-newest": string;
		"sidebar.a11y.landmark-label": string;
		"sidebar.liked_songs": string;
		"sidebar.your_episodes": string;
		"sign_up": string;
		"singalong.button": string;
		"singalong.less-vocal": string;
		"singalong.more-vocal": string;
		"singalong.off": string;
		"singalong.title": string;
		"single": string;
		"song": string;
		"sort.added-by": string;
		"sort.album": string;
		"sort.album-or-podcast": string;
		"sort.artist": string;
		"sort.custom-order": string;
		"sort.date-added": string;
		"sort.duration": string;
		"sort.title": string;
		"spotify-connect": string;
		"subtitles-picker.autogenerated": string;
		"subtitles-picker.heading": string;
		"subtitles-picker.option_cs": string;
		"subtitles-picker.option_de": string;
		"subtitles-picker.option_el": string;
		"subtitles-picker.option_en": string;
		"subtitles-picker.option_es": string;
		"subtitles-picker.option_fi": string;
		"subtitles-picker.option_fr": string;
		"subtitles-picker.option_hu": string;
		"subtitles-picker.option_id": string;
		"subtitles-picker.option_it": string;
		"subtitles-picker.option_ja": string;
		"subtitles-picker.option_ms": string;
		"subtitles-picker.option_nl": string;
		"subtitles-picker.option_off": string;
		"subtitles-picker.option_pl": string;
		"subtitles-picker.option_pt": string;
		"subtitles-picker.option_sv": string;
		"subtitles-picker.option_tr": string;
		"subtitles-picker.option_vi": string;
		"subtitles-picker.option_zh": string;
		"time.days.short": { "one": string; "other": string };
		"time.estimated": string;
		"time.hours.short": { "one": string; "other": string };
		"time.left": string;
		"time.minutes.short": { "one": string; "other": string };
		"time.now": string;
		"time.over": string;
		"time.seconds.short": { "one": string; "other": string };
		"time.weeks.short": { "one": string; "other": string };
		"topBar.dsa-cta": string;
		"topBar.dsa-indicator": string;
		"topBar.label": string;
		"top_artists_this_month": string;
		"top_tracks_this_month": string;
		"track-credits.accordion": string;
		"track-credits.acoustic-guitar": string;
		"track-credits.additional-credits": string;
		"track-credits.additional-engineer": string;
		"track-credits.additional-keyboards": string;
		"track-credits.additional-mixer": string;
		"track-credits.additional-percussion": string;
		"track-credits.additional-producer": string;
		"track-credits.additional-production": string;
		"track-credits.additional-programmer": string;
		"track-credits.additional-recording": string;
		"track-credits.additional-vocals": string;
		"track-credits.all-instruments": string;
		"track-credits.ambient-sounds": string;
		"track-credits.arranger": string;
		"track-credits.artist": string;
		"track-credits.assistant-engineer": string;
		"track-credits.assistant-mix-engineer": string;
		"track-credits.assistant-mixer": string;
		"track-credits.assistant-mixing-engineer": string;
		"track-credits.assistant-producer": string;
		"track-credits.assistant-recording-engineer": string;
		"track-credits.assistant-remix-engineer": string;
		"track-credits.associated-performer": string;
		"track-credits.audio-additional-mix-engineer": string;
		"track-credits.audio-recording-engineer": string;
		"track-credits.background-vocal": string;
		"track-credits.background-vocalist": string;
		"track-credits.background-vocals": string;
		"track-credits.backing-vocals": string;
		"track-credits.bass": string;
		"track-credits.bass-guitar": string;
		"track-credits.bells": string;
		"track-credits.brass-band": string;
		"track-credits.cajon": string;
		"track-credits.cello": string;
		"track-credits.chamber-ensemble": string;
		"track-credits.clapping": string;
		"track-credits.co-mixer": string;
		"track-credits.co-producer": string;
		"track-credits.co-writer": string;
		"track-credits.composer": string;
		"track-credits.composer-and-lyricist": string;
		"track-credits.conga": string;
		"track-credits.cymbals": string;
		"track-credits.designer": string;
		"track-credits.digital-editor": string;
		"track-credits.dobro": string;
		"track-credits.double-bass": string;
		"track-credits.drum-programmer": string;
		"track-credits.drum-programming": string;
		"track-credits.drums": string;
		"track-credits.editor": string;
		"track-credits.electric-bass": string;
		"track-credits.electric-guitar": string;
		"track-credits.engineer": string;
		"track-credits.engineer-and-mixer": string;
		"track-credits.executive-producer": string;
		"track-credits.featured-artist": string;
		"track-credits.featuring": string;
		"track-credits.fiddle": string;
		"track-credits.flugelhorn": string;
		"track-credits.flute": string;
		"track-credits.guitar": string;
		"track-credits.harp": string;
		"track-credits.horn": string;
		"track-credits.horn-arranger": string;
		"track-credits.income-participant": string;
		"track-credits.instruments": string;
		"track-credits.keyboards": string;
		"track-credits.keyboards-arrangements": string;
		"track-credits.label": string;
		"track-credits.lyricist": string;
		"track-credits.main-artist": string;
		"track-credits.mandolin": string;
		"track-credits.masterer": string;
		"track-credits.mastering-engineer": string;
		"track-credits.mellotron": string;
		"track-credits.miscellaneous-production": string;
		"track-credits.mix-engineer": string;
		"track-credits.mixer": string;
		"track-credits.mixing-engineer": string;
		"track-credits.mixing-engineers": string;
		"track-credits.music-production": string;
		"track-credits.music-publisher": string;
		"track-credits.orchestra": string;
		"track-credits.organ": string;
		"track-credits.pedal-steel": string;
		"track-credits.percussion": string;
		"track-credits.performers": string;
		"track-credits.piano": string;
		"track-credits.pro-tools": string;
		"track-credits.pro-tools-editing": string;
		"track-credits.producer": string;
		"track-credits.producers": string;
		"track-credits.production": string;
		"track-credits.programmed-and-arranged-by": string;
		"track-credits.programmer": string;
		"track-credits.programming": string;
		"track-credits.programming-and-keyboards": string;
		"track-credits.re-mixer": string;
		"track-credits.recorded-by": string;
		"track-credits.recorder": string;
		"track-credits.recording": string;
		"track-credits.recording-and-mixing": string;
		"track-credits.recording-arranger": string;
		"track-credits.recording-engineer": string;
		"track-credits.recording-producer": string;
		"track-credits.rhythm-guitar": string;
		"track-credits.samples": string;
		"track-credits.saxophone": string;
		"track-credits.second-engineer": string;
		"track-credits.sitar": string;
		"track-credits.songwriter": string;
		"track-credits.sound-effects": string;
		"track-credits.sound-engineer": string;
		"track-credits.source": string;
		"track-credits.steel-guitar": string;
		"track-credits.strings": string;
		"track-credits.studio-musician": string;
		"track-credits.synthesizer": string;
		"track-credits.tape-realization": string;
		"track-credits.trumpet": string;
		"track-credits.upright-bass": string;
		"track-credits.vibraphone": string;
		"track-credits.viola": string;
		"track-credits.violin": string;
		"track-credits.vocal": string;
		"track-credits.vocal-arranger": string;
		"track-credits.vocal-engineer": string;
		"track-credits.vocal-ensemble": string;
		"track-credits.vocal-producer": string;
		"track-credits.vocals": string;
		"track-credits.voice-performer": string;
		"track-credits.work-arranger": string;
		"track-credits.writer": string;
		"track-credits.writers": string;
		"track-page.error": string;
		"track-page.from-the-album": string;
		"track-page.from-the-compilation": string;
		"track-page.from-the-ep": string;
		"track-page.from-the-single": string;
		"track-page.sign-into-premium-to-view-lyrics": string;
		"track-trailer": string;
		"tracklist-header.audiobooks-counter": { "one": string; "other": string };
		"tracklist-header.episodes-counter": { "one": string; "other": string };
		"tracklist-header.items-counter": { "one": string; "other": string };
		"tracklist-header.songs-counter": { "one": string; "other": string };
		"tracklist.a11y.pause": string;
		"tracklist.a11y.play": string;
		"tracklist.disc-sperator.title": string;
		"tracklist.drag.multiple.label": { "one": string; "other": string };
		"tracklist.header.actions": string;
		"tracklist.header.added-by": string;
		"tracklist.header.album": string;
		"tracklist.header.album-or-podcast": string;
		"tracklist.header.columns": string;
		"tracklist.header.date": string;
		"tracklist.header.date-added": string;
		"tracklist.header.duration": string;
		"tracklist.header.event": string;
		"tracklist.header.plays": string;
		"tracklist.header.release-date": string;
		"tracklist.header.title": string;
		"tracklist.header.venue": string;
		"tracklist.livestream": string;
		"tracklist.popular-tracks": string;
		"type.newEpisode": string;
		"type.newPodcastEpisode": string;
		"type.podcast": string;
		"type.podcastEpisode": string;
		"type.show": string;
		"type.showEpisode": string;
		"unfollow": string;
		"upgrade.button": string;
		"upgrade.tooltip.title": string;
		"user-fraud-verification.confirm-dialog.cancel": string;
		"user-fraud-verification.confirm-dialog.confirm": string;
		"user-fraud-verification.confirm-dialog.description": string;
		"user-fraud-verification.confirm-dialog.label": string;
		"user-fraud-verification.confirm-dialog.title": string;
		"user-fraud-verification.dialog-alert.describe": string;
		"user-fraud-verification.dialog-alert.ok": string;
		"user-fraud-verification.dialog-alert.title": string;
		"user-fraud-verification.snackbar.message": string;
		"user.account": string;
		"user.edit-details.choose-photo": string;
		"user.edit-details.error.failed-to-save": string;
		"user.edit-details.error.file-size-exceeded": string;
		"user.edit-details.error.file-upload-failed": string;
		"user.edit-details.error.missing-name": string;
		"user.edit-details.error.too-small": string;
		"user.edit-details.name-label": string;
		"user.edit-details.name-placeholder": string;
		"user.edit-details.remove-photo": string;
		"user.edit-details.title": string;
		"user.followers": { "one": string; "other": string };
		"user.following": { "one": string; "other": string };
		"user.log-out": string;
		"user.private-playlists": { "one": string; "other": string };
		"user.private-session": string;
		"user.public-playlists": { "one": string; "other": string };
		"user.settings": string;
		"user.setup-duo": string;
		"user.setup-family": string;
		"user.support": string;
		"user.they_follow_us": string;
		"user.unable-to-update": string;
		"user.update-available": string;
		"user.update-client": string;
		"video-player.cinema-mode": string;
		"video-player.default-view": string;
		"view.recently-played": string;
		"view.see-all": string;
		"view.web-player-home": string;
		"web-player.album.anniversary": { "one": string; "other": string };
		"web-player.album.open_coverart_modal": string;
		"web-player.album.premium-only-banner-album": string;
		"web-player.album.premium-only-banner-compilation": string;
		"web-player.album.premium-only-banner-ep": string;
		"web-player.album.premium-only-banner-single": string;
		"web-player.album.release": string;
		"web-player.aligned-curation.add-to-playlist-menu": string;
		"web-player.aligned-curation.button.cancel": string;
		"web-player.aligned-curation.button.done": string;
		"web-player.aligned-curation.button.new-playlist": string;
		"web-player.aligned-curation.contextmenu.new-playlist": string;
		"web-player.aligned-curation.feedback.added": string;
		"web-player.aligned-curation.feedback.added-to-library": string;
		"web-player.aligned-curation.feedback.change-button": string;
		"web-player.aligned-curation.feedback.changes-saved": string;
		"web-player.aligned-curation.feedback.removed": string;
		"web-player.aligned-curation.feedback.removed-from-library": string;
		"web-player.aligned-curation.search-placeholder": string;
		"web-player.aligned-curation.title": string;
		"web-player.aligned-curation.tooltips.add-to-liked-songs": string;
		"web-player.aligned-curation.tooltips.add-to-playlist": string;
		"web-player.aligned-curation.tooltips.add-to-your-episodes": string;
		"web-player.aligned-curation.tooltips.add-to-your-library": string;
		"web-player.artist.upcoming-release": string;
		"web-player.artist.upcoming-release.album": string;
		"web-player.artist.upcoming-release.ep": string;
		"web-player.artist.upcoming-release.single": string;
		"web-player.audiobooks.audiobook": string;
		"web-player.audiobooks.buy": string;
		"web-player.audiobooks.buyFree": string;
		"web-player.audiobooks.goToAudiobook": string;
		"web-player.audiobooks.narratedByX": string;
		"web-player.audiobooks.noRating": string;
		"web-player.audiobooks.rating.closeModal": string;
		"web-player.audiobooks.rating.goToApp": string;
		"web-player.audiobooks.rating.listenFirstDescription": string;
		"web-player.audiobooks.rating.listenFirstTitle": string;
		"web-player.audiobooks.rating.ok": string;
		"web-player.audiobooks.rating.rateAudiobook": string;
		"web-player.audiobooks.rating.rateThisAudiobook": string;
		"web-player.audiobooks.rating.starAriaLabel": { "one": string; "other": string };
		"web-player.audiobooks.rating.wantToRate": string;
		"web-player.audiobooks.retailPrice": string;
		"web-player.blend.duo-invite.description": string;
		"web-player.blend.group-invite.header": string;
		"web-player.blend.group-invite.warning": string;
		"web-player.blend.invite.button-title": string;
		"web-player.blend.invite.page-title": string;
		"web-player.buddy-feed.connect-button": string;
		"web-player.buddy-feed.connect-with-facebook-description": string;
		"web-player.buddy-feed.connect-with-facebook-title": string;
		"web-player.connect.bar.connected-state": string;
		"web-player.connect.bar.connecting-state": string;
		"web-player.connect.context-menu.forget-device": string;
		"web-player.connect.context-menu.incarnation-cast": string;
		"web-player.connect.context-menu.incarnation-connect": string;
		"web-player.connect.context-menu.incarnation-title": string;
		"web-player.connect.device-picker.ad-playing": string;
		"web-player.connect.device-picker.check-wifi": string;
		"web-player.connect.device-picker.check-wifi-subtitle": string;
		"web-player.connect.device-picker.connect-hub-external-link": string;
		"web-player.connect.device-picker.connect-to-device": string;
		"web-player.connect.device-picker.current-device": string;
		"web-player.connect.device-picker.device-unavailable": string;
		"web-player.connect.device-picker.from-this-computer": string;
		"web-player.connect.device-picker.from-this-web-browser": string;
		"web-player.connect.device-picker.get-premium": string;
		"web-player.connect.device-picker.google-cast": string;
		"web-player.connect.device-picker.google-cast-devices": string;
		"web-player.connect.device-picker.help-external-link": string;
		"web-player.connect.device-picker.install-spotify": string;
		"web-player.connect.device-picker.no-devices-found": string;
		"web-player.connect.device-picker.no-devices-local-network": string;
		"web-player.connect.device-picker.on-other-networks": string;
		"web-player.connect.device-picker.on-this-network": string;
		"web-player.connect.device-picker.play-from-another": string;
		"web-player.connect.device-picker.play-from-another-subtitle": string;
		"web-player.connect.device-picker.playstation-unauthorized": string;
		"web-player.connect.device-picker.restart-device": string;
		"web-player.connect.device-picker.restart-speaker": string;
		"web-player.connect.device-picker.restart-speaker-subtitle": string;
		"web-player.connect.device-picker.select-another-device": string;
		"web-player.connect.device-picker.switch-to-app": string;
		"web-player.connect.device-picker.switch-to-app-subtitle": string;
		"web-player.connect.device-picker.this-computer": string;
		"web-player.connect.device-picker.this-web-browser": string;
		"web-player.connect.device-picker.tts-playing": string;
		"web-player.connect.device-picker.unsupported-uri": string;
		"web-player.connect.device-picker.update-device": string;
		"web-player.connect.device-picker.wakeup-timeout": string;
		"web-player.connect.device-picker.wakingup-device": string;
		"web-player.connect.nudge.dj-voice-unavailable": string;
		"web-player.connect.nudge.listen-to-speaker": string;
		"web-player.cover-art-modal.close": string;
		"web-player.create-cover-art.background-change.image": string;
		"web-player.create-cover-art.background-choose.image": string;
		"web-player.create-cover-art.background-remove.image": string;
		"web-player.create-cover-art.cancel": string;
		"web-player.create-cover-art.close": string;
		"web-player.create-cover-art.gradient-color-add-color": string;
		"web-player.create-cover-art.gradient-color-refresh-colors": string;
		"web-player.create-cover-art.gradient-color-selection": string;
		"web-player.create-cover-art.header-title": string;
		"web-player.create-cover-art.image-alt": string;
		"web-player.create-cover-art.image-scale": string;
		"web-player.create-cover-art.save": string;
		"web-player.create-cover-art.section-background": string;
		"web-player.create-cover-art.section-image": string;
		"web-player.create-cover-art.section-text": string;
		"web-player.create-cover-art.section-text-size": string;
		"web-player.create-cover-art.section-text-size-selection": string;
		"web-player.cultural-moments.unsupported.appleAppStoreAlt": string;
		"web-player.cultural-moments.unsupported.googlePlayStoreAlt": string;
		"web-player.cultural-moments.unsupportedDescription": string;
		"web-player.cultural-moments.unsupportedHeading": string;
		"web-player.deeplink-intent.add-to-library.already-in-library": string;
		"web-player.deeplink-intent.add-to-library.artist-description": string;
		"web-player.deeplink-intent.add-to-library.description": string;
		"web-player.deeplink-intent.add-to-library.episodes-title": string;
		"web-player.deeplink-intent.add-to-library.liked-songs-title": string;
		"web-player.deeplink-intent.add-to-library.title": string;
		"web-player.download.remove-download-confirmation-dialog.cancel-button-text": string;
		"web-player.download.remove-download-confirmation-dialog.confirm-button-label": string;
		"web-player.download.remove-download-confirmation-dialog.confirm-button-text": string;
		"web-player.download.remove-download-confirmation-dialog.message": string;
		"web-player.download.remove-download-confirmation-dialog.message-remote": string;
		"web-player.download.remove-download-confirmation-dialog.title": string;
		"web-player.episode.description": string;
		"web-player.episode.transcript": string;
		"web-player.episode.transcript.disclaimer": string;
		"web-player.feature-activation-shelf.ai-dj.cta": string;
		"web-player.feature-activation-shelf.ai-dj.description": string;
		"web-player.feature-activation-shelf.ai-dj.title": string;
		"web-player.feature-activation-shelf.audio-quality.cta": string;
		"web-player.feature-activation-shelf.audio-quality.cta_alt": string;
		"web-player.feature-activation-shelf.audio-quality.description": string;
		"web-player.feature-activation-shelf.audio-quality.title": string;
		"web-player.feature-activation-shelf.audio_quality_toast_message": string;
		"web-player.feature-activation-shelf.blend.description": string;
		"web-player.feature-activation-shelf.blend.title": string;
		"web-player.feature-activation-shelf.collaborative-playlists.description": string;
		"web-player.feature-activation-shelf.collaborative-playlists.title": string;
		"web-player.feature-activation-shelf.generic-title": string;
		"web-player.feature-activation-shelf.group-sessions.cta": string;
		"web-player.feature-activation-shelf.group-sessions.description-general": string;
		"web-player.feature-activation-shelf.group-sessions.title": string;
		"web-player.feature-activation-shelf.invite.cta": string;
		"web-player.feature-activation-shelf.live-events.cta": string;
		"web-player.feature-activation-shelf.live-events.description": string;
		"web-player.feature-activation-shelf.live-events.title": string;
		"web-player.feature-activation-shelf.see_more": string;
		"web-player.feature-activation-shelf.smart-shuffle.cta": string;
		"web-player.feature-activation-shelf.smart-shuffle.description": string;
		"web-player.feature-activation-shelf.smart-shuffle.title": string;
		"web-player.liked-songs.clear-filter": string;
		"web-player.liked-songs.liked-songs-filter-tags": string;
		"web-player.lyrics.ad": string;
		"web-player.lyrics.error": string;
		"web-player.lyrics.noLyrics0": string;
		"web-player.lyrics.noLyrics1": string;
		"web-player.lyrics.noLyrics2": string;
		"web-player.lyrics.noLyrics3": string;
		"web-player.lyrics.providedBy": string;
		"web-player.lyrics.title": string;
		"web-player.lyrics.translate": string;
		"web-player.lyrics.translating.to": string;
		"web-player.lyrics.translation.none": string;
		"web-player.lyrics.translation.not_available": string;
		"web-player.lyrics.unsynced": string;
		"web-player.lyrics.upsell.button": string;
		"web-player.lyrics.upsell.title": string;
		"web-player.merch.seeAllUri": string;
		"web-player.merch.title": string;
		"web-player.notification-center.button-label": string;
		"web-player.notification-center.empty-state": string;
		"web-player.now-playing-view.artist-about.title": string;
		"web-player.now-playing-view.chapters": string;
		"web-player.now-playing-view.close.lyrics": string;
		"web-player.now-playing-view.credits": string;
		"web-player.now-playing-view.discover-more": string;
		"web-player.now-playing-view.dubbed-episodes.description-multiple": string;
		"web-player.now-playing-view.dubbed-episodes.description-single": string;
		"web-player.now-playing-view.dubbed-episodes.title-multiple": string;
		"web-player.now-playing-view.dubbed-episodes.title-single": string;
		"web-player.now-playing-view.dubbed-episodes.title-single-with-language": string;
		"web-player.now-playing-view.empty-queue": string;
		"web-player.now-playing-view.empty-queue-cta": string;
		"web-player.now-playing-view.label": string;
		"web-player.now-playing-view.lyrics.cinema-mode": string;
		"web-player.now-playing-view.minimize.lyrics": string;
		"web-player.now-playing-view.npv-merch": string;
		"web-player.now-playing-view.on-tour": string;
		"web-player.now-playing-view.onboarding.description": string;
		"web-player.now-playing-view.onboarding.dismiss": string;
		"web-player.now-playing-view.onboarding.do-not-show-again": string;
		"web-player.now-playing-view.onboarding.title": string;
		"web-player.now-playing-view.open-queue": string;
		"web-player.now-playing-view.original-episode.description": string;
		"web-player.now-playing-view.original-episode.description-with-language": string;
		"web-player.now-playing-view.original-episode.title": string;
		"web-player.now-playing-view.original-episode.title-with-language": string;
		"web-player.now-playing-view.podcast-about.title": string;
		"web-player.now-playing-view.show-all": string;
		"web-player.now-playing-view.show.lyrics": string;
		"web-player.now-playing-view.transcript": string;
		"web-player.now-playing-view.video.playing-in-pip": string;
		"web-player.now-playing-view.video.return-playback": string;
		"web-player.offline.empty-state.subtitle": string;
		"web-player.offline.empty-state.title": string;
		"web-player.pigeon.audio-quality.high.bitrate": string;
		"web-player.pigeon.audio-quality.high.bitrate-details": string;
		"web-player.pigeon.audio-quality.high.label": string;
		"web-player.pigeon.audio-quality.lossless": string;
		"web-player.pigeon.audio-quality.lossless-16.bitrate": string;
		"web-player.pigeon.audio-quality.lossless-16.bitrate-details-1": string;
		"web-player.pigeon.audio-quality.lossless-16.bitrate-details-2": string;
		"web-player.pigeon.audio-quality.lossless-16.label": string;
		"web-player.pigeon.audio-quality.lossless-24.bitrate": string;
		"web-player.pigeon.audio-quality.lossless-24.bitrate-details-1": string;
		"web-player.pigeon.audio-quality.lossless-24.bitrate-details-2": string;
		"web-player.pigeon.audio-quality.lossless-24.label": string;
		"web-player.pigeon.audio-quality.lossless-compatible-device": string;
		"web-player.pigeon.audio-quality.low.bitrate": string;
		"web-player.pigeon.audio-quality.low.bitrate-details": string;
		"web-player.pigeon.audio-quality.low.label": string;
		"web-player.pigeon.audio-quality.normal.bitrate": string;
		"web-player.pigeon.audio-quality.normal.bitrate-details": string;
		"web-player.pigeon.audio-quality.normal.label": string;
		"web-player.pigeon.audio-quality.unknown.label": string;
		"web-player.pigeon.audio-quality.very-high.bitrate": string;
		"web-player.pigeon.audio-quality.very-high.bitrate-details": string;
		"web-player.pigeon.audio-quality.very-high.label": string;
		"web-player.pigeon.get-started.button": string;
		"web-player.pigeon.get-started.subtitle": string;
		"web-player.pigeon.get-started.title": string;
		"web-player.pigeon.help-cards.bluetooth-degrades-lossless.body": string;
		"web-player.pigeon.help-cards.bluetooth-degrades-lossless.title": string;
		"web-player.pigeon.help-cards.connect-explanation.body": string;
		"web-player.pigeon.help-cards.connect-explanation.title": string;
		"web-player.pigeon.help-cards.default-to-very-high.body": string;
		"web-player.pigeon.help-cards.default-to-very-high.title": string;
		"web-player.pigeon.help-cards.listen-offline.body": string;
		"web-player.pigeon.help-cards.listen-offline.title": string;
		"web-player.pigeon.help-cards.lossless-unavailable.body": string;
		"web-player.pigeon.help-cards.lossless-unavailable.title": string;
		"web-player.pigeon.help-cards.need-to-redownload.body": string;
		"web-player.pigeon.help-cards.need-to-redownload.title": string;
		"web-player.pigeon.help-cards.opt-out-of-downgrade.body": string;
		"web-player.pigeon.help-cards.opt-out-of-downgrade.title": string;
		"web-player.pigeon.help-cards.poor-bandwidth-interferes.body": string;
		"web-player.pigeon.help-cards.poor-bandwidth-interferes.title": string;
		"web-player.pigeon.help-cards.update-settings.body": string;
		"web-player.pigeon.help-cards.update-settings.title": string;
		"web-player.pigeon.introduction.button.done": string;
		"web-player.pigeon.introduction.button.next": string;
		"web-player.pigeon.introduction.step-1.subtitle": string;
		"web-player.pigeon.introduction.step-1.title": string;
		"web-player.pigeon.introduction.step-2.subtitle": string;
		"web-player.pigeon.introduction.step-2.title": string;
		"web-player.pigeon.introduction.step-3.subtitle": string;
		"web-player.pigeon.introduction.step-3.title": string;
		"web-player.pigeon.introduction.step-4.subtitle": string;
		"web-player.pigeon.introduction.step-4.title": string;
		"web-player.pigeon.overview-card.title": string;
		"web-player.pigeon.quality-settings.auto-adjust-quality": string;
		"web-player.pigeon.quality-settings.auto-adjust-quality.subtitle-1": string;
		"web-player.pigeon.quality-settings.auto-adjust-quality.subtitle-2": string;
		"web-player.pigeon.quality-settings.disclaimer": string;
		"web-player.pigeon.quality-settings.listening-preferences": string;
		"web-player.pigeon.quality-settings.option-hint": string;
		"web-player.pigeon.quality-settings.title": string;
		"web-player.pip-mini-player.snackbar.link-opened-in-main-window": string;
		"web-player.pip-mini-player.upsell.cta-button": string;
		"web-player.pip-mini-player.upsell.subtitle": string;
		"web-player.pip-mini-player.upsell.title": string;
		"web-player.pip-mini-player.window-title": string;
		"web-player.playlist.booklist-not-supported-title": string;
		"web-player.playlist.booklist-not-supported.message": string;
		"web-player.playlist.daylist.next-update": string;
		"web-player.playlist.invite-collaborators.message": string;
		"web-player.playlist.more-like-this.section-header-title": string;
		"web-player.playlist.recommender-dsa-message": string;
		"web-player.prerelease-radar.subtitle": string;
		"web-player.prerelease-radar.title": string;
		"web-player.prerelease.album_anonymous_presave": string;
		"web-player.prerelease.album_feedback_presaved": string;
		"web-player.prerelease.album_tracklist_preview": string;
		"web-player.prerelease.audiobook_feedback_presaved": string;
		"web-player.prerelease.countdown_label": string;
		"web-player.prerelease.days": { "one": string; "other": string };
		"web-player.prerelease.hours": { "one": string; "other": string };
		"web-player.prerelease.listen_now": string;
		"web-player.prerelease.minutes": { "one": string; "other": string };
		"web-player.prerelease.presave": string;
		"web-player.prerelease.presaved": string;
		"web-player.prerelease.releases_on": string;
		"web-player.prerelease.seconds": { "one": string; "other": string };
		"web-player.puffin.activation-1.button": string;
		"web-player.puffin.activation-1.title": string;
		"web-player.puffin.activation-2.button-cancel": string;
		"web-player.puffin.activation-2.button-confirm": string;
		"web-player.puffin.activation-2.title": string;
		"web-player.puffin.activation-3.subtitle": string;
		"web-player.puffin.activation-3.title": string;
		"web-player.puffin.activation-dialog.button-cancel": string;
		"web-player.puffin.activation-dialog.button-confirm": string;
		"web-player.puffin.activation-dialog.subtitle": string;
		"web-player.puffin.activation-dialog.title": string;
		"web-player.puffin.button.done": string;
		"web-player.puffin.button.enhanced-listening": string;
		"web-player.puffin.error-troubleshooting": string;
		"web-player.puffin.get-started.button": string;
		"web-player.puffin.get-started.subtitle": string;
		"web-player.puffin.get-started.title": string;
		"web-player.puffin.listening-with.change-model": string;
		"web-player.puffin.listening-with.filters.externalization-subtitle": string;
		"web-player.puffin.listening-with.filters.externalization-title": string;
		"web-player.puffin.listening-with.filters.externalization-unavailable": string;
		"web-player.puffin.listening-with.filters.specific-subtitle": string;
		"web-player.puffin.listening-with.filters.specific-title": string;
		"web-player.puffin.listening-with.model": string;
		"web-player.puffin.listening-with.placeholder-model": string;
		"web-player.puffin.manual-selection.airpods.search-placeholder": string;
		"web-player.puffin.manual-selection.airpods.subtitle": string;
		"web-player.puffin.manual-selection.airpods.title": string;
		"web-player.puffin.manual-selection.empty.subtitle": string;
		"web-player.puffin.manual-selection.empty.title": string;
		"web-player.puffin.manual-selection.models-list": string;
		"web-player.puffin.manual-selection.not-found-button": string;
		"web-player.puffin.manual-selection.search-placeholder": string;
		"web-player.puffin.manual-selection.subtitle": string;
		"web-player.puffin.manual-selection.title": string;
		"web-player.puffin.reset-headphones.dialog.confirm": string;
		"web-player.puffin.reset-headphones.dialog.subtitle": string;
		"web-player.puffin.reset-headphones.dialog.title": string;
		"web-player.puffin.reset-headphones.menu-item": string;
		"web-player.puffin.signifier-text": string;
		"web-player.puffin.upsell.enhance-headphones": string;
		"web-player.puffin.upsell.enhance-headphones.cancel": string;
		"web-player.puffin.upsell.enhance-headphones.confirm": string;
		"web-player.puffin.upsell.enhanced-headphones": string;
		"web-player.puffin.upsell.enhanced-listening": string;
		"web-player.puffin.upsell.lossless-listening": string;
		"web-player.puffin.upsell.optimized-for": string;
		"web-player.puffin.wired-connection": string;
		"web-player.queue-history.item-type.chapter": string;
		"web-player.queue-history.item-type.episode": string;
		"web-player.queue-history.item-type.track": string;
		"web-player.read-along-transcript.now-playing-view.read-along": string;
		"web-player.read-along-transcript.sync.button": string;
		"web-player.remote-downloads.context-menu.this-computer": string;
		"web-player.remote-downloads.feedback.downloading-to-remote-device": string;
		"web-player.search-modal.a11y.contentbyartist": string;
		"web-player.search-modal.a11y.label": string;
		"web-player.search-modal.instructions.navigate": string;
		"web-player.search-modal.instructions.open": string;
		"web-player.search-modal.instructions.play": string;
		"web-player.search-modal.lyrics-match": string;
		"web-player.search-modal.offline": string;
		"web-player.search-modal.placeholder": string;
		"web-player.search-modal.result.album": string;
		"web-player.search-modal.result.artist": string;
		"web-player.search-modal.result.audiobook": string;
		"web-player.search-modal.result.episode": string;
		"web-player.search-modal.result.genre": string;
		"web-player.search-modal.result.playlist": string;
		"web-player.search-modal.result.podcast": string;
		"web-player.search-modal.result.track": string;
		"web-player.search-modal.result.user": string;
		"web-player.search-modal.title": string;
		"web-player.settings.autoplay-dsa-enabled": string;
		"web-player.settings.content-preferences": string;
		"web-player.settings.personalized-recommendations": string;
		"web-player.settings.personalized-recommendations-body-text": string;
		"web-player.settings.personalized-recommendations-turned-off.modal-body": string;
		"web-player.settings.personalized-recommendations-turned-off.modal-body-missing-features-intro": string;
		"web-player.settings.personalized-recommendations-turned-off.modal-body-persistent-features-intro":
			string;
		"web-player.settings.personalized-recommendations-turned-off.modal-confirm": string;
		"web-player.settings.personalized-recommendations-turned-off.modal-disclaimer": string;
		"web-player.settings.personalized-recommendations-turned-off.modal-header": string;
		"web-player.settings.personalized-recommendations.error-modal-button": string;
		"web-player.settings.personalized-recommendations.error-modal-message": string;
		"web-player.settings.personalized-recommendations.modal-body": string;
		"web-player.settings.personalized-recommendations.modal-body-missing-features-1": string;
		"web-player.settings.personalized-recommendations.modal-body-missing-features-2": string;
		"web-player.settings.personalized-recommendations.modal-body-missing-features-3": string;
		"web-player.settings.personalized-recommendations.modal-body-missing-features-intro": string;
		"web-player.settings.personalized-recommendations.modal-body-persistent-features-1": string;
		"web-player.settings.personalized-recommendations.modal-body-persistent-features-intro": string;
		"web-player.settings.personalized-recommendations.modal-cancel": string;
		"web-player.settings.personalized-recommendations.modal-confirm": string;
		"web-player.settings.personalized-recommendations.modal-delay-disclaimer": string;
		"web-player.settings.personalized-recommendations.modal-header": string;
		"web-player.show.rating.header": string;
		"web-player.show.rating.listenFirstDescription": string;
		"web-player.show.rating.listenFirstTitle": string;
		"web-player.show.rating.rateShow": string;
		"web-player.show.rating.snackbarFailure": string;
		"web-player.show.rating.snackbarSuccess": string;
		"web-player.show.rating.starAriaLabel": { "one": string; "other": string };
		"web-player.show.rating.submit": string;
		"web-player.show.rating.want-to-rate": string;
		"web-player.smart-shuffle.activation-message": string;
		"web-player.smart-shuffle.activation-text": string;
		"web-player.smart-shuffle.add-to-playlist-button": string;
		"web-player.smart-shuffle.add-to-playlist-button-fallback": string;
		"web-player.smart-shuffle.add-to-playlist-feedback": string;
		"web-player.smart-shuffle.add-to-playlist-feedback-fallback": string;
		"web-player.smart-shuffle.button-disable-shuffle-generic": string;
		"web-player.smart-shuffle.button-disable-shuffle-specific": string;
		"web-player.smart-shuffle.button-enable-shuffle-generic": string;
		"web-player.smart-shuffle.button-enable-shuffle-specific": string;
		"web-player.smart-shuffle.button-enable-smart-shuffle-generic": string;
		"web-player.smart-shuffle.button-enable-smart-shuffle-specific": string;
		"web-player.smart-shuffle.disabled-smart-shuffle": string;
		"web-player.smart-shuffle.dsa-message": string;
		"web-player.smart-shuffle.enabled-smart-shuffle": string;
		"web-player.smart-shuffle.enabled-smart-shuffle-not-active-playlist": string;
		"web-player.smart-shuffle.icon-hover-label": string;
		"web-player.smart-shuffle.introduction-modal-description": string;
		"web-player.smart-shuffle.introduction-modal-ok-button": string;
		"web-player.smart-shuffle.introduction-modal-title": string;
		"web-player.smart-shuffle.menu-button": string;
		"web-player.smart-shuffle.menu-text": string;
		"web-player.smart-shuffle.offline-add-recommendation-feedback": string;
		"web-player.smart-shuffle.offline-remove-recommendation-feedback": string;
		"web-player.smart-shuffle.removed-from-recommendations-button": string;
		"web-player.smart-shuffle.removed-from-recommendations-feedback": string;
		"web-player.smart-shuffle.removed-from-recommendations-feedback-undo": string;
		"web-player.smart-shuffle.removed-from-recommendations-feedback-undone": string;
		"web-player.smart-shuffle.shuffle": string;
		"web-player.smart-shuffle.smart-shuffle": string;
		"web-player.social-connect.controls.participant-volume-control": string;
		"web-player.social-connect.controls.queue-only-mode": string;
		"web-player.social-connect.end-session.cancel": string;
		"web-player.social-connect.end-session.confirm": string;
		"web-player.social-connect.end-session.end-session-button": string;
		"web-player.social-connect.end-session.sub-title": string;
		"web-player.social-connect.end-session.title": string;
		"web-player.social-connect.facepile.and-others": { "one": string; "other": string };
		"web-player.social-connect.generic-error.confirmation-button": string;
		"web-player.social-connect.generic-error.sub-title": string;
		"web-player.social-connect.generic-error.title": string;
		"web-player.social-connect.group-session-logo-alt": string;
		"web-player.social-connect.invitation-modal.button-primary": string;
		"web-player.social-connect.invitation-modal.button-tertiary": string;
		"web-player.social-connect.invitation-modal.subtitle": string;
		"web-player.social-connect.invitation-modal.success-toast-message": string;
		"web-player.social-connect.invitation-modal.title": string;
		"web-player.social-connect.invitation.qr-code.description": string;
		"web-player.social-connect.invitation.qr-code.title": string;
		"web-player.social-connect.invite-button": string;
		"web-player.social-connect.join-modal.button-primary": string;
		"web-player.social-connect.join-modal.button-tertiary": string;
		"web-player.social-connect.join-modal.continue-on-this-device": string;
		"web-player.social-connect.join-modal.continue-on-this-device-subtitle": string;
		"web-player.social-connect.join-modal.device-name.this-browser": string;
		"web-player.social-connect.join-modal.device-name.this-computer": string;
		"web-player.social-connect.join-modal.play-from-host-speaker": string;
		"web-player.social-connect.join-modal.play-from-host-speaker-subtitle": string;
		"web-player.social-connect.join-modal.privacy-notice": string;
		"web-player.social-connect.join-modal.success.subtitle": string;
		"web-player.social-connect.join-modal.success.title": string;
		"web-player.social-connect.join-modal.title": string;
		"web-player.social-connect.kick-users.remove-the-user": string;
		"web-player.social-connect.leave-session.cancel": string;
		"web-player.social-connect.leave-session.leave-session-button": string;
		"web-player.social-connect.leave-session.sub-title": string;
		"web-player.social-connect.leave-session.title": string;
		"web-player.social-connect.menu-action.title": string;
		"web-player.social-connect.mobile-only.confirmation-button": string;
		"web-player.social-connect.mobile-only.description": string;
		"web-player.social-connect.mobile-only.title": string;
		"web-player.social-connect.participant-list.back-to-queue": string;
		"web-player.social-connect.participant-list.guest": string;
		"web-player.social-connect.participant-list.host": string;
		"web-player.social-connect.participant-list.remove-all-guests": string;
		"web-player.social-connect.participant-list.remove-guest": string;
		"web-player.social-connect.participant-list.remove-guest-accessible-label": string;
		"web-player.social-connect.participant-list.remove-guest-cancel": string;
		"web-player.social-connect.participant-list.remove-guest-dialog": string;
		"web-player.social-connect.participant-list.subtitle": string;
		"web-player.social-connect.participant-list.title": string;
		"web-player.social-connect.participant-list.visibility-info": string;
		"web-player.social-connect.premium-upsell.confirmation-button": string;
		"web-player.social-connect.promotion.how-to-start-a-jam-reminder": string;
		"web-player.social-connect.redirect-modal.cancel-button": string;
		"web-player.social-connect.redirect-modal.confirmation-button": string;
		"web-player.social-connect.redirect-modal.sub-title": string;
		"web-player.social-connect.redirect-modal.title": string;
		"web-player.social-connect.session-ended.confirmation-button": string;
		"web-player.social-connect.session-ended.sub-title": string;
		"web-player.social-connect.session-ended.title": string;
		"web-player.social-connect.session-info.title": string;
		"web-player.social-connect.share.title": string;
		"web-player.social-connect.toast.ended": string;
		"web-player.social-connect.toast.multiple-people-joined": string;
		"web-player.social-connect.toast.multiple-people-left": string;
		"web-player.social-connect.toast.one-person-joined": string;
		"web-player.social-connect.toast.one-person-left": string;
		"web-player.social-connect.toast.participant-volume-control.enabled": string;
		"web-player.social-connect.toast.participant-volume-control.guest.disabled": string;
		"web-player.social-connect.toast.participant-volume-control.host.disabled": string;
		"web-player.social-connect.toast.queue-only-mode.guest.disabled": string;
		"web-player.social-connect.toast.queue-only-mode.guest.enabled": string;
		"web-player.social-connect.toast.queue-only-mode.guest.warning": string;
		"web-player.social-connect.toast.queue-only-mode.host.disabled": string;
		"web-player.social-connect.toast.queue-only-mode.host.enabled": string;
		"web-player.social-connect.toast.two-people-joined": string;
		"web-player.social-connect.toast.two-people-left": string;
		"web-player.venues.concerts": string;
		"web-player.venues.error.generic.title": string;
		"web-player.venues.error.not_found.message": string;
		"web-player.venues.error.not_found.title": string;
		"web-player.venues.venue": string;
		"web-player.watch-feed.view.next-button": string;
		"web-player.watch-feed.view.previous-button": string;
		"web-player.watch-feed.view.shortcuts.add-to-library": string;
		"web-player.watch-feed.view.shortcuts.add-to-queue": string;
		"web-player.watch-feed.view.shortcuts.description": string;
		"web-player.watch-feed.view.shortcuts.mute-unmute": string;
		"web-player.watch-feed.view.shortcuts.next": string;
		"web-player.watch-feed.view.shortcuts.previous": string;
		"web-player.watch-feed.view.shortcuts.title": string;
		"web-player.whats-new-feed.button-label": string;
		"web-player.whats-new-feed.earlier-section-title": string;
		"web-player.whats-new-feed.filters.episodes": string;
		"web-player.whats-new-feed.filters.music": string;
		"web-player.whats-new-feed.filters.notifications": string;
		"web-player.whats-new-feed.filters.options": string;
		"web-player.whats-new-feed.new-section-title": string;
		"web-player.whats-new-feed.panel.empty-results-all.message": string;
		"web-player.whats-new-feed.panel.empty-results-all.title": string;
		"web-player.whats-new-feed.panel.empty-results-music.message": string;
		"web-player.whats-new-feed.panel.empty-results-music.title": string;
		"web-player.whats-new-feed.panel.empty-results-podcast.message": string;
		"web-player.whats-new-feed.panel.empty-results-podcast.title": string;
		"web-player.whats-new-feed.panel.error": string;
		"web-player.whats-new-feed.panel.error.button": string;
		"web-player.whats-new-feed.panel.subtitle": string;
		"web-player.whats-new-feed.panel.title": string;
		"web-player.your-dj.jumpbutton.tooltip.desc": string;
		"web-player.your-dj.jumpbutton.tooltip.hover": string;
		"web-player.your-dj.jumpbutton.tooltip.title": string;
		"web-player.your-dj.npv.queue.description": string;
		"web-player.your-dj.npv.queue.title": string;
		"web-player.your-dj.upsell.notavailable.description": string;
		"web-player.your-dj.upsell.notavailable.gotolink": string;
		"web-player.your-dj.upsell.notavailable.notnow": string;
		"web-player.your-dj.upsell.notavailable.title": string;
		"web-player.your-dj.upsell.notavailableonweb.ack": string;
		"web-player.your-dj.upsell.notavailableonweb.description": string;
		"web-player.your-dj.upsell.notavailableonweb.title": string;
		"web-player.your-dj.upsell.premium.description": string;
		"web-player.your-dj.upsell.premium.no": string;
		"web-player.your-dj.upsell.premium.title": string;
		"web-player.your-dj.upsell.premium.yes": string;
		"web-player.your-dj.ylx.tooltip.description": string;
		"web-player.your-library-x.clear_filters": string;
		"web-player.your-library-x.collapse-folder": string;
		"web-player.your-library-x.collapse-your-library": string;
		"web-player.your-library-x.create.button-label": string;
		"web-player.your-library-x.create.create-a-new-playlist": string;
		"web-player.your-library-x.create.create-a-playlist-folder": string;
		"web-player.your-library-x.custom-ordering-onboarding-text": string;
		"web-player.your-library-x.default_folder_name": string;
		"web-player.your-library-x.download-progress-count-out-of-total": string;
		"web-player.your-library-x.download-progress-title": string;
		"web-player.your-library-x.dsa-message": string;
		"web-player.your-library-x.dsa-message-link": string;
		"web-player.your-library-x.empty-results-text-short": string;
		"web-player.your-library-x.empty-results-title-short": string;
		"web-player.your-library-x.empty-state-folder-subtitle": string;
		"web-player.your-library-x.empty-state-folder-title": string;
		"web-player.your-library-x.empty-state-playlists-cta": string;
		"web-player.your-library-x.empty-state-playlists-subtitle": string;
		"web-player.your-library-x.empty-state-playlists-title": string;
		"web-player.your-library-x.empty-state-podcasts-browse": string;
		"web-player.your-library-x.empty-state-podcasts-keep-you-updated": string;
		"web-player.your-library-x.empty-state-podcasts-to-follow": string;
		"web-player.your-library-x.enlarge-your-library": string;
		"web-player.your-library-x.error-body": string;
		"web-player.your-library-x.error-button": string;
		"web-player.your-library-x.error-title": string;
		"web-player.your-library-x.expand-folder": string;
		"web-player.your-library-x.expand-your-library": string;
		"web-player.your-library-x.expanded-list-header.date-added": string;
		"web-player.your-library-x.expanded-list-header.played-at": string;
		"web-player.your-library-x.expanded-list-header.title": string;
		"web-player.your-library-x.feedback-remove-from-library-dialog-cancel-button": string;
		"web-player.your-library-x.feedback-remove-from-library-dialog-confirm-button": string;
		"web-player.your-library-x.feedback-remove-from-library-dialog-description": string;
		"web-player.your-library-x.feedback-remove-from-library-dialog-description-album": string;
		"web-player.your-library-x.feedback-remove-from-library-dialog-description-artist": string;
		"web-player.your-library-x.feedback-remove-from-library-dialog-description-audiobook": string;
		"web-player.your-library-x.feedback-remove-from-library-dialog-description-playlist": string;
		"web-player.your-library-x.feedback-remove-from-library-dialog-description-show": string;
		"web-player.your-library-x.feedback-remove-from-library-dialog-title": string;
		"web-player.your-library-x.filter_options": string;
		"web-player.your-library-x.grid-view": string;
		"web-player.your-library-x.list-view": string;
		"web-player.your-library-x.navigate-back-folder": string;
		"web-player.your-library-x.pin-error.message": string;
		"web-player.your-library-x.pin-error.no-pin-in-folder.message": string;
		"web-player.your-library-x.pin-error.no-pin-in-folder.title": string;
		"web-player.your-library-x.pin-error.ok": string;
		"web-player.your-library-x.pin-error.title": string;
		"web-player.your-library-x.pinned": string;
		"web-player.your-library-x.reduce-your-library": string;
		"web-player.your-library-x.rename-folder": string;
		"web-player.your-library-x.rows.folder.number-of-folders": { "one": string; "other": string };
		"web-player.your-library-x.rows.folder.number-of-playlists": { "one": string; "other": string };
		"web-player.your-library-x.rows.liked-songs.subtitle": { "one": string; "other": string };
		"web-player.your-library-x.rows.local-files.subtitle": { "one": string; "other": string };
		"web-player.your-library-x.show-less": string;
		"web-player.your-library-x.show-more": string;
		"web-player.your-library-x.sort-and-view-picker.button-aria-label": string;
		"web-player.your-library-x.sort-and-view-picker.compact": string;
		"web-player.your-library-x.sort-and-view-picker.grid": string;
		"web-player.your-library-x.sort-and-view-picker.grid-density-label": string;
		"web-player.your-library-x.sort-and-view-picker.list": string;
		"web-player.your-library-x.sort-and-view-picker.view-as": string;
		"web-player.your-library-x.sort-and-view-picker.view-onboarding": string;
		"web-player.your-library-x.sort_by": string;
		"web-player.your-library-x.subtitle-your-episodes": string;
		"web-player.your-library-x.text-filter.albums-placeholder": string;
		"web-player.your-library-x.text-filter.artists-placeholder": string;
		"web-player.your-library-x.text-filter.audiobooks-placeholder": string;
		"web-player.your-library-x.text-filter.downloaded-placeholder": string;
		"web-player.your-library-x.text-filter.generic-placeholder": string;
		"web-player.your-library-x.text-filter.playlists-placeholder": string;
		"web-player.your-library-x.text-filter.shows-placeholder": string;
		"web-player.your-library-x.type-album": string;
		"web-player.your-library-x.type-artist": string;
		"web-player.your-library-x.type-audiobook": string;
		"web-player.your-library-x.type-folder": string;
		"web-player.your-library-x.type-playlist": string;
		"web-player.your-library-x.type-prerelease-album": string;
		"web-player.your-library-x.type-prerelease-audiobook": string;
		"web-player.your-library-x.type-show": string;
		"web-player.your-library-x.unpin-confirmation-dialog.cancel-button-text": string;
		"web-player.your-library-x.unpin-confirmation-dialog.confirm-button-label-folder": string;
		"web-player.your-library-x.unpin-confirmation-dialog.confirm-button-label-playlist": string;
		"web-player.your-library-x.unpin-confirmation-dialog.confirm-button-text": string;
		"web-player.your-library-x.unpin-confirmation-dialog.message-folder": string;
		"web-player.your-library-x.unpin-confirmation-dialog.message-playlist": string;
		"web-player.your-library-x.unpin-confirmation-dialog.title-folder": string;
		"web-player.your-library-x.unpin-confirmation-dialog.title-playlist": string;
		"web-player.your-library-x.your-library": string;
		"web-player.your-sound-capsule-modal.dismiss": string;
		"web-player.your-sound-capsule-modal.get-premium": string;
		"web-player.your-sound-capsule-modal.not-available-text": string;
		"web-player.your-sound-capsule-modal.not-available-title": string;
		"web-player.your-sound-capsule-modal.open-app-text": string;
		"web-player.your-sound-capsule-modal.open-app-title": string;
		"web-player.your-sound-capsule-modal.premium-text": string;
		"web-player.your-sound-capsule-modal.premium-title": string;
		"wrapped.ineligible.description.2022": string;
		"wrapped.logged_in_and_eligible.description.2022": string;
		"wrapped.logged_out_or_eligible.description.2022": string;
		"wrapped.title.2022": string;
		"ylx.clicktoplay": string;
	};
	"getTransport": () => ReturnType<
		PlatformAutoGen["getAdManagers"]
	>["home"]["logger"]["eventSender"]["transport"];
	"getUBILogger": () => {
		"formatUiNavigateEvent": (a: any) => any;
		"interaction": undefined;
		"ubiLogger": {
			"authenticationProvider": { "isAuthenticated": () => boolean };
			"contextualProviders": {
				"playContextUriProvider": { "getPlayContextUri": () => string };
				"playbackIdProvider": { "getPlaybackId": () => null };
			};
			"disableAutoBackgroundMonitoring": boolean;
			"eventSender": ReturnType<PlatformAutoGen["getAdManagers"]>["home"]["logger"]["eventSender"];
			"pageInstanceIdProvider": {
				"storageManager": {
					"storageAdapter": { "items": Map<any, any> } & {
						"clear": () => any;
						"getItem": (a: any) => any;
						"removeItem": (a: any) => any;
						"setItem": (a: any, b: any) => any;
					};
				} & {
					"clear": () => any;
					"getItem": (a: any) => any;
					"getStorageType": () => any;
					"removeItem": (a: any) => any;
					"setItem": (a: any, b: any) => any;
				};
			} & { "getPageInstanceId": () => any; "setPageInstanceId": (a: any) => any };
			"pageUriProvider": {
				"storageManager": ReturnType<
					PlatformAutoGen["getUBILogger"]
				>["ubiLogger"]["pageInstanceIdProvider"]["storageManager"];
			} & { "getPageUri": () => any; "setPageUri": (a: any) => any };
			"pageViewLogger": {
				"authenticationProvider": ReturnType<
					PlatformAutoGen["getUBILogger"]
				>["ubiLogger"]["authenticationProvider"];
				"disableAutoBackgroundMonitoring": boolean;
				"eventSender": ReturnType<PlatformAutoGen["getAdManagers"]>["home"]["logger"]["eventSender"];
				"flowIdProvider": undefined;
				"handleBackgroundStates": () => undefined;
				"pageInstanceIdProvider": ReturnType<
					PlatformAutoGen["getUBILogger"]
				>["ubiLogger"]["pageInstanceIdProvider"];
				"pageUriProvider": ReturnType<PlatformAutoGen["getUBILogger"]>["ubiLogger"]["pageUriProvider"];
				"storageManager": ReturnType<
					PlatformAutoGen["getUBILogger"]
				>["ubiLogger"]["pageInstanceIdProvider"]["storageManager"];
			} & {
				"addEventListeners": () => any;
				"completeNavigation": (a: any) => any;
				"generatePageInstanceId": () => string;
				"getCurrentEntityUri": () => any;
				"getCurrentNavigationalRoot": () => any;
				"getCurrentPageId": () => any;
				"getCurrentPageInstanceId": () => any;
				"getNavigationStatus": () => any;
				"getPendingInteractionId": () => any;
				"getPendingNavigationReason": () => any;
				"getPendingNavigationalRoot": () => any;
				"handleBackgroundStates": ReturnType<
					PlatformAutoGen["getUBILogger"]
				>["ubiLogger"]["pageViewLogger"]["handleBackgroundStates"];
				"logClientGainedFocus": () => any;
				"logClientLostFocus": () => any;
				"populateNavigationReason": () => any;
				"removeEventListeners": () => any;
				"resetNavStartInfo": () => any;
				"setCurrent": (a: any, b: any, c: any, d: any) => any;
				"setCurrentEntityUri": (a: any) => any;
				"setCurrentNavigationalRoot": (a: any) => any;
				"setCurrentPageId": (a: any) => any;
				"setCurrentPageInstanceId": (a: any) => any;
				"setNavigationStatus": (a: any) => any;
				"setPendingInteractionId": (a: any) => any;
				"setPendingNavigationReason": (a: any) => any;
				"setPendingNavigationalRoot": (a: any) => any;
				"startNavigation": (a: any) => any;
			};
			"storageManager": ReturnType<
				PlatformAutoGen["getUBILogger"]
			>["ubiLogger"]["pageInstanceIdProvider"]["storageManager"];
		} & {
			"getPageInstanceId": () => any;
			"logClientGainedFocus": () => any;
			"logClientLostFocus": () => any;
			"logImpression": (a: any) => any;
			"logInteraction": (a: any) => any;
			"logNavigation": (a: any, b: any) => any;
			"logNavigationEnd": (a: any) => any;
			"logNavigationStart": (a: any) => any;
			"registerEventListeners": () => any;
			"unregisterEventListeners": () => any;
		};
	} & {
		"getInteractionId": (a: any) => any;
		"logClientGainedFocus": () => any;
		"logClientLostFocus": () => any;
		"logImpression": (a: any) => any;
		"logInteraction": (a: any) => any;
		"logNavigation": (a: any) => any;
	};
	"getUpdateAPI": () => {
		"_cosmos": ReturnType<
			PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
		>["_playerApi"]["_cosmos"];
	} & {
		"applyUpdate": () => Promise<any>;
		"getVersionInfo": () => Promise<any>;
		"prepareUpdate": () => Promise<any>;
		"subscribe": (a: any) => any;
	};
	"getUrlDispenserServiceClient": () => ReturnType<
		PlatformAutoGen["getSocialConnectAPI"]
	>["urlDispenserServiceClient"];
	"getUserAPI": () => {
		"_cosmos": ReturnType<
			PlatformAutoGen["getAudiobooksPremiumConsumptionCapObserverAPI"]
		>["_playerApi"]["_cosmos"];
	} & { "getUser": () => Promise<any> };
	"getVideoAPI": () => any;
	"initialProductState": {
		"ab-ad-player-targeting": string;
		"ab-ad-requester": string;
		"ab-android-push-notifications": string;
		"ab-browse-music-tuesday": string;
		"ab-collection-bookmark-model": string;
		"ab-collection-followed-artists-only": string;
		"ab-collection-hide-unavailable-albums": string;
		"ab-collection-offline-mode": string;
		"ab-collection-union": string;
		"ab-desktop-hide-follow": string;
		"ab-desktop-playlist-annotation-edit": string;
		"ab-mobile-discover": string;
		"ab-mobile-running-onlymanualmode": string;
		"ab-mobile-running-tempo-detection": string;
		"ab-mobile-social-feed": string;
		"ab-mobile-startpage": string;
		"ab-moments-experience": string;
		"ab-new-share-flow": string;
		"ab-play-history": string;
		"ab-playlist-extender": string;
		"ab-test-group": string;
		"ab-watch-now": string;
		"ab_recently_played_feature_time_filter_threshold": string;
		"active-session-days": string;
		"ad-formats-preroll-video": string;
		"ad-formats-video-takeover": string;
		"ad-persist-reward-time": string;
		"ad-session-persistence": string;
		"addon-hifi": string;
		"ads": string;
		"allow-override-internal-prefs": string;
		"ap-resolve-pods": string;
		"app-developer": string;
		"apply-child-content-restrictions": string;
		"audio-preview-url-template": string;
		"audio-quality": string;
		"audiobook-onboarding-completed": string;
		"audiobook-onboarding-dismissed": string;
		"autoplay": string;
		"backend-advised-bitrate": string;
		"browse-overview-enabled": string;
		"buffering-strategy": string;
		"buffering-strategy-parameters": string;
		"capper-profile": string;
		"capping-bar-threshold": string;
		"catalogue": string;
		"collection": string;
		"country": string;
		"created_by_partner": string;
		"dma-mode-available": string;
		"dma-mode-enabled": string;
		"dsa-mode-available": string;
		"dsa-mode-enabled": string;
		"employee-free-opt-in": string;
		"enable-annotations": string;
		"enable-annotations-read": string;
		"enable-autostart": string;
		"enable-crossfade": string;
		"enable-gapless": string;
		"expiry": string;
		"explicit-content": string;
		"fb-grant-permission-local-render": string;
		"fb-info-confirmation": string;
		"filter-explicit-content": string;
		"financial-product": string;
		"has-audiobooks-subscription": string;
		"head-file-caching": string;
		"head-files-url": string;
		"hifi-eligible": string;
		"hifi-optin-intent": string;
		"high-bitrate": string;
		"image-url": string;
		"incognito_mode_timeout": string;
		"india-experience": string;
		"instant-search": string;
		"instant-search-expand-sidebar": string;
		"is-cheetara": string;
		"is-pigeon": string;
		"is-puffin": string;
		"is-standalone-audiobooks": string;
		"is_email_verified": string;
		"key-caching-auto-offline": string;
		"key-caching-max-count": string;
		"key-caching-max-offline-seconds": string;
		"key-memory-cache-mode": string;
		"last-premium-activation-date": string;
		"lastfm-session": string;
		"libspotify": string;
		"license-acceptance-grace-days": string;
		"license-agreements": string;
		"local-files-import": string;
		"loudness-levels": string;
		"metadata-link-lookup-modes": string;
		"mobile": string;
		"mobile-browse": string;
		"mobile-login": string;
		"mobile-payment": string;
		"name": string;
		"network-operator-premium-activation": string;
		"nft-disabled": string;
		"obfuscate-restricted-tracks": string;
		"offline": string;
		"on-demand": string;
		"on-demand-trial": string;
		"pause-after": string;
		"payments-initial-campaign": string;
		"payments-locked-state": string;
		"player-license": string;
		"playlist-annotations-markup": string;
		"playlist-folders": string;
		"preferred-locale": string;
		"prefetch-keys": string;
		"prefetch-strategy": string;
		"prefetch-window-max": string;
		"product": string;
		"product-expiry": string;
		"profile-image-upload": string;
		"public-toplist": string;
		"publish-activity": string;
		"publish-playlist": string;
		"radio": string;
		"remote-control": string;
		"restrict-playlist-collaboration": string;
		"send-email": string;
		"shows-collection": string;
		"shows-collection-jam": string;
		"shuffle": string;
		"shuffle-algorithm": string;
		"sidebar-navigation-enabled": string;
		"social-session": string;
		"social-session-free-tier": string;
		"storage-size-config": string;
		"streaming": string;
		"streaming-only-premium": string;
		"streaming-rules": string;
		"track-cap": string;
		"ugc-abuse-report": string;
		"ugc-abuse-report-url": string;
		"unrestricted": string;
		"use-fb-publish-backend": string;
		"use-pl3": string;
		"use-playlist-app": string;
		"use-playlist-uris": string;
		"user-profile-show-invitation-codes": string;
		"video-cdn-sampling": string;
		"video-device-blacklisted": string;
		"video-initial-bitrate": string;
		"video-keyframe-url": string;
		"video-manifest-url": string;
		"video-wifi-initial-bitrate": string;
		"wanted-licenses": string;
		"widevine-license-url": string;
		"yl-kids-restricted-content": string;
	};
	"initialUser": {
		"avatarBackgroundColor": number;
		"displayName": string;
		"images": Array<>;
		"type": string;
		"uri": string;
		"username": string;
	};
	"isDeveloperMode": boolean;
	"isVideoSupported": boolean;
	"operatingSystem": string;
	"username": string;
	"version": string;
};
