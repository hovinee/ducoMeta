export interface Footer {
  meta: string
  apple: string
  google: string
}

export interface Main {
  banner: {
    banner_image: string
    title: string
    intro: string
  }
  contents: {
    title: string
    description: string
    intro_image: string
  }[]
}

export interface TTumbnailContent {
  thumbnail_image: string[]
  title: string
  sub_title: string
  description: string
  tag?: string[]
  audio?: string
  path?: string
}
