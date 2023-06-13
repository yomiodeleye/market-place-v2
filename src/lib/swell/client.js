import swell from 'swell-js'
import { env } from '@/../env.mjs'

const options = {
  useCamelCase: false // true | false (default is false)
}

swell.init(
  env.NEXT_PUBLIC_SWELL_STORE_ID,
  env.NEXT_PUBLIC_SWELL_PUBLIC_KEY,
  options
)

export default swell
