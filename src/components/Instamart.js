import { useState } from "react";

const Section = ({ heading, desc, isVisible, setIsVisible }) => {
  return (
    <div className="p-4 m-10 border border-black">
      <h1 className="font-bold text-xl">{heading}</h1>
      {isVisible ? (
        <>
          <button
            onClick={() => setIsVisible()}
            className="underline cursor-pointer"
          >
            Hide
          </button>
          <p>{desc}</p>
        </>
      ) : (
        <button
          onClick={() => setIsVisible()}
          className="underline cursor-pointer"
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState("about");
  return (
    <div>
      <Section
        heading="About Instamart"
        desc="This is the about description"
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          setIsVisibleSection(visibleSection === "about" ? "" : "about")
        }
      />
      <Section
        heading="Contact Instamart"
        desc="This is the contact description"
        isVisible={visibleSection === "contact"}
        setIsVisible={() =>
          setIsVisibleSection(visibleSection === "contact" ? "" : "contact")
        }
      />
      <Section
        heading="Careers"
        desc="This is the career description"
        isVisible={visibleSection === "career"}
        setIsVisible={() =>
          setIsVisibleSection(visibleSection === "career" ? "" : "career")
        }
      />
    </div>
  );
};

export default Instamart;
