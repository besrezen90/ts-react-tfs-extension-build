import React, { Component } from "react";
import style from "./App.less";

interface IProps {}
interface IState {}

export default class App extends Component<IProps, IState> {
	render() {
		return <div className={style.app}>Тестовая сборка для проверки</div>;
	}
}
