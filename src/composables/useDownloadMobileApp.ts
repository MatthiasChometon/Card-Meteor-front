export function useDownloadMobileApp() {
  let deferredPrompt: any

  window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e
  })

  async function download() {
    if (deferredPrompt !== null) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted')
        deferredPrompt = null
    }
  }

  return {
    download,
  }
}
