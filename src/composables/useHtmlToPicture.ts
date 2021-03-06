import { toPng } from 'html-to-image'
import type { Ref } from 'vue'

export function useHtmlToPicture(htmlId: string) {
  const picturePath = ref('')
  const picture: Ref<File> = ref(new File([], 'new.png'))

  const getPicturePath = async() => {
    const htmlToConvert = document.getElementById(htmlId)
    if (htmlToConvert !== null) {
      picturePath.value = await toPng(htmlToConvert)
        .catch((error) => {
          console.error('oops, something went wrong!', error)
          return ''
        })
      picture.value = await urltoFile(picturePath.value, 'new.png', 'image/png')
    }
  }

  function urltoFile(url: string, filename: string, mimeType: string) {
    return (fetch(url)
      .then((res) => { return res.arrayBuffer() })
      .then((buf) => { return new File([buf], filename, { type: mimeType }) })
    )
  }

  return { picture, getPicturePath }
}
