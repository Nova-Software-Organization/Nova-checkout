import Image from '../../assets/Illustration.svg'
import { InfoOrder } from './components/InfoOrder'
import {
  ContentContainer,
  ImageInfoOrder,
  SubTitleConfirmedOrder,
  TitleConfirmedOrder,
  TitleContainer,
} from './styles'

export function ConfirmedOrder() {
  return (
    <ContentContainer>
      <div>
        <TitleContainer>
          <TitleConfirmedOrder>Uhu! Pedido feito!!</TitleConfirmedOrder>
          <SubTitleConfirmedOrder>
            Agora é só aguardar a confirmação do seu pagamento!
          </SubTitleConfirmedOrder>
        </TitleContainer>

        <InfoOrder />
      </div>

      <ImageInfoOrder src={Image} />
    </ContentContainer>
  )
}
