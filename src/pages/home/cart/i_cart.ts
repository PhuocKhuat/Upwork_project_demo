import { Anchor } from '../../../components/Header/Header'

export interface I_Props_Cart {
  state: {
    right: boolean
  }
  toggleDrawer: (anchor: Anchor, open: boolean) => (event: React.MouseEvent | React.KeyboardEvent) => void
}
