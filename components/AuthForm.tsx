'use client';
import {
  AUTH_FORM_FIELD_TYPE,
  AUTH_FORM_TYPE,
  AUTHFORM_FIELD_NAME,
} from '@/constants/form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  DefaultValues,
  FieldValues,
  Path,
  useForm,
  UseFormReturn,
} from 'react-hook-form';
import { ZodType } from 'zod';
import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';

interface AuthFormProps<T extends FieldValues> {
  type: string;
  schema: ZodType<T>;
  defaultValues: T;
  loading: boolean;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: T) => Promise<void>;
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  loading,
  onSubmit,
}: AuthFormProps<T>) => {
  const isSingin = type === AUTH_FORM_TYPE.Signin;
  const form: UseFormReturn<T> = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit = (data: T) => {
    return onSubmit(data);
  };
  return (
    <Form {...form}>
      <form className="w-full" onSubmit={form.handleSubmit(handleSubmit)}>
        {Object.keys(defaultValues).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor={field.name}>
                  {
                    AUTHFORM_FIELD_NAME[
                      field.name as keyof typeof AUTHFORM_FIELD_NAME
                    ]
                  }
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type={
                      AUTH_FORM_FIELD_TYPE[
                        field.name as keyof typeof AUTH_FORM_FIELD_TYPE
                      ]
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button disabled={loading} className="mt-8 w-full" type="submit">
          {isSingin ? 'Sign In' : 'Sign Up'}
        </Button>
      </form>
    </Form>
  );
};

export default AuthForm;
