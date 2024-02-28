import {useState} from 'react'
import {
  BgContainer,
  ValidateContainer,
  FormContainer,
  FormHeading,
  Formdescription,
  InputFiled,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [character, setCharacter] = useState('')

  const validLength = character.length < 8

  const onChangeChar = e => {
    setCharacter(e.target.value)
  }
  return (
    <BgContainer>
      <ValidateContainer>
        <FormContainer>
          <FormHeading>Password Validator</FormHeading>
          <Formdescription>
            Check how strong and secure is your password
          </Formdescription>
          <InputFiled type="password" value={character} onChange={onChangeChar} />
          {validLength && (
            <ErrorMessage>
              Your Password must be at least 8 characters
            </ErrorMessage>
          )}
        </FormContainer>
      </ValidateContainer>
    </BgContainer>
  )
}
export default PasswordValidator
