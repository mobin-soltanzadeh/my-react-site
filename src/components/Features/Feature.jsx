import React from "react";
import FeatureItem from "./FeatureItem";

export default function Features({lang, feacher}) {
    let en = ["Revanue", "Sales", "Cost", "Compared to last month"]
    let fa = ["درآمد", "فروش", "هزینه ها", "در مقایسه با ماه گذشته"]
    let result = (lang==="en"? en : fa)
    
    return (
        <>
            {
                // if
                feacher?

                // true
                <div dir={lang==="en"? "ltr": "rtl"} className="Features grid grid-cols-3 gap-2 md:gap-4 lg:gap-6 xl:gap-8 w-full" >
                    {feacher.map(feacher => (
                        <FeatureItem {...{title: lang==="en"? feacher.enTitle: feacher.faTitle , amount: feacher.amount, amountDrop: feacher.amountDrop, desc: lang==="en"? feacher.enDesc: feacher.faDesc}} />
                    ))}
                </div> :

                // false
                <>   
                <div dir={lang==="en"? "ltr": "rtl"} className="flex justify-center items-start gap-x-2 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 w-full" >
                    <FeatureItem {...{title: result[0], amount: "2.415", amountDrop: -6.4, desc: result[3]}}/>
                    <FeatureItem {...{title: result[1], amount: "4,446", amountDrop: -1.9, desc: result[3]}}/>
                    <FeatureItem {...{title: result[2], amount: "2,225", amountDrop: +2.4, desc: result[3]}}/>
                </div>
                </>

            }
        </>
    );
}