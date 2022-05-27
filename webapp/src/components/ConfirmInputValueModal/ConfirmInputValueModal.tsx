import React, { useState } from 'react'
import { Modal, Button, Form } from '@yanrongxing/ui'
import { t } from '@yanrongxing/dapps/dist/modules/translation/utils'
import { Props } from './ConfirmInputValueModal.types'
import { fromMANA, toMANA } from '../../lib/mana'
import { ManaField } from '../ManaField'
import './ConfirmInputValueModal.css'

const ConfirmInputValueModal = ({
  open,
  content,
  headerTitle,
  quantityToConfirm,
  valueToConfirm,
  onCancel,
  onConfirm,
  loading = false,
  disabled = false,
  network
}: Props) => {
  const [confirmedInput, setConfirmedInput] = useState<string>('')
  const [confirmedInputQuantity, setConfirmedInputQuantity] = useState<number>()
  return (
    <Modal size="small" open={open} className="ConfirmInputValueModal">
      <Modal.Header>{headerTitle}</Modal.Header>
      <Form onSubmit={onConfirm}>
        <Modal.Content>
          {content}
          {
          quantityToConfirm!>0 &&
          <ManaField
            label={t('sell_page.quantity')}
            network={network}
            placeholder={quantityToConfirm}
            value={confirmedInputQuantity}
            onChange={(_event, props) => {
              setConfirmedInputQuantity(Number(props.value))
            }}
          />
          }
          
          <ManaField
            label={t('global.price')}
            network={network}
            placeholder={valueToConfirm}
            value={confirmedInput}
            onChange={(_event, props) => {
              const newPrice = fromMANA(props.value)
              setConfirmedInput(toMANA(newPrice))
            }}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            type="button"
            onClick={() => {
              setConfirmedInput('')
              setConfirmedInputQuantity(0);
              onCancel()
            }}
          >
            {t('global.cancel')}
          </Button>
          <Button
            type="submit"
            primary
            disabled={
              disabled || fromMANA(valueToConfirm) !== fromMANA(confirmedInput) || ( quantityToConfirm! > 0 && quantityToConfirm !== confirmedInputQuantity)
            }
            loading={loading}
          >
            {t('global.proceed')}
          </Button>
        </Modal.Actions>
      </Form>
    </Modal>
  )
}

export default React.memo(ConfirmInputValueModal)
