import React, { Component } from "react";
import style from "./App.less";

export default class App extends Component<{}, {}> {
    render() {
        return <div className={style.test}>Тестовая сборка для проверки</div>;
    }
}
