import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { InputGrup, Row, TabButton } from './styles'
import { useFormik } from 'formik'
import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'
import * as Yup from 'yup'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expireMonth: '',
      expireYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome deve conter no mínimo 5 caracteres')
        .required('Campo obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
      cpf: Yup.string()
        .min(14, 'O CPF deve conter no mínimo 14 caracteres')
        .max(14, 'O CPF deve conter no máximo 14 caracteres')
        .required('Campo obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails devem ser iguais')
        .required('Campo obrigatório'),

      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(14, 'O CPF deve conter no mínimo 14 caracteres')
              .max(14, 'O CPF deve conter no máximo 14 caracteres')
              .required('Campo obrigatório')
          : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(16, 'O número do cartão deve conter no mínimo 16 caracteres')
              .max(19, 'O número do cartão deve conter no máximo 19 caracteres')
              .required('Campo obrigatório')
          : schema
      ),
      expireMonth: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(2, 'O mês de vencimento deve conter no mínimo 2 caracteres')
              .max(2, 'O mês de vencimento deve conter no máximo 2 caracteres')
              .required('Campo obrigatório')
          : schema
      ),
      expireYear: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(4, 'O ano de vencimento deve conter no mínimo 4 caracteres')
              .max(4, 'O ano de vencimento deve conter no máximo 4 caracteres')
              .required('Campo obrigatório')
          : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard
          ? schema
              .min(
                3,
                'O código de segurança deve conter no mínimo 3 caracteres'
              )
              .max(
                4,
                'O código de segurança deve conter no máximo 4 caracteres'
              )
              .required('Campo obrigatório')
          : schema
      ),
      installments: Yup.number().when((values, schema) =>
        payWithCard
          ? schema
              .min(1, 'O parcelamento deve conter no mínimo 1 parcela')
              .max(12, 'O parcelamento deve conter no máximo 12 parcelas')
              .required('Campo obrigatório')
          : schema
      )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit} className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGrup>
              <label htmlFor="fullName">Nome Completo</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
            </InputGrup>
            <InputGrup>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('email', form.errors.email)}</small>
            </InputGrup>
            <InputGrup>
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                name="cpf"
                value={form.values.cpf}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
            </InputGrup>
          </Row>
          <h3 className="margin-top">Dados de entrega - contúedo digital</h3>
          <Row>
            <InputGrup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input
                id="deliveryEmail"
                type="email"
                name="deliveryEmail"
                value={form.values.deliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}
              </small>
            </InputGrup>
            <InputGrup>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input
                id="confirmDeliveryEmail"
                type="email"
                name="confirmDeliveryEmail"
                value={form.values.confirmDeliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage(
                  'confirmDeliveryEmail',
                  form.errors.confirmDeliveryEmail
                )}
              </small>
            </InputGrup>
          </Row>
        </>
      </Card>
      <Card title="pagamento">
        <>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="Boleto" />
            Boleto bancário
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={cartao} alt="Cartão de Crédito" />
            Cartão de crédito
          </TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <Row>
                  <InputGrup>
                    <label htmlFor="cardOwner">Nome do titular do cartão</label>
                    <input
                      type="text"
                      id="cardOwner"
                      name="cardOwner"
                      value={form.values.cardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardOwner', form.errors.cardOwner)}
                    </small>
                  </InputGrup>
                  <InputGrup>
                    <label htmlFor="cpfCardOwner">
                      CPF do titular do cartão
                    </label>
                    <input
                      type="text"
                      id="cpfCardOwner"
                      name="cpfCardOwner"
                      value={form.values.cpfCardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'cpfCardOwner',
                        form.errors.cpfCardOwner
                      )}
                    </small>
                  </InputGrup>
                </Row>
                <Row marginTop="24px">
                  <InputGrup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input
                      type="text"
                      id="cardDisplayName"
                      name="cardDisplayName"
                      value={form.values.cardDisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'cardDisplayName',
                        form.errors.cardDisplayName
                      )}
                    </small>
                  </InputGrup>
                  <InputGrup>
                    <label htmlFor="cardNumber">Numero no cartão</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardNumber', form.errors.cardNumber)}
                    </small>
                  </InputGrup>
                  <InputGrup maxWidth="123px">
                    <label htmlFor="expireMonth">Mês de vencimento</label>
                    <input
                      type="text"
                      id="expireMonth"
                      name="expireMonth"
                      value={form.values.expireMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('expireMonth', form.errors.expireMonth)}
                    </small>
                  </InputGrup>
                  <InputGrup maxWidth="123px">
                    <label htmlFor="expireYear">Ano de vencimento</label>
                    <input
                      type="text"
                      id="expireYear"
                      name="expireYear"
                      value={form.values.expireYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('expireYear', form.errors.expireYear)}
                    </small>
                  </InputGrup>
                  <InputGrup maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardCode', form.errors.cardCode)}
                    </small>
                  </InputGrup>
                </Row>
                <Row marginTop="24px">
                  <InputGrup maxWidth="150px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select
                      name="installments"
                      id="installments"
                      value={form.values.installments}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    >
                      <option value="">1x de R$300,00</option>
                      <option value="">2x de R$150,00</option>
                      <option value="">3x de R$100,00</option>
                    </select>
                    <small>
                      {getErrorMessage(
                        'installments',
                        form.errors.installments
                      )}
                    </small>
                  </InputGrup>
                </Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </>
      </Card>
      <Button type="button" title="clique para finalizar a compra">
        Finalizar compra
      </Button>
    </form>
  )
}

export default Checkout
