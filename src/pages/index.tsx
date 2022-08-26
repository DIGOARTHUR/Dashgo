import { Button, Flex, Stack, useFormErrorStyles } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema =  yup.object().shape({
  email:yup.string().required('E-mail obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória'),
})


export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState,
  } = useForm({
    resolver:yupResolver(signInFormSchema)
  });

  const { errors } = formState;
  console.log(errors.email)

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(values);
  }
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justify="center">
      <Flex onSubmit={handleSubmit(handleSignIn)} as="form" width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDirection="column">
        <Stack spacing="4">
          <Input placeholder="E-mail" name="email"  type="email" error={errors.email} label="E-mail" {...register} />
          <Input placeholder="Password" name="password" type="password" label="Password" error={errors.password} {...register} />
        </Stack>
        <Button isLoading={formState.isSubmitting} type="submit" mt="6" colorScheme="pink" size="lg"> Entrar</Button>
      </Flex>
    </Flex>
  )
}
