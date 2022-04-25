import { Order } from "@yanrongxing/schemas"

export type Props = {
  order?: Order
}

export type MapStateProps = Pick<Props, 'order'>
