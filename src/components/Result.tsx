import { useEffect, useState } from "react";

interface ICard {
    category: string;
    score: number;
    icon: string;
}

export default function Result() {
    const [data, setData] = useState<ICard[] | undefined>(undefined)

    useEffect(() => {
        fetch('./data.json')
            .then((res) => res.json())
            .then((json) => setData(json));
    }, [])

    return (
        <div className="result">
            <div className="result__header">
                <h2 className="result__header__title">Your Result</h2>
                <div className="result__header__total text-focus-in">
                    <span className="result__header__total__value">76</span>
                    <span className="result__header__total__fullmark">of 100</span>
                </div>

                <h3 className="result__header__great">Great</h3>
                <p className="result__header__paragraph">You scored higher than 65% of the people who have taken these tests.</p>
            </div>
            <div className="result__summary">
                <h3 className="result__summary__title">Summary</h3>

                {data?.map((card: ICard, index: number) => {
                    return (
                        <div className="result__summary__card" key={index}>
                            <img src={card.icon} alt="" className="result__summary__card__icon" />
                            <span className="result__summary__card__category">{card.category}</span>
                            <div className="result__summary__card__score">
                                <span className="result__summary__card__score__value">{card.score}</span>
                                &nbsp; / 100
                            </div>
                        </div>
                    );
                })}

                <button className="result__summary__btn">Continue</button>
            </div>
        </div>
    )
}