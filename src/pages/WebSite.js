import React from "react";
import { Link } from "react-router-dom";

export default function WebSite() {
    return (
        <div className="WebSite flex flex-col gap-y-5">
            welcome to site
            <Link to="/admin">
                <button className="bg-teal-400 px-4 py-2 rounded-lg">go to panel Admin</button>
            </Link>
        </div>
    );
}