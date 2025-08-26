import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import type { FC } from "react";
import type { InputsModalType } from "@/types/users";
import { Button } from "../ui/button";

export const Modal = (props: {
  icon: FC<{ className?: string }>;
  headerTitle: string;
  inputs: InputsModalType[];
}) => {
  const form = useForm();
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer">
        <props.icon className="w-[28px] h-[28px]" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{props.headerTitle}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => console.log(data))}>
            {props.inputs.map((input) =>
              input.type !== "select" ? (
                <FormField
                  key={input.name}
                  control={form.control}
                  name={input.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{input.label}</FormLabel>
                      <FormControl>
                        <Input placeholder={input.placeholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : (
                <FormField
                  key={input.name}
                  control={form.control}
                  name={input.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{input.label}</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder={input.placeholder} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {input.options?.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )
            )}
            <div className="flex justify-end">
              <Button className="btn">Agregar Producto</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
