import Button from "@/app/molecules/button";
import React from "react";

interface NewsletterProps {
  heading: string;
  description?: string;
  input?: inputProps;
  button: buttonProps;
}

interface inputProps {
  label?: string;
  placeholder?: string;
}

interface buttonProps {
  text: string;
}

const Newsletter = ({
  heading,
  description,
  input,
  button,
}: NewsletterProps) => {
  return (
    <div className="max-width-sm padding">
      <div className="flex w-full flex-col items-center gap-2 rounded-2xl border bg-gradient-to-tr from-black to-neutral-900 p-6 text-white shadow-xl lg:p-10 lg:py-14">
        {description && (
          <h4 className="font-poppins text-xl font-semibold lg:text-4xl">
            {heading}
          </h4>
        )}
        {description && (
          <p className="mx-auto text-center font-inter text-base text-neutral-400 md:text-lg xl:w-3/4">
            {description}
          </p>
        )}
        <div className="relative mt-4 flex w-full flex-col items-center gap-2 sm:flex-row md:w-2/3 xl:w-2/5">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full grow rounded-md border-2 bg-black/20 py-2 ps-3 font-poppins text-sm font-medium text-white placeholder-white/50 focus:outline-none"
          />
          {button && (
            <Button variant="secondary" size="sm">
              {button.text}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
