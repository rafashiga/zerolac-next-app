export interface ProviderMetadata {
  public_id: string
  resource_type: string
}

export interface Large {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path?: any
  size: number
  width: number
  height: number
  provider_metadata: ProviderMetadata
}

export interface ProviderMetadata2 {
  public_id: string
  resource_type: string
}

export interface Small {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path?: any
  size: number
  width: number
  height: number
  provider_metadata: ProviderMetadata2
}

export interface ProviderMetadata3 {
  public_id: string
  resource_type: string
}

export interface Medium {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path?: any
  size: number
  width: number
  height: number
  provider_metadata: ProviderMetadata3
}

export interface ProviderMetadata4 {
  public_id: string
  resource_type: string
}

export interface Thumbnail {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path?: any
  size: number
  width: number
  height: number
  provider_metadata: ProviderMetadata4
}

export interface Formats {
  large: Large
  small: Small
  medium: Medium
  thumbnail: Thumbnail
}

export interface ProviderMetadata5 {
  public_id: string
  resource_type: string
}

export interface MainImage {
  id: number
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl?: any
  provider: string
  provider_metadata: ProviderMetadata5
  created_at: Date
  updated_at: Date
}

export interface Zerolac {
  id: number
  title: string
  text?: any
  created_at: Date
  updated_at: Date
  longDescription: string
  shortDescription: string
  name: string
  order: number
  mainImage: MainImage
  bannerImage?: any
}
