export interface MobileListItem {
    key: string
    image: string
    label?: string
  }
  
  export interface MobileListComponentProps {
    title?: string
    description?: string
    items: MobileListItem[]
  }
  