import { Input } from './ui/input';
import { Label } from './ui/label';
import { InputHTMLAttributes } from 'react';

type FormInputGroupProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

function FormInputGroup({ id, label, ...props }: FormInputGroupProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-gray-700">
        {label}
      </Label>
      <Input
        id={id}
        className="border-gray-300 focus:border-primary focus:ring-primary"
        {...props}
      />
    </div>
  );
}

export default FormInputGroup;
