/* tslint:disable variable-name */

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { moduleMetadata, Meta } from "@storybook/angular";
import { DropdownModule, Dropdown } from "./";
import { PlaceholderModule } from "../placeholder";

import { ReactiveFormsStory } from "./stories";

export default {
	title: "Components/Dropdown",
	decorators: [
		moduleMetadata({
			declarations: [ReactiveFormsStory],
			imports: [
				FormsModule,
				ReactiveFormsModule,
				DropdownModule,
				PlaceholderModule
			]
		})
	],
	args: {
		label: "Label",
		hideLabel: false,
		helperText: "Optional helper text",
		disabled: false,
		readonly: false,
		invalid: false,
		invalidText: "A valid value is required",
		warn: false,
		warnText: "This is a warning",
		items: [
			{
				content: "one"
			},
			{
				content: "two"
			},
			{
				content: "three"
			},
			{
				content: "four"
			},
			{
				content: "five"
			},
			{
				content: "six"
			},
			{
				content: "seven"
			},
			{
				content: "eight"
			},
			{
				content: "nine"
			},
			{
				content: "ten"
			}
		],
		appendInline: false,
		dropUp: false,
		size: "md",
		theme: "dark",
		fluid: false
	},
	argTypes: {
		type: {
			control: false
		},
		size: {
			options: ["sm", "md", "lg"],
			control: "radio"
		},
		theme: {
			options: ["light", "dark"],
			control: "radio"
		},
		selected: { action: "Selection changed!" },
		onClose: { action: "Closed!" }
	},
	component: Dropdown
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<cds-dropdown
			[label]="label"
			[hideLabel]="hideLabel"
			[skeleton]="skeleton"
			[helperText]="helperText"
			[size]="size"
			[dropUp]="dropUp"
			[invalid]="invalid"
			[invalidText]="invalidText"
			[warn]="warn"
			[warnText]="warnText"
			[theme]="theme"
			placeholder="Select"
			[disabled]="disabled"
			[readonly]="readonly"
			[fluid]="fluid"
			(selected)="selected($event)"
			(onClose)="onClose($event)">
			<cds-dropdown-list [items]="items"></cds-dropdown-list>
		</cds-dropdown>
	`
});
export const Basic = Template.bind({});

export const Fluid = Template.bind({});
Fluid.args = {
	fluid: true
};

const MultiTemplate = (args) => ({
	props: args,
	template: `
		<cds-dropdown
			type="multi"
			[selectionFeedback]="selectionFeedback"
			[(ngModel)]="model"
			[label]="label"
			[hideLabel]="hideLabel"
			[helperText]="helperText"
			[size]="size"
			[dropUp]="dropUp"
			[invalid]="invalid"
			[invalidText]="invalidText"
			[warn]="warn"
			[warnText]="warnText"
			[theme]="theme"
			placeholder="Select"
			[disabled]="disabled"
			[readonly]="readonly"
			[fluid]="fluid"
			(selected)="selected($event)"
			(onClose)="onClose($event)">
			<cds-dropdown-list [items]="items"></cds-dropdown-list>
		</cds-dropdown>
		<span>{{model | json}}</span>
	`
});
export const Multiselect = MultiTemplate.bind({});

const ReactiveTemplate = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/dropdown/stories/app-reactive-forms.component.ts
		-->
		<app-reactive-forms
			[label]="label"
			[hideLabel]="hideLabel"
			[helperText]="helperText"
			[invalid]="invalid"
			[invalidText]="invalidText"
			[disabled]="disabled"
			[items]="items"
			[selectionFeedback]="selectionFeedback"
			(selected)="selected($event)"
			(onClose)="onClose($event)">
		</app-reactive-forms>
	`
});
export const ReactiveForms = ReactiveTemplate.bind({});

const NgTemplate = (args) => ({
	props: args,
	template: `
		<cds-dropdown
			[label]="label"
			[hideLabel]="hideLabel"
			[theme]="theme"
			placeholder="Select"
			[displayValue]="dropdownRenderer"
			[size]="size"
			[invalid]="invalid"
			[invalidText]="invalidText"
			[disabled]="disabled"
			[readonly]="readonly"
			(selected)="selected($event)"
			(onClose)="onClose($event)">
			<cds-dropdown-list [items]="items" [listTpl]="dropdownRenderer"></cds-dropdown-list>
		</cds-dropdown>
		<ng-template #dropdownRenderer let-item="item">
			<div *ngIf="item && item.content" style="font-size: 14px;">
				<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"
						width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style="will-change: transform;">
					<path d="M9.3 3.7l3.8 3.8H1v1h12.1l-3.8 3.8.7.7 5-5-5-5z"></path>
				</svg>
				&nbsp;{{item.content}}
			</div>
		</ng-template>
	`
});
export const WithTemplate = NgTemplate.bind({});
