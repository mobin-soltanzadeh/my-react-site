import React from "react";

export default function NewJoinMembers({w, h, imgSrc, imgAlt}) {
    return (
        <img width={w} height={h} src={require(`../../data/images/${imgSrc}`)} alt={imgAlt||"user img"} className="text-start rounded-full" />
    );
}
