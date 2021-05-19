import React from "react";

const About = () => {
  return (
    <div className="items-start justify-center max-w-2xl py-10 mx-auto mb-16">
      <div className="layout">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          About Me
        </h1>
        <div className="mb-8 leading-6 prose text-gray-600 dark:text-gray-400">
          <p>
            Hey, I'm Jacob. I'm a junior software engineer who graduated from
            the Flatiron coding bootcamp in late January, 2021.
          </p>
          <div className="float-right ml-6 w-36 md:w-52">
            <img src="/images/profile_one.PNG" width="600" />
          </div>

          <p>
            I'm originally from Malibu, California and traded in the beach for
            the National Mall when I went to college at American University in
            Washington, DC. After graduating in 2019 with a degree in
            International Relations, I took my interests in government to
            Capitol Hill where I interned in Congressman Adam Schiff's office
            for a year.
          </p>
          <p>
            I became interested in coding after I built a Wikipedia article in
            HTML. I decided I wanted to learn more about software so I enrolled
            in the Flation School. While there, I loved the sense of
            accomplishement I got from building cool apps.
          </p>
          <p>
            I'm now looking to join an organization where I can provide value as
            a software engineer and continue to build amazing, life changing
            applications.
          </p>
          <p>
            {" "}
            <a target="_blank" href="mailto: jacob.kagon@gmail.com">
              Email me
            </a>{" "}
            if you want to connect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
