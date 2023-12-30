
import { useState } from 'react';





export const useForm = () => {

    const [formState, setFormState] = useState({});

    const onChangeInput = (event) => {
        const field = event.target.name;
        const value = event.target.value;
  
        setFormState({
          ...formState,
          [field]:value
        });
      }


  return {
    ...formState,
    formState,
    onChangeInput,
  }
}
