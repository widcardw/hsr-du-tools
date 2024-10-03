import { cn } from "@/libs/cn";
import type {
	NumberFieldDecrementTriggerProps,
	NumberFieldDescriptionProps,
	NumberFieldErrorMessageProps,
	NumberFieldIncrementTriggerProps,
	NumberFieldInputProps,
	NumberFieldLabelProps,
	NumberFieldRootProps,
} from "@kobalte/core/number-field";
import { NumberField as NumberFieldPrimitive } from "@kobalte/core/number-field";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { ComponentProps, ValidComponent, VoidProps } from "solid-js";
import { splitProps } from "solid-js";
import { textfieldLabel } from "./textfield";

export const NumberFieldHiddenInput = NumberFieldPrimitive.HiddenInput;

type numberFieldLabelProps<T extends ValidComponent = "div"> =
	NumberFieldLabelProps<T> & {
		class?: string;
	};

export const NumberFieldLabel = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, numberFieldLabelProps<T>>,
) => {
	const [local, rest] = splitProps(props as numberFieldLabelProps, ["class"]);

	return (
		<NumberFieldPrimitive.Label
			class={cn(textfieldLabel({ label: true }), local.class)}
			{...rest}
		/>
	);
};

type numberFieldDescriptionProps<T extends ValidComponent = "div"> =
	NumberFieldDescriptionProps<T> & {
		class?: string;
	};

export const NumberFieldDescription = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, numberFieldDescriptionProps<T>>,
) => {
	const [local, rest] = splitProps(props as numberFieldDescriptionProps, [
		"class",
	]);

	return (
		<NumberFieldPrimitive.Description
			class={cn(
				textfieldLabel({ description: true, label: false }),
				local.class,
			)}
			{...rest}
		/>
	);
};

type numberFieldErrorMessageProps<T extends ValidComponent = "div"> =
	NumberFieldErrorMessageProps<T> & {
		class?: string;
	};

export const NumberFieldErrorMessage = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, numberFieldErrorMessageProps<T>>,
) => {
	const [local, rest] = splitProps(props as numberFieldErrorMessageProps, [
		"class",
	]);

	return (
		<NumberFieldPrimitive.ErrorMessage
			class={cn(textfieldLabel({ error: true }), local.class)}
			{...rest}
		/>
	);
};

type numberFieldProps<T extends ValidComponent = "div"> =
	NumberFieldRootProps<T> & {
		class?: string;
	};

export const NumberField = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, numberFieldProps<T>>,
) => {
	const [local, rest] = splitProps(props as numberFieldProps, ["class"]);

	return (
		<NumberFieldPrimitive class={cn("grid gap-1.5", local.class)} {...rest} />
	);
};

export const NumberFieldGroup = (props: ComponentProps<"div">) => {
	const [local, rest] = splitProps(props, ["class"]);

	return (
		<div
			class={cn(
				"relative focus-within:(outline-none ring-1.5 ring-ring) transition-shadow rounded-md",
				local.class,
			)}
			{...rest}
		/>
	);
};

type numberFieldInputProps<T extends ValidComponent = "input"> =
	NumberFieldInputProps<T> & {
		class?: string;
	};

export const NumberFieldInput = <T extends ValidComponent = "input">(
	props: PolymorphicProps<T, VoidProps<numberFieldInputProps<T>>>,
) => {
	const [local, rest] = splitProps(props as numberFieldInputProps, ["class"]);

	return (
		<NumberFieldPrimitive.Input
			class={cn(
				"flex h-9 w-full rounded-md border border-input bg-transparent px-10 py-1 text-sm text-center shadow-sm placeholder:text-muted-foreground disabled:(cursor-not-allowed opacity-50) focus-visible:outline-none",
				local.class,
			)}
			{...rest}
		/>
	);
};

type numberFieldDecrementTriggerProps<T extends ValidComponent = "button"> =
	VoidProps<
		NumberFieldDecrementTriggerProps<T> & {
			class?: string;
		}
	>;

export const NumberFieldDecrementTrigger = <
	T extends ValidComponent = "button",
>(
	props: PolymorphicProps<T, VoidProps<numberFieldDecrementTriggerProps<T>>>,
) => {
	const [local, rest] = splitProps(props as numberFieldDecrementTriggerProps, [
		"class",
	]);

	return (
		<NumberFieldPrimitive.DecrementTrigger
			class={cn(
				"absolute top-1/2 -translate-y-1/2 left-0 p-3 disabled:(cursor-not-allowed opacity-20)",
				local.class,
			)}
			{...rest}
		>
			-
		</NumberFieldPrimitive.DecrementTrigger>
	);
};

type numberFieldIncrementTriggerProps<T extends ValidComponent = "button"> =
	VoidProps<
		NumberFieldIncrementTriggerProps<T> & {
			class?: string;
		}
	>;

export const NumberFieldIncrementTrigger = <
	T extends ValidComponent = "button",
>(
	props: PolymorphicProps<T, numberFieldIncrementTriggerProps<T>>,
) => {
	const [local, rest] = splitProps(props as numberFieldIncrementTriggerProps, [
		"class",
	]);

	return (
		<NumberFieldPrimitive.IncrementTrigger
			class={cn(
				"absolute top-1/2 -translate-y-1/2 right-0 disabled:(cursor-not-allowed opacity-20) p-3",
				local.class,
			)}
			{...rest}
		>
			+
		</NumberFieldPrimitive.IncrementTrigger>
	);
};
