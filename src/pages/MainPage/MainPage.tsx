import * as React from "react";
import "src/pages/MainPage/MainPage.scss";

export interface IMainPageProps {
    advantagesItem: IItem[];
    informationItem: IItem[];
}
export interface IItem {
    title: string;
    text: string;
}
interface IMainPageState {}


export default class MainPage extends React.Component<IMainPageProps, IMainPageState> {
    public renderAdvantagesItem(item: IItem) {
        const title = item.title;
        const text = item.text;
        console.log(item)
        return (
            <article className="advantages__item">
                <h2 className="advantages__title">{title}</h2>
                <p className="advantages__text">{text}</p>
            </article>
        );
    }
    public renderInformationItem(item: IItem) {
        const title = item.title;
        const text = item.text;
        console.log(item)
        return (
            <article className="information__item">
                <h2 className="information__title">{title}</h2>
                <p className="information__text">{text}</p>
            </article>
        );
    }
    public render() {
        const advantagesItem = this.props.advantagesItem;
        const informationItem = this.props.informationItem;
        const renderAdvantagesItem = this.renderAdvantagesItem.bind(this);
        const renderInformationItem = this.renderInformationItem.bind(this);
        return (
            <main className="main-page">
                <section className="advantages">
                    {advantagesItem.map((item => renderAdvantagesItem(item)))}
                </section>
                <section className="information">
                    {informationItem.map((item => renderInformationItem(item)))}    
                </section>
            </main>
        );
    }
}