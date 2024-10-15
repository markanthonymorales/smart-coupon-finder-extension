export async function getUrl() {
    return new Promise((resolve) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          resolve(tabs[0].url || '');
        });
    });
}

export async function getMeta(property: string) {
    return new Promise((resolve) => {
        chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
            chrome.scripting.executeScript({
              target: { tabId: tabs[0].id! },
              function: async (meta_property: string) => {
                const meta: any = document.querySelector(`meta[${meta_property}]`);
                console.log(meta);
                if (meta) {
                  return meta.content;
                }
    
                return '';
              },
              args: [property]
            }, async (response: any) => {
                resolve(response[0].result);
            });
        });
    });
}
