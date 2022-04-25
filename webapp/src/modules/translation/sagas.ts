import { createTranslationSaga } from '@yanrongxing/dapps/dist/modules/translation/sagas'
import * as translations from './locales'

export const translationSaga = createTranslationSaga({
  translations
})
