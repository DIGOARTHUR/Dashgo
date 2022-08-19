import React from "react";
import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  label?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps> (({label, ...props}, ref) =>
{
    return (
      <FormControl>
        { !!label && <FormLabel htmlFor="password">{label}</FormLabel> }
      
        <ChakraInput 
      {...props}
        id={props.name}
        ref={ref} 
        focusBorderColor="pink.500" 
        bgColor="gray.900"
         variant="filled" 
        _hover={{ bgColor: 'gray.900' }}
        size="lg"/>
      </FormControl>
    );
});