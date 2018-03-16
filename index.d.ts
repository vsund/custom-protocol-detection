/**
 * Checks whether a given protocol handler exists and performs corresponding actions
 * 
 * @param protocolURI Protocol URI to check for
 * @param failCallback Callback function to execute when the protocol handler doesn't existt
 * @param successCallback Callback function to execute when the protocol handler exists
 * @param unsupportedBrowserCallback Callback function to execute when found an unsupported browser
 */
export declare function protocolCheck(
    protocolURI: string, failCallback: () => void, successCallback: () => void, unsupportedBrowserCallback: () => void
): void;
