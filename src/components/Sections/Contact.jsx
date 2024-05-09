import { HubSpotForm } from "../Elements/HubspotForm";

export const Contact = () => {
  return (
    <div className="container px-12 md:px-0" id="contact">
      <h2 className="text-4xl extraBold mx-auto mt-12 mb-8 ">{"Let's Connect!"}</h2>
      <HubSpotForm />
    </div>
  );
};
