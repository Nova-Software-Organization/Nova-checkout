
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { ZodType, z } from 'zod'

import { useNavigate } from 'react-router-dom'
import { Addres } from './components/Addres'
import { CoffeCard } from './components/CoffeCard'
import { Paymant } from './components/Paymant'
import { AddresPaymantContainer, ContentContainer, Title } from './styles'

export function Cart() {

  type FormData = {
    cep: number
    street: string
    number: number
    complement?: string
    neighborhood: string
    city: string
    state: string
    paymantButtonClicked: string
  }

  const schemaValidadtion: ZodType<FormData> = z.object({
    cep: z.number().min(11111111).max(99999999),
    street: z.string().min(3).max(50),
    number: z.number().min(1).max(9999),
    complement: z.optional(z.string().max(100)),
    neighborhood: z.string().min(3).max(40),
    city: z.string().min(3).max(40),
    state: z.string().min(1).max(2),
    paymantButtonClicked: z.string(),
  });

  const confirmedOrderedPaymantForm = useForm<FormData>({
    resolver: zodResolver(schemaValidadtion),
  });

  const navigate = useNavigate()

  function dataConfirmedOrderedPaymant(data: FormData) {
    // const coffeAmountReset = copyCoffees.map((coffeeObject) => {
    //   if (coffeeObject.amount > 0) {
    //     return {
    //       ...coffeeObject,
    //       amount: (coffeeObject.amount = 0),
    //     }
    //   } else {
    //     return coffeeObject
    //   }
    // })

    navigate('/Cart/ConfirmedOrder')
  }

  return (
    <FormProvider {...confirmedOrderedPaymantForm}>
      <form
        onSubmit={confirmedOrderedPaymantForm.handleSubmit(
          dataConfirmedOrderedPaymant,
        )}
      >
        <ContentContainer>
          <div>
            <Title>Complete o seu pedido</Title>
            <AddresPaymantContainer>
              <Addres />
              <Paymant />
            </AddresPaymantContainer>
          </div>

          <div>
            <Title>Produtos selecionados</Title>
            <CoffeCard />
          </div>
        </ContentContainer>
      </form>
    </FormProvider>
  )
}
