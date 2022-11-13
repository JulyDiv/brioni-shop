import Link from "next/link";
import React from "react";

export const ContactInfoBlock = ({ description, title }) => {
    return (
      <div className="contact-info__block">
        <h3 className="contact-info__title">{title}</h3>
        <p className="contact-info__text">
          {description}
        </p>
      </div>
    );
};