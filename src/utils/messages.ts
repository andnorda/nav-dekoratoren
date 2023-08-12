export const postMessageToApp = (event: string, payload: any) => {
    const message = {
        source: 'decorator',
        event: event,
        payload,
    };
    window.postMessage(message, window.location.origin);
};

export const msgSafetyCheck = (message: MessageEvent) => {
    const { origin } = message;
    // Only allow messages from own location
    if (window.location.href.indexOf(origin) === 0) {
        return true;
    }
    return false;
};
