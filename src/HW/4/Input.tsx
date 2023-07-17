import {ChangeEvent,KeyboardEvent} from "react";
import {keyboardKey} from "@testing-library/user-event";

type InputPropsType = {
    currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ+
    setCurrentText: (currentText: string) => void // НУЖНО ПРОТИПИЗИРОВАТЬ+
	handleSave:(currentText:string) => void
};

export const Input = (props: InputPropsType) => {
	const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			props.handleSave(event.currentTarget.value)
		}
	}
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setCurrentText(event.currentTarget.value)
	};

	return (
		<input id={'hw04-input'} type="text" value={props.currentText}
			   onChange={onChangeHandler} onKeyPress={onKeyPressHandler}
		/>
	)
};

